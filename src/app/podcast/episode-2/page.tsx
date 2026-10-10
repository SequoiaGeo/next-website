import PodcastWatchPage, { watchMetadata } from "@/components/PodcastWatchPage";
import { podcastVideos } from "@/data/podcast-videos";

const video = podcastVideos[1];
export const metadata = watchMetadata(video);
export default function Page() { return <PodcastWatchPage video={video} />; }
