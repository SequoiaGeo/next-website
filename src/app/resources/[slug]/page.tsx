import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ownerResources } from '@/data/owner-resources';
import OwnerWorksheet from '@/components/OwnerWorksheet';
const standalone=ownerResources.filter(r=>!['marketing-ownership-checklist','marketing-leadership-fit'].includes(r.slug));
export function generateStaticParams(){return standalone.map(r=>({slug:r.slug}));}
export function generateMetadata({params}:{params:{slug:string}}):Metadata{const r=standalone.find(r=>r.slug===params.slug);return {title:r?`${r.tool} | Sequoia GEO`:'Resource not found',description:r?.answer,alternates:{canonical:`/resources/${params.slug}`}};}
export default function Page({params}:{params:{slug:string}}){const r=standalone.find(r=>r.slug===params.slug);if(!r)notFound();return <article className="max-w-4xl mx-auto px-5 pt-28 pb-24"><Link href="/resources" className="inline-block underline">All owner resources</Link><h1 className="text-4xl sm:text-5xl font-bold mt-7">{r.title}</h1><OwnerWorksheet slug={r.slug}/><section className="mt-10 bg-[#eef3ed] rounded-xl p-6"><h2 className="text-2xl font-bold">Want to discuss your findings?</h2><p className="mt-3">Bring your completed worksheet to a 15-minute call. The worksheet does not send your answers or create a lead automatically.</p><Link className="btn btn-dark mt-5" href="/contact#book">Book a 15-Minute Call</Link></section><p className="mt-8">Related: <Link className="underline" href={r.related}>{r.relatedLabel}</Link></p></article>}
