import Link from "next/link";

export default function SnapshotExample() {
  return (
    <figure className="mt-6 overflow-hidden rounded-xl border border-[#1A5C3A]/25 bg-[#fafaf8]">
      <figcaption className="bg-[#0D2318] px-5 py-4 text-base font-bold text-white">
        What an AI Search assessment checks
      </figcaption>
      <dl className="divide-y divide-gray-200 px-5 text-base">
        <div className="py-4"><dt className="font-bold text-[#1A5C3A]">Business identity</dt><dd className="mt-1 text-gray-700">Compare the business name shown to visitors with the organization named in the website data.</dd></div>
        <div className="py-4"><dt className="font-bold text-[#1A5C3A]">Public sources</dt><dd className="mt-1 text-gray-700">Record the pages and profiles checked, their dates, and any information that still needs confirmation.</dd></div>
        <div className="py-4"><dt className="font-bold text-[#1A5C3A]">Correction priorities</dt><dd className="mt-1 text-gray-700">Prioritize verified inconsistencies and explain what must be confirmed before making changes.</dd></div>
      </dl>
      <div className="border-t border-gray-200 px-5 py-4 text-sm leading-relaxed text-gray-600">
        This describes our assessment process, not findings or results for a particular client.
        <Link href="/ai-search-methodology" className="mt-3 block font-bold text-[#1A5C3A] underline underline-offset-4">Read the measurement method</Link>
      </div>
    </figure>
  );
}
