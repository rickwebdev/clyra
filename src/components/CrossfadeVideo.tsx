'use client';

import { useEffect, useRef, useState } from 'react';

export default function CrossfadeVideo() {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as { opera?: string }).opera;
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      const isSmallScreen = window.innerWidth <= 768;
      return isMobileDevice || isSmallScreen;
    };

    setIsMobile(checkMobile());

    const video1 = video1Ref.current;
    const video2 = video2Ref.current;
    
    if (!video1 || !video2) return;

    // Skip video setup on mobile or if video failed
    if (isMobile || videoFailed) {
      return;
    }

    let isVideo1Active = true;

    const crossfade = () => {
      if (isVideo1Active) {
        // Video 1 ended, immediately start crossfade to video 2
        video2.currentTime = 0;
        video2.play().catch(() => setVideoFailed(true));
        video1.style.opacity = '0';
        video2.style.opacity = '1';
        isVideo1Active = false;
      } else {
        // Video 2 ended, immediately start crossfade to video 1
        video1.currentTime = 0;
        video1.play().catch(() => setVideoFailed(true));
        video2.style.opacity = '0';
        video1.style.opacity = '1';
        isVideo1Active = true;
      }
    };

    const handleVideo1Ended = () => {
      crossfade();
    };

    const handleVideo2Ended = () => {
      crossfade();
    };

    const handleLoadedMetadata = () => {
      if (video1 && video2) {
        // Start with video 1
        video1.style.opacity = '1';
        video2.style.opacity = '0';
        video1.play().catch(() => setVideoFailed(true));
      }
    };

    const handleVideoError = () => {
      setVideoFailed(true);
    };

    // Add event listeners
    video1.addEventListener('ended', handleVideo1Ended);
    video2.addEventListener('ended', handleVideo2Ended);
    video1.addEventListener('loadedmetadata', handleLoadedMetadata);
    video1.addEventListener('error', handleVideoError);
    video2.addEventListener('error', handleVideoError);

    // Set up CSS transitions for smooth fading
    video1.style.transition = 'opacity 0.3s ease-in-out';
    video2.style.transition = 'opacity 0.3s ease-in-out';

    return () => {
      video1.removeEventListener('ended', handleVideo1Ended);
      video2.removeEventListener('ended', handleVideo2Ended);
      video1.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video1.removeEventListener('error', handleVideoError);
      video2.removeEventListener('error', handleVideoError);
    };
  }, [isMobile, videoFailed]);

  return (
    <div className="hero-video-container">
      {/* Only render videos on desktop and when not failed */}
      {!isMobile && !videoFailed && (
        <>
          <video 
            ref={video1Ref}
            className="hero-video hero-video-1" 
            muted 
            playsInline
            autoPlay
            poster="/images/hero/hero-background.mp4"
          >
            <source src="/images/hero/hero-background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video 
            ref={video2Ref}
            className="hero-video hero-video-2" 
            muted 
            playsInline
            poster="/images/hero/hero-background.mp4"
          >
            <source src="/images/hero/hero-background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </>
      )}
    </div>
  );
}
