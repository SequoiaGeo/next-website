import type { Metadata } from "next";
import ChecklistForm from "./checklist-form";
import { checklist } from "@/lib/clovisfest-checklist";

export const metadata: Metadata = {
  title: "ClovisFest AI Search Checklist | Sequoia GEO",
  description: "Get a practical website checklist for AI search, plus Aaron Husak's contact details. One email, no newsletter signup.",
  alternates: { canonical: "https://www.sequoiageo.com/clovis" },
};

export default function ClovisfestPage() {
  return <main className="bg-[#f8f6ef] text-[#173c2b]">
    <section className="bg-[#102f22] px-5 py-12 text-white sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4"><a href="/" className="text-xl font-bold">Sequoia GEO</a><a href="#qr" className="rounded-full border border-white/40 px-4 py-2 text-sm">Show / download QR code</a></div>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div><p className="text-sm font-bold uppercase tracking-widest text-[#b6d7a8]">A resource for ClovisFest conversations</p><h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">Help AI search understand your business.</h1><p className="mt-5 text-lg leading-relaxed text-[#d5e5d9]">Make your website clearer to customers and AI search tools like ChatGPT and Gemini. Get six practical checks you can use on your own site.</p><p className="mt-5 text-[#d5e5d9]">Free checklist. Just your email. No meeting required.</p></div>
          <ChecklistForm />
        </div>
      </div>
    </section>
    <section className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-5 pt-12 sm:flex-row sm:items-center" aria-label="Meet Aaron">
      <img src="/aaron-husak.webp" alt="Aaron Husak, founder of Sequoia GEO" width="772" height="800" className="h-48 w-48 shrink-0 rounded-2xl object-cover" />
      <div><h2 className="text-2xl font-bold">Hi, I’m Aaron.</h2><p className="mt-3 max-w-2xl leading-relaxed text-slate-600">I’m the founder of Sequoia GEO. If we met at ClovisFest, here’s a face to go with the conversation. This checklist gives you a place to start with your own website, and my contact details if you want to keep talking.</p></div>
    </section>
    <section className="mx-auto max-w-5xl px-5 py-14"><p className="text-sm font-bold uppercase tracking-widest">Inside the checklist</p><h2 className="mt-3 text-3xl font-bold">Useful changes, not another acronym.</h2><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{checklist.map((item, i) => <article key={item.title} className="rounded-2xl border border-green-900/10 bg-white p-6"><p className="text-sm font-bold text-green-700">0{i + 1}</p><h3 className="mt-2 text-xl font-bold">{item.title}</h3><p className="mt-3 leading-relaxed text-slate-600">{item.detail}</p></article>)}</div><p className="mt-6 text-sm text-slate-600">These checks improve clarity and search readiness. They do not guarantee placement or recommendations in AI answers.</p></section>
    <section className="mx-auto grid max-w-5xl gap-8 px-5 pb-16 md:grid-cols-2">
      <div className="rounded-2xl bg-[#e9eee4] p-7"><h2 className="text-2xl font-bold">Keep in touch with Aaron.</h2><p className="mt-4 leading-relaxed">I’m Aaron Husak, founder of Sequoia GEO. I help business owners make their websites and marketing more useful. Want a second opinion? Reply to the checklist email with your website link.</p><a className="mt-5 block font-semibold underline" href="mailto:Aaron@sequoiageo.com">Aaron@sequoiageo.com</a><a className="mt-3 block underline" href="tel:5595213122">(559) 521-3122</a><a className="mt-5 inline-block rounded-lg bg-[#173c2b] px-5 py-3 font-semibold text-white" href="/card">Save my contact details</a></div>
      <div id="qr" className="scroll-mt-24 rounded-2xl border border-green-900/15 bg-white p-7 text-center"><h2 className="text-2xl font-bold">Scan, save or share.</h2><p className="mt-2 text-slate-600">Open this section when you meet someone, or download the QR for your printed cards.</p><img src="/clovisfest-qr.svg" width="240" height="240" alt="QR code opening sequoiageo.com/clovis" className="mx-auto my-4 h-60 w-60 max-w-full" /><a href="/clovis" className="block font-semibold underline">sequoiageo.com/clovis</a><a download="sequoia-geo-clovisfest-qr.svg" href="/clovisfest-qr.svg" className="mt-4 inline-block rounded-lg border border-green-900 px-5 py-3 font-semibold">Download print-ready QR</a></div>
    </section>
    <p className="px-5 pb-8 text-center text-sm text-slate-600">An independent Sequoia GEO resource. Not an official ClovisFest program or endorsement.</p>
  </main>;
}
