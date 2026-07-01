import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import {
  faBolt,
  faChartLine,
  faBullseye,
  faGear,
  faDiagramProject,
  faTriangleExclamation,
  faRocket,
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const problems = [
  {
    icon: faTriangleExclamation,
    title: "GA4 Installed But Not Trusted",
    description: "Data is collecting somewhere — but nobody believes the numbers or knows which reports to use.",
    impact: "Decisions still made on gut feel",
  },
  {
    icon: faBullseye,
    title: "Conversions Not Tracked Correctly",
    description: "Forms, calls, purchases, and key actions aren't measured consistently across the site.",
    impact: "Can't see what actually drives results",
  },
  {
    icon: faDiagramProject,
    title: "Disconnected Marketing Stack",
    description: "Ads, email, CRM, and the website each report different versions of the truth.",
    impact: "Attribution arguments instead of action",
  },
  {
    icon: faChartLine,
    title: "No Executive View",
    description: "Leadership needs one dashboard — not fifteen tabs of GA4 reports nobody opens.",
    impact: "Reporting doesn't support decisions",
  },
];

const capabilities = [
  { icon: faGear, title: "GA4 Property Setup & Audit", description: "Correct configuration, data streams, and baseline hygiene." },
  { icon: faBullseye, title: "Event & Conversion Tracking", description: "Forms, clicks, calls, purchases, and custom actions tracked reliably." },
  { icon: faDiagramProject, title: "Google Tag Manager", description: "Maintainable tagging without editing code for every change." },
  { icon: faMagnifyingGlass, title: "Search Console Connection", description: "Organic search data linked to your measurement stack." },
  { icon: faCartShopping, title: "Ecommerce Tracking", description: "Shopify, WooCommerce, and custom checkout events where applicable." },
  { icon: faChartLine, title: "Dashboard Handoff", description: "Optional Looker Studio dashboards so data is usable — not trapped in GA4." },
];

const processSteps = [
  { icon: faMagnifyingGlass, title: "1. Audit Current Setup", description: "What's installed, what's broken, and what's missing." },
  { icon: faGear, title: "2. Configure GA4 & GTM", description: "Properties, streams, events, and conversions implemented correctly." },
  { icon: faBullseye, title: "3. Validate Data", description: "Test real user flows and confirm events fire as expected." },
  { icon: faRocket, title: "4. Document & Train", description: "Clear documentation plus optional dashboard build." },
];

const faqs = [
  {
    question: "Do I need GA4 if I already have Universal Analytics?",
    answer: "GA4 is the current Google Analytics platform. If you're still on UA only, you need GA4 configured. We can audit what you have and fix gaps.",
  },
  {
    question: "Is this the same as dashboard building?",
    answer: "Implementation comes first — accurate data collection. Dashboards are the next layer; we offer both and often connect them.",
  },
  {
    question: "Can you fix a broken GA4 setup?",
    answer: "Yes. Misconfigured GA4 is common. We audit, fix tracking, and validate before building reports on top.",
  },
  {
    question: "Do you set up Google Ads and Meta tracking too?",
    answer: "Often yes, as part of a connected measurement plan — especially when tied to conversion tracking in GA4.",
  },
];

export const metadata: Metadata = {
  title: "GA4 Implementation & Conversion Tracking | Clyra Studios",
  description:
    "GA4 setup, conversion tracking, Google Tag Manager, and measurement foundations for businesses that need trustworthy analytics — connected to dashboards and growth decisions.",
  keywords:
    "GA4 implementation, GA4 setup, Google Analytics 4 consultant, conversion tracking, Google Tag Manager setup, ecommerce tracking GA4, GA4 audit",
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: { canonical: "/ga4-implementation" },
  openGraph: {
    title: "GA4 Implementation & Conversion Tracking | Clyra Studios",
    description: "Trustworthy GA4 setup and conversion tracking connected to your growth stack.",
    url: "https://clyrastudios.com/ga4-implementation",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GA4 Implementation",
  description: "Google Analytics 4 setup, conversion tracking, GTM, and measurement foundations for business websites.",
  provider: { "@type": "Organization", name: "Clyra Studios", url: "https://clyrastudios.com" },
  offers: [{ "@type": "Offer", name: "GA4 Implementation", priceRange: "$750+", priceCurrency: "USD" }],
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

export default function GA4ImplementationPage() {
  return (
    <>
      <Script id="ga4-data" type="application/ld+json" strategy="beforeInteractive">{JSON.stringify(structuredData)}</Script>
      <Script id="ga4-faq" type="application/ld+json" strategy="beforeInteractive">{JSON.stringify(faqStructuredData)}</Script>
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
                  <span className="title-line">GA4 Implementation for</span>
                  <span className="title-line highlight">Data You Can Actually Trust</span>
                </h1>
                <p className="hero-description">
                  We configure Google Analytics 4, conversion tracking, and tag
                  management so your business can see what&apos;s working —
                  then connect that data to dashboards and decisions.
                </p>
                <p className="hero-hook">Measure correctly first. Report second.</p>
              </div>
              <div className="hero-actions">
                <Link href="/strategy-call" className="btn btn-primary btn-large">Book a Discovery Call<span className="btn-arrow">→</span></Link>
                <Link href="/google-analytics-looker-studio-dashboards" className="btn btn-secondary btn-large">See Dashboard Services</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right"><h2 className="section-title">When Analytics <span className="transform-word">Fails the Business</span></h2></div>
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
            <div className="section-header slide-in-right"><h2 className="section-title">What We Implement</h2></div>
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
              <p className="section-description">Starting at <strong>$750</strong> for GA4 setup and core conversion tracking. Complex ecommerce or multi-site setups scoped separately.</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Ready for Analytics You Can Trust?</h2>
              <div className="cta-actions">
                <Link href="/strategy-call" className="btn btn-primary btn-large">Book a Discovery Call<span className="btn-arrow">→</span></Link>
                <Link href="/contact" className="btn btn-secondary btn-large">Get in Touch</Link>
              </div>
              <p className="bc-guides">
                Related:{" "}
                <Link href="/google-analytics-looker-studio-dashboards">Looker Studio Dashboards</Link>
                {" · "}
                <Link href="/technical-seo">Technical SEO</Link>
                {" · "}
                <Link href="/shopify-development">Shopify Development</Link>
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
