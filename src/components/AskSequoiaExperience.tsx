import catalog from "@/data/sequoia-knowledge.catalog.json";
import SequoiaQuestionPanel from "@/components/SequoiaQuestionPanel";

export default function AskSequoiaExperience() {
  return (
    <>
      <section className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-overline mb-4">Approved public facts</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              Ask Sequoia
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-[#C8EDD2]/80">
              Ask about services, published starting prices, service fit, the measurement method,
              public case-study evidence, or contact options.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#C8EDD2]/60">
              {catalog.publicBoundary} Submitted questions may be reviewed to improve Ask Sequoia
              and this website. Questions are not sent to an AI model or added to a URL.
            </p>
          </div>
        </div>
      </section>

      <SequoiaQuestionPanel surface="ask_sequoia" />
    </>
  );
}
