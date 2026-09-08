import test from 'node:test';
import assert from 'node:assert/strict';
import { analyticsEventParams } from '../src/lib/analytics-event-params.mjs';

test('UI source is isolated from acquisition source', () => {
  assert.deepEqual(analyticsEventParams({source:'homepage_top', cta_contract:'intake'}),
    {interaction_source:'homepage_top', cta_contract:'intake'});
});
test('measurement evidence and legitimate campaign tuple are preserved', () => {
  const input = {lead_id:'test-id', measurement_contract:'accepted-v2', utm_source:'GBP', utm_medium:'organic'};
  assert.deepEqual(analyticsEventParams(input), input);
  assert.deepEqual(analyticsEventParams(), {});
});
