import type { Metadata } from "next";
import AskSequoiaExperience from "@/components/AskSequoiaExperience";

export const metadata: Metadata = {
  title: "Ask Sequoia | Approved Public Facts",
  description:
    "Ask about Sequoia GEO services, published starting prices, fit, the free marketing audit, methodology, public case-study evidence, and contact options.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function AskSequoiaPage() {
  return <AskSequoiaExperience />;
}
