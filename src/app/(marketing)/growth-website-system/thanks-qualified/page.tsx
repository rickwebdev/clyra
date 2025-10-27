"use client";
import Link from "next/link";
import MinimalLandingLayout from "../_components/MinimalLandingLayout";
import GradientIcon from "@/components/GradientIcon";
import { faCheckCircle, faCalendarAlt, faGlobe, faCogs, faBullseye } from '@fortawesome/free-solid-svg-icons';

// CTA Button Component with Analytics
function CTAButton({ 
  href, 
  children, 
  variant = "primary", 
  disabled = false,
  ctaType = "calendly"
}: { 
  href?: string; 
  children: React.ReactNode; 
  variant?: "primary" | "secondary";
  disabled?: boolean;
  ctaType?: "calendly";
}) {
  const handleClick = () => {
    // Analytics tracking
    if (typeof window !== 'undefined') {
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'cta_click',
          cta: ctaType,
          page: 'growth-qualified'
        });
      } else {
        console.log(`CTA Click: ${ctaType}`);
      }
    }
  };

  const baseClasses = "btn btn-large";
  const variantClasses = variant === "primary" ? "btn-primary" : "btn-secondary";
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  if (href) {
    const isExternal = href.startsWith('http');
    const linkProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};

    return (
      <Link 
        href={href} 
        className={`${baseClasses} ${variantClasses} ${disabledClasses}`}
        onClick={handleClick}
        title={disabled ? "Calendly link not configured" : undefined}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={`${baseClasses} ${variantClasses} ${disabledClasses}`}
      onClick={handleClick}
      disabled={disabled}
      title={disabled ? "Calendly link not configured" : undefined}
    >
      {children}
    </button>
  );
}

export default function ThanksQualifiedPage() {
  // Use our embedded schedule page instead of external Calendly
  const scheduleUrl = '/growth-website-system/schedule';

  return (
    <MinimalLandingLayout>
      {/* Hero Section */}
      <section className="hero-section py-12 md:py-16">
        <div className="container">
          <div className="hero-content text-center max-w-4xl mx-auto">
            <div className="hero-headlines mb-8">
              <div className="mb-6">
                <div className="relative inline-block">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-green-500/30 animate-bounce">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-white animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mx-auto opacity-40 blur-lg animate-ping"></div>
                  <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mx-auto opacity-20 blur-xl animate-pulse"></div>
                </div>
              </div>
              <h1 className="hero-title mb-4">
                You're a great fit — let's schedule your strategy call
              </h1>
              <p className="hero-description text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
                Based on your application, book a 20-minute call to align on goals, scope, and timeline.
              </p>
            </div>

            <div className="hero-actions">
              <CTAButton 
                href={scheduleUrl} 
                variant="primary"
                ctaType="calendly"
              >
                <GradientIcon icon={faCalendarAlt} size="sm" className="mr-2" />
                Book your strategy call
                <span className="btn-arrow">→</span>
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Prep Section */}
      <section className="services-section py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="service-card">
              <div className="service-content">
                <h2 className="service-title mb-4">What to prepare for our call</h2>
                <p className="text-gray-300 mb-8 text-lg">
                  To make the most of our 20 minutes together, please have these ready:
                </p>
                
                <div className="space-y-4">
                  {[
                    {
                      icon: faGlobe,
                      title: "Your current website URL",
                      description: "We'll do a quick audit during the call"
                    },
                    {
                      icon: faCogs,
                      title: "Current CRM or system",
                      description: "HubSpot, Salesforce, or what you're using now"
                    },
                    {
                      icon: faBullseye,
                      title: "Target monthly inquiries",
                      description: "How many new clients do you want per month?"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-800 rounded-lg">
                      <GradientIcon icon={item.icon} size="md" className="primary mt-1" />
                      <div>
                        <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                        <p className="text-gray-300 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="testimonials-section py-16 md:py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-title mb-12">What happens next?</h2>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <p className="text-gray-300">Book your 20-minute strategy call</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <p className="text-gray-300">We'll discuss your goals and current challenges</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <p className="text-gray-300">Receive your custom Growth Blueprint within 48 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MinimalLandingLayout>
  );
}
