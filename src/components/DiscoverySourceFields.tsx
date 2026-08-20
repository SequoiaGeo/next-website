"use client";

export type DiscoveryEvidence = {
  discoverySource: string;
  reportedAiAssistant: string;
  reportedAiQuestion: string;
};

type Props = {
  idPrefix: string;
  value: DiscoveryEvidence;
  onChange: (value: DiscoveryEvidence) => void;
};

const discoveryOptions = [
  ["", "Select one"],
  ["ai_assistant", "An AI assistant"],
  ["google_search", "Google search"],
  ["referral", "A person referred me"],
  ["social", "Social media"],
  ["other", "Another source"],
];

const assistantOptions = [
  ["", "Select one"],
  ["chatgpt", "ChatGPT"],
  ["google_ai", "Google AI search"],
  ["gemini", "Gemini"],
  ["perplexity", "Perplexity"],
  ["claude", "Claude"],
  ["copilot", "Microsoft Copilot"],
  ["other", "Another assistant"],
];

export default function DiscoverySourceFields({ idPrefix, value, onChange }: Props) {
  // Keep the current conversion experience unchanged during the controlled
  // measurement window. Enable only after that release gate is cleared.
  if (process.env.NEXT_PUBLIC_REPORTED_DISCOVERY_INTAKE !== "true") return null;

  const sourceId = `${idPrefix}-discovery-source`;
  const assistantId = `${idPrefix}-reported-ai-assistant`;
  const questionId = `${idPrefix}-reported-ai-question`;

  return (
    <details className="rounded-lg border border-gray-200 bg-white px-4 py-3">
      <summary className="cursor-pointer text-sm font-medium text-[#1A5C3A]">
        Optional: tell me how you found Sequoia
      </summary>
      <div className="mt-4 space-y-4 border-t border-gray-100 pt-4">
        <div>
          <label htmlFor={sourceId} className="block text-sm font-medium text-[#1a1a1a]">
            How did you find Sequoia GEO?
          </label>
          <select
            id={sourceId}
            name="discoverySource"
            value={value.discoverySource}
            onChange={(event) => {
              const discoverySource = event.target.value;
              onChange({
                discoverySource,
                reportedAiAssistant:
                  discoverySource === "ai_assistant" ? value.reportedAiAssistant : "",
                reportedAiQuestion:
                  discoverySource === "ai_assistant" ? value.reportedAiQuestion : "",
              });
            }}
            className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-[#1a1a1a] focus:border-[#3A9E6A] focus:outline-none focus:ring-2 focus:ring-[#3A9E6A]/20"
          >
            {discoveryOptions.map(([optionValue, label]) => (
              <option key={optionValue || "unset"} value={optionValue}>
                {label}
              </option>
            ))}
          </select>
        </div>

        {value.discoverySource === "ai_assistant" && (
          <>
            <div>
              <label htmlFor={assistantId} className="block text-sm font-medium text-[#1a1a1a]">
                Which assistant?
              </label>
              <select
                id={assistantId}
                name="reportedAiAssistant"
                value={value.reportedAiAssistant}
                onChange={(event) =>
                  onChange({ ...value, reportedAiAssistant: event.target.value })
                }
                className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-[#1a1a1a] focus:border-[#3A9E6A] focus:outline-none focus:ring-2 focus:ring-[#3A9E6A]/20"
              >
                {assistantOptions.map(([optionValue, label]) => (
                  <option key={optionValue || "unset"} value={optionValue}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor={questionId} className="block text-sm font-medium text-[#1a1a1a]">
                What did you ask? <span className="font-normal text-gray-400">Optional</span>
              </label>
              <textarea
                id={questionId}
                name="reportedAiQuestion"
                rows={3}
                maxLength={500}
                value={value.reportedAiQuestion}
                onChange={(event) =>
                  onChange({ ...value, reportedAiQuestion: event.target.value })
                }
                className="mt-1.5 w-full resize-y rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 focus:border-[#3A9E6A] focus:outline-none focus:ring-2 focus:ring-[#3A9E6A]/20"
                placeholder="For example: Who can help my company show up in AI search?"
              />
            </div>
          </>
        )}
      </div>
    </details>
  );
}
