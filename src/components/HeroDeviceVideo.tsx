"use client";

import { useEffect, useMemo, useRef, useState } from "react";

interface HeroDeviceVideoProps {
  sources: string[];
  className?: string;
}

export default function HeroDeviceVideo({ sources, className = "" }: HeroDeviceVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      const next = (index + 1) % sources.length;
      setIndex(next);
      // swap source and play
      video.src = sources[next];
      video.currentTime = 0;
      video.play().catch(() => {});
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, [index, sources]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.src = sources[index];
    if (!prefersReducedMotion) {
      video.play().catch(() => {});
    }
  }, [index, sources, prefersReducedMotion]);

  return (
    <video
      ref={videoRef}
      muted
      autoPlay={!prefersReducedMotion}
      loop={false}
      playsInline
      preload="metadata"
      className={className}
    />
  );
}


