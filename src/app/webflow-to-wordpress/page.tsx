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
  faDatabase,
  faDollarSign,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';

const problems = [
  {
    icon: faDatabase,
    title: "CMS Item Limits",
    description: "Webflow caps CMS items per plan — growing content can force pricier tiers",
    impact: "Your content outgrows the plan"
  },
  {
    icon: faLock,
    title: "Hosting Lock-In",
    description: "Static export leaves out the CMS and e-commerce — dynamic sites must stay on Webflow",
    impact: "You can't freely move your full site"
  },
  {
    icon: faPenToSquare,
    title: "Content Editing Friction",
    description: "Non-technical team members often find Webflow's editor harder than WordPress",
    impact: "Day-to-day updates get bottlenecked"
  },
  {
    icon: faDollarSign,
    title: "Costs Scale Quickly",
    description: "Site plans plus add-ons climb as you add CMS, e-commerce, and seats",
    impact: "Higher long-term spend as you grow"
  },
  {
    icon: faChartLine,
    title: "Content & SEO Workflow",
    description: "Blogging, redirects, and content workflows are stronger in WordPress",
    impact: "Harder to scale content marketing"
  }
];

const comparison = [
  {
    criteria: "Custom design",
    builder: "Strong visual designer",
    clyra: "Custom design with no platform ceiling"
  },
  {
    criteria: "Content / CMS limits",
    builder: "CMS item caps per plan",
    clyra: "Unlimited content, no per-item caps"
  },
  {
    criteria: "Hosting & portability",
    builder: "Dynamic sites locked to Webflow",
    clyra: "Open source — host anywhere, 100% yours"
  },
  {
    criteria: "Content editing",
    builder: "Trickier for non-technical editors",
    clyra: "Simple editor built for your team"
  },
  {
    criteria: "Content marketing & SEO",
    builder: "Limited blog & redirect workflows",
    clyra: "Full blog, SEO, and redirect control"
  },
  {
    criteria: "Long-term cost",
    builder: "Site plans + add-ons scale up",
    clyra: "One-time build, own your hosting"
  }
];

const process = [
  {
    icon: faSearch,
    title: "Audit & Plan",
    description: "We map every Webflow page and CMS collection, and plan redirects so SEO carries over."
  },
  {
    icon: faDatabase,
    title: "Design & Build",
    description: "We rebuild your design on WordPress with unlimited content and no CMS item caps."
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
    question: "Will I lose SEO moving from Webflow to WordPress?",
    answer: "No. We preserve URLs where possible, set 301 redirects for the rest, and migrate your content and metadata, so rankings carry over — usually with a performance boost."
  },
  {
    question: "Can you move my Webflow CMS collections to WordPress?",
    answer: "Yes. We migrate your Webflow CMS collections into WordPress content types, so your structured content comes across — without Webflow's per-plan item caps."
  },
  {
    question: "I like Webflow's design — will my site still look as good?",
    answer: "Absolutely. Webflow is a strong design tool, and we rebuild your design faithfully (or improve it) on WordPress — while removing the CMS limits, hosting lock-in, and editing friction."
  },
  {
    question: "Do I keep my domain?",
    answer: "Yes. You keep your domain and we point it at your new WordPress site, with guidance if it's currently managed through Webflow."
  },
  {
    question: "How long does a Webflow to WordPress migration take?",
    answer: "Most business sites take 2–4 weeks; larger sites with extensive CMS content 6–8 weeks. You'll get a clear timeline after a free review."
  },
  {
    question: "How much does it cost?",
    answer: "Migrations typically range from $3,000–$12,000 depending on size and functionality. We provide a detailed quote after a free review of your current site."
  }
];

export const metadata: Metadata = {
  title: "Webflow to WordPress Migration | Move Off Webflow, Keep Your SEO | Clyra Studios",
  description: "Hitting Webflow's CMS limits, hosting lock-in, or rising costs? Clyra Studios migrates your Webflow site to WordPress — unlimited content, easier editing, full SEO control, and 100% ownership.",
  keywords: "webflow to wordpress migration, move webflow to wordpress, migrate from webflow, webflow alternatives, webflow cms limits, webflow vs wordpress, export webflow site, leave webflow, webflow limitations, webflow hosting cost",
  authors: [{ name: "Clyra Studios" }],
  creator: "Clyra Studios",
  publisher: "Clyra Studios",
  metadataBase: new URL('https://clyrastudios.com'),
  alternates: {
    canonical: '/webflow-to-wordpress',
  },
  openGraph: {
    title: "Webflow to WordPress Migration | Clyra Studios",
    description: "Move your Webflow site to WordPress without losing SEO. Unlimited content, easier editing, and 100% yours.",
    url: 'https://clyrastudios.com/webflow-to-wordpress',
    siteName: 'Clyra Studios',
    images: [
      {
        url: '/images/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Clyra Studios - Webflow to WordPress Migration',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webflow to WordPress Migration | Clyra Studios',
    description: 'Move your Webflow site to WordPress without losing SEO. Unlimited content, easier editing, and 100% yours.',
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
  "name": "Webflow to WordPress Migration",
  "description": "Migrate your Webflow site to WordPress with preserved SEO, unlimited content, easier editing, and complete ownership.",
  "provider": {
    "@type": "Organization",
    "name": "Clyra Studios",
    "url": "https://clyrastudios.com",
    "logo": "https://clyrastudios.com/images/clyra_logo.png"
  },
  "areaServed": "US",
  "serviceType": "Website Migration",
  "category": "Webflow to WordPress Migration",
  "offers": [
    {
      "@type": "Offer",
      "name": "Website Performance Audit",
      "description": "Free review of your Webflow site's performance, design, and SEO",
      "price": "0",
      "priceCurrency": "USD"
    },
    {
      "@type": "Offer",
      "name": "Webflow to WordPress Migration",
      "description": "Full migration from Webflow to WordPress with SEO preservation",
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

export default function WebflowToWordPressPage() {
  return (
    <>
      <Script
        id="webflow-wp-structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <Script
        id="webflow-wp-faq-data"
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
                  <span className="title-line">Move Your Webflow Site to WordPress</span>
                  <span className="title-line highlight">Without Losing Your SEO</span>
                </h1>
                <p className="hero-description">
                  Hitting Webflow&apos;s CMS limits, hosting lock-in, or rising costs? Clyra Studios migrates your Webflow site to WordPress — unlimited content, easier editing for your team, and a site you actually own.
                </p>
                <p className="hero-hook">
                  Keep the great design. Lose the limits, lock-in, and climbing bills.
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
                  <span className="stat-number">∞</span>
                  <span className="stat-label">CMS Items</span>
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
              <h2 className="section-title">Why Businesses Move Off <span className="transform-word">Webflow</span></h2>
              <p className="section-description">
                Webflow is a great design tool — but as content and traffic grow, CMS limits, hosting lock-in, and rising costs start to bite. If that&apos;s you, WordPress removes the ceiling.
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
              <h2 className="section-title">Webflow vs. a Site You Own</h2>
              <p className="section-description">
                Webflow&apos;s design tooling is strong — here&apos;s where a custom site we build and you own pulls ahead, on WordPress or a headless setup.
              </p>
            </div>

            <div className="builder-comparison">
              <div className="bc-table">
                <div className="bc-row bc-head">
                  <div className="bc-cell bc-criteria">What matters</div>
                  <div className="bc-cell">Staying on Webflow</div>
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
              <h2 className="cta-title">Ready to Move Beyond Webflow?</h2>
              <p className="cta-description">
                Get a free, honest review of your Webflow site&apos;s performance, content setup, and SEO — plus exactly what a migration would look like for you. No pitch, just a plan.
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
              <h2 className="section-title">Webflow to WordPress: Common Questions</h2>
              <p className="section-description">
                Everything you need to know about moving off Webflow.
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
