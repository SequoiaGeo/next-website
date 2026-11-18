"use client";

import { FormEvent, useState } from "react";
import { trackCapturedLead } from "@/lib/analytics";
import { readCampaignAttribution } from "@/lib/campaign-attribution";

export default function ProfileHelpForm() {
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = Object.fromEntries(new FormData(event.currentTarget));
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, source: "chatgpt_profile_help", campaignAttribution: readCampaignAttribution() }),
      });
      const result = await response.json();
      if (!response.ok || !result.captured) throw new Error(result.error || "Your request could not be confirmed. Please try again.");
      trackCapturedLead(result, { source: "chatgpt_profile_help", cta_contract: "intake" });
      setSent(true);
    } catch (failure) { setError(failure instanceof Error ? failure.message : "Please try again."); }
    finally { setBusy(false); }
  }
  if (sent) return <p role="status">Thanks. Your request has been received. I will review where you are stuck and follow up by email.</p>;
  const inputClass = "mt-2 block w-full rounded-lg border border-gray-300 bg-white p-3 text-base text-gray-900";
  return <form onSubmit={submit} className="not-prose space-y-5 rounded-xl border border-gray-200 bg-white p-6 text-gray-900">
    <label className="block font-semibold">Your name<input name="name" required maxLength={100} autoComplete="name" className={inputClass} /></label>
    <label className="block font-semibold">Email<input name="email" type="email" required maxLength={254} autoComplete="email" className={inputClass} /></label>
    <label className="block font-semibold">Business website (optional)<input name="businessWebsite" maxLength={250} placeholder="yourcompany.com" className={inputClass} /></label>
    <label className="block font-semibold">Where are you getting stuck?<textarea name="message" required maxLength={1500} rows={4} className={inputClass} /></label>
    <div aria-hidden="true" className="absolute left-[-9999px]"><label>Leave this blank<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <p className="text-sm">Describe the issue only. Do not include passwords, verification codes, identity documents, or payment information. Sequoia GEO is an independent consulting business, not OpenAI support. <a href="/privacy-policy" className="underline">Privacy policy</a>.</p>
    {error && <p role="alert" className="text-red-700">{error}</p>}
    <button disabled={busy} className="rounded-lg bg-[#1A5C3A] px-6 py-3 font-bold text-white disabled:opacity-60">{busy ? "Sending..." : "Get Help With My Profile"}</button>
  </form>;
}

