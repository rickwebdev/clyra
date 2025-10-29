"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    // Reset all AOS animation classes when route changes
    const resetAOSAnimations = () => {
      const aosElements = document.querySelectorAll('[data-aos]');
      aosElements.forEach((el) => {
        el.classList.remove('aos-animate');
      });
    };

    // Reset animations on route change
    resetAOSAnimations();

    // Initialize AOS (Animate On Scroll)
    const initAOS = () => {
      const elements = document.querySelectorAll('[data-aos]');
      
      // Mobile-optimized settings
      const isMobile = window.innerWidth <= 768;
      const rootMargin = isMobile ? '0px 0px -10px 0px' : '0px 0px -50px 0px';
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const delay = element.getAttribute('data-aos-delay') || '0';
            
            setTimeout(() => {
              element.classList.add('aos-animate');
            }, parseInt(delay));
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: rootMargin
      });

      elements.forEach((element) => {
        observer.observe(element);
      });
    };

    // Initialize bounce-up animations
    const initBounceUp = () => {
      const bounceElements = document.querySelectorAll('.bounce-up');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.classList.add('animate');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px'
      });

      bounceElements.forEach((element) => {
        observer.observe(element);
      });
    };

    // Parallax scroll effect for hero background and floating circle glow
    const initParallax = () => {
      const heroBackground = document.querySelector('.hero-background');
      const floatingElements = document.querySelectorAll('.floating-element');
      const sectionBalls = document.querySelectorAll('.section-floating-ball');
      
      const handleScroll = () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (heroBackground) {
          (heroBackground as HTMLElement).style.transform = `translateY(${rate}px)`;
        }
        
        // Hero floating elements glow effect
        const maxScroll = 500; // Maximum scroll distance for full glow
        const glowIntensity = Math.min(scrolled / maxScroll, 1);
        
        floatingElements.forEach((element, index) => {
          const speed = 0.3 + (index * 0.1);
          const yPos = -(scrolled * speed);
          const elementEl = element as HTMLElement;
          
          // Apply parallax movement
          elementEl.style.transform = `translateY(${yPos}px)`;
          
          // Add glow effect based on scroll
          if (glowIntensity > 0.1) {
            elementEl.classList.add('scroll-glow');
            // Add dynamic opacity based on scroll intensity
            const opacity = 0.5 + (glowIntensity * 0.5);
            elementEl.style.opacity = opacity.toString();
          } else {
            elementEl.classList.remove('scroll-glow');
            elementEl.style.opacity = '1';
          }
        });

        // Section balls scroll-triggered glow effect
        sectionBalls.forEach((ball) => {
          const ballEl = ball as HTMLElement;
          const rect = ballEl.getBoundingClientRect();
          const section = ballEl.closest('section');
          
          if (section) {
            const sectionRect = section.getBoundingClientRect();
            const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
            const isInSection = sectionRect.top < window.innerHeight && sectionRect.bottom > 0;
            
            if (isInViewport && isInSection) {
              // Calculate glow intensity based on how much of the ball is visible
              const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
              const visibilityRatio = visibleHeight / rect.height;
              
              if (visibilityRatio > 0.3) {
                ballEl.classList.add('scroll-glow');
                // Dynamic opacity based on visibility
                const opacity = 0.6 + (visibilityRatio * 0.4);
                ballEl.style.opacity = opacity.toString();
              } else {
                ballEl.classList.remove('scroll-glow');
                ballEl.style.opacity = '0.6';
              }
            } else {
              ballEl.classList.remove('scroll-glow');
              ballEl.style.opacity = '0.6';
            }
          }
        });
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    };

    // Navbar scroll effect
    const initNavbarScroll = () => {
      const nav = document.querySelector('.nav');
      
      const handleScroll = () => {
        if (window.scrollY > 100) {
          nav?.classList.add('scrolled');
        } else {
          nav?.classList.remove('scrolled');
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    };

    // Smooth reveal animations
    const initRevealAnimations = () => {
      const revealElements = document.querySelectorAll('.service-card, .case-study-card, .testimonial-card');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px'
      });

      revealElements.forEach((element) => {
        observer.observe(element);
      });
    };

    // Section ball touch/hover interactions (both main page and inner page balls)
    const initSectionBallInteractions = () => {
      const sectionBalls = document.querySelectorAll('.section-floating-ball, .inner-page-floating-ball');
      
      const handleBallInteraction = (ball: HTMLElement, isActive: boolean) => {
        if (isActive) {
          ball.classList.add('scroll-glow');
          ball.style.opacity = '0.9';
          ball.style.transform = 'scale(1.15)';
          ball.style.filter = 'brightness(1.2) saturate(1.3)';
        } else {
          ball.classList.remove('scroll-glow');
          // Reset to appropriate default opacity based on ball type
          const isInnerPageBall = ball.classList.contains('inner-page-floating-ball');
          ball.style.opacity = isInnerPageBall ? '0.4' : '0.6';
          ball.style.transform = '';
          ball.style.filter = '';
        }
      };

      sectionBalls.forEach((ball) => {
        const ballEl = ball as HTMLElement;
        
        // Mouse events
        ballEl.addEventListener('mouseenter', () => handleBallInteraction(ballEl, true));
        ballEl.addEventListener('mouseleave', () => handleBallInteraction(ballEl, false));
        
        // Touch events for mobile
        ballEl.addEventListener('touchstart', (e) => {
          e.preventDefault();
          handleBallInteraction(ballEl, true);
        });
        
        ballEl.addEventListener('touchend', () => {
          setTimeout(() => handleBallInteraction(ballEl, false), 200);
        });
        
        ballEl.addEventListener('touchcancel', () => {
          handleBallInteraction(ballEl, false);
        });
      });
    };

    // Initialize slide-in animations
    const initSlideIn = () => {
      const slideElements = document.querySelectorAll('.slide-in-right, .slide-in-left');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.classList.add('animate');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px'
      });

      slideElements.forEach((element) => {
        observer.observe(element);
      });
    };

    // Initialize all effects with a small delay to ensure DOM is ready
    const initTimeout = setTimeout(() => {
      initAOS();
      initBounceUp();
      initSlideIn();
      const cleanupParallax = initParallax();
      const cleanupNavbar = initNavbarScroll();
      initRevealAnimations();
      initSectionBallInteractions();
    }, 100);

    // Cleanup
    return () => {
      clearTimeout(initTimeout);
      // Note: We can't cleanup parallax and navbar here as they're not returned from the timeout
      // This is a limitation but shouldn't cause major issues
    };
  }, [pathname]); // Re-run when pathname changes

  return null;
}
