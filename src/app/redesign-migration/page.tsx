import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import { 
  faBolt, 
  faTimesCircle,
  faCheck,
  faSearch,
  faPaintBrush,
  faCogs,
  faRocket,
  faCode,
  faChartLine,
  faCrown,
  faUsers,
  faClock,
  faEyeSlash,
  faLock,
  faChartBar,
  faTachometerAlt
} from '@fortawesome/free-solid-svg-icons';

const problems = [
  {
    icon: faClock,
    title: "Slow Load Times",
    description: "Visitors abandon your site before it loads",
    impact: "Losing 40% of potential customers"
  },
  {
    icon: faPaintBrush,
    title: "Template Design",
    description: "Generic look hurting your credibility",
    impact: "Reduces trust and conversions"
  },
  {
    icon: faLock,
    title: "Platform Lock-in",
    description: "Stuck on Wix or Webflow with limited options",
    impact: "Can't scale or customize as you grow"
  },
  {
    icon: faEyeSlash,
    title: "Poor SEO Visibility",
    description: "Invisible on Google for local searches",
    impact: "Missing out on organic traffic"
  },
  {
    icon: faChartBar,
    title: "No Analytics",
    description: "No tracking of conversions or user behavior",
    impact: "Flying blind on what's working"
  }
];

const solutions = [
  {
    icon: faBolt,
    title: "Fix & Optimize",
    description: "Speed, SEO, analytics, and UX cleanup on your current site",
    features: ["Performance optimization", "SEO audit & fixes", "Analytics setup", "UX improvements"],
    cta: "Get Performance Audit",
    ctaLink: "/site-audit"
  },
  {
    icon: faRocket,
    title: "Redesign & Rebuild", 
    description: "Full visual and structural overhaul for conversions and trust",
    features: ["Custom design", "Conversion optimization", "Mobile-first approach", "Modern UX/UI"],
    cta: "View Portfolio",
    ctaLink: "/case-studies"
  },
  {
    icon: faCode,
    title: "Migrate & Modernize",
    description: "Move from Wix, Webflow, or Squarespace to a platform you own",
    features: ["Zero-downtime migration", "SEO preservation", "Full ownership", "Scalable architecture"],
    cta: "Start Migration",
    ctaLink: "/contact?service=migration"
  }
];

const features = [
  {
    icon: faChartLine,
    title: "Fast, SEO-Driven Builds",
    description: "Google-optimized performance and clean, scalable code that ranks",
    highlight: "90+ Mobile Lighthouse scores"
  },
  {
    icon: faCrown,
    title: "You Own Everything",
    description: "No platform lock-in, no subscriptions, no hostage hosting",
    highlight: "100% ownership guaranteed"
  },
  {
    icon: faPaintBrush,
    title: "Design That Converts",
    description: "Real UX and funnel logic, not just templates",
    highlight: "2-3x higher conversion rates"
  },
  {
    icon: faCogs,
    title: "AI-Ready Frameworks",
    description: "Integrated chat, lead automation, analytics, and tracking",
    highlight: "Future-proof technology"
  },
  {
    icon: faUsers,
    title: "Transparent Process",
    description: "Direct communication, no middle management",
    highlight: "Work directly with the developer"
  }
];

const transformations = [
  {
    before: "Wix site with 8-second load time",
    after: "WordPress migration with 1.2s load time",
    result: "9x faster, +47% organic traffic",
    client: "Healthcare Practice"
  },
  {
    before: "Webflow template with poor conversions",
    after: "Custom funnel with optimized UX",
    result: "Doubled monthly leads",
    client: "Legal Services"
  },
  {
    before: "Squarespace site invisible on Google",
    after: "SEO-optimized WordPress site",
    result: "Page 1 rankings in 60 days",
    client: "Financial Services"
  }
];

const faqs = [
  {
    question: "Can you work with any platform?",
    answer: "Yes — Wix, Webflow, WordPress, Shopify, or custom stacks. We specialize in platform migrations and can work with whatever you're currently using."
  },
  {
    question: "Do I have to rebuild my whole site?",
    answer: "Not always. Many clients start with performance and SEO fixes. We can optimize your existing site or do a complete rebuild — whatever makes the most sense for your goals."
  },
  {
    question: "How long does a migration take?",
    answer: "Typically 2-4 weeks for standard business sites. Complex e-commerce or custom functionality may take 6-8 weeks. We provide detailed timelines during our strategy call."
  },
  {
    question: "Do I own the code and content?",
    answer: "100%. You retain full ownership and access. We build on platforms you control, and you can take your site anywhere if needed."
  },
  {
    question: "What if my current site is working fine?",
    answer: "Even 'working' sites often have hidden performance issues costing you customers. Our free audit reveals opportunities you didn't know existed."
  },
  {
    question: "How much does a website redesign cost?",
    answer: "Redesigns typically range from $3,000-$15,000 depending on complexity. We provide detailed quotes after our free audit. Most clients see ROI within 3-6 months."
  }
];

export const metadata: Metadata = {
  title: "Wix & Webflow Redesign + Migration Services | Clyra Studios — High-Performance Web Development",
  description: "Clyra Studios transforms Wix and Webflow sites into fast, SEO-optimized, high-performance websites. Fix, redesign, or migrate your site with clean code and modern UX.",
  keywords: "wix website redesign, webflow redesign service, wix to wordpress migration, website optimization service, custom web development agency, performance web design company, SEO website rebuild, wix optimization, webflow migration, website performance audit, conversion optimization, custom website design",
  authors: [{ name: "Clyra Studios" }],
  creator: "Clyra Studios",
  publisher: "Clyra Studios",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://clyrastudios.com'),
  alternates: {
    canonical: '/redesign-migration',
  },
  openGraph: {
    title: "Wix & Webflow Redesign + Migration Services | Clyra Studios",
    description: "Transform your Wix or Webflow site into a high-performance website you actually own. Fast, SEO-optimized, and built to convert.",
    url: 'https://clyrastudios.com/redesign-migration',
    siteName: 'Clyra Studios',
    images: [
      {
        url: '/images/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Clyra Studios - Wix & Webflow Redesign Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wix & Webflow Redesign + Migration Services | Clyra Studios',
    description: 'Transform your Wix or Webflow site into a high-performance website you actually own. Fast, SEO-optimized, and built to convert.',
    images: ['/images/thumbnail.png'],
    creator: '@clyrastudios',
    site: '@clyrastudios',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yahoo-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Wix & Webflow Redesign + Migration Services",
  "description": "Transform your Wix or Webflow site into a high-performance website you actually own. Fast, SEO-optimized, and built to convert.",
  "provider": {
    "@type": "Organization",
    "name": "Clyra Studios",
    "url": "https://clyrastudios.com",
    "logo": "https://clyrastudios.com/images/clyra_logo.png"
  },
  "areaServed": "US",
  "serviceType": "Web Development",
  "category": "Website Redesign and Migration",
  "offers": [
    {
      "@type": "Offer",
      "name": "Website Performance Audit",
      "description": "Free audit of your website's performance, design, and SEO",
      "price": "0",
      "priceCurrency": "USD"
    },
    {
      "@type": "Offer", 
      "name": "Website Redesign",
      "description": "Full visual and structural overhaul for conversions and trust",
      "priceRange": "$3000-$15000",
      "priceCurrency": "USD"
    },
    {
      "@type": "Offer",
      "name": "Platform Migration",
      "description": "Move from Wix, Webflow, or Squarespace to WordPress or custom platform",
      "priceRange": "$3000-$12000", 
      "priceCurrency": "USD"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Website Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wix Website Redesign"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Webflow Migration"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "WordPress Migration"
        }
      }
    ]
  }
};

export default function RedesignMigrationPage() {
  return (
    <>
      <Script
        id="redesign-structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <Nav />
      
      <main className="redesign-migration-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-background">
            <div className="hero-overlay"></div>
            <div className="floating-elements">
              <div className="floating-element element-1"></div>
              <div className="floating-element element-2"></div>
              <div className="floating-element element-3"></div>
            </div>
          </div>
          <div className="container">
            <div className="hero-content">
              <div className="hero-headlines">
                <h1 className="hero-title">
                  <span className="title-line">Transform Your Wix or Webflow Site into a</span>
                  <span className="title-line highlight">High-Performance Website You Actually Own</span>
                </h1>
                <p className="hero-description">
                  Clyra Studios builds fast, SEO-optimized websites that convert. Whether you need your current site fixed, redesigned, or migrated to a stronger platform, we deliver clean code, modern UX, and measurable results — without the agency bloat.
                </p>
                
                <p className="hero-hook">
                  Stop losing customers to slow, template-based websites. Get a site that works for your business.
                </p>
              </div>

              <div className="hero-actions">
                <Link href="/site-audit" className="btn btn-primary btn-large">
                  Get Free Website Review
                  <span className="btn-arrow">→</span>
                </Link>
                <Link href="/strategy-call" className="btn btn-secondary btn-large">
                  Book Discovery Call
                </Link>
              </div>

              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">90+</span>
                  <span className="stat-label">Mobile Score</span>
                </div>
                <div className="stat">
                  <span className="stat-number">2-3x</span>
                  <span className="stat-label">More Leads</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Ownership</span>
                </div>
              </div>
              
              <div className="trust-signals">
                <div className="trust-item">
                  <GradientIcon icon={faBolt} size="sm" className="primary" />
                  <span className="trust-text">Fast Performance</span>
                </div>
                <div className="trust-item">
                  <GradientIcon icon={faSearch} size="sm" className="primary" />
                  <span className="trust-text">SEO Optimized</span>
                </div>
                <div className="trust-item">
                  <GradientIcon icon={faCrown} size="sm" className="success" />
                  <span className="trust-text">You Own It</span>
                </div>
                <div className="trust-item">
                  <GradientIcon icon={faChartLine} size="sm" className="warning" />
                  <span className="trust-text">Proven Results</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="services-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball services-ball-1"></div>
            <div className="section-floating-ball services-ball-2"></div>
            <div className="section-floating-ball services-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Your Website Isn't Broken — <span className="transform-word">It's Just Holding You Back</span></h2>
              <p className="section-description">
                If your site loads slowly, ranks poorly, or feels stuck on a drag-and-drop platform, you're not alone. 
                Most business owners outgrow their first site within two years. You're paying for hosting and getting zero return.
              </p>
            </div>
            
            <div className="services-grid">
              {problems.map((problem, index) => {
                const animationClass = index === 0 ? 'float-in-left' : 
                                     index === 1 ? 'float-in-center' : 
                                     index === 2 ? 'float-in-bottom-left' : 
                                     index === 3 ? 'float-in-right' : 'float-in-bottom-right';
                return (
                  <div key={index} className={`service-card ${animationClass}`}>
                    <div className="service-image">
                      <div className="service-icon">
                        <GradientIcon icon={problem.icon} size="xl" className="danger" />
                      </div>
                    </div>
                    <div className="service-content">
                      <h3 className="service-title">{problem.title}</h3>
                      <p className="service-description">{problem.description}</p>
                      <div className="impact-badge">
                        <span className="impact-text">{problem.impact}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="case-studies-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball case-studies-ball-1"></div>
            <div className="section-floating-ball case-studies-ball-2"></div>
            <div className="section-floating-ball case-studies-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Clyra Studios Builds High-Performance Websites That Grow With You</h2>
              <p className="section-description">
                We redesign or rebuild your existing site into something faster, smarter, and built to scale — 
                whether that means cleaning up your Wix setup or migrating you to WordPress or a custom stack.
              </p>
            </div>
            
            <div className="case-studies-grid">
              {solutions.map((solution, index) => {
                const animationClass = index % 2 === 0 ? 'float-in-left' : 'float-in-right';
                return (
                  <div key={index} className={`case-study-card ${animationClass}`}>
                    <div className="case-study-content">
                      <div className="case-study-header">
                        <div className="service-icon">
                          <GradientIcon icon={solution.icon} size="xl" className="primary" />
                        </div>
                        <h3 className="case-study-title">{solution.title}</h3>
                      </div>
                      <div className="case-study-story">
                        <div className="solution-text">{solution.description}</div>
                      </div>
                      <ul className="service-features">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="feature-item">
                            <GradientIcon icon={faCheck} size="sm" className="success" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link href={solution.ctaLink as string} className="case-study-link">
                        {solution.cta}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="testimonials-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball testimonials-ball-1"></div>
            <div className="section-floating-ball testimonials-ball-2"></div>
            <div className="section-floating-ball testimonials-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Why Businesses Choose Clyra Studios</h2>
              <p className="section-description">
                We deliver agency-level results with startup-level agility. No bloated teams, no unnecessary complexity — just clean code and measurable results.
              </p>
            </div>
            
            <div className="testimonials-grid">
              {features.map((feature, index) => {
                const animationClass = index % 3 === 0 ? 'float-in-left' : 
                                     index % 3 === 1 ? 'float-in-center' : 'float-in-right';
                return (
                  <div key={index} className={`testimonial-card ${animationClass}`}>
                    <div className="testimonial-content">
                      <div className="feature-icon">
                        <GradientIcon icon={feature.icon} size="lg" className="primary" />
                      </div>
                      <h3 className="testimonial-quote">{feature.title}</h3>
                      <p className="testimonial-author">
                        <span className="author-name">{feature.description}</span>
                        <span className="company-name">{feature.highlight}</span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Transformations Section */}
        <section className="services-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball services-ball-1"></div>
            <div className="section-floating-ball services-ball-2"></div>
            <div className="section-floating-ball services-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Recent Transformations</h2>
              <p className="section-description">
                See how we've helped businesses transform their web presence from slow, template-based sites to high-performance, conversion-optimized websites.
              </p>
            </div>
            
            <div className="services-grid">
              {transformations.map((transformation, index) => {
                const animationClass = index === 0 ? 'float-in-left' : 
                                     index === 1 ? 'float-in-center' : 'float-in-right';
                return (
                  <div key={index} className={`service-card ${animationClass}`}>
                    <div className="service-content">
                      <div className="transformation-header">
                        <h3 className="service-title">{transformation.client}</h3>
                        <div className="transformation-arrow">→</div>
                      </div>
                      <div className="transformation-content">
                        <div className="before-after">
                          <div className="before">
                            <div className="before-label">Before:</div>
                            <div className="before-text">{transformation.before}</div>
                          </div>
                          <div className="after">
                            <div className="after-label">After:</div>
                            <div className="after-text">{transformation.after}</div>
                          </div>
                        </div>
                        <div className="result-badge">
                          <span className="result-text">{transformation.result}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="case-studies-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball case-studies-ball-1"></div>
            <div className="section-floating-ball case-studies-ball-2"></div>
            <div className="section-floating-ball case-studies-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Agency-Level Expertise. Independent Speed.</h2>
              <p className="section-description">
                Clyra Studios is led by Rick Owadally — a creative technologist and full-stack developer with over 15 years of experience delivering digital projects for healthcare, enterprise, and creative clients.
              </p>
            </div>
            
            <div className="case-studies-grid">
              <div className="case-study-card float-in-left">
                <div className="case-study-content">
                  <div className="case-study-header">
                    <h3 className="case-study-title">15+ Years Experience</h3>
                  </div>
                  <div className="case-study-story">
                    <div className="solution-text">
                      Projects across healthcare, SaaS, and creative industries. After leading builds for brands like Novo Nordisk and Publicis, he created Clyra Studios to offer lean, high-impact web solutions.
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="case-study-card float-in-right">
                <div className="case-study-content">
                  <div className="case-study-header">
                    <h3 className="case-study-title">Hands-On Approach</h3>
                  </div>
                  <div className="case-study-story">
                    <div className="solution-text">
                      No outsourcing, no templates, no middle management. You work directly with the developer who builds your site. Agency-quality output with startup-level agility.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball cta-ball-1"></div>
            <div className="section-floating-ball cta-ball-2"></div>
            <div className="section-floating-ball cta-ball-3"></div>
          </div>
          <div className="container">
            <div className="cta-content" data-aos="fade-up">
              <h2 className="cta-title">Let's Fix What's Holding Your Website Back</h2>
              <p className="cta-description">
                Get a free, honest review of your website's performance, design, and SEO. 
                No pitches — just actionable insights that could transform your business.
              </p>
              <div className="cta-actions">
                <Link href="/site-audit" className="btn btn-primary btn-large">
                  Request Free Audit
                  <span className="btn-arrow">→</span>
                </Link>
                <Link href="/strategy-call" className="btn btn-secondary btn-large">
                  Book Discovery Call
                </Link>
                <Link href="/contact" className="btn btn-secondary btn-large">
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball faq-ball-1"></div>
            <div className="section-floating-ball faq-ball-2"></div>
            <div className="section-floating-ball faq-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Questions You Might Have</h2>
              <p className="section-description">
                Everything you need to know about our website redesign and migration services.
              </p>
            </div>
            
            <div className="faq-grid">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item" data-aos="fade-up" data-aos-delay={index * 100}>
                  <h3 className="faq-question">{faq.question}</h3>
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
