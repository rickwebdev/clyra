import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import {
  faBolt,
  faCheck,
  faXmark,
  faSearch,
  faCrown,
  faChartLine,
  faLock,
  faPaintBrush,
  faEyeSlash,
  faClock,
  faCode,
} from '@fortawesome/free-solid-svg-icons';

const problems = [
  {
    icon: faPaintBrush,
    title: "Design You Can't Fully Control",
    description: "Wix templates box you in — you can't build exactly what you pictured",
    impact: "Your site looks like everyone else's"
  },
  {
    icon: faCode,
    title: "Functionality Hits a Wall",
    description: "The feature or integration you need isn't in the app market",
    impact: "You outgrow the platform fast"
  },
  {
    icon: faClock,
    title: "Slow Load Times",
    description: "Wix's bloated markup drags down Core Web Vitals",
    impact: "Visitors leave before it loads"
  },
  {
    icon: faEyeSlash,
    title: "Limited SEO Control",
    description: "You can't fully control structure, redirects, or technical SEO",
    impact: "Harder to rank on Google"
  },
  {
    icon: faLock,
    title: "Platform Lock-In",
    description: "Your content and design are trapped inside Wix",
    impact: "You don't truly own your site"
  }
];

const comparison = [
  {
    criteria: "Design freedom",
    builder: "Locked to Wix template ranges",
    clyra: "Fully custom, built around your brand"
  },
  {
    criteria: "Custom functionality",
    builder: "Limited to Wix apps & widgets",
    clyra: "Any feature or integration you need"
  },
  {
    criteria: "Performance & Core Web Vitals",
    builder: "Often slow, heavy markup",
    clyra: "90+ mobile scores, clean code"
  },
  {
    criteria: "SEO control",
    builder: "Restricted technical SEO",
    clyra: "Full control over structure & metadata"
  },
  {
    criteria: "Ownership & portability",
    builder: "Locked in — hard to export",
    clyra: "100% yours — host anywhere"
  },
  {
    criteria: "Long-term cost",
    builder: "Rising Wix subscriptions",
    clyra: "One-time build, own your hosting"
  }
];

const process = [
  {
    icon: faSearch,
    title: "Audit & Plan",
    description: "We review your Wix site, map every page, and plan redirects so nothing breaks."
  },
  {
    icon: faPaintBrush,
    title: "Design & Build",
    description: "We rebuild your site on WordPress with a custom design and the functionality you actually need."
  },
  {
    icon: faChartLine,
    title: "Preserve SEO",
    description: "We migrate content, set up 301 redirects, and keep your URLs and rankings intact."
  },
  {
    icon: faBolt,
    title: "Launch & Own",
    description: "We go live with zero downtime — and you fully own the site, code, and content."
  }
];

const faqs = [
  {
    question: "Will I lose my SEO if I move from Wix to WordPress?",
    answer: "No. We preserve your URLs where possible, set up 301 redirects for the rest, and migrate your content and metadata. Most clients maintain — and often improve — their rankings after the faster, cleaner build."
  },
  {
    question: "Can you move my existing Wix content automatically?",
    answer: "We migrate your pages, posts, images, and structure into WordPress. Wix doesn't offer a clean export, so we handle the content transfer carefully so nothing is lost."
  },
  {
    question: "How long does a Wix to WordPress migration take?",
    answer: "Most standard business sites take 2–4 weeks. More complex sites with custom functionality or e-commerce can take 6–8 weeks. We give you a clear timeline after a free review."
  },
  {
    question: "Do I keep my domain name?",
    answer: "Yes. You keep your domain — we simply point it at your new WordPress site. If your domain is registered through Wix, we'll walk you through moving or connecting it."
  },
  {
    question: "Will my new site be easier to edit than Wix?",
    answer: "Yes. We build on WordPress (or a headless setup) with an editor designed for non-technical owners, so day-to-day updates are simple — without the limits that pushed you off Wix."
  },
  {
    question: "How much does it cost to migrate from Wix?",
    answer: "Migrations typically range from $3,000–$12,000 depending on size and functionality. We provide a detailed quote after a free review of your current site."
  }
];

export const metadata: Metadata = {
  title: "Wix to WordPress Migration | Move Off Wix Without Losing SEO | Clyra Studios",
  description: "Outgrowing Wix? Clyra Studios migrates your Wix site to WordPress — faster performance, full design control, better SEO, and 100% ownership. Free website review.",
  keywords: "wix to wordpress migration, move wix to wordpress, migrate from wix, wix alternatives, wix alternatives for small business, wix seo problems, export wix site, wix to wordpress, leave wix, wix limitations",
  authors: [{ name: "Clyra Studios" }],
  creator: "Clyra Studios",
  publisher: "Clyra Studios",
  metadataBase: new URL('https://clyrastudios.com'),
  alternates: {
    canonical: '/wix-to-wordpress',
  },
  openGraph: {
    title: "Wix to WordPress Migration | Clyra Studios",
    description: "Move your Wix site to WordPress without losing SEO. Faster, fully custom, and 100% yours.",
    url: 'https://clyrastudios.com/wix-to-wordpress',
    siteName: 'Clyra Studios',
    images: [
      {
        url: '/images/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Clyra Studios - Wix to WordPress Migration',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wix to WordPress Migration | Clyra Studios',
    description: 'Move your Wix site to WordPress without losing SEO. Faster, fully custom, and 100% yours.',
    images: ['/images/thumbnail.png'],
    creator: '@clyrastudios',
    site: '@clyrastudios',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Wix to WordPress Migration",
  "description": "Migrate your Wix site to WordPress with preserved SEO, faster performance, full design control, and complete ownership.",
  "provider": {
    "@type": "Organization",
    "name": "Clyra Studios",
    "url": "https://clyrastudios.com",
    "logo": "https://clyrastudios.com/images/clyra_logo.png"
  },
  "areaServed": "US",
  "serviceType": "Website Migration",
  "category": "Wix to WordPress Migration",
  "offers": [
    {
      "@type": "Offer",
      "name": "Website Performance Audit",
      "description": "Free review of your Wix site's performance, design, and SEO",
      "price": "0",
      "priceCurrency": "USD"
    },
    {
      "@type": "Offer",
      "name": "Wix to WordPress Migration",
      "description": "Full migration from Wix to WordPress with SEO preservation",
      "priceRange": "$3000-$12000",
      "priceCurrency": "USD"
    }
  ]
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function WixToWordPressPage() {
  return (
    <>
      <Script
        id="wix-wp-structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <Script
        id="wix-wp-faq-data"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(faqStructuredData)}
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
                  <span className="title-line">Move Your Wix Site to WordPress</span>
                  <span className="title-line highlight">Without Losing Your SEO</span>
                </h1>
                <p className="hero-description">
                  Outgrew Wix? Tried to build it yourself and hit a wall on design, functionality, or speed? Clyra Studios migrates your Wix site to WordPress — clean code, custom design, better SEO, and a site you actually own.
                </p>
                <p className="hero-hook">
                  Stop renting a template. Get a fast, custom site built around your business.
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
                  <span className="stat-number">301</span>
                  <span className="stat-label">Redirects Preserved</span>
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
                  <span className="trust-text">SEO Preserved</span>
                </div>
                <div className="trust-item">
                  <GradientIcon icon={faCrown} size="sm" className="success" />
                  <span className="trust-text">You Own It</span>
                </div>
                <div className="trust-item">
                  <GradientIcon icon={faChartLine} size="sm" className="warning" />
                  <span className="trust-text">Zero Downtime</span>
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
              <h2 className="section-title">Why Businesses Move Off <span className="transform-word">Wix</span></h2>
              <p className="section-description">
                Wix is great to start — until you need real design control, custom functionality, or better SEO. If any of these sound familiar, you&apos;ve outgrown the platform.
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

        {/* Comparison Section */}
        <section className="case-studies-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball case-studies-ball-1"></div>
            <div className="section-floating-ball case-studies-ball-2"></div>
            <div className="section-floating-ball case-studies-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Wix vs. a Site You Own</h2>
              <p className="section-description">
                Here&apos;s how staying on Wix compares to a custom site we build and you own — on WordPress or a headless setup if you need more.
              </p>
            </div>

            <div className="builder-comparison">
              <div className="bc-table">
                <div className="bc-row bc-head">
                  <div className="bc-cell bc-criteria">What matters</div>
                  <div className="bc-cell">Staying on Wix</div>
                  <div className="bc-cell bc-clyra-col">A Clyra-Built Site<span className="bc-subtle">WordPress or headless (Sanity, Contentful)</span></div>
                </div>
                {comparison.map((row, index) => (
                  <div key={index} className="bc-row">
                    <div className="bc-cell bc-criteria">{row.criteria}</div>
                    <div className="bc-cell bc-builder">
                      <GradientIcon icon={faXmark} size="sm" className="danger" />
                      <span>{row.builder}</span>
                    </div>
                    <div className="bc-cell bc-clyra-col">
                      <GradientIcon icon={faCheck} size="sm" className="success" />
                      <span>{row.clyra}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="bc-note">
                Not sure whether WordPress or a headless build is right for you? We figure that out together on a free review — based on how you want to grow.
              </p>
              <div className="bc-actions">
                <Link href="/site-audit" className="btn btn-primary btn-large">
                  Get Free Website Review
                  <span className="btn-arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="services-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball services-ball-1"></div>
            <div className="section-floating-ball services-ball-2"></div>
            <div className="section-floating-ball services-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">How the Migration Works</h2>
              <p className="section-description">
                A clear, low-risk process that keeps your rankings intact and your site online the whole way.
              </p>
            </div>

            <div className="services-grid">
              {process.map((step, index) => {
                const animationClass = index === 0 ? 'float-in-left' :
                                     index === 1 ? 'float-in-center' :
                                     index === 2 ? 'float-in-right' : 'float-in-bottom-right';
                return (
                  <div key={index} className={`service-card ${animationClass}`}>
                    <div className="service-image">
                      <div className="service-icon">
                        <GradientIcon icon={step.icon} size="xl" className="primary" />
                      </div>
                    </div>
                    <div className="service-content">
                      <h3 className="service-title">{step.title}</h3>
                      <p className="service-description">{step.description}</p>
                    </div>
                  </div>
                );
              })}
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
              <h2 className="cta-title">Ready to Leave Wix Behind?</h2>
              <p className="cta-description">
                Get a free, honest review of your Wix site&apos;s performance, design, and SEO — plus exactly what a migration would look like for you. No pitch, just a plan.
              </p>
              <div className="cta-actions">
                <Link href="/site-audit" className="btn btn-primary btn-large">
                  Request Free Audit
                  <span className="btn-arrow">→</span>
                </Link>
                <Link href="/redesign-migration" className="btn btn-secondary btn-large">
                  Explore All Migrations
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
              <h2 className="section-title">Wix to WordPress: Common Questions</h2>
              <p className="section-description">
                Everything you need to know about moving off Wix.
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
