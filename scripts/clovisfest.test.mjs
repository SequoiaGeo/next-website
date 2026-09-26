import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { POST } = require('../.next/server/app/api/clovisfest-checklist/route.js').routeModule.userland;
test('event checklist validates requests and handles provider success/failure without live mail', async () => {
  const originalFetch = globalThis.fetch;
  const originalKey = process.env.RESEND_API_KEY;
  const calls = [];
  let fail = false;
  globalThis.fetch = async (url, options) => { calls.push({url, options}); return new Response(JSON.stringify(fail ? {message:'fixture failure'} : {id:'fixture'}), {status:fail ? 503 : 200, headers:{'Content-Type':'application/json'}}); };
  process.env.RESEND_API_KEY = 're_fixture';
  const request = (body, origin='https://www.sequoiageo.com') => new Request('https://www.sequoiageo.com/api/clovisfest-checklist', {method:'POST',headers:{origin,'Content-Type':'application/json'},body:JSON.stringify(body)});
  try {
    assert.equal((await POST(request({email:'bad',consent:true}))).status,400);
    assert.equal((await POST(request({email:'test@example.com'}))).status,400);
    assert.equal((await POST(request({email:'test@example.com',consent:true},'https://other.example'))).status,403);
    assert.equal((await POST(request(null))).status,400);
    assert.equal((await POST(request({email:'test@example.com',website:'bot',consent:true}))).status,200);
    assert.equal(calls.length,0);
    const result = await POST(request({email:'test@example.com',consent:true}));
    assert.equal(result.status,200); assert.equal(calls.length,2);
    const notification = JSON.parse(calls[1].options.body);
    assert.match(notification.text,/clovisfest_event/);
    assert.match(notification.text,/Do not count/);
    assert.match(JSON.parse(calls[0].options.body).text,/Aaron@sequoiageo.com/);
    fail=true;
    assert.equal((await POST(request({email:'test@example.com',consent:true}))).status,502);
    delete process.env.RESEND_API_KEY;
    assert.equal((await POST(request({email:'test@example.com',consent:true}))).status,503);
  } finally { globalThis.fetch=originalFetch; if(originalKey===undefined)delete process.env.RESEND_API_KEY;else process.env.RESEND_API_KEY=originalKey; }
});
