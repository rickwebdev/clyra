import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import {
  faBolt,
  faMagnifyingGlass,
  faSitemap,
  faCode,
  faGaugeHigh,
  faFileLines,
  faLink,
  faTriangleExclamation,
  faRocket,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const problems = [
  {
    icon: faMagnifyingGlass,
    title: "Invisible in Search",
    description:
      "The site exists but doesn't rank. Technical issues, thin content, or poor structure keep you off page one.",
    impact: "Organic traffic never compounds",
  },
  {
    icon: faCode,
    title: "Technical Debt Blocking Crawlers",
    description:
      "Broken redirects, indexation issues, slow pages, and messy markup prevent search engines from understanding your site.",
    impact: "Fixes content can't overcome alone",
  },
  {
    icon: faFileLines,
    title: "Content Without Structure",
    description:
      "Pages publish without keyword focus, internal links, or clear hierarchy, so even good writing underperforms.",
    impact: "Effort without search return",
  },
  {
    icon: faTriangleExclamation,
    title: "No Clear SEO Roadmap",
    description:
      "Random blog posts and plugin installs aren't a strategy. Without priorities, SEO spend feels like guesswork.",
    impact: "Busy work instead of progress",
  },
];

const capabilities = [
  { icon: faCode, title: "Technical SEO Audits", description: "Crawlability, indexation, redirects, schema, and site architecture fixes." },
  { icon: faSitemap, title: "Site Structure & Internal Linking", description: "Logical hierarchy and internal links that help users and search engines navigate." },
  { icon: faGaugeHigh, title: "Core Web Vitals & Page Speed", description: "Performance issues that affect rankings and user experience, often paired with our performance service." },
  { icon: faFileLines, title: "On-Page Optimization", description: "Titles, meta descriptions, headings, and content structure for target queries." },
  { icon: faLink, title: "Redirect & Migration SEO", description: "Preserve rankings during redesigns and platform migrations." },
  { icon: faChartLine, title: "Search Console & Analytics Setup", description: "Measurement foundations so you know what's working, tied to GA4 and dashboards." },
];

const processSteps = [
  { icon: faMagnifyingGlass, title: "1. Audit & Prioritize", description: "Technical crawl, competitive context, and a ranked list of fixes by impact." },
  { icon: faSitemap, title: "2. Fix Foundations", description: "Indexation, redirects, schema, speed blockers, and structural issues." },
  { icon: faFileLines, title: "3. Optimize Pages", description: "On-page improvements for high-value pages and templates." },
  { icon: faRocket, title: "4. Measure & Iterate", description: "Track movement in Search Console and analytics; refine over time." },
];

const faqs = [
  {
    question: "Do you guarantee rankings?",
    answer:
      "No. Technical SEO removes barriers and improves foundations, but rankings depend on competition, content quality, authority, and consistency over time.",
  },
  {
    question: "Is this different from content marketing?",
    answer:
      "Yes. Technical SEO focuses on site health, structure, and on-page foundations. Content growth systems handle ongoing publishing. They work best together.",
  },
  {
    question: "Do you work on WordPress and Shopify?",
    answer:
      "Yes. We work across WordPress, Shopify, and headless setups. The principles are the same; implementation varies by platform.",
  },
  {
    question: "How is this related to AEO?",
    answer:
      "Traditional SEO and AI-assisted search (AEO) overlap on structure, clarity, and authoritative content. We offer dedicated AEO work when that's the priority.",
  },
  {
    question: "Can you start with an audit?",
    answer:
      "Yes. Our website audit is a common entry point. Technical SEO engagements often begin there or expand from it.",
  },
];

export const metadata: Metadata = {
  title: "Technical SEO Services for Business Websites | Clyra Studios",
  description:
    "Technical SEO audits, site structure, Core Web Vitals, on-page optimization, and migration SEO for businesses that need search visibility. Part of Clyra's digital growth systems.",
  keywords:
    "technical SEO, technical SEO audit, Core Web Vitals SEO, on-page SEO, site structure SEO, WordPress technical SEO, Shopify SEO, migration SEO",
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: { canonical: "/technical-seo" },
  openGraph: {
    title: "Technical SEO Services | Clyra Studios",
    description: "Fix the technical foundations that help your site compete in search.",
    url: "https://clyrastudios.com/technical-seo",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Technical SEO",
  description: "Technical SEO audits, site structure, on-page optimization, and migration SEO for business websites.",
  provider: { "@type": "Organization", name: "Clyra Studios", url: "https://clyrastudios.com" },
  areaServed: "US",
  offers: [{ "@type": "Offer", name: "Technical SEO", priceRange: "$1000+", priceCurrency: "USD" }],
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function TechnicalSEOPage() {
  return (
    <>
      <Script id="technical-seo-data" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(structuredData)}
      </Script>
      <Script id="technical-seo-faq" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(faqStructuredData)}
      </Script>
      <Nav />
      <main className="redesign-migration-page">
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
                  <span className="title-line">Technical SEO That Fixes</span>
                  <span className="title-line highlight">What&apos;s Blocking Search Growth</span>
                </h1>
                <p className="hero-description">
                  Search visibility starts with technical foundations: crawlability,
                  site structure, page speed, on-page optimization, and measurement.
                  We fix what&apos;s broken so your content and marketing can actually
                  compete.
                </p>
                <p className="hero-hook">Remove barriers. Build a foundation. Measure progress.</p>
              </div>
              <div className="hero-actions">
                <Link href="/strategy-call" className="btn btn-primary btn-large">
                  Book a Discovery Call<span className="btn-arrow">→</span>
                </Link>
                <Link href="/site-audit" className="btn btn-secondary btn-large">Start with a Site Audit</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Why Technical SEO <span className="transform-word">Matters</span></h2>
            </div>
            <div className="services-grid">
              {problems.map((p, i) => (
                <div key={i} className="service-card">
                  <div className="service-image"><div className="service-icon"><GradientIcon icon={p.icon} size="xl" className="danger" /></div></div>
                  <div className="service-content">
                    <h3 className="service-title">{p.title}</h3>
                    <p className="service-description">{p.description}</p>
                    <div className="impact-badge"><span className="impact-text">{p.impact}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="case-studies-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">What We Do</h2>
            </div>
            <div className="services-grid">
              {capabilities.map((c, i) => (
                <div key={i} className="service-card">
                  <div className="service-image"><div className="service-icon"><GradientIcon icon={c.icon} size="xl" className="primary" /></div></div>
                  <div className="service-content">
                    <h3 className="service-title">{c.title}</h3>
                    <p className="service-description">{c.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right"><h2 className="section-title">Our Process</h2></div>
            <div className="services-grid">
              {processSteps.map((s, i) => (
                <div key={i} className="service-card">
                  <div className="service-image"><div className="service-icon"><GradientIcon icon={s.icon} size="xl" className="primary" /></div></div>
                  <div className="service-content">
                    <h3 className="service-title">{s.title}</h3>
                    <p className="service-description">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Pricing</h2>
              <p className="section-description">Starting at <strong>$1,000</strong> for focused technical SEO engagements. Audits and larger sites scoped separately.</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Fix Your Search Foundations?</h2>
              <div className="cta-actions">
                <Link href="/strategy-call" className="btn btn-primary btn-large">Book a Discovery Call<span className="btn-arrow">→</span></Link>
                <Link href="/site-audit" className="btn btn-secondary btn-large">Request a Site Audit</Link>
              </div>
              <p className="bc-guides">
                Related:{" "}
                <Link href="/aeo-ai-search-optimization">AEO &amp; AI Search</Link>
                {" · "}
                <Link href="/website-performance-optimization">Performance Optimization</Link>
                {" · "}
                <Link href="/ai-content-automation">AI Content Growth Systems</Link>
                {" · "}
                <Link href="/ga4-implementation">GA4 Implementation</Link>
              </p>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="container">
            <div className="faq-grid">
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item">
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
