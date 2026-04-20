"use client";

import { useState } from "react";
import Link from "next/link";

export default function ROICalculator() {
  const [budget, setBudget] = useState(3000);
  const [jobValue, setJobValue] = useState(5000);
  const [closeRate, setCloseRate] = useState(30);

  const leads = Math.round(budget / 150);
  const bookedJobs = Math.round(leads * (closeRate / 100));
  const revenue = bookedJobs * jobValue;
  const roi = budget > 0 ? Math.round(((revenue - budget) / budget) * 100) : 0;

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
            See Your Potential ROI
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Adjust the sliders to see what contractor-focused marketing could
            deliver for your business.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-[#fafaf8] shadow-sm">
          <div className="grid gap-0 lg:grid-cols-2">
            {/* Inputs */}
            <div className="p-10">
              {/* Monthly Budget */}
              <div className="mb-8">
                <label className="flex items-center justify-between text-sm font-semibold text-[#1a1a1a]">
                  Monthly Marketing Budget
                  <span className="text-lg font-extrabold text-[#1A5C3A]">
                    ${budget.toLocaleString()}
                  </span>
                </label>
                <input
                  type="range"
                  min={1000}
                  max={10000}
                  step={250}
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-[#1A5C3A]"
                />
                <div className="mt-1 flex justify-between text-xs text-gray-400">
                  <span>$1,000</span>
                  <span>$10,000</span>
                </div>
              </div>

              {/* Average Job Value */}
              <div className="mb-8">
                <label className="flex items-center justify-between text-sm font-semibold text-[#1a1a1a]">
                  Average Job Value
                  <span className="text-lg font-extrabold text-[#1A5C3A]">
                    ${jobValue.toLocaleString()}
                  </span>
                </label>
                <input
                  type="number"
                  min={500}
                  max={50000}
                  step={500}
                  value={jobValue}
                  onChange={(e) => setJobValue(Number(e.target.value) || 0)}
                  className="mt-3 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-[#1a1a1a] focus:border-[#3A9E6A] focus:outline-none focus:ring-2 focus:ring-[#3A9E6A]/20"
                />
              </div>

              {/* Close Rate */}
              <div>
                <label className="flex items-center justify-between text-sm font-semibold text-[#1a1a1a]">
                  Close Rate
                  <span className="text-lg font-extrabold text-[#1A5C3A]">
                    {closeRate}%
                  </span>
                </label>
                <input
                  type="range"
                  min={10}
                  max={50}
                  step={5}
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-[#1A5C3A]"
                />
                <div className="mt-1 flex justify-between text-xs text-gray-400">
                  <span>10%</span>
                  <span>50%</span>
                </div>
              </div>
            </div>

            {/* Outputs */}
            <div className="flex flex-col justify-between bg-[#0D2318] p-10 text-white">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-[#3A9E6A]">
                  Estimated Monthly Results
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-sm text-white/70">
                      Qualified Leads
                    </span>
                    <span className="text-2xl font-extrabold">{leads}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-sm text-white/70">Booked Jobs</span>
                    <span className="text-2xl font-extrabold">{bookedJobs}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-sm text-white/70">Revenue</span>
                    <span className="text-2xl font-extrabold">
                      ${revenue.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/70">ROI</span>
                    <span className="text-3xl font-extrabold text-[#3A9E6A]">
                      {roi}%
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="#contact"
                className="mt-10 inline-flex w-full items-center justify-center rounded-lg bg-[#3A9E6A] px-6 py-4 text-base font-semibold text-[#0D2318] transition hover:bg-[#C8EDD2]"
              >
                Book Your Free Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-gray-400">
          * These are rough estimates based on industry averages for contractor
          marketing. Actual results may vary depending on market, competition,
          and other factors.
        </p>
      </div>
    </section>
  );
}
