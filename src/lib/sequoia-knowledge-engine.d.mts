export const CONSULTATION_VALUES: Record<string, string[]>;

export type KnowledgeCitation = {
  id: string;
  label: string;
  path: string;
};

export type KnowledgeResult = {
  catalogVersion: string;
  boundary: string;
  citations: KnowledgeCitation[];
  [key: string]: unknown;
};

export function citationsFor(catalog: unknown, sourceIds: string[]): KnowledgeCitation[];
export function getSequoiaServices(catalog: unknown): KnowledgeResult;
export function getPublishedStartingPrices(catalog: unknown): KnowledgeResult;
export function checkServiceFit(catalog: unknown, input: Record<string, unknown>): KnowledgeResult;
export function getAiSearchMethodology(catalog: unknown): KnowledgeResult;
export function getCaseStudyEvidence(catalog: unknown, input?: Record<string, unknown>): KnowledgeResult;
export function getContactOptions(catalog: unknown): KnowledgeResult;
export function validateConsultationInput(input: Record<string, unknown>):
  | { ok: true; value: Record<string, string> }
  | { ok: false; error: string };
export function answerSequoiaQuestion(catalog: unknown, question: unknown): KnowledgeResult & {
  refused: boolean;
  intent: string;
  summary: string;
  details: string[];
};
