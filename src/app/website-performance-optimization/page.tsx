import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import {
  faBolt,
  faGaugeHigh,
  faMobileScreen,
  faImage,
  faServer,
  faClock,
  faRocket,
  faMagnifyingGlass,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const problems = [
  {
    icon: faClock,
    title: "Slow Pages Lose Visitors",
    description: "Every extra second of load time increases bounce rates and reduces conversions — especially on mobile.",
    impact: "Traffic without engagement",
  },
  {
    icon: faGaugeHigh,
    title: "Poor Core Web Vitals",
    description: "LCP, INP, and CLS issues hurt user experience and can affect search visibility.",
    impact: "SEO and UX both suffer",
  },
  {
    icon: faImage,
    title: "Heavy Images & Scripts",
    description: "Unoptimized media, bloated plugins, and third-party scripts drag performance down.",
    impact: "Death by a thousand requests",
  },
  {
    icon: faServer,
    title: "Hosting & Caching Misconfigured",
    description: "The site may be well-built but poorly served — caching, CDN, and server response times matter.",
    impact: "Fast code, slow delivery",
  },
];

const capabilities = [
  { icon: faGaugeHigh, title: "Core Web Vitals Optimization", description: "Targeted fixes for LCP, INP, and CLS based on real measurements." },
  { icon: faImage, title: "Image & Media Optimization", description: "Compression, modern formats, lazy loading, and delivery improvements." },
  { icon: faBolt, title: "Script & Plugin Audit", description: "Remove or defer what's slowing the site without breaking functionality." },
  { icon: faServer, title: "Caching & CDN Guidance", description: "Hosting, caching layers, and delivery configuration recommendations." },
  { icon: faMobileScreen, title: "Mobile Performance", description: "Most users are on phones — we optimize for real mobile conditions." },
  { icon: faChartLine, title: "Before/After Measurement", description: "Baseline and post-fix reporting so improvements are visible." },
];

const processSteps = [
  { icon: faMagnifyingGlass, title: "1. Performance Audit", description: "Lab and field data — PageSpeed, Search Console, and real-user metrics." },
  { icon: faGaugeHigh, title: "2. Prioritize Fixes", description: "Highest-impact issues first, aligned with your platform and constraints." },
  { icon: faBolt, title: "3. Implement Optimizations", description: "Images, scripts, caching, and template-level improvements." },
  { icon: faRocket, title: "4. Validate & Monitor", description: "Re-test Core Web Vitals and document what changed." },
];

const faqs = [
  {
    question: "Will this guarantee better rankings?",
    answer: "No. Speed is a ranking factor among many. Performance work improves UX and removes a common SEO barrier — it doesn't guarantee position changes.",
  },
  {
    question: "Do you work on WordPress and Shopify?",
    answer: "Yes. Performance bottlenecks differ by platform; we optimize within your stack.",
  },
  {
    question: "Is this separate from technical SEO?",
    answer: "Overlapping but focused. Technical SEO covers broader search foundations; performance optimization goes deep on speed and Core Web Vitals.",
  },
  {
    question: "Can you fix a site after a rescue or migration?",
    answer: "Yes. Performance work often follows rescues, redesigns, or migrations when speed regressed.",
  },
];

export const metadata: Metadata = {
  title: "Website Performance Optimization & Core Web Vitals | Clyra Studios",
  description:
    "Website performance optimization for faster load times, better Core Web Vitals, and improved user experience on WordPress, Shopify, and custom sites.",
  keywords:
    "website performance optimization, Core Web Vitals, page speed optimization, WordPress speed optimization, Shopify performance, LCP INP CLS",
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: { canonical: "/website-performance-optimization" },
  openGraph: {
    title: "Website Performance Optimization | Clyra Studios",
    description: "Faster sites, better Core Web Vitals, measurable improvements.",
    url: "https://clyrastudios.com/website-performance-optimization",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Performance Optimization",
  description: "Core Web Vitals and page speed optimization for business websites.",
  provider: { "@type": "Organization", name: "Clyra Studios", url: "https://clyrastudios.com" },
  offers: [{ "@type": "Offer", name: "Performance Optimization", priceRange: "$750+", priceCurrency: "USD" }],
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

export default function WebsitePerformancePage() {
  return (
    <>
      <Script id="perf-data" type="application/ld+json" strategy="beforeInteractive">{JSON.stringify(structuredData)}</Script>
      <Script id="perf-faq" type="application/ld+json" strategy="beforeInteractive">{JSON.stringify(faqStructuredData)}</Script>
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
                  <span className="title-line">Website Performance Optimization for</span>
                  <span className="title-line highlight">Faster Loads &amp; Better Core Web Vitals</span>
                </h1>
                <p className="hero-description">
                  Slow websites lose visitors, conversions, and search potential.
                  We audit and fix performance bottlenecks — images, scripts,
                  caching, and Core Web Vitals — so your site feels fast on real
                  devices.
                </p>
                <p className="hero-hook">Measure. Fix. Prove the difference.</p>
              </div>
              <div className="hero-actions">
                <Link href="/strategy-call" className="btn btn-primary btn-large">Book a Discovery Call<span className="btn-arrow">→</span></Link>
                <Link href="/site-audit" className="btn btn-secondary btn-large">Start with a Site Audit</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right"><h2 className="section-title">Why Speed <span className="transform-word">Hurts Growth</span></h2></div>
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
            <div className="section-header slide-in-right"><h2 className="section-title">What We Optimize</h2></div>
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
              <p className="section-description">Starting at <strong>$750</strong> for focused performance engagements. Larger sites and ongoing monitoring scoped separately.</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Make Your Site Feel Fast?</h2>
              <div className="cta-actions">
                <Link href="/strategy-call" className="btn btn-primary btn-large">Book a Discovery Call<span className="btn-arrow">→</span></Link>
                <Link href="/wordpress-mechanic" className="btn btn-secondary btn-large">Website Rescue</Link>
              </div>
              <p className="bc-guides">
                Related:{" "}
                <Link href="/technical-seo">Technical SEO</Link>
                {" · "}
                <Link href="/site-audit">Website Audit</Link>
                {" · "}
                <Link href="/wordpress-studio">WordPress Studio</Link>
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
