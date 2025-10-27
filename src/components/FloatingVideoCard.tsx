"use client";

import { useState, useEffect } from 'react';

interface FloatingVideoCardProps {
  src: string;
  className?: string;
  variant?: 'corner' | 'floating' | 'split' | 'background' | 'circle' | 'mockup';
}

export default function FloatingVideoCard({ 
  src, 
  className = '', 
  variant = 'floating' 
}: FloatingVideoCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (variant === 'corner') {
    return (
      <>
        {/* Desktop Corner Video */}
        <div className={`hidden md:block absolute top-0 right-0 w-[40vw] h-[60vh] overflow-hidden ${className}`}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{
              clipPath: 'polygon(30% 0%, 100% 0%, 100% 70%, 70% 100%, 0% 100%, 0% 30%)'
            }}
          >
            <source src={src} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-black/60 to-black/90"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full blur-2xl"></div>
        </div>

        {/* Mobile Corner Video */}
        <div className={`md:hidden absolute top-4 right-4 w-32 h-32 overflow-hidden rounded-2xl ${className}`}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          >
            <source src={src} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/70 to-black/90 rounded-2xl"></div>
        </div>
      </>
    );
  }

  if (variant === 'floating') {
    return (
      <>
        {/* Desktop Floating Video */}
        <div className={`hidden md:block absolute top-1/2 right-8 -translate-y-1/2 w-80 h-48 overflow-hidden rounded-3xl shadow-2xl border border-white/10 backdrop-blur-sm ${className}`}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          >
            <source src={src} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/30 to-transparent"></div>
          
          {/* Floating glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-50"></div>
        </div>

        {/* Mobile Floating Video */}
        <div className={`md:hidden absolute top-1/2 right-4 -translate-y-1/2 w-48 h-32 overflow-hidden rounded-2xl shadow-xl border border-white/10 backdrop-blur-sm ${className}`}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          >
            <source src={src} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
        </div>
      </>
    );
  }

  if (variant === 'split') {
    return (
      <>
        {/* Desktop Split Screen */}
        <div className={`hidden md:block absolute top-0 right-0 w-1/2 h-full overflow-hidden ${className}`}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          >
            <source src={src} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* Mobile Split - Smaller corner */}
        <div className={`md:hidden absolute top-0 right-0 w-48 h-64 overflow-hidden rounded-bl-3xl ${className}`}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          >
            <source src={src} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/60 to-transparent rounded-bl-3xl"></div>
        </div>
      </>
    );
  }

  if (variant === 'background') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <source src={src} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
        
        {/* Content area overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/60"></div>
      </div>
    );
  }

  if (variant === 'circle') {
    return (
      <>
        {/* Desktop Circle Video - Smaller and more zoomed */}
        <div className={`hidden md:block absolute -bottom-16 -left-48 w-[35vw] h-[35vw] overflow-hidden ${className}`}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{
              clipPath: 'circle(50% at 50% 50%)',
              objectPosition: 'center center',
              transform: 'scale(1.5)'
            }}
          >
            <source src={src} type="video/mp4" />
          </video>
          {/* Much stronger overlay for content readability */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/85 via-black/60 to-black/75" style={{
            clipPath: 'circle(50% at 50% 50%)'
          }}></div>
          
          {/* Content protection overlay - heavier behind text */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-transparent" style={{
            clipPath: 'circle(50% at 50% 50%)'
          }}></div>
          
          {/* Additional blur effect to reduce distraction */}
          <div className="absolute inset-0 backdrop-blur-[1px]" style={{
            clipPath: 'circle(50% at 50% 50%)'
          }}></div>
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/15 via-transparent to-cyan-500/20 rounded-full blur-3xl" style={{
            clipPath: 'circle(50% at 50% 50%)'
          }}></div>
        </div>

        {/* Mobile Circle Video - Smaller and more zoomed */}
        <div className={`md:hidden absolute -bottom-12 -left-28 w-36 h-36 overflow-hidden ${className}`}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{
              clipPath: 'circle(50% at 50% 50%)',
              objectPosition: 'center center',
              transform: 'scale(1.3)'
            }}
          >
            <source src={src} type="video/mp4" />
          </video>
          {/* Mobile overlay - stronger for readability */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/50 to-black/80" style={{
            clipPath: 'circle(50% at 50% 50%)'
          }}></div>
          
          {/* Content protection for mobile */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-transparent" style={{
            clipPath: 'circle(50% at 50% 50%)'
          }}></div>
        </div>
      </>
    );
  }

  if (variant === 'mockup') {
    return (
      <>
        {/* Desktop Mockup Frame - Right Side Hero */}
        <div className={`hidden md:flex absolute top-1/2 right-12 -translate-y-1/2 gap-6 ${className}`}>
          {/* Laptop Mockup */}
          <div className="relative w-96 h-60 bg-gradient-to-b from-gray-700 to-gray-900 rounded-xl shadow-2xl border border-gray-500 overflow-hidden">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-600 rounded"></div>
            <div className="absolute inset-2 bg-black rounded-lg overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              >
                <source src={src} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </div>

          {/* Mobile Mockup */}
          <div className="relative w-20 h-96 bg-gradient-to-b from-gray-700 to-gray-900 rounded-3xl shadow-2xl border border-gray-500 overflow-hidden">
            <div className="absolute inset-2 bg-black rounded-2xl overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              >
                <source src={src} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Mobile Mockup Frame */}
        <div className={`md:hidden absolute top-1/2 right-6 -translate-y-1/2 ${className}`}>
          <div className="relative w-28 h-72 bg-gradient-to-b from-gray-700 to-gray-900 rounded-2xl shadow-xl border border-gray-500 overflow-hidden">
            <div className="absolute inset-2 bg-black rounded-xl overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              >
                <source src={src} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return null;
}
