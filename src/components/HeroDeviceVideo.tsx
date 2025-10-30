"use client";

import { useEffect, useMemo, useRef, useState } from "react";

interface HeroDeviceVideoProps {
  sources: string[];
  className?: string;
}

export default function HeroDeviceVideo({ sources, className = "" }: HeroDeviceVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [index, setIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startXRef = useRef<number | null>(null);
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

  const goNext = () => setIndex(prev => (prev + 1) % sources.length);
  const goPrev = () => setIndex(prev => (prev - 1 + sources.length) % sources.length);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    startXRef.current = e.clientX;
    setDragging(true);
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (startXRef.current === null) return;
    const delta = e.clientX - startXRef.current;
    setDragging(false);
    startXRef.current = null;
    const threshold = 30; // px
    if (delta > threshold) {
      goPrev();
    } else if (delta < -threshold) {
      goNext();
    }
  };

  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (Math.abs(e.deltaY) < 2 && Math.abs(e.deltaX) < 2) return;
    if ((e.deltaY > 0) || (e.deltaX > 0)) goNext();
    else goPrev();
  };

  return (
    <div
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onWheel={onWheel}
      style={{ cursor: dragging ? 'grabbing' : 'grab', width: '100%', height: '100%' }}
    >
      <video
        ref={videoRef}
        muted
        autoPlay={!prefersReducedMotion}
        loop={false}
        playsInline
        preload="metadata"
        className={className}
      />
    </div>
  );
}


