import Link from "next/link";

export default function SnapshotExample() {
  return (
    <figure className="mt-6 overflow-hidden rounded-xl border border-[#1A5C3A]/25 bg-[#fafaf8]">
      <figcaption className="bg-[#0D2318] px-5 py-4 text-base font-bold text-white">
        Hicks Paving: inside the August 14, 2026 assessment
      </figcaption>
      <dl className="divide-y divide-gray-200 px-5 text-base">
        <div className="py-4"><dt className="font-bold text-[#1A5C3A]">Finding</dt><dd className="mt-1 text-gray-700">The homepage named two unrelated companies in its machine-readable organization data.</dd></div>
        <div className="py-4"><dt className="font-bold text-[#1A5C3A]">Evidence</dt><dd className="mt-1 text-gray-700">Live homepage source captured during the assessment, compared with the visible business name.</dd></div>
        <div className="py-4"><dt className="font-bold text-[#1A5C3A]">Recommended correction</dt><dd className="mt-1 text-gray-700">Confirm the current business identity, then correct the website identity and structured data.</dd></div>
      </dl>
      <div className="border-t border-gray-200 px-5 py-4 text-sm leading-relaxed text-gray-600">
        A reformatted summary of the permissioned assessment, not a screenshot or proof the correction was completed. No recommendation or lead increase was measured.
        <Link href="/case-studies/ai-search-readiness" className="mt-3 block font-bold text-[#1A5C3A] underline underline-offset-4">Read the findings and their limits</Link>
      </div>
    </figure>
  );
}
