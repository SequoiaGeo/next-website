"use client";

import { useState } from "react";

export default function SalesTrainingFeedback() {
  const [form, setForm] = useState({ name: "", company: "", email: "", role: "", feedback: "", rating: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/sales-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ name: "", company: "", email: "", role: "", feedback: "", rating: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-[#3A9E6A]/30 bg-[#C8EDD2]/20 p-10 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#C8EDD2]">
          <svg className="h-7 w-7 text-[#1A5C3A]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#0D2318]">Thanks for the feedback</h3>
        <p className="mt-2 text-base text-gray-600">
          We read every submission. It directly shapes how the tool develops.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[#1a1a1a] mb-1.5">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[#3A9E6A] focus:outline-none focus:ring-1 focus:ring-[#3A9E6A]"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-[#1a1a1a] mb-1.5">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Acme HVAC"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[#3A9E6A] focus:outline-none focus:ring-1 focus:ring-[#3A9E6A]"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#1a1a1a] mb-1.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@yourbusiness.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[#3A9E6A] focus:outline-none focus:ring-1 focus:ring-[#3A9E6A]"
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-semibold text-[#1a1a1a] mb-1.5">
            Your role
          </label>
          <select
            id="role"
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 focus:border-[#3A9E6A] focus:outline-none focus:ring-1 focus:ring-[#3A9E6A]"
          >
            <option value="">Select one</option>
            <option value="owner">Owner / Operator</option>
            <option value="csr">CSR / Dispatcher</option>
            <option value="sales">Sales Rep / Technician</option>
            <option value="manager">Office Manager</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">
          How useful was the tool?
        </label>
        <div className="flex gap-3 flex-wrap">
          {["Not useful", "Somewhat useful", "Very useful", "Extremely useful"].map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="rating"
                value={opt}
                checked={form.rating === opt}
                onChange={handleChange}
                className="accent-[#3A9E6A]"
              />
              <span className="text-sm text-gray-700">{opt}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="feedback" className="block text-sm font-semibold text-[#1a1a1a] mb-1.5">
          What would make this tool more useful for your team? <span className="text-[#3A9E6A]">*</span>
        </label>
        <textarea
          id="feedback"
          name="feedback"
          required
          rows={5}
          value={form.feedback}
          onChange={handleChange}
          placeholder="Specific scenarios you'd want to practice, features you'd like added, how you plan to use it with your team..."
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[#3A9E6A] focus:outline-none focus:ring-1 focus:ring-[#3A9E6A] resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Try again or email aaron@sequoiageo.com directly.</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-lg bg-[#1A5C3A] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0D2318] disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Submit Feedback"}
      </button>
    </form>
  );
}
