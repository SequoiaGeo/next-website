# Booking and Call Reconciliation Runbook

Prepared: 2026-08-22

Status: booking capture verified, automatic CRM delivery and deterministic website-call attribution remain open

## Definitions

- A `phone_click` is website call intent. It is not a completed call, inquiry, qualified lead, or job booked.
- A Google Calendar appointment notice is a captured booking. It is not automatically website-originated or qualified.
- A completed HighLevel call is a captured call only when the call record establishes that the call connected.
- A website lead requires an identity-level join between the captured booking or call and website-origin evidence, plus the written business-need and qualification rules.

The deterministic policy is implemented in `scripts/booking-call-reconciliation-policy.mjs`.

## Booking procedure

1. Search Gmail at the message level for original appointment notices with `subject:"Appointment booked:" -subject:"Re:" newer_than:14d`.
2. Read the original notice and capture the appointment time, attendee identity, and scheduler description privately.
3. Find the exact-email HighLevel contact. Upsert it when missing and add `captured-booking`.
4. Add `origin-unverified` unless an identity-level artifact establishes website origin. A calendar click or Clarity smart event is not that artifact.
5. Add `needs-qualification` unless a terminal qualification tag already exists.
6. Do not create an opportunity, assignment, task, email, or SMS from the booking notice alone.
7. Count the booking toward the website goal only after website origin, a real business, an addressable need, and the written qualification rule are established.

## Call procedure

1. Preserve `phone_click` in GA4 as an intent event with page, campaign, and AI-referrer context.
2. Reconcile HighLevel call records separately. A click without a completed call never creates `captured-call`.
3. Add `captured-call` only for a completed HighLevel call record.
4. Add `origin-unverified` unless a dedicated website tracking number, dynamic number insertion record, or another identity-level join establishes website origin.
5. Add `needs-qualification` unless a terminal qualification tag already exists.
6. Do not count an unanswered call, misdial, accidental tap, vendor call, repeat customer, or nonbusiness call as a website lead.

The current public site uses the same business number shown in HighLevel. That proves the call path is operational but does not isolate website calls from other places where the number appears. Deterministic call attribution requires a website-only tracking number or dynamic number insertion with a supported call-to-session join.

## August 22 synthetic verification

- A reserved synthetic appointment was created through the public Google appointment scheduler.
- The original appointment notice arrived in Gmail and the appointment appeared on the business calendar.
- No matching HighLevel contact appeared automatically.
- The test contact was manually added with `internal-attribution-test`, `captured-booking`, and `origin-unverified`.
- Verification found no conversation, opportunity, or task.
- The synthetic appointment was cancelled after the verification.

This proves the scheduler and notification archive work. It also proves that automatic booking-to-HighLevel delivery and website-origin evidence are not complete.
