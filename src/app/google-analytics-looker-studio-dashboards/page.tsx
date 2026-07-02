import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import {
  faBolt,
  faCheck,
  faChartLine,
  faGaugeHigh,
  faMagnifyingGlassChart,
  faRectangleAd,
  faBullhorn,
  faArrowTrendUp,
  faUserPlus,
  faCartShopping,
  faUsers,
  faDiagramProject,
  faStore,
  faBuilding,
  faCloud,
  faHouse,
  faStethoscope,
  faLocationDot,
  faLocationArrow,
  faBullseye,
  faDollarSign,
  faArrowTrendDown,
  faScaleBalanced,
  faClock,
  faMobileScreen,
  faGears,
} from '@fortawesome/free-solid-svg-icons';

const builds = [
  {
    icon: faGaugeHigh,
    title: "Executive KPI Dashboards",
    description: "One clean view of the numbers that actually move the business.",
  },
  {
    icon: faChartLine,
    title: "GA4 Reporting",
    description: "Traffic, engagement, and conversions from Google Analytics 4, made readable.",
  },
  {
    icon: faMagnifyingGlassChart,
    title: "Search Console Dashboards",
    description: "Rankings, clicks, impressions, and the queries bringing you traffic.",
  },
  {
    icon: faBullhorn,
    title: "Google Ads Reporting",
    description: "Spend, ROAS, and campaign performance in one place, with no more tab-hopping.",
  },
  {
    icon: faRectangleAd,
    title: "Meta Ads Reporting",
    description: "Facebook and Instagram ad results blended alongside the rest of your data.",
  },
  {
    icon: faArrowTrendUp,
    title: "SEO Performance Dashboards",
    description: "Organic growth, keyword movement, and the pages driving results.",
  },
  {
    icon: faUserPlus,
    title: "Lead Generation Dashboards",
    description: "See where leads come from, what converts, and what your best sources cost.",
  },
  {
    icon: faCartShopping,
    title: "Ecommerce Reporting",
    description: "Revenue, product performance, and checkout drop-off, tracked end to end.",
  },
  {
    icon: faUsers,
    title: "Agency Client Dashboards",
    description: "White-label reporting your clients can log into and understand at a glance.",
  },
  {
    icon: faDiagramProject,
    title: "Marketing Attribution",
    description: "Connect the channels and touchpoints that actually create revenue.",
  },
];

const audiences = [
  { icon: faStore, label: "Small Businesses" },
  { icon: faBuilding, label: "Marketing Agencies" },
  { icon: faCartShopping, label: "Ecommerce Brands" },
  { icon: faCloud, label: "SaaS Companies" },
  { icon: faHouse, label: "Real Estate" },
  { icon: faStethoscope, label: "Healthcare" },
  { icon: faLocationDot, label: "Local Businesses" },
];

const questions = [
  {
    icon: faLocationArrow,
    title: "Where are leads coming from?",
    description: "Know exactly which channels, campaigns, and pages generate your best inquiries.",
  },
  {
    icon: faBullseye,
    title: "What's actually converting?",
    description: "Separate the traffic that turns into revenue from the traffic that just looks busy.",
  },
  {
    icon: faDollarSign,
    title: "Which pages make money?",
    description: "See which content and products drive real results, and which quietly underperform.",
  },
  {
    icon: faArrowTrendDown,
    title: "Where are visitors dropping off?",
    description: "Spot the leaks in your funnel before they cost you another month of sales.",
  },
  {
    icon: faScaleBalanced,
    title: "Which channels deserve more budget?",
    description: "Put spend behind what works instead of guessing across a dozen platforms.",
  },
];

const included = [
  "GA4 setup review",
  "Looker Studio dashboard",
  "Search Console integration",
  "Goal & event tracking",
  "Custom KPIs",
  "Automated reporting",
  "Mobile-friendly dashboard",
  "Training session",
];

const faqs = [
  {
    question: "Do I need GA4 already set up?",
    answer: "Ideally, yes, but it's not a dealbreaker. If GA4 isn't configured, or isn't configured correctly, we can handle the setup and cleanup as part of the project so your dashboard is built on accurate data.",
  },
  {
    question: "Can you connect Google Ads?",
    answer: "Yes. Google Ads spend, conversions, and ROAS can be pulled directly into your Looker Studio dashboard alongside your analytics data.",
  },
  {
    question: "Can you connect Meta (Facebook & Instagram) Ads?",
    answer: "Yes. Meta Ads reporting can be blended into the same dashboard so you see paid social performance next to everything else.",
  },
  {
    question: "Do you integrate Google Search Console?",
    answer: "Absolutely. Search Console data (rankings, clicks, impressions, and top queries) is one of the most valuable sources for tracking SEO performance over time.",
  },
  {
    question: "Can you build dashboards for my clients?",
    answer: "Yes. Agencies frequently white-label these dashboards for their own clients: a clean, branded reporting view each client can log into and understand without a walkthrough.",
  },
  {
    question: "Do the dashboards update automatically?",
    answer: "Yes. Once your data sources are connected, the dashboard refreshes automatically. No manual exports, no rebuilding reports every month.",
  },
  {
    question: "How long does it take to build?",
    answer: "Most dashboards are delivered within 3-5 business days, depending on how many data sources you need connected and whether GA4 setup is required first.",
  },
];

export const metadata: Metadata = {
  title: "GA4 & Looker Studio Dashboards | Custom Analytics Dashboards | Clyra Studios",
  description: "Stop digging through spreadsheets. Clyra Studios builds clean, executive-level GA4 and Looker Studio dashboards that turn your marketing data into decisions: leads, SEO, ads, and ecommerce in one view.",
  keywords: "GA4 dashboard, Looker Studio dashboard, Google Analytics consultant, executive marketing dashboard, custom analytics dashboard, marketing reporting dashboard, Google Data Studio, GA4 reporting, Search Console dashboard, Google Ads reporting dashboard, Meta Ads reporting, ecommerce dashboard, lead generation dashboard, marketing attribution dashboard",
  authors: [{ name: "Clyra Studios" }],
  creator: "Clyra Studios",
  publisher: "Clyra Studios",
  metadataBase: new URL('https://clyrastudios.com'),
  alternates: {
    canonical: '/google-analytics-looker-studio-dashboards',
  },
  openGraph: {
    title: "GA4 & Looker Studio Dashboards | Clyra Studios",
    description: "Clean, executive-level GA4 and Looker Studio dashboards that turn your marketing data into decisions. One dashboard, every important metric, zero guesswork.",
    url: 'https://clyrastudios.com/google-analytics-looker-studio-dashboards',
    siteName: 'Clyra Studios',
    images: [
      {
        url: '/images/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Clyra Studios - Custom GA4 & Looker Studio Dashboards',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GA4 & Looker Studio Dashboards | Clyra Studios',
    description: 'Clean, executive-level GA4 and Looker Studio dashboards that turn your marketing data into decisions. One dashboard, every important metric, zero guesswork.',
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
  "name": "Google Analytics & Looker Studio Dashboard Development",
  "description": "Custom GA4 and Looker Studio dashboard development: executive KPI dashboards, SEO and ads reporting, lead generation, ecommerce, and marketing attribution, built to turn marketing data into decisions.",
  "provider": {
    "@type": "Organization",
    "name": "Clyra Studios",
    "url": "https://clyrastudios.com",
    "logo": "https://clyrastudios.com/images/clyra_logo.png"
  },
  "areaServed": "US",
  "serviceType": "Analytics Dashboard Development",
  "category": "Google Analytics & Looker Studio Dashboards",
  "offers": [
    {
      "@type": "Offer",
      "name": "Analytics & Dashboard Consultation",
      "description": "Free review of your current analytics setup and reporting goals",
      "price": "0",
      "priceCurrency": "USD"
    },
    {
      "@type": "Offer",
      "name": "Custom Looker Studio Dashboard Build",
      "description": "GA4 review, Looker Studio dashboard, data source integrations, custom KPIs, automated reporting, and training",
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

export default function AnalyticsDashboardsPage() {
  return (
    <>
      <Script
        id="analytics-dashboards-structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <Script
        id="analytics-dashboards-faq-data"
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
                  <span className="title-line">Custom Google Analytics &amp;</span>
                  <span className="title-line highlight">Looker Studio Dashboards</span>
                </h1>
                <p className="hero-description">
                  Stop digging through spreadsheets. We build clean, executive-level dashboards that turn your marketing data into something you can actually use: leads, ecommerce, SEO, and ad performance, all surfacing the metrics that matter.
                </p>
                <p className="hero-hook">
                  One dashboard. Every important metric. Zero guesswork.
                </p>
              </div>

              <div className="hero-actions">
                <Link href="/contact" className="btn btn-primary btn-large">
                  Build My Dashboard
                  <span className="btn-arrow">→</span>
                </Link>
                <Link href="/strategy-call" className="btn btn-secondary btn-large">
                  Book Discovery Call
                </Link>
              </div>

              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">3-5</span>
                  <span className="stat-label">Day Delivery</span>
                </div>
                <div className="stat">
                  <span className="stat-number">1</span>
                  <span className="stat-label">Unified View</span>
                </div>
                <div className="stat">
                  <span className="stat-number">∞</span>
                  <span className="stat-label">Auto Refresh</span>
                </div>
              </div>

              <div className="trust-signals">
                <div className="trust-item">
                  <GradientIcon icon={faChartLine} size="sm" className="primary" />
                  <span className="trust-text">GA4 &amp; Looker Studio</span>
                </div>
                <div className="trust-item">
                  <GradientIcon icon={faGears} size="sm" className="primary" />
                  <span className="trust-text">Automated Reporting</span>
                </div>
                <div className="trust-item">
                  <GradientIcon icon={faMobileScreen} size="sm" className="success" />
                  <span className="trust-text">Mobile-Friendly</span>
                </div>
                <div className="trust-item">
                  <GradientIcon icon={faBolt} size="sm" className="warning" />
                  <span className="trust-text">Fast Turnaround</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What I Build Section */}
        <section className="services-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball services-ball-1"></div>
            <div className="section-floating-ball services-ball-2"></div>
            <div className="section-floating-ball services-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">What We <span className="transform-word">Build</span></h2>
              <p className="section-description">
                From a single executive KPI view to a fully connected reporting system, every dashboard is built around the questions your business actually asks.
              </p>
            </div>

            <div className="services-grid">
              {builds.map((build, index) => {
                const animationClass = index % 5 === 0 ? 'float-in-left' :
                                     index % 5 === 1 ? 'float-in-center' :
                                     index % 5 === 2 ? 'float-in-bottom-left' :
                                     index % 5 === 3 ? 'float-in-right' : 'float-in-bottom-right';
                return (
                  <div key={index} className={`service-card ${animationClass}`}>
                    <div className="service-image">
                      <div className="service-icon">
                        <GradientIcon icon={build.icon} size="xl" className="primary" />
                      </div>
                    </div>
                    <div className="service-content">
                      <h3 className="service-title">{build.title}</h3>
                      <p className="service-description">{build.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Perfect For Section */}
        <section className="case-studies-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball case-studies-ball-1"></div>
            <div className="section-floating-ball case-studies-ball-2"></div>
            <div className="section-floating-ball case-studies-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Perfect For</h2>
              <p className="section-description">
                If you rely on Google Analytics, ads, or SEO to grow, a custom dashboard makes your data work for you.
              </p>
            </div>

            <div className="trust-signals audience-signals">
              {audiences.map((audience, index) => (
                <div key={index} className="trust-item">
                  <GradientIcon icon={audience.icon} size="sm" className="primary" />
                  <span className="trust-text">{audience.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Clyra Studios Section */}
        <section className="services-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball services-ball-1"></div>
            <div className="section-floating-ball services-ball-2"></div>
            <div className="section-floating-ball services-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Why <span className="transform-word">Clyra Studios</span>?</h2>
              <p className="section-description">
                Most dashboards dump hundreds of numbers onto a screen. Ours answer business questions. That&apos;s the difference between reporting and decision-making.
              </p>
            </div>

            <div className="services-grid">
              {questions.map((question, index) => {
                const animationClass = index === 0 ? 'float-in-left' :
                                     index === 1 ? 'float-in-center' :
                                     index === 2 ? 'float-in-bottom-left' :
                                     index === 3 ? 'float-in-right' : 'float-in-bottom-right';
                return (
                  <div key={index} className={`service-card ${animationClass}`}>
                    <div className="service-image">
                      <div className="service-icon">
                        <GradientIcon icon={question.icon} size="xl" className="success" />
                      </div>
                    </div>
                    <div className="service-content">
                      <h3 className="service-title">{question.title}</h3>
                      <p className="service-description">{question.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="case-studies-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball case-studies-ball-1"></div>
            <div className="section-floating-ball case-studies-ball-2"></div>
            <div className="section-floating-ball case-studies-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">What&apos;s Included</h2>
              <p className="section-description">
                Everything you need to go from scattered data to a dashboard you&apos;ll actually open.
              </p>
            </div>

            <div className="included-panel">
              <div className="included-grid">
                {included.map((item, index) => (
                  <div key={index} className="included-item">
                    <GradientIcon icon={faCheck} size="sm" className="success" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="bc-note">
                <GradientIcon icon={faClock} size="sm" className="warning" />
                <span>Typical timeline: most dashboards are delivered within 3-5 business days.</span>
              </div>
              <div className="bc-actions">
                <Link href="/contact" className="btn btn-primary btn-large">
                  Start My Dashboard
                  <span className="btn-arrow">→</span>
                </Link>
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
              <h2 className="cta-title">Make Your Marketing Data Useful</h2>
              <p className="cta-description">
                Whether you need a simple executive dashboard or a fully customized reporting system, we can build a solution tailored to your business. Let&apos;s create a dashboard you&apos;ll actually use.
              </p>
              <div className="cta-actions">
                <Link href="/contact" className="btn btn-primary btn-large">
                  Get Started
                  <span className="btn-arrow">→</span>
                </Link>
                <Link href="/strategy-call" className="btn btn-secondary btn-large">
                  Book a Strategy Call
                </Link>
              </div>
              <p className="bc-guides">
                Related:{" "}
                <Link href="/ga4-implementation">GA4 Implementation</Link>
                {" · "}
                <Link href="/site-audit">Website Audit</Link>
              </p>
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
              <h2 className="section-title">Dashboard &amp; Analytics: Common Questions</h2>
              <p className="section-description">
                Everything you need to know about GA4 and Looker Studio dashboards.
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
