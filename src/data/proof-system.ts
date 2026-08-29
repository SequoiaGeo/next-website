export type ProofStatusId =
  | "baseline-verified"
  | "correction-completed"
  | "verification-passed"
  | "observed-after"
  | "client-confirmed"
  | "not-established";

export type EvidenceClassId =
  | "directly-measured"
  | "client-confirmed"
  | "inherited-strength"
  | "public-observation"
  | "reconstructed"
  | "unavailable";

export type ProofStatus = {
  id: ProofStatusId;
  label: string;
  definition: string;
  doesNotEstablish: string;
};

export type EvidenceClass = {
  id: EvidenceClassId;
  label: string;
  definition: string;
  publicationRule: string;
};

export type ProofClaim = {
  id: string;
  subject: string;
  statement: string;
  displayValue: string;
  displayLabel: string;
  status: ProofStatusId;
  evidenceClass: EvidenceClassId;
  sourceLabel: string;
  metricDefinition: string;
  period: string;
  readOn: string;
  doesNotEstablish: string;
  permission: "named" | "anonymized" | "internal-only";
  causalDesign: "none" | "pre-post" | "holdout" | "controlled-panel";
  timeScope: "dated-historical" | "current";
  reverifyBy?: string;
};

const compatibleEvidence: Record<ProofStatusId, EvidenceClassId[]> = {
  "baseline-verified": ["directly-measured", "client-confirmed", "inherited-strength", "public-observation"],
  "correction-completed": ["directly-measured", "public-observation"],
  "verification-passed": ["directly-measured", "public-observation"],
  "observed-after": ["directly-measured", "client-confirmed", "public-observation"],
  "client-confirmed": ["client-confirmed"],
  "not-established": ["reconstructed", "unavailable"],
};

export const proofStatuses: ProofStatus[] = [
  {
    id: "baseline-verified",
    label: "Baseline verified",
    definition: "A starting condition was checked against a dated public, platform, account, or operating record.",
    doesNotEstablish: "That Sequoia created the condition or that it will remain unchanged.",
  },
  {
    id: "correction-completed",
    label: "Correction completed",
    definition: "A named defect was corrected and the change was recorded.",
    doesNotEstablish: "That the correction changed traffic, inquiries, qualified leads, or jobs booked.",
  },
  {
    id: "verification-passed",
    label: "Verification passed",
    definition: "The corrected condition was tested against a stated acceptance check.",
    doesNotEstablish: "That the verified condition caused a later business outcome.",
  },
  {
    id: "observed-after",
    label: "Observed after",
    definition: "A dated measurement was observed after work was completed.",
    doesNotEstablish: "That Sequoia caused the movement unless a defensible causal design is stated.",
  },
  {
    id: "client-confirmed",
    label: "Client confirmed",
    definition: "The operating business confirmed an inquiry, qualified lead, or job booked under a stated definition.",
    doesNotEstablish: "That a prior marketing action caused the outcome unless identity and source are joined.",
  },
  {
    id: "not-established",
    label: "Not established",
    definition: "The evidence needed to support the next claim does not exist, cannot be obtained, or has not passed review.",
    doesNotEstablish: "Anything beyond the stated evidence gap.",
  },
];

export const evidenceClasses: EvidenceClass[] = [
  {
    id: "directly-measured",
    label: "Directly measured",
    definition: "Sequoia read the result from a named platform report, system record, or retained artifact.",
    publicationRule: "Publish the metric definition, date range, read date, source, and limitation together.",
  },
  {
    id: "client-confirmed",
    label: "Client attested",
    definition: "The operating business confirmed the fact and Sequoia did not independently read the underlying system.",
    publicationRule: "Attribute the statement to the client and do not present it as independently measured.",
  },
  {
    id: "inherited-strength",
    label: "Inherited strength",
    definition: "The condition was real before Sequoia became involved.",
    publicationRule: "Show it as starting context, never as an outcome Sequoia produced.",
  },
  {
    id: "public-observation",
    label: "Public observation",
    definition: "A condition was visible on a public surface at a recorded point in time.",
    publicationRule: "State the method and observation date, and do not imply account access or persistence.",
  },
  {
    id: "reconstructed",
    label: "Reconstructed",
    definition: "A fact was assembled from partial records or later recollection.",
    publicationRule: "Label it as reconstructed and keep it out of headline proof or result tiles.",
  },
  {
    id: "unavailable",
    label: "Unavailable",
    definition: "The necessary evidence was not retained, cannot be accessed, or does not exist.",
    publicationRule: "Name the gap. Do not replace missing evidence with a platform estimate or a stronger narrative.",
  },
];

export const proofRequirements = [
  "The business, property, or system the claim describes",
  "The evidence class and the exact claim status",
  "The source, metric definition, date range, and read date",
  "What the evidence does not establish",
  "The permission level for named or anonymized publication",
  "The causal design, with none as the default",
  "A re-verification date when a mutable condition is presented as current",
];

export function defineProofClaim(claim: ProofClaim) {
  if (!claim.doesNotEstablish.trim()) {
    throw new Error(`Proof claim ${claim.id} requires a limitation.`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(claim.readOn)) {
    throw new Error(`Proof claim ${claim.id} requires an ISO read date.`);
  }
  if (!compatibleEvidence[claim.status].includes(claim.evidenceClass)) {
    throw new Error(
      `Proof claim ${claim.id} has incompatible status ${claim.status} and evidence class ${claim.evidenceClass}.`,
    );
  }
  if (claim.reverifyBy && !/^\d{4}-\d{2}-\d{2}$/.test(claim.reverifyBy)) {
    throw new Error(`Proof claim ${claim.id} requires an ISO re-verification date.`);
  }
  if (claim.timeScope === "current" && !claim.reverifyBy) {
    throw new Error(`Proof claim ${claim.id} presents a mutable condition as current and requires re-verification.`);
  }
  if (
    claim.timeScope === "current" &&
    claim.reverifyBy &&
    claim.reverifyBy <= new Date().toISOString().slice(0, 10)
  ) {
    throw new Error(`Proof claim ${claim.id} requires a future re-verification date.`);
  }
  return claim;
}

export function assertUniqueProofClaims(claims: ProofClaim[]) {
  const ids = new Set<string>();
  for (const claim of claims) {
    if (ids.has(claim.id)) throw new Error(`Duplicate proof claim ID: ${claim.id}`);
    ids.add(claim.id);
  }
  return claims;
}
