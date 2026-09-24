export const metrics = [
  { key: 'impressions', label: 'Google organic impressions', help: 'Search Console, same property, search type and filters. Not total market demand.' },
  { key: 'clicks', label: 'Google organic clicks', help: 'Search Console, same filters as impressions. Not interchangeable with GA4 sessions.' },
  { key: 'sessions', label: 'Website sessions', help: 'GA4, same channel and landing-page filters in both periods.' },
  { key: 'calls', label: 'Eligible incoming calls', help: 'Unique prospect calls in the selected source. Exclude spam, tests, repeat calls and existing-customer requests.' },
  { key: 'answered', label: 'Those calls answered', help: 'Answered calls from that same eligible set, not all calls answered by the office.' },
  { key: 'booked', label: 'Those answered calls booked', help: 'Appointments booked from that same answered-call set. Not completed jobs or sales.' },
];

export function diagnoseCalls(before, after, comparable, linkedCalls) {
  const errors = [];
  const rows = [];
  for (const metric of metrics) {
    const parse = (raw) => raw === '' || raw == null ? null : Number(raw);
    const a = parse(before[metric.key]); const b = parse(after[metric.key]);
    if ([a,b].some(v => v !== null && (!Number.isSafeInteger(v) || v < 0))) {
      errors.push(`${metric.label}: use a whole number of zero or more, or leave blank.`); continue;
    }
    if (a !== null && b !== null) rows.push({ ...metric, before: a, after: b, change: b-a, percent: a === 0 ? null : (b-a)/a*100 });
  }
  if (linkedCalls) for (const [label, period] of [['Earlier',before],['Later',after]]) {
    for (const [child,parent] of [['answered','calls'],['booked','answered']]) {
      if (period[child] !== '' && period[child] != null && period[parent] !== '' && period[parent] != null && Number(period[child]) > Number(period[parent])) errors.push(`${label} period: ${child} cannot exceed ${parent} for a matched call set.`);
    }
  }
  if (errors.length) return { errors, rows: [], rates: [], findings: [] };
  if (!comparable) return { errors, rows, rates: [], findings: ['Confirm comparable periods before interpreting changes. Use equal duration, consistent definitions, source filters and tracking.'] };
  const rates = [];
  if (linkedCalls) for (const [numerator,denominator,label] of [['answered','calls','Answer rate'],['booked','answered','Booking rate among answered calls']]) {
    const n = rows.find(r=>r.key===numerator); const d=rows.find(r=>r.key===denominator);
    if (n && d && d.before > 0 && d.after > 0) rates.push({ label, before: n.before/d.before*100, after: n.after/d.after*100, points: (n.after/d.after-n.before/d.before)*100, small: Math.min(d.before,d.after)<30 });
  }
  const findings = [];
  if (!rows.length) findings.push('Insufficient information: enter both periods for at least one metric. Blank means unknown, not zero.');
  if (rows.some(r=>r.change<0 && ['impressions','clicks','sessions'].includes(r.key))) findings.push('A discovery or traffic metric declined. Check query and page changes, channel mix, tracking changes and comparable seasonal data. These counts cannot distinguish seasonality from lost visibility by themselves.');
  const calls=rows.find(r=>r.key==='calls');
  if (calls?.change<0) findings.push('Eligible incoming calls declined. Check which sources lost calls and whether call tracking, service availability or the mix of services changed before assigning a cause.');
  for (const rate of rates) if (rate.points<0) findings.push(`${rate.label} declined by ${Math.abs(rate.points).toFixed(1)} percentage points. Review ${rate.label==='Answer rate'?'missed-call logs, coverage and callback handling':'call dispositions, availability, service fit and booking conversations'}. This is an observation, not proof of the cause.`);
  if (!linkedCalls) findings.push('Call rates are withheld until you confirm that answered and booked calls belong to the same eligible call set.');
  if (rates.some(r=>r.small)) findings.push('At least one rate uses fewer than 30 calls in a period. Small counts can move substantially with a few calls; this caution threshold is not a statistical significance test.');
  if (rows.length && !rows.some(r=>r.change<0) && !rates.some(r=>r.points<0)) findings.push('No decline appears in the comparable metrics supplied. That does not establish that all channels, lead quality or completed jobs are healthy.');
  findings.push('No agency verdict or seasonality diagnosis is assigned. Bring the underlying reports and date ranges to a review.');
  return { errors, rows, rates, findings };
}
