const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const source = ts.transpileModule(fs.readFileSync('src/app/api/podcast-guest/route.ts', 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
function harness(result = { data: { id: 'test-only' }, error: null }, key = 'mock') {
  const calls = [];
  const sandbox = { exports: {}, Buffer, URL, process: { env: { RESEND_API_KEY: key } }, require(name) {
    if (name === 'node:crypto') return require(name);
    if (name === 'next/server') return { NextResponse: { json: (body, init) => Response.json(body, init) } };
    if (name === 'resend') return { Resend: class { emails = { send: async (...args) => { calls.push(args); return result; } }; } };
    throw new Error(name);
  } };
  vm.runInNewContext(source, sandbox);
  return { post: sandbox.exports.POST, calls };
}
const valid = { name: 'Test Applicant', email: 'applicant@example.com', companyRole: 'Test owner', profileUrl: '', topic: 'Customer questions', audienceFit: 'For HVAC owners', experience: 'Real job example', actionableTip: 'Explain the diagnosis', acknowledged: true };
const request = body => new Request('https://www.sequoiageo.com/api/podcast-guest', { method: 'POST', headers: { 'content-type': 'application/json', origin: 'https://www.sequoiageo.com' }, body: JSON.stringify(body) });
test('valid application sends only to owner with reply-to and stable retry key', async () => {
  const h = harness();
  assert.equal((await h.post(request(valid))).status, 200);
  await h.post(request(valid));
  assert.equal(h.calls.length, 2);
  const [mail, options] = h.calls[0];
  assert.equal(mail.to.toLowerCase(), 'aaron@sequoiageo.com');
  assert.equal(mail.replyTo, valid.email);
  assert.equal(mail.html, undefined);
  assert.match(mail.text, /One actionable tip:\nExplain the diagnosis/);
  assert.equal(options.idempotencyKey, h.calls[1][1].idempotencyKey);
});
test('invalid input and missing acknowledgment never send mail', async () => {
  for (const change of [{ email: 'bad' }, { acknowledged: false }, { topic: '' }, { name: {} }, { profileUrl: 'javascript:alert(1)' }, { experience: 'x'.repeat(2001) }]) {
    const h = harness(); assert.equal((await h.post(request({ ...valid, ...change }))).status, 400); assert.equal(h.calls.length, 0);
  }
});
test('bot, malformed and oversized bodies do not send mail', async () => {
  const h = harness();
  assert.equal((await h.post(request({ ...valid, website: 'bot' }))).status, 200);
  assert.equal((await h.post(request({ extra: 'x'.repeat(25000) }))).status, 413);
  assert.equal((await h.post(new Request('https://www.sequoiageo.com/api/podcast-guest', { method: 'POST', headers: { 'content-type': 'application/json' }, body: '{' }))).status, 400);
  assert.equal(h.calls.length, 0);
});
test('provider error, missing provider id and unavailable email never claim success', async () => {
  for (const result of [{ error: { message: 'failed' }, data: null }, { error: null, data: null }]) {
    const h = harness(result); assert.equal((await h.post(request(valid))).status, 502);
  }
  const h = harness(undefined, ''); assert.equal((await h.post(request(valid))).status, 503); assert.equal(h.calls.length, 0);
});
test('foreign origins rejected without mail', async () => {
  const h = harness(); const req = request(valid); req.headers.set('origin', 'https://other.example');
  assert.equal((await h.post(req)).status, 403); assert.equal(h.calls.length, 0);
});
