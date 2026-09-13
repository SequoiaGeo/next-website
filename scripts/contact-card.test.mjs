import { test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { handleContactCard, resetCardLimits, vcard } from '../src/lib/contact-card.mjs';

beforeEach(resetCardLimits);
const request = (body = { email: 'visitor@example.com' }, headers = {}) => new Request('https://www.sequoiageo.com/api/contact-card', { method: 'POST', headers: { origin: 'https://www.sequoiageo.com', 'content-type': 'application/json', 'x-vercel-forwarded-for': '192.0.2.1', ...headers }, body: JSON.stringify(body) });
const settings = (extra = {}) => ({ apiKey: 'test-key-not-real', send: async () => ({ data: { id: 'mock-only' } }), now: 1800000000000, ...extra });
test('sends fixed contact details and vCard, no arbitrary input included', async () => {
  let payload, options;
  const response = await handleContactCard(request({ email: 'VISITOR@example.com', message: 'untrusted message', url: 'https://untrusted.invalid' }), settings({ send: async (p, o) => { payload = p; options = o; return { data: { id: 'mock' } }; } }));
  assert.equal(response.status, 200); assert.equal(payload.to, 'visitor@example.com');
  assert.ok(payload.text.includes('(559) 521-3122')); assert.ok(!JSON.stringify(payload).includes('untrusted'));
  assert.equal(Buffer.from(payload.attachments[0].content, 'base64').toString(), vcard);
  assert.ok(options.idempotencyKey.startsWith('contact-card-v1/')); assert.ok(!options.idempotencyKey.includes('visitor'));
});
test('invalid bodies, addresses and header injection never send', async () => {
  for (const body of [null, [], {}, {email: 'a@b'}, {email: 'a@example.com\r\nBcc: victim@example.com'}, {email: 'a@example.com,b@example.com'}, {email: 1}]) {
    const r = await handleContactCard(request(body), settings({ send: async () => assert.fail('must not send') })); assert.equal(r.status, 400);
  }
});
test('rejects cross-origin and missing-origin requests', async () => {
  assert.equal((await handleContactCard(request(undefined, {origin: 'https://evil.invalid'}), settings())).status, 403);
  const r = request(); r.headers.delete('origin'); assert.equal((await handleContactCard(r, settings())).status, 403);
});
test('accepts only configured preview host', async () => {
  assert.equal((await handleContactCard(request(undefined, { origin: 'https://test.vercel.app' }), settings({previewHost: 'test.vercel.app'}))).status, 200);
});
test('honeypot silently drops without sending', async () => {
  assert.equal((await handleContactCard(request({email:'a@example.com', website:'bot'}), settings({send:async()=>assert.fail()}))).status, 200);
});
test('missing config and provider rejection are errors; retry allowed after provider failure', async () => {
  assert.equal((await handleContactCard(request(), settings({apiKey:undefined}))).status, 503);
  assert.equal((await handleContactCard(request(), settings({send: async()=>({error:{message:'private details'}})}))).status, 502);
  assert.equal((await handleContactCard(request(), settings())).status, 200);
});
test('recipient throttles, IP throttles and reset do not expose addresses', async () => {
  assert.equal((await handleContactCard(request(), settings())).status, 200);
  assert.equal((await handleContactCard(request(), settings())).status, 429);
  resetCardLimits();
  for(let i=0;i<5;i++) assert.equal((await handleContactCard(request({email:`a${i}@example.com`}), settings())).status,200);
  assert.equal((await handleContactCard(request({email:'six@example.com'}), settings())).status,429);
});
test('recipient idempotency remains identical across instances on same UTC day', async () => {
  const keys = []; const config = settings({send: async (_, o) => { keys.push(o.idempotencyKey); return {data:{id:'x'}}; }});
  await handleContactCard(request(), config); resetCardLimits(); await handleContactCard(request(), config);
  assert.equal(keys[0],keys[1]);
});
test('body limit and content type enforced', async () => {
  assert.equal((await handleContactCard(request({email:'x'.repeat(2100)}),settings())).status,413);
  assert.equal((await handleContactCard(request(undefined, {'content-type':'text/plain'}),settings())).status,415);
});
test('vCard correct and isolated from CRM, analytics and other lead endpoints', () => {
  assert.ok(vcard.startsWith('BEGIN:VCARD\r\nVERSION:3.0')); assert.ok(vcard.endsWith('END:VCARD\r\n'));
  for (const f of ['src/lib/contact-card.mjs','src/app/api/contact-card/route.ts','src/components/ContactCardForm.tsx']) {
    const source = readFileSync(f,'utf8'); assert.doesNotMatch(source,/captureWebsiteLead|gtag\(|trackLead|GHL_WEBHOOK|console\./);
  }
});
