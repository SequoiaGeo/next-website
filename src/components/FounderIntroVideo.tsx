"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const videoId = "uBxniRk_KFg";
const title = "Marketing from an owner's perspective";

export default function FounderIntroVideo() {
  const [opened, setOpened] = useState(false);
  const player = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (opened) player.current?.focus();
  }, [opened]);

  return (
    <figure className="w-full">
      <div className="relative aspect-video overflow-hidden rounded-lg border border-[#0D2318]/20 bg-[#0D2318]">
        {opened ? (
          <iframe
            ref={player}
            tabIndex={0}
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=0&rel=0`}
            title={title}
            allow="encrypted-media; picture-in-picture; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setOpened(true)}
            aria-label="Open Aaron's introduction video, 2 minutes 8 seconds"
            className="group absolute inset-0 h-full w-full focus-visible:outline focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-white"
          >
            <Image src="/images/aaron-intro-hat-v3.png" alt="" fill priority sizes="(max-width: 1024px) 100vw, 560px" className="object-cover" />
            <span className="absolute inset-0 flex items-center justify-center bg-black/15 group-hover:bg-black/25">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1A5C3A] text-white shadow-lg">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-7 w-7"><path d="M8 5v14l11-7z" /></svg>
              </span>
            </span>
            <span className="absolute bottom-3 right-3 rounded bg-black/80 px-2 py-1 text-sm font-semibold text-white">2:08</span>
          </button>
        )}
      </div>
      <figcaption className="mt-3 text-sm leading-relaxed text-[#34483b]">
        <span className="font-semibold">Meet Aaron: marketing from an owner&apos;s perspective.</span>{" "}
        <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Watch on YouTube</a>
      </figcaption>
    </figure>
  );
}
