"use client";
import { useState } from "react";
import { diagnoseCalls, metrics, type Counts } from "@/lib/calls-diagnostic.mjs";

export default function CallsDiagnostic() {
  const [before,setBefore]=useState<Counts>({}); const [after,setAfter]=useState<Counts>({});
  const [comparable,setComparable]=useState(false); const [linked,setLinked]=useState(false);
  const [submitted,setSubmitted]=useState(false); const [example,setExample]=useState(false);
  const result=diagnoseCalls(before,after,comparable,linked);
  function reset(){setBefore({});setAfter({});setComparable(false);setLinked(false);setSubmitted(false);setExample(false);}
  return <section id="diagnostic" className="my-12 border border-[#cbd5ce] bg-white p-5 sm:p-8 rounded-xl" data-clarity-mask="true" data-private="true">
    <h2 className="text-2xl font-bold">Compare two periods</h2>
    <p className="mt-3 text-gray-700">Use two complete periods of equal length, such as two 28-day windows. Keep the service area, sources and definitions consistent. Leave anything you do not know blank.</p>
    <p className="mt-3 text-sm text-gray-700">This calculator processes entries in your browser without submitting them or storing them for later. Site analytics may still record page activity. Do not enter names, credentials or customer details.</p>
    <div className="flex flex-wrap gap-4 mt-5 print:hidden">
      <button type="button" className="underline font-semibold" onClick={()=>{setBefore({impressions:'10000',clicks:'200',sessions:'180',calls:'50',answered:'45',booked:'27'});setAfter({impressions:'10000',clicks:'200',sessions:'180',calls:'50',answered:'30',booked:'18'});setComparable(true);setLinked(true);setExample(true);setSubmitted(true);}}>Load illustrative example</button>
      <button type="button" className="underline" onClick={reset}>Clear all entries</button>
    </div>
    {example && <p className="mt-4 p-3 bg-amber-50 border border-amber-300">Illustrative numbers, not client results. Editing these values does not make them verified evidence.</p>}
    <form className="mt-6" onSubmit={e=>{e.preventDefault();setSubmitted(true);}}>
      <div className="space-y-6">{metrics.map(metric=><fieldset key={metric.key} className="border-b pb-5"><legend className="font-bold">{metric.label}</legend><p id={`${metric.key}-help`} className="text-sm text-gray-600 my-2">{metric.help}</p><div className="grid grid-cols-2 gap-4">{(['before','after'] as const).map(period=><label key={period} className="text-sm">{period==='before'?'Earlier period':'Later period'}<input className="mt-1 block w-full rounded border border-gray-400 p-3 text-base focus:outline-2 focus:outline-green-800" type="number" min="0" step="1" inputMode="numeric" aria-describedby={`${metric.key}-help`} aria-label={`${metric.label}, ${period==='before'?'earlier':'later'} period`} value={(period==='before'?before:after)[metric.key]??''} onChange={e=>{(period==='before'?setBefore:setAfter)(prev=>({...prev,[metric.key]:e.target.value}));setSubmitted(false);}} placeholder="Unknown" /></label>)}</div></fieldset>)}</div>
      <label className="flex gap-3 items-start mt-6"><input type="checkbox" className="mt-1 h-5 w-5 shrink-0" checked={comparable} onChange={e=>{setComparable(e.target.checked);setSubmitted(false);}}/>These periods have equal duration and consistent source filters, definitions and tracking.</label>
      <label className="flex gap-3 items-start mt-4"><input type="checkbox" className="mt-1 h-5 w-5 shrink-0" checked={linked} onChange={e=>{setLinked(e.target.checked);setSubmitted(false);}}/>Answered calls are a subset of eligible calls, and bookings are from those answered calls in each period.</label>
      <button className="btn btn-dark mt-6 print:hidden" type="submit">Show what changed</button>
    </form>
    {submitted && <div className="mt-8 border-t pt-6" aria-live="polite" aria-atomic="true">
      <h3 className="text-xl font-bold">{result.errors.length?'Check your entries':'Your comparison'}</h3>
      {!!result.errors.length && <ul className="list-disc pl-5 text-red-800 mt-3">{result.errors.map(t=><li key={t}>{t}</li>)}</ul>}
      <div className="grid sm:grid-cols-2 gap-3 mt-4">{result.rows.map(r=><div className="bg-[#f2f5f1] p-4 rounded" key={r.key}><h4 className="font-semibold">{r.label}</h4><p>{r.before.toLocaleString()} to {r.after.toLocaleString()}</p><p>{r.change>0?'+':''}{r.change.toLocaleString()} ({r.percent===null?'percentage change unavailable from a zero baseline':`${r.percent>0?'+':''}${r.percent.toFixed(1)}%`})</p></div>)}</div>
      {result.rates.map(r=><p className="mt-4 font-semibold" key={r.label}>{r.label}: {r.before.toFixed(1)}% to {r.after.toFixed(1)}% ({r.points>0?'+':''}{r.points.toFixed(1)} percentage points)</p>)}
      <ul className="list-disc pl-5 space-y-3 mt-5">{result.findings.map(t=><li key={t}>{t}</li>)}</ul>
      {!result.errors.length && <button className="underline mt-5 print:hidden" type="button" onClick={()=>window.print()}>Print or save this comparison as PDF</button>}
    </div>}
  </section>;
}
