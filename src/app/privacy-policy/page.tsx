import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Sequoia GEO",
  description:
    "Sequoia GEO's privacy policy outlines how we collect, use, and protect your personal information when you use our marketing services and website.",
};

export default function PrivacyPolicy() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0D2318] mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-12">
          Last Updated: March 17, 2026
        </p>

        <div className="prose prose-lg max-w-none space-y-10 text-gray-700">
          <p>
            Sequoia GEO (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;) is committed to protecting the privacy of our
            clients and website visitors. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you visit
            our website or engage our marketing services.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-[#0D2318] mb-4">
              Information We Collect
            </h2>
            <p className="mb-3">
              We may collect personal information that you voluntarily provide
              when you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fill out a contact form or request a consultation</li>
              <li>Subscribe to our newsletter or marketing communications</li>
              <li>Engage us for marketing services</li>
              <li>Communicate with us via email, phone, or live chat</li>
            </ul>
            <p className="mt-3">
              This information may include your name, email address, phone
              number, business name, website URL, and any other details you
              choose to provide.
            </p>
            <p className="mt-3">
              We also automatically collect certain information when you visit
              our website, including your IP address, browser type, operating
              system, referring URLs, pages viewed, and the dates and times of
              your visits. This data is collected through cookies, web beacons,
              and similar tracking technologies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0D2318] mb-4">
              Use of Information
            </h2>
            <p className="mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and improve our marketing services</li>
              <li>Respond to your inquiries and fulfill your requests</li>
              <li>
                Send you marketing communications, service updates, and
                promotional materials (you may opt out at any time)
              </li>
              <li>
                Analyze website usage and trends to enhance the user experience
              </li>
              <li>
                Generate aggregated, anonymized analytics to improve our
                offerings
              </li>
              <li>
                Comply with applicable laws, regulations, and legal processes
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0D2318] mb-4">
              Data Security
            </h2>
            <p>
              We implement commercially reasonable administrative, technical, and
              physical safeguards to protect your personal information from
              unauthorized access, use, alteration, and disclosure. However, no
              method of transmission over the Internet or electronic storage is
              completely secure. While we strive to protect your information, we
              cannot guarantee its absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0D2318] mb-4">
              Cookies and Tracking Technologies
            </h2>
            <p>
              Our website uses cookies and similar technologies to collect usage
              data, remember your preferences, and improve your experience. You
              can control cookie settings through your browser preferences. Note
              that disabling cookies may affect certain features of our website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0D2318] mb-4">
              Third-Party Services
            </h2>
            <p>
              We may share your information with trusted third-party service
              providers who assist us in operating our website, conducting our
              business, or providing services to you. These providers are
              contractually obligated to keep your information confidential and
              use it only for the purposes we specify. Third-party services we
              may use include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                Website analytics providers (e.g., Google Analytics)
              </li>
              <li>
                Advertising platforms (e.g., Google Ads, Meta Ads)
              </li>
              <li>Customer relationship management (CRM) tools</li>
              <li>Email marketing platforms</li>
              <li>Payment processors</li>
            </ul>
            <p className="mt-3">
              We do not sell, trade, or otherwise transfer your personal
              information to outside parties for their own marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0D2318] mb-4">
              Your Rights
            </h2>
            <p>
              Depending on your jurisdiction, you may have the right to access,
              correct, delete, or restrict the processing of your personal
              information. California residents may have additional rights under
              the California Consumer Privacy Act (CCPA). To exercise any of
              these rights, please contact us using the information below.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0D2318] mb-4">
              Children&apos;s Privacy
            </h2>
            <p>
              Our services are not directed to individuals under the age of 18.
              We do not knowingly collect personal information from children. If
              we become aware that we have collected information from a child,
              we will take steps to delete it promptly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0D2318] mb-4">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated effective date. We
              encourage you to review this page periodically.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0D2318] mb-4">
              Contact Information
            </h2>
            <p>
              If you have questions or concerns about this Privacy Policy or our
              data practices, please contact us:
            </p>
            <div className="mt-4 p-6 bg-[#0D2318]/5 rounded-lg">
              <p className="font-semibold text-[#0D2318]">Sequoia GEO</p>
              <p>Fresno, CA</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:Aaron@sequoiageo.com"
                  className="text-[#3A9E6A] hover:underline"
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
