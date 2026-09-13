import type { Metadata } from 'next';
import ContactCardForm from '@/components/ContactCardForm';

export const metadata: Metadata = {
  title: 'Aaron Husak | Sequoia GEO Contact Card',
  description: 'Save Aaron Husak’s contact details or email them to yourself. Founder of Sequoia GEO.',
  alternates: { canonical: 'https://www.sequoiageo.com/card' },
  robots: { index: false, follow: true },
};

export default function ContactCardPage() {
  return <section className="bg-stone-50 px-4 py-12 md:py-20"><div className="mx-auto max-w-xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">
    <p className="text-sm font-semibold uppercase tracking-widest text-green-800">Sequoia GEO</p>
    <h1 className="mt-3 text-4xl font-bold text-dark-green">Aaron Husak</h1>
    <p className="mt-2 text-lg text-gray-600">Founder, Sequoia GEO</p>
    <p className="mt-5 text-gray-700">AI-search visibility and website improvements for home-service and local-service businesses.</p>
    <div className="mt-6 flex flex-col gap-3 text-lg">
      <a className="text-green-800 underline" href="tel:+15595213122">(559) 521-3122</a>
      <a className="break-all text-green-800 underline" href="mailto:Aaron@sequoiageo.com">Aaron@sequoiageo.com</a>
      <a className="text-green-800 underline" href="https://www.sequoiageo.com">sequoiageo.com</a>
    </div>
    <ContactCardForm />
    <a href="/card/contact.vcf" download className="mt-6 block rounded-xl border-2 border-green-800 px-5 py-3 text-center font-semibold text-green-900">Save contact to my phone</a>
    <a href="/contact#book" className="mt-5 block text-center text-green-800 underline">Schedule a conversation</a>
  </div></section>;
}
