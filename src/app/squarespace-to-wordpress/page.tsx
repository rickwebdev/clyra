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
  faDollarSign,
  faPlug,
} from '@fortawesome/free-solid-svg-icons';

const problems = [
  {
    icon: faPaintBrush,
    title: "Template-Bound Design",
    description: "Squarespace is built around fixed templates — deep customization isn't possible",
    impact: "Hard to stand out from other Squarespace sites"
  },
  {
    icon: faPlug,
    title: "Limited Integrations",
    description: "A closed ecosystem with far fewer extensions than WordPress's 60,000+ plugins",
    impact: "The tool you need often isn't available"
  },
  {
    icon: faDollarSign,
    title: "Transaction Fees & Rising Plans",
    description: "Lower commerce tiers charge transaction fees, and plan prices keep climbing",
    impact: "You pay more as you grow"
  },
  {
    icon: faEyeSlash,
    title: "Limited SEO & Code Control",
    description: "You can't fully control technical SEO, markup, or server-level behavior",
    impact: "A ceiling on how well you can rank"
  },
  {
    icon: faLock,
    title: "No Self-Hosting",
    description: "Squarespace is proprietary — you can't host elsewhere or fully export your design",
    impact: "You don't truly own your site"
  }
];

const comparison = [
  {
    criteria: "Design freedom",
    builder: "Fixed template structures",
    clyra: "Fully custom, built around your brand"
  },
  {
    criteria: "Integrations & extensions",
    builder: "Closed, limited ecosystem",
    clyra: "60,000+ plugins or custom integrations"
  },
  {
    criteria: "Performance & Core Web Vitals",
    builder: "Shared infrastructure, limited control",
    clyra: "90+ mobile scores, clean code"
  },
  {
    criteria: "SEO control",
    builder: "Restricted technical SEO",
    clyra: "Full control over structure & metadata"
  },
  {
    criteria: "Ownership & hosting",
    builder: "Proprietary — no self-hosting",
    clyra: "Open source — host anywhere, 100% yours"
  },
  {
    criteria: "Store fees & cost",
    builder: "Transaction fees on lower tiers",
    clyra: "WooCommerce — no platform transaction fees"
  }
];

const process = [
  {
    icon: faSearch,
    title: "Audit & Plan",
    description: "We map every Squarespace page and plan redirects so your SEO carries over cleanly."
  },
  {
    icon: faPaintBrush,
    title: "Design & Build",
    description: "We rebuild on WordPress with a custom design and the integrations Squarespace couldn't offer."
  },
  {
    icon: faChartLine,
    title: "Preserve SEO",
    description: "We migrate content, set 301 redirects, and keep your URLs and rankings intact."
  },
  {
    icon: faBolt,
    title: "Launch & Own",
    description: "We launch with zero downtime — and you fully own the site, code, and content."
  }
];

const faqs = [
  {
    question: "Will I lose my SEO moving from Squarespace to WordPress?",
    answer: "No. We preserve URLs where possible and set 301 redirects for the rest, then migrate your content and metadata. Most clients hold or improve rankings thanks to a faster, more controllable site."
  },
  {
    question: "Can my Squarespace content be moved to WordPress?",
    answer: "Yes. Squarespace allows a partial export of pages and blog posts, and we handle the rest — images, structure, and anything the export misses — so your content lands cleanly in WordPress."
  },
  {
    question: "Why move off Squarespace if my site works?",
    answer: "Squarespace is fine to start, but it's a closed platform: limited integrations, template-bound design, no self-hosting, and transaction fees on lower commerce tiers. WordPress removes those ceilings and you own everything."
  },
  {
    question: "Do I keep my domain?",
    answer: "Yes. You keep your domain and we point it at your new WordPress site. If it's registered with Squarespace, we'll guide you through moving or connecting it."
  },
  {
    question: "How long does a Squarespace to WordPress migration take?",
    answer: "Most business sites take 2–4 weeks; larger or commerce sites 6–8 weeks. You'll get a clear timeline after a free review."
  },
  {
    question: "How much does it cost?",
    answer: "Migrations typically range from $3,000–$12,000 depending on size and functionality. We provide a detailed quote after a free review of your current site."
  }
];

export const metadata: Metadata = {
  title: "Squarespace to WordPress Migration | Move Off Squarespace, Keep Your SEO | Clyra Studios",
  description: "Outgrowing Squarespace? Clyra Studios migrates your Squarespace site to WordPress — custom design, more integrations, full SEO control, no transaction fees, and 100% ownership.",
  keywords: "squarespace to wordpress migration, move squarespace to wordpress, migrate from squarespace, squarespace alternatives, squarespace alternatives for small business, squarespace seo, export squarespace site, leave squarespace, squarespace limitations, squarespace transaction fees",
  authors: [{ name: "Clyra Studios" }],
  creator: "Clyra Studios",
  publisher: "Clyra Studios",
  metadataBase: new URL('https://clyrastudios.com'),
  alternates: {
    canonical: '/squarespace-to-wordpress',
  },
  openGraph: {
    title: "Squarespace to WordPress Migration | Clyra Studios",
    description: "Move your Squarespace site to WordPress without losing SEO. Custom design, no transaction fees, and 100% yours.",
    url: 'https://clyrastudios.com/squarespace-to-wordpress',
    siteName: 'Clyra Studios',
    images: [
      {
        url: '/images/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Clyra Studios - Squarespace to WordPress Migration',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Squarespace to WordPress Migration | Clyra Studios',
    description: 'Move your Squarespace site to WordPress without losing SEO. Custom design, no transaction fees, and 100% yours.',
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
  "name": "Squarespace to WordPress Migration",
  "description": "Migrate your Squarespace site to WordPress with preserved SEO, custom design, more integrations, no transaction fees, and complete ownership.",
  "provider": {
    "@type": "Organization",
    "name": "Clyra Studios",
    "url": "https://clyrastudios.com",
    "logo": "https://clyrastudios.com/images/clyra_logo.png"
  },
  "areaServed": "US",
  "serviceType": "Website Migration",
  "category": "Squarespace to WordPress Migration",
  "offers": [
    {
      "@type": "Offer",
      "name": "Website Performance Audit",
      "description": "Free review of your Squarespace site's performance, design, and SEO",
      "price": "0",
      "priceCurrency": "USD"
    },
    {
      "@type": "Offer",
      "name": "Squarespace to WordPress Migration",
      "description": "Full migration from Squarespace to WordPress with SEO preservation",
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

export default function SquarespaceToWordPressPage() {
  return (
    <>
      <Script
        id="sqsp-wp-structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <Script
        id="sqsp-wp-faq-data"
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
                  <span className="title-line">Move Your Squarespace Site to WordPress</span>
                  <span className="title-line highlight">Without Losing Your SEO</span>
                </h1>
                <p className="hero-description">
                  Outgrew Squarespace&apos;s templates, integrations, or fees? Clyra Studios migrates your Squarespace site to WordPress — custom design, full SEO control, and a site you actually own.
                </p>
                <p className="hero-hook">
                  Stop renting a closed platform. Get a fast, custom site built around your business.
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
                  <span className="stat-number">60k+</span>
                  <span className="stat-label">Plugins Available</span>
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
              <h2 className="section-title">Why Businesses Move Off <span className="transform-word">Squarespace</span></h2>
              <p className="section-description">
                Squarespace is polished for simple sites — but it&apos;s a closed platform. If you need real design control, more integrations, or lower long-term costs, you&apos;ve outgrown it.
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
              <h2 className="section-title">Squarespace vs. a Site You Own</h2>
              <p className="section-description">
                Here&apos;s how staying on Squarespace compares to a custom site we build and you own — on WordPress or a headless setup if you need more.
              </p>
            </div>

            <div className="builder-comparison">
              <div className="bc-table">
                <div className="bc-row bc-head">
                  <div className="bc-cell bc-criteria">What matters</div>
                  <div className="bc-cell">Staying on Squarespace</div>
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
              <h2 className="cta-title">Ready to Leave Squarespace Behind?</h2>
              <p className="cta-description">
                Get a free, honest review of your Squarespace site&apos;s performance, design, and SEO — plus exactly what a migration would look like for you. No pitch, just a plan.
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
              <h2 className="section-title">Squarespace to WordPress: Common Questions</h2>
              <p className="section-description">
                Everything you need to know about moving off Squarespace.
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
