"use client";

import { useState, type FormEvent } from "react";

const fields = [
  { name: "name", label: "Your name", max: 120, type: "text", autoComplete: "name" },
  { name: "email", label: "Email address", max: 254, type: "email", autoComplete: "email" },
  { name: "companyRole", label: "Company and your role", max: 200, type: "text", autoComplete: "organization" },
  { name: "profileUrl", label: "Website or LinkedIn URL (optional)", max: 500, type: "url", autoComplete: "url", optional: true },
] as const;
const questions = [
  { name: "topic", label: "What topic would you like to discuss?", max: 500, rows: 2 },
  { name: "audienceFit", label: "How will this help a local home service owner or marketing manager?", max: 1500, rows: 4 },
  { name: "experience", label: "What firsthand experience or real example can you share?", max: 2000, rows: 4 },
  { name: "actionableTip", label: "What is one actionable tip listeners can implement right away?", max: 1500, rows: 4 },
] as const;
const controlClass = "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-3 text-gray-900 focus:border-[#1A5C3A] focus:outline-none focus:ring-2 focus:ring-[#1A5C3A]/30";

export default function PodcastGuestForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;
    const data = new FormData(event.currentTarget);
    setState("sending");
    setError("");
    try {
      const payload = Object.fromEntries(data.entries());
      const response = await fetch("/api/podcast-guest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, acknowledged: data.get("acknowledged") === "on" }),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error(result.error || "We could not send your application. Please try again.");
      setState("sent");
    } catch (failure) {
      setError(failure instanceof Error ? failure.message : "We could not send your application. Please try again.");
      setState("idle");
    }
  }

  if (state === "sent") return <div role="status" className="mt-6 rounded-xl bg-[#edf5ef] p-6 text-[#0D2318]">
    <h3 className="text-xl font-bold">Your application has been sent</h3>
    <p className="mt-3 leading-relaxed">Thank you for your interest in A Chat with Chat. Aaron will review your application and may contact you about next steps. A recording date has not been booked.</p>
  </div>;

  return <form onSubmit={submit} className="mt-6 space-y-5" aria-busy={state === "sending"}>
    <fieldset disabled={state === "sending"} className="space-y-5">
      <legend className="sr-only">Podcast guest application</legend>
      {fields.map(field => <div key={field.name}>
        <label htmlFor={`guest-${field.name}`} className="block font-semibold text-gray-800">{field.label}</label>
        <input id={`guest-${field.name}`} name={field.name} type={field.type} autoComplete={field.autoComplete} maxLength={field.max} required={!("optional" in field && field.optional)} className={controlClass} />
      </div>)}
      {questions.map(field => <div key={field.name}>
        <label htmlFor={`guest-${field.name}`} className="block font-semibold text-gray-800">{field.label}</label>
        <textarea id={`guest-${field.name}`} name={field.name} maxLength={field.max} rows={field.rows} required className={controlClass} />
      </div>)}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="guest-website">Leave this field empty</label>
        <input id="guest-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="flex items-start gap-3 text-sm leading-relaxed text-gray-700">
        <input name="acknowledged" type="checkbox" required className="mt-1 h-4 w-4 shrink-0 accent-[#1A5C3A]" />
        <span>I understand this is a 30 to 45 minute video conversation on a weekly podcast with Aaron and ChatGPT as an AI co-host. I agree to be contacted about my application.</span>
      </label>
      <button type="submit" className="forest-button w-full disabled:cursor-wait disabled:opacity-60">{state === "sending" ? "Sending application..." : "Submit guest application"}</button>
    </fieldset>
    {error && <p role="alert" className="rounded-lg bg-red-50 p-4 text-sm text-red-800">{error} You can also email <a href="mailto:aaron@sequoiageo.com" className="underline">aaron@sequoiageo.com</a>.</p>}
  </form>;
}
