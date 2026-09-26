"use client";
import { useState, type FormEvent } from "react";

export default function ChecklistForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;
    const fields = new FormData(event.currentTarget);
    setState("sending"); setError("");
    try {
      const response = await fetch("/api/clovisfest-checklist", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: fields.get("email"), website: fields.get("website"), consent: true }) });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.error || "Please try again.");
      setState("sent");
    } catch (err) { setError(err instanceof Error ? err.message : "Please try again."); setState("idle"); }
  }
  if (state === "sent") return <div role="status" className="rounded-2xl bg-green-50 p-6 text-green-950"><h2 className="text-2xl font-bold">Check your inbox.</h2><p className="mt-3">Your checklist has been submitted for email delivery. Check spam or promotions if it does not arrive.</p><a className="mt-4 inline-block underline" href="mailto:Aaron@sequoiageo.com">Need help? Email Aaron</a></div>;
  return <form onSubmit={submit} className="rounded-2xl bg-white p-6 text-[#163b2a] shadow-xl sm:p-8">
    <label className="block text-base font-semibold" htmlFor="checklist-email">Your email address</label>
    <input className="mt-2 w-full rounded-lg border border-green-900/30 p-3 text-base focus:outline-2 focus:outline-green-700" id="checklist-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@yourbusiness.com" />
    <div aria-hidden="true" className="hidden"><label>Leave blank<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <button disabled={state === "sending"} className="mt-4 w-full rounded-lg bg-[#195c3b] px-5 py-4 text-lg font-bold text-white hover:bg-[#123e29] disabled:opacity-60">{state === "sending" ? "Sending…" : "Send Me the Checklist"}</button>
    <p className="mt-4 text-sm leading-relaxed text-slate-600">By selecting this button, you request one email with the checklist and Aaron’s contact details. No newsletter signup. <a href="/privacy-policy" className="underline">Privacy policy</a>.</p>
    {error && <p role="alert" className="mt-4 text-red-800">{error} <a href="mailto:Aaron@sequoiageo.com" className="underline">Contact Aaron</a>.</p>}
  </form>;
}
