"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import catalog from "@/data/sequoia-knowledge.catalog.json";
import {
  CONSULTATION_VALUES,
  checkServiceFit,
  citationsFor,
  getAiSearchMethodology,
  getCaseStudyEvidence,
  getContactOptions,
  getPublishedStartingPrices,
  getSequoiaServices,
  validateConsultationInput,
} from "@/lib/sequoia-knowledge-engine.mjs";
import { consumeKnowledgeBudget } from "@/lib/sequoia-knowledge-budget";
import {
  clearConsultationDraft,
  writeConsultationDraft,
} from "@/lib/sequoia-consultation-draft";
import { trackKnowledgeStage } from "@/lib/sequoia-knowledge-analytics";

type ToolDefinition = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  annotations?: Record<string, boolean>;
  execute: (input?: Record<string, unknown>) => unknown | Promise<unknown>;
};

type ModelContext = {
  registerTool: (tool: ToolDefinition) => void | Promise<void>;
  unregisterTool?: (name: string) => void | Promise<void>;
};

declare global {
  interface Document {
    modelContext?: ModelContext;
  }
}

const TOOL_NAMES = [
  "get_sequoia_services",
  "get_published_starting_prices",
  "check_service_fit",
  "get_ai_search_methodology",
  "get_case_study_evidence",
  "get_contact_options",
  "prepare_consultation_request",
] as const;

function trackOncePerSession(key: string, callback: () => void) {
  try {
    if (window.sessionStorage.getItem(key)) return;
    window.sessionStorage.setItem(key, "1");
  } catch {
    // The event can still be sent once per component lifetime when storage is unavailable.
  }
  callback();
}

function readOnlyAnnotations() {
  return {
    readOnlyHint: true,
    destructiveHint: false,
    idempotentHint: true,
    openWorldHint: false,
  };
}

function inactiveResult(reason: string) {
  return {
    catalogVersion: catalog.catalogVersion,
    boundary: catalog.publicBoundary,
    error: reason,
    citations: [],
  };
}

export default function SequoiaKnowledgeInterface() {
  const pathname = usePathname();
  const [enabled, setEnabled] = useState(false);
  const activeRef = useRef(false);

  useEffect(() => {
    let disposed = false;

    async function refreshStatus() {
      try {
        const response = await fetch("/api/sequoia-knowledge/status", {
          cache: "no-store",
          headers: { Accept: "application/json" },
        });
        if (!response.ok) throw new Error("status_unavailable");
        const status = (await response.json()) as { enabled?: boolean };
        if (disposed) return;
        const nextEnabled = status.enabled === true;
        activeRef.current = nextEnabled;
        setEnabled(nextEnabled);
        if (!nextEnabled) clearConsultationDraft();
      } catch {
        if (disposed) return;
        activeRef.current = false;
        setEnabled(false);
        clearConsultationDraft();
      }
    }

    void refreshStatus();
    const timer = window.setInterval(refreshStatus, 60_000);
    const onVisibility = () => {
      if (document.visibilityState === "visible") void refreshStatus();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      disposed = true;
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  useEffect(() => {
    if (!enabled || typeof document.modelContext?.registerTool !== "function") return;
    const context = document.modelContext;
    const registered: string[] = [];
    let disposed = false;

    function wrapTool(
      name: (typeof TOOL_NAMES)[number],
      execute: (input: Record<string, unknown>) => unknown,
    ) {
      return async (input: Record<string, unknown> = {}) => {
        if (!activeRef.current) {
          trackKnowledgeStage("tool_denied", { surface: "site_tool", tool_name: name, reason: "disabled" });
          return inactiveResult("knowledge_interface_disabled");
        }
        const budget = consumeKnowledgeBudget("tool");
        if (!budget.ok) {
          trackKnowledgeStage("tool_denied", { surface: "site_tool", tool_name: name, reason: budget.reason });
          return inactiveResult(budget.reason);
        }
        trackKnowledgeStage("tool_call", { surface: "site_tool", tool_name: name, catalog_version: catalog.catalogVersion });
        try {
          const output = execute(input);
          const record = output as { error?: unknown; fit?: unknown };
          if (record?.error || record?.fit === "invalid_input") {
            trackKnowledgeStage("tool_denied", { surface: "site_tool", tool_name: name, reason: "invalid_input" });
          } else {
            trackKnowledgeStage("answer", { surface: "site_tool", tool_name: name, catalog_version: catalog.catalogVersion });
          }
          return output;
        } catch {
          trackKnowledgeStage("tool_error", { surface: "site_tool", tool_name: name, reason: "execution_error" });
          return inactiveResult("tool_execution_error");
        }
      };
    }

    const emptySchema = { type: "object", properties: {}, additionalProperties: false };
    const tools: ToolDefinition[] = [
      {
        name: "get_sequoia_services",
        description: "Return Sequoia GEO services from the approved public catalog with visible-page citations.",
        inputSchema: emptySchema,
        annotations: readOnlyAnnotations(),
        execute: wrapTool("get_sequoia_services", () => getSequoiaServices(catalog)),
      },
      {
        name: "get_published_starting_prices",
        description: "Return published starting prices, terms, exclusions, and the no-guarantee condition. Starting prices are not quotes.",
        inputSchema: emptySchema,
        annotations: readOnlyAnnotations(),
        execute: wrapTool("get_published_starting_prices", () => getPublishedStartingPrices(catalog)),
      },
      {
        name: "check_service_fit",
        description: "Run a preliminary fit check from structured public criteria. A human must review fit before work is accepted.",
        inputSchema: {
          type: "object",
          properties: {
            business_type: { type: "string", enum: ["home_service", "other_service_business", "other", "unsure"] },
            primary_need: {
              type: "string",
              enum: ["search_visibility", "website_conversion", "tracking_attribution", "paid_media", "marketing_leadership", "vendor_coordination", "booking_handoff", "unsure"],
            },
            budget_alignment: { type: "string", enum: ["published_starting_prices_are_possible", "needs_lower_budget", "unsure"] },
            accepts_no_guarantees: { type: "boolean" },
          },
          required: ["business_type", "primary_need", "budget_alignment", "accepts_no_guarantees"],
          additionalProperties: false,
        },
        annotations: readOnlyAnnotations(),
        execute: wrapTool("check_service_fit", (input) => checkServiceFit(catalog, input)),
      },
      {
        name: "get_ai_search_methodology",
        description: "Return Sequoia's published AI search measurement stages, protocol, and limitations with a visible-page citation.",
        inputSchema: emptySchema,
        annotations: readOnlyAnnotations(),
        execute: wrapTool("get_ai_search_methodology", () => getAiSearchMethodology(catalog)),
      },
      {
        name: "get_case_study_evidence",
        description: "Return approved public case-study evidence with source context, dates, limitations, and visible-page citations.",
        inputSchema: {
          type: "object",
          properties: {
            case_id: { type: "string", enum: ["all", "kabam_plumbing", "firemans_chimney_sweep"], default: "all" },
          },
          additionalProperties: false,
        },
        annotations: readOnlyAnnotations(),
        execute: wrapTool("get_case_study_evidence", (input) => getCaseStudyEvidence(catalog, input)),
      },
      {
        name: "get_contact_options",
        description: "Return the public contact form, phone, and email options. This tool does not send a message or submit a form.",
        inputSchema: emptySchema,
        annotations: readOnlyAnnotations(),
        execute: wrapTool("get_contact_options", () => getContactOptions(catalog)),
      },
      {
        name: "prepare_consultation_request",
        description: "Prepare a structured consultation draft in this browser tab. It never submits, sends, or books anything. The visitor must review and submit the normal form personally in the same tab.",
        inputSchema: {
          type: "object",
          properties: Object.fromEntries(
            Object.entries(CONSULTATION_VALUES).map(([key, values]) => [key, { type: "string", enum: values }]),
          ),
          required: Object.keys(CONSULTATION_VALUES),
          additionalProperties: false,
        },
        annotations: {
          readOnlyHint: false,
          destructiveHint: false,
          idempotentHint: true,
          openWorldHint: false,
        },
        execute: wrapTool("prepare_consultation_request", (input) => {
          const validation = validateConsultationInput(input);
          if (!validation.ok) return inactiveResult("invalid_input");
          const prepareBudget = consumeKnowledgeBudget("prepare");
          if (!prepareBudget.ok) return inactiveResult(prepareBudget.reason);
          const stored = writeConsultationDraft(validation.value as {
            business_type: string;
            service_interest: string;
            primary_constraint: string;
            timeframe: string;
          });
          if (!stored.ok) return inactiveResult(stored.error);
          return {
            catalogVersion: catalog.catalogVersion,
            boundary: catalog.publicBoundary,
            status: "prepared_not_submitted",
            submitted: false,
            reviewRequired: true,
            sameTabRequired: true,
            reviewUrl: "/contact#contact",
            retention: "Stored only in sessionStorage in this browser tab for up to 30 minutes, then cleared.",
            citations: citationsFor(catalog, ["contact"]),
          };
        }),
      },
    ];

    async function register() {
      try {
        for (const tool of tools) {
          if (disposed) return;
          await context.registerTool(tool);
          registered.push(tool.name);
          if (disposed) {
            await context.unregisterTool?.(tool.name);
            return;
          }
        }
        if (registered.length !== TOOL_NAMES.length) {
          throw new Error("incomplete_registration");
        }
        trackOncePerSession("sequoia_tool_availability_v1", () => {
          trackKnowledgeStage("tool_availability", { surface: "site_tool", registration_count: registered.length });
        });
        trackOncePerSession("sequoia_tool_discovery_proxy_v1", () => {
          trackKnowledgeStage("tool_discovery_proxy", { surface: "site_tool", registration_count: registered.length });
        });
      } catch {
        trackKnowledgeStage("tool_error", { surface: "site_tool", reason: "registration_error" });
        for (const name of registered) {
          try {
            await context.unregisterTool?.(name);
          } catch {
            // Best-effort cleanup after partial registration.
          }
        }
      }
    }

    void register();
    return () => {
      disposed = true;
      for (const name of registered) {
        try {
          void context.unregisterTool?.(name);
        } catch {
          // Best-effort cleanup when the feature is disabled or the layout unmounts.
        }
      }
    };
  }, [enabled]);

  if (!enabled || pathname === "/" || pathname === "/ask-sequoia") return null;

  return (
    <Link
      href="/ask-sequoia"
      className="fixed bottom-24 right-4 z-40 rounded-full border border-white/15 bg-[#0D2318] px-5 py-3 text-sm font-bold text-white shadow-xl transition hover:bg-[#1A5C3A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3A9E6A] sm:bottom-6 sm:right-6"
    >
      Ask Sequoia
    </Link>
  );
}
