// UI placement is not an acquisition source. Never send it as GA's source.
export function analyticsEventParams(params = {}) {
  const { source, ...rest } = params;
  return { ...rest, ...(source === undefined ? {} : { interaction_source: source }) };
}
