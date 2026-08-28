type BudgetKind = "tool" | "ask" | "prepare";

type BudgetState = Record<BudgetKind, number[]>;

const STORAGE_KEY = "sequoia_knowledge_budget_v1";
const LIMITS: Record<BudgetKind, { windowMs: number; windowLimit: number; totalLimit: number }> = {
  tool: { windowMs: 60_000, windowLimit: 20, totalLimit: 50 },
  ask: { windowMs: 5 * 60_000, windowLimit: 8, totalLimit: 25 },
  prepare: { windowMs: 30 * 60_000, windowLimit: 3, totalLimit: 5 },
};

let memoryState: BudgetState = { tool: [], ask: [], prepare: [] };

function readState(): BudgetState {
  if (typeof window === "undefined") return memoryState;
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return memoryState;
    const parsed = JSON.parse(raw) as Partial<BudgetState>;
    return {
      tool: Array.isArray(parsed.tool) ? parsed.tool.filter(Number.isFinite) : [],
      ask: Array.isArray(parsed.ask) ? parsed.ask.filter(Number.isFinite) : [],
      prepare: Array.isArray(parsed.prepare) ? parsed.prepare.filter(Number.isFinite) : [],
    };
  } catch {
    return memoryState;
  }
}

function writeState(state: BudgetState) {
  memoryState = state;
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Memory state remains as a no-retention fallback for this page runtime.
  }
}

export function consumeKnowledgeBudget(kind: BudgetKind) {
  const state = readState();
  const limit = LIMITS[kind];
  const now = Date.now();
  const all = state[kind];
  const recent = all.filter((timestamp) => now - timestamp <= limit.windowMs);

  if (all.length >= limit.totalLimit) {
    return { ok: false as const, reason: "session_limit" };
  }
  if (recent.length >= limit.windowLimit) {
    return { ok: false as const, reason: "rate_limit" };
  }

  state[kind] = [...all, now];
  writeState(state);
  return { ok: true as const };
}
