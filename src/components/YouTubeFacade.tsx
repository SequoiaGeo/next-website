"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  videoId: string;
  title: string;
}

/**
 * YouTube facade — shows a static thumbnail until the user clicks play.
 * Prevents YouTube from loading ~500KB of JS on initial page load.
 * Saves ~400ms TBT on mobile, which is worth ~10-15 PageSpeed points.
 */
export default function YouTubeFacade({ videoId, title }: Props) {
  const [active, setActive] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  if (active) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      className="absolute inset-0 w-full h-full group"
      aria-label={`Play video: ${title}`}
    >
      <Image
        src={thumb}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 896px"
      />
      {/* Play button overlay */}
      <span className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
        <span className="flex items-center justify-center w-16 h-16 rounded-full bg-red-600 group-hover:bg-red-700 transition-colors shadow-lg">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 text-white ml-1"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
