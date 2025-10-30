"use client";

import { useEffect, useRef, useState } from "react";

interface CalendlyEmbedProps {
  url: string;
  height?: number;
}

export default function CalendlyEmbed({ url, height = 600 }: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "200px 0px", threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        minHeight: height,
        background: "linear-gradient(180deg,#0b0f18,#0a0a0a)",
        borderRadius: 12,
        border: "1px solid rgba(255,255,255,0.08)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {!inView && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#9ca3af",
            fontSize: 16,
          }}
        >
          <div style={{
            width: "72%",
            height: 48,
            borderRadius: 9999,
            background: "linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.12), rgba(255,255,255,0.06))",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.4s infinite",
          }} />
          <style>{`@keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}`}</style>
        </div>
      )}
      {inView && (
        <iframe
          src={url}
          width="100%"
          height={height}
          frameBorder={0}
          loading="lazy"
          style={{ display: "block", background: "transparent" }}
        />
      )}
    </div>
  );
}


