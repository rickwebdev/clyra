"use client";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import MinimalLandingLayout from "./_components/MinimalLandingLayout";
import GradientIcon from "@/components/GradientIcon";
import RotatingHeadline from "@/components/RotatingHeadline";
import { 
  faCheckCircle,
  faTimesCircle,
  faChartLine,
  faClock,
  faFileAlt,
  faHammer,
  faChevronDown,
  faHospital,
  faGavel,
  faDollarSign,
  faBolt,
  faBullseye,
  faLink,
  faMapPin,
  faArrowDown,
  faArrowRight,
  faShieldAlt,
  faQuoteLeft,
  faRocket,
  faExclamationTriangle,
  faBan,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

        // Dark Theme FAQ Accordion Component
        function FAQAccordion({ question, answer }: { question: string; answer: string }) {
          const [isOpen, setIsOpen] = useState(false);

          return (
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 border border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-gray-600/50">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <button
                className="relative w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-800/50 transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}
              >
                <h3 className="text-white font-semibold text-lg group-hover:text-gray-100 transition-colors duration-300">
                  {question}
                </h3>
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <GradientIcon
                      icon={faChevronDown}
                      size="sm"
                      className={`text-white transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </div>
                </div>
              </button>
              
              {isOpen && (
                <div className="relative px-6 pb-5">
                  <div className="bg-gray-800/50 rounded-lg p-5 border border-gray-700/50">
                    <p className="text-gray-300 leading-relaxed text-base">
                      {answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        }

// CTA Button Component with Analytics
function CTAButton({ 
  href, 
  children, 
  variant = "primary", 
  disabled = false,
  ctaType = "apply",
  onClick
}: { 
  href?: string; 
  children: React.ReactNode; 
  variant?: "primary" | "secondary";
  disabled?: boolean;
  ctaType?: "apply" | "continue_to_scheduling";
  onClick?: () => void;
}) {
  const handleClick = () => {
    // Analytics tracking
    if (typeof window !== 'undefined') {
      if ((window as Window & { dataLayer?: unknown[] }).dataLayer) {
        (window as Window & { dataLayer: unknown[] }).dataLayer.push({
          event: 'cta_click',
          cta: ctaType,
          page: 'growth-website-system'
        });
      } else {
        console.log(`CTA Click: ${ctaType}`);
      }
    }
    
    if (onClick) {
      onClick();
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
        href={href as string} 
        className={`${baseClasses} ${variantClasses} ${disabledClasses}`}
        onClick={handleClick}
        title={disabled ? "CTA link not configured" : undefined}
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
      title={disabled ? "CTA link not configured" : undefined}
    >
      {children}
    </button>
  );
}

export default function GrowthWebsiteSystemPage() {
  const tallyUrl = process.env.NEXT_PUBLIC_TALLY_FORM_URL;
  const isIndexable = process.env.NEXT_PUBLIC_GROWTH_PAGE_INDEXABLE !== "false";

  return (
    <MinimalLandingLayout>
      {/* JSON-LD Schema */}
      <Script
        id="growth-page-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Growth Website System",
          "provider": {
            "@type": "Organization",
            "name": "Clyra Studios"
          },
          "areaServed": "US",
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "lowPrice": "3000",
            "highPrice": "12500",
            "price": "3000-12500"
          }
        })}
      </Script>

      {/* Conditional robots meta tag */}
      {!isIndexable && (
        <Script
          id="robots-noindex"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              const meta = document.createElement('meta');
              meta.name = 'robots';
              meta.content = 'noindex,nofollow';
              document.head.appendChild(meta);
            `
          }}
        />
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black py-12">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-blue-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-600/10 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Rotating Headline */}
            <div className="mb-6">
              <RotatingHeadline />
            </div>

            {/* Supporting sentence with enhanced gradient */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed font-light px-4">
              <span className="bg-gradient-to-r from-gray-200 via-white to-gray-200 bg-clip-text text-transparent">
                Custom-built sites that generate inquiries, integrate with your systems, and scale with your business.
              </span>
            </p>

            {/* Enhanced Primary CTA */}
            <div className="flex flex-col items-center mb-6">
              <CTAButton 
                href="/growth-website-system/apply" 
                variant="primary"
                ctaType="apply"
                className="group relative overflow-hidden rounded-2xl px-6 py-4 sm:px-10 sm:py-5 text-lg sm:text-xl font-bold text-white bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-400 hover:via-red-400 hover:to-pink-400 focus:outline-none focus:ring-4 focus:ring-orange-400/50 shadow-2xl shadow-orange-500/60 transition-all duration-300 transform hover:scale-105 sm:hover:scale-110 hover:shadow-orange-500/80 max-w-sm sm:max-w-none mx-4 sm:mx-0"
              >
                <span className="relative z-10 flex items-center">
                  Start Your Application
                  <span className="ml-3 transition-transform duration-300 group-hover:translate-x-2">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/30 via-red-400/30 to-pink-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </CTAButton>
              
              {/* Subtle qualifier text below button */}
              <p className="mt-4 text-sm text-gray-400 opacity-75">
                Best fit: professional services • Budgets from $3k • Each new client ≥ $1.5k
              </p>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
              {[
                { 
                  icon: faBolt, 
                  text: "Generates More Leads",
                  gradient: "from-yellow-400 to-orange-500",
                  glow: "shadow-yellow-500/25"
                },
                { 
                  icon: faBullseye, 
                  text: "Converts Visitors to Clients",
                  gradient: "from-red-500 to-pink-500",
                  glow: "shadow-red-500/25"
                },
                { 
                  icon: faLink, 
                  text: "Integrates with Your CRM",
                  gradient: "from-blue-500 to-cyan-500",
                  glow: "shadow-blue-500/25"
                },
                { 
                  icon: faMapPin, 
                  text: "Ranks Higher on Google",
                  gradient: "from-green-500 to-emerald-500",
                  glow: "shadow-green-500/25"
                }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center mb-3 shadow-xl ${item.glow} group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <GradientIcon icon={item.icon} size="lg" className="text-white" />
              </div>
                  <span className="text-gray-300 text-sm font-medium text-center leading-tight group-hover:text-white transition-colors duration-300">{item.text}</span>
              </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Before & After Section */}
      <section className="bg-gray-900 py-12">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
              <GradientIcon icon={faChartLine} size="sm" className="text-blue-400 mr-2" />
              Transformation Results
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 px-4">Before & After</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
              See the transformation from brochure site to client-generating machine
            </p>
          </div>

          {/* Transformation Flow */}
          <div className="max-w-7xl mx-auto">
            {/* Before State */}
            <div className="mb-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-700/50 shadow-2xl hover:shadow-red-500/20 hover:border-red-500/40 transition-all duration-500 mx-4 sm:mx-0">
                  {/* Header */}
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mr-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                      <GradientIcon icon={faArrowDown} size="xl" className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">Before: Your Current Website</h3>
                      <p className="text-gray-400 text-sm sm:text-base md:text-lg">Problems costing you clients daily</p>
                    </div>
                  </div>
                
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Image */}
                    <div className="relative group/image">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur-lg group-hover/image:blur-xl transition-all duration-300"></div>
                      <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl group-hover/image:shadow-3xl transition-all duration-300">
                <Image 
                          src="/images/marketing/website-upgrade-needed.png" 
                  alt="Before: Slow, non-converting website with poor mobile performance"
                          width={500}
                          height={300}
                          className="w-full h-72 object-cover"
                  priority={false}
                />
                      </div>
                    </div>
                    
                    {/* Problems List */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-white mb-4">What's holding you back:</h4>
                      {[
                        "Leads falling through the cracks",
                        "Slow site that drives visitors away", 
                        "Invisible on Google for local searches"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-4 group/item p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-all duration-300">
                          <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:shadow-xl transition-all duration-300 group-hover/item:scale-110">
                            <GradientIcon icon={faExclamationTriangle} size="sm" className="text-white" />
                          </div>
                          <div>
                            <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300 text-lg font-medium">{item}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow/Transformation Indicator */}
            <div className="flex justify-center mb-6 px-4">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-cyan-500/40 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110">
                    <GradientIcon icon={faArrowRight} size="lg" className="text-white sm:hidden" />
                    <GradientIcon icon={faArrowRight} size="xl" className="text-white hidden sm:block" />
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-lg sm:text-xl md:text-2xl text-white font-bold group-hover:text-cyan-300 transition-colors duration-300">Our Growth Website System</span>
                  <p className="text-gray-400 mt-2 text-sm sm:text-base">Transforms your site in 4-8 weeks</p>
                </div>
              </div>
            </div>
            
            {/* After State */}
            <div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-700/50 shadow-2xl hover:shadow-green-500/20 hover:border-green-500/40 transition-all duration-500 mx-4 sm:mx-0">
                  {/* Header */}
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                      <GradientIcon icon={faChartLine} size="xl" className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">After: Your Growth Website</h3>
                      <p className="text-gray-400 text-sm sm:text-base md:text-lg">Results that speak for themselves</p>
                    </div>
                  </div>
                
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Image */}
                    <div className="relative group/image">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-lg group-hover/image:blur-xl transition-all duration-300"></div>
                      <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl group-hover/image:shadow-3xl transition-all duration-300">
                <Image 
                          src="/images/marketing/web-growth-system.png" 
                  alt="After: Fast, conversion-optimized website with integrated CRM and tracking"
                          width={500}
                          height={300}
                          className="w-full h-72 object-cover"
                  priority={false}
                />
              </div>
                    </div>
                    
                    {/* Benefits List */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-white mb-4">What you'll achieve:</h4>
                      {[
                        "<2s load time",
                        "Conversion architecture (sticky CTAs, forms, booking flows)",
                        "CRM-integrated leads & dashboards"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-4 group/item p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-all duration-300">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:shadow-xl transition-all duration-300 group-hover/item:scale-110">
                            <GradientIcon icon={faCheckCircle} size="sm" className="text-white" />
                          </div>
                          <div>
                            <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300 text-lg font-medium">{item}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="bg-black py-4">
        <div className="container">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        </div>
      </div>

      {/* 4-Phase Growth System Section */}
      <section className="bg-black py-12">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-6 px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">4-Phase Growth System</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">From strategy to launch, we handle everything so you can focus on your business</p>
          </div>

          {/* Process Flow */}
          <div className="max-w-6xl mx-auto">
            {/* Phase Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 px-4">
            {[
              {
                  number: "1",
                icon: faClock,
                  title: "Strategy Call",
                  timeline: "Week 1",
                  description: "Goals, economics, audience"
              },
              {
                  number: "2",
                icon: faFileAlt,
                  title: "Blueprint", 
                  timeline: "Weeks 2–3",
                  description: "Funnel map + wireframes"
              },
              {
                  number: "3",
                icon: faHammer,
                  title: "Build & Integrate",
                  timeline: "Weeks 4–6",
                  description: "Custom site on WordPress or Next.js, CRM + SEO"
              },
              {
                  number: "4",
                icon: faChartLine,
                  title: "Launch & Measure",
                  timeline: "Post-launch",
                  description: "Speed, analytics, training"
              }
            ].map((phase, index) => (
                <div key={index} className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 shadow-lg hover:bg-gray-800/70 transition-all duration-300 text-center h-full flex flex-col">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {phase.number}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-white mb-2">{phase.title}</h3>
                    <p className="text-sm text-blue-400 font-medium">{phase.timeline}</p>
                  </div>
                  
                  <div className="mb-4 flex justify-center">
                    <GradientIcon icon={phase.icon} size="md" />
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed flex-grow">{phase.description}</p>
              </div>
            ))}
          </div>

            {/* Results Summary */}
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 sm:p-8 shadow-xl text-center mx-4 sm:mx-0">
               <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Expected Results</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
                 <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 sm:p-6">
                   <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">10–20+</div>
                   <div className="text-gray-300 font-medium text-sm sm:text-base">new qualified inquiries/month*</div>
                   <div className="text-xs sm:text-sm text-blue-300 mt-2">*Typical results for professional services</div>
                 </div>
                 <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 sm:p-6">
                   <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">$15k–$30k</div>
                   <div className="text-gray-300 font-medium text-sm sm:text-base">in new pipeline opportunities</div>
                   <div className="text-xs sm:text-sm text-green-300 mt-2">Typically within 90 days*</div>
                 </div>
               </div>
            <p className="text-gray-400">
                Typical projects: $5k–$12.5k (minimum engagement $3k)
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="bg-gray-900 py-4">
        <div className="container">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        </div>
      </div>

      {/* Guarantee Section */}
      <section className="bg-gray-900 py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl p-8 sm:p-12 text-center border border-gray-700/50 shadow-2xl hover:shadow-green-500/20 hover:border-green-500/40 transition-all duration-500 mx-4 sm:mx-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                  <GradientIcon icon={faShieldAlt} size="lg" className="text-white sm:hidden" />
                  <GradientIcon icon={faShieldAlt} size="xl" className="text-white hidden sm:block" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Guarantee</h3>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-6 px-4">
                  "If you don't see measurable speed + conversion gains in 30 days, we optimize free until you do."
                </p>
                <div className="flex justify-center">
                  <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-full px-6 py-3">
                    <GradientIcon icon={faCheckCircle} size="lg" className="text-green-400" />
                    <span className="font-semibold text-green-400">Risk-Free Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="bg-black py-4">
        <div className="container">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        </div>
      </div>

      {/* Authority Section */}
      <section className="bg-black py-12">
        <div className="container">
          <div className="text-center mb-6 px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Authority</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              10+ years experience in agency + regulated industries.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto mb-6 px-4">
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 sm:p-8 text-center shadow-lg hover:bg-gray-800/70 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">90+</div>
              <div className="text-gray-300 font-medium text-sm sm:text-base">Mobile Lighthouse scores</div>
            </div>
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 sm:p-8 text-center shadow-lg hover:bg-gray-800/70 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">15–20+</div>
              <div className="text-gray-300 font-medium text-sm sm:text-base">inquiries/month typical</div>
            </div>
          </div>

          {/* Client Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 px-4">
            {/* Demarchelier Bistro Testimonial */}
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <GradientIcon icon={faQuoteLeft} size="md" className="text-blue-400" />
              </div>
              <blockquote className="text-sm sm:text-base text-gray-300 italic mb-4 text-center">
                "Our site was hacked and taken offline by the host. Within a week, we had a brand new site, modern hosting, and uninterrupted reservations."
              </blockquote>
              <div className="text-center">
                <cite className="text-gray-400 font-medium block mb-2">— Demarchelier Bistro</cite>
                <cite className="text-gray-500 text-sm block">Family-Owned French Restaurant</cite>
                <a 
                  href="https://demarchelierrestaurant.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm mt-2 transition-colors duration-300"
                >
                  <GradientIcon icon={faGlobe} size="sm" className="mr-1" />
                  Visit Website
                </a>
              </div>
            </div>

            {/* Coastal Luxe Painting Testimonial */}
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <GradientIcon icon={faQuoteLeft} size="md" className="text-green-400" />
              </div>
              <blockquote className="text-sm sm:text-base text-gray-300 italic mb-4 text-center">
                "We had no online presence before. Within weeks of launch, new local customers started finding and calling us."
              </blockquote>
              <div className="text-center">
                <cite className="text-gray-400 font-medium block mb-2">— Coastal Luxe Painting</cite>
                <cite className="text-gray-500 text-sm block">Long Island, NY</cite>
                <a 
                  href="https://coastalluxepainting.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-400 hover:text-green-300 text-sm mt-2 transition-colors duration-300"
                >
                  <GradientIcon icon={faGlobe} size="sm" className="mr-1" />
                  Visit Website
                </a>
              </div>
            </div>
          </div>

          {/* Trusted by */}
          <div className="text-center">
            <p className="text-gray-400 text-lg mb-6 font-medium">Trusted by Healthcare | Legal | Finance</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { 
                  icon: faHospital, 
                  name: "Healthcare", 
                  desc: "Medical Practices",
                  gradient: "from-blue-500 to-cyan-500"
                },
                { 
                  icon: faGavel, 
                  name: "Legal", 
                  desc: "Law Firms",
                  gradient: "from-cyan-500 to-blue-500"
                },
                { 
                  icon: faDollarSign, 
                  name: "Finance", 
                  desc: "Financial Services",
                  gradient: "from-green-500 to-emerald-500"
                }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                  <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-gray-600/50 hover:bg-gray-800/70">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <GradientIcon icon={item.icon} size="lg" className="text-white" />
                    </div>
                    <div className="text-white font-bold text-xl mb-2">{item.name}</div>
                    <div className="text-gray-300 text-sm font-medium">{item.desc}</div>
                  </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="bg-gray-900 py-4">
        <div className="container">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-gray-900 py-12">
        <div className="container">
          <div className="text-center mb-6 px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to know about our Growth Website System
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6 px-4">
            {[
              {
                question: "Do you build on WordPress?",
                answer: "Yes, if you need a CMS. For higher-performance needs, we also build on Next.js."
              },
              {
                question: "How long does it take?",
                answer: "Typically 4–8 weeks depending on complexity."
              },
              {
                question: "What does it cost?",
                answer: "Projects start at $3k, most fall between $5k–$12.5k."
              },
              {
                question: "What makes this different?",
                answer: "Custom builds, CRM-integrated, conversion-focused. No templates, no fluff."
              },
              {
                question: "Why not just use Wix/Squarespace?",
                answer: "Templates don't bring in clients. Our system is custom-built, integrated with your CRM, SEO-ready, and optimized for measurable ROI."
              },
              {
                question: "What if my last website project failed?",
                answer: "We specialize in rescuing failed projects. Our 30-day guarantee ensures you see measurable improvements or we optimize free until you do."
              }
            ].map((faq, index) => (
              <FAQAccordion key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="bg-black py-4">
        <div className="container">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        </div>
      </div>

      {/* Final CTA Section */}
      <section className="bg-black py-12">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 border border-red-400 rounded-full text-white text-lg font-medium shadow-lg">
                <GradientIcon icon={faRocket} size="sm" className="text-white mr-2" />
                Only 2 New Projects Per Month
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 px-4">
              Ready to turn your website into a client-generating system?
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed px-4">
              We only take 2 new projects per month. Apply now to secure your spot.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <CTAButton 
                href="/growth-website-system/apply" 
                variant="primary"
                ctaType="apply"
                className="w-full sm:w-auto px-8 py-4 text-lg font-bold"
              >
                Start Your Application
                <span className="btn-arrow ml-2">→</span>
              </CTAButton>
              
              <div className="text-sm text-gray-400 text-center sm:text-left">
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Applications reviewed within 24 hours
                </span>
            </div>
            </div>
          </div>
        </div>
      </section>
    </MinimalLandingLayout>
  );
}