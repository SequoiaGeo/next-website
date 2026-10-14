import type { Metadata } from "next";
import PaidSnapshotLanding from "@/components/PaidSnapshotLanding";

export const metadata: Metadata = {
  title: "Free AI Search Snapshot | Sequoia GEO",
  description: "Request a hand-reviewed AI Search Snapshot with written findings, public sources and prioritized next steps.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.sequoiageo.com/ai-search-snapshot/chatgpt" },
};

export default function Page() { return <PaidSnapshotLanding source="paid_snapshot_chatgpt" />; }
