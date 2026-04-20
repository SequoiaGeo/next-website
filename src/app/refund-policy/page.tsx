import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Sequoia GEO",
  description:
    "Sequoia GEO's refund policy for digital marketing services including GEO, SEO, PPC, and web design engagements.",
};

export default function RefundPolicy() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1B4332] mb-4">
          Refund Policy
        </h1>
        <p className="text-sm text-gray-500 mb-12">
          Last Updated: March 17, 2026
        </p>

        <div className="prose prose-lg max-w-none space-y-10 text-gray-700">
          <p>
            At Sequoia GEO, we are committed to delivering high-quality
            marketing services and building lasting relationships with our
            clients. We understand that circumstances may change, and we want to
            be transparent about our refund practices.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">
              Monthly Service Agreements
            </h2>
            <p>
              Our ongoing marketing services (SEO, GEO, PPC management, etc.)
              are billed on a monthly basis. Because these services involve
              continuous work, strategy development, and resource allocation:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                Clients may cancel their monthly service at any time with 30
                days&apos; written notice.
              </li>
              <li>
                No refunds will be issued for the current billing period in
                which the cancellation notice is received.
              </li>
              <li>
                Services will continue through the end of the current paid
                billing period.
              </li>
              <li>
                No further charges will be made after the cancellation takes
                effect.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">
              Project-Based Work
            </h2>
            <p>
              For one-time projects such as website design, content packages, or
              marketing audits:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                A deposit is required to begin work and is non-refundable once
                work has commenced.
              </li>
              <li>
                If you cancel a project before any work has begun, you may
                request a full refund of the deposit within 7 days of payment.
              </li>
              <li>
                If work is in progress, any refund will be prorated based on the
                percentage of work completed, at Sequoia GEO&apos;s reasonable
                determination.
              </li>
              <li>
                Completed deliverables that have been approved by the client are
                not eligible for a refund.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">
              Advertising Spend
            </h2>
            <p>
              Fees paid directly to advertising platforms (Google Ads, Meta Ads,
              etc.) are separate from Sequoia GEO&apos;s management fees.
              Advertising spend is non-refundable by Sequoia GEO, as these funds
              are remitted directly to the advertising platforms. Refund requests
              for ad spend must be directed to the respective platform.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">
              Satisfaction Commitment
            </h2>
            <p>
              We stand behind the quality of our work. If you are not satisfied
              with a deliverable, we ask that you notify us within 14 days of
              delivery. We will work with you to address your concerns and, if
              necessary, revise the work at no additional charge. Our goal is
              always to find a solution that meets your expectations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">
              How to Request a Refund
            </h2>
            <p>
              To request a refund or discuss a billing concern, please contact
              us with the following information:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Your name and business name</li>
              <li>The service or invoice in question</li>
              <li>The reason for your refund request</li>
            </ul>
            <p className="mt-3">
              We will review your request and respond within 5 business days.
              Approved refunds will be processed within 10 business days using
              the original payment method.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">
              Contact Information
            </h2>
            <p>
              For refund requests or billing questions, please contact us:
            </p>
            <div className="mt-4 p-6 bg-[#1B4332]/5 rounded-lg">
              <p className="font-semibold text-[#1B4332]">Sequoia GEO</p>
              <p>Fresno, CA</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:Aaron@sequoiageo.com"
                  className="text-[#52B788] hover:underline"
                >
                  Aaron@sequoiageo.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
