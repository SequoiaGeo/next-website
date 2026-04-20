import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement | Sequoia GEO",
  description:
    "Sequoia GEO's commitment to digital accessibility and ensuring our website and services are usable by everyone.",
};

export default function AccessibilityStatement() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1B4332] mb-4">
          Accessibility Statement
        </h1>
        <p className="text-sm text-gray-500 mb-12">
          Last Updated: March 17, 2026
        </p>

        <div className="prose prose-lg max-w-none space-y-10 text-gray-700">
          <p>
            Sequoia GEO is committed to ensuring digital accessibility for
            people of all abilities. We continually work to improve the user
            experience of our website and ensure that our content is accessible
            to the widest possible audience.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">
              Our Commitment
            </h2>
            <p>
              We strive to conform to the Web Content Accessibility Guidelines
              (WCAG) 2.1, Level AA. These guidelines provide a framework for
              making web content more accessible to people with disabilities,
              including those with visual, auditory, motor, and cognitive
              impairments.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">
              Measures We Take
            </h2>
            <p>
              To support accessibility, Sequoia GEO takes the following steps:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                Using semantic HTML to provide meaningful document structure
              </li>
              <li>
                Providing text alternatives for non-text content, including
                images and media
              </li>
              <li>
                Ensuring sufficient color contrast between foreground and
                background elements
              </li>
              <li>
                Designing pages that are navigable using keyboard-only input
              </li>
              <li>
                Using clear, readable fonts and maintaining a logical content
                hierarchy
              </li>
              <li>
                Building responsive layouts that work across devices and screen
                sizes
              </li>
              <li>
                Including descriptive link text and accessible form labels
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">
              Known Limitations
            </h2>
            <p>
              While we strive for full accessibility, some areas of our website
              may not yet be fully optimized. We are actively working to
              identify and resolve accessibility issues. Known limitations may
              include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                Some third-party content or embedded tools may not fully conform
                to WCAG standards
              </li>
              <li>
                Older PDF documents may not be fully accessible to screen
                readers
              </li>
              <li>
                Some interactive elements may require additional accessibility
                improvements
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">
              Feedback and Assistance
            </h2>
            <p>
              We welcome your feedback on the accessibility of our website. If
              you encounter any barriers or have suggestions for improvement,
              please contact us. We take accessibility concerns seriously and
              will do our best to respond to your inquiry within 5 business
              days.
            </p>
            <p className="mt-3">
              If you need information from our website in an alternative format,
              please let us know and we will work to accommodate your request.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">
              Third-Party Content
            </h2>
            <p>
              Our website may include content provided by third parties,
              including embedded videos, social media feeds, and advertising
              platform widgets. While we encourage our partners to follow
              accessibility best practices, we cannot guarantee the
              accessibility of third-party content.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">
              Continuous Improvement
            </h2>
            <p>
              Accessibility is an ongoing effort. We regularly review our
              website and update our practices to align with current standards
              and technologies. As we build websites for our clients, we also
              advocate for and implement accessibility best practices in every
              project.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">
              Contact Information
            </h2>
            <p>
              For accessibility-related questions, feedback, or assistance,
              please contact us:
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
