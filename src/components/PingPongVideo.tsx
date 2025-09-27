'use client';

import { useEffect, useRef } from 'react';

export default function PingPongVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      if (video) {
        // When video ends, restart it to create a loop
        video.currentTime = 0;
        video.play();
      }
    };

    const handleLoadedMetadata = () => {
      if (video) {
        video.play();
      }
    };

    video.addEventListener('ended', handleEnded);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  return (
    <video 
      ref={videoRef}
      className="hero-video ping-pong-video" 
      muted 
      playsInline
      poster="/images/hero/hero-background.mp4"
    >
      <source src="/images/hero/hero-background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
