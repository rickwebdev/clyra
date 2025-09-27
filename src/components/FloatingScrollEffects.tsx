"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function FloatingScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    // Reset all animation classes when route changes
    const resetAnimations = () => {
      const floatingElements = document.querySelectorAll('.float-in-left, .float-in-right, .float-in-center, .float-in-bottom-left, .float-in-bottom-right, .slide-in-right, .slide-in-left');
      floatingElements.forEach((el) => {
        el.classList.remove('animate');
      });
    };

    // Reset animations on route change
    resetAnimations();

    // Mobile-optimized settings
    const isMobile = window.innerWidth <= 768;
    const rootMargin = isMobile ? '0px 0px -10px 0px' : '0px 0px -20px 0px';
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: rootMargin
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          
          // Add a staggered delay based on the element's position
          const parent = element.parentElement;
          if (parent) {
            const siblings = Array.from(parent.children);
            const index = siblings.indexOf(element);
            const delay = index * 150; // 150ms stagger
            
            setTimeout(() => {
              element.classList.add('animate');
            }, delay);
          } else {
            element.classList.add('animate');
          }
        }
      });
    }, observerOptions);

    // Small delay to ensure DOM is ready after route change
    const initObserver = () => {
      const floatingElements = document.querySelectorAll('.float-in-left, .float-in-right, .float-in-center, .float-in-bottom-left, .float-in-bottom-right, .slide-in-right, .slide-in-left');
      floatingElements.forEach((el) => {
        observer.observe(el);
      });
    };

    // Initialize observer after a short delay
    const timeoutId = setTimeout(initObserver, 100);

    return () => {
      clearTimeout(timeoutId);
      const floatingElements = document.querySelectorAll('.float-in-left, .float-in-right, .float-in-center, .float-in-bottom-left, .float-in-bottom-right, .slide-in-right, .slide-in-left');
      floatingElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [pathname]); // Re-run when pathname changes

  return null;
}
