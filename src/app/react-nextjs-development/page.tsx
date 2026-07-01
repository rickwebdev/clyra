import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import {
  faBolt,
  faCode,
  faGaugeHigh,
  faLayerGroup,
  faMagnifyingGlass,
  faMobileScreen,
  faRocket,
  faSitemap,
  faTriangleExclamation,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

const problems = [
  {
    icon: faGaugeHigh,
    title: "Template Sites Hit a Ceiling",
    description:
      "Page builders and rigid themes work until you need custom flows, performance, or integrations the platform can't support.",
    impact: "Growth blocked by the stack",
  },
  {
    icon: faCode,
    title: "Custom Code Without Architecture",
    description:
      "One-off React builds without clear patterns become expensive to maintain and risky to extend.",
    impact: "Fast launch, slow everything after",
  },
  {
    icon: faMobileScreen,
    title: "Performance as an Afterthought",
    description:
      "Heavy JavaScript bundles and poor rendering strategies hurt Core Web Vitals and conversion on mobile.",
    impact: "Users bounce before content loads",
  },
  {
    icon: faTriangleExclamation,
    title: "Disconnected from the CMS",
    description:
      "A beautiful frontend that editors can't update — or a CMS that developers fight on every release.",
    impact: "Two teams, one bottleneck",
  },
];

const capabilities = [
  {
    icon: faCode,
    title: "Next.js Application Development",
    description:
      "Marketing sites, product landing systems, and content-driven apps with App Router, SSR, and static generation.",
  },
  {
    icon: faLayerGroup,
    title: "React Component Systems",
    description:
      "Reusable UI patterns, design system alignment, and maintainable frontends your team can extend.",
  },
  {
    icon: faSitemap,
    title: "CMS & API Integration",
    description:
      "Headless CMS, WordPress, Shopify, and custom APIs — content flows in without hard-coding every page.",
  },
  {
    icon: faGaugeHigh,
    title: "Performance by Default",
    description:
      "Image optimization, code splitting, and caching strategies aligned with Core Web Vitals goals.",
  },
  {
    icon: faWandMagicSparkles,
    title: "SEO-Ready Rendering",
    description:
      "Server-rendered metadata, structured data, and clean URLs — paired with our technical SEO work.",
  },
  {
    icon: faBolt,
    title: "Deployment & DevOps Guidance",
    description:
      "Vercel, edge hosting, preview environments, and CI workflows that support safe releases.",
  },
];

const processSteps = [
  {
    icon: faMagnifyingGlass,
    title: "1. Scope & Architecture",
    description:
      "Use cases, content sources, integrations, and whether Next.js is the right tool for the job.",
  },
  {
    icon: faSitemap,
    title: "2. Design the System",
    description:
      "Page types, components, data models, and API contracts before writing production code.",
  },
  {
    icon: faCode,
    title: "3. Build & Integrate",
    description:
      "Frontend development, CMS connection, forms, analytics hooks, and QA across devices.",
  },
  {
    icon: faRocket,
    title: "4. Launch & Iterate",
    description:
      "Deployment, monitoring, performance validation, and a path for ongoing improvements.",
  },
];

const faqs = [
  {
    question: "When should we choose Next.js over WordPress?",
    answer:
      "When you need maximum performance, custom interactivity, or a decoupled content architecture. WordPress remains strong for editorial-heavy sites with simpler needs. We help you choose based on outcomes, not hype.",
  },
  {
    question: "Do you build only marketing sites or web apps too?",
    answer:
      "Primarily marketing sites, content platforms, and growth-focused web applications. Complex SaaS products may be referred or scoped as advisory plus build support.",
  },
  {
    question: "Can you work with our existing design?",
    answer:
      "Yes. We implement from Figma or existing brand systems, or collaborate on layout and component design as part of the engagement.",
  },
  {
    question: "How does this connect to headless CMS?",
    answer:
      "Next.js is often the frontend in headless architectures. We frequently pair React/Next.js builds with Sanity, Contentful, or WordPress headless backends.",
  },
  {
    question: "Do you handle hosting and deployment?",
    answer:
      "We set up and document deployment on Vercel or comparable platforms. Ongoing hosting management can be included or handed off to your team.",
  },
];

export const metadata: Metadata = {
  title: "React & Next.js Development for Business Websites | Clyra Studios",
  description:
    "Custom React and Next.js development for high-performance marketing sites, headless frontends, and content-driven web applications — part of Clyra's digital growth systems.",
  keywords:
    "Next.js development, React development, Next.js agency, custom React website, headless frontend, Next.js marketing site, App Router development, performance-focused React",
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: { canonical: "/react-nextjs-development" },
  openGraph: {
    title: "React & Next.js Development | Clyra Studios",
    description:
      "High-performance custom frontends built for speed, SEO, and long-term maintainability.",
    url: "https://clyrastudios.com/react-nextjs-development",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "React & Next.js Development",
  description:
    "Custom React and Next.js development for business websites and headless frontends.",
  provider: {
    "@type": "Organization",
    name: "Clyra Studios",
    url: "https://clyrastudios.com",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Next.js Development",
      priceRange: "$5000+",
      priceCurrency: "USD",
    },
  ],
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

export default function ReactNextjsPage() {
  return (
    <>
      <Script
        id="react-nextjs-data"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <Script
        id="react-nextjs-faq"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
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
                  <span className="title-line">React &amp; Next.js Development for</span>
                  <span className="title-line highlight">
                    Fast, Flexible Web Experiences
                  </span>
                </h1>
                <p className="hero-description">
                  When templates and page builders aren&apos;t enough, we build
                  custom React and Next.js frontends — performance-first,
                  SEO-ready, and connected to the CMS and APIs your business
                  actually runs on.
                </p>
                <p className="hero-hook">
                  Custom where it counts. Maintainable by design.
                </p>
              </div>
              <div className="hero-actions">
                <Link href="/strategy-call" className="btn btn-primary btn-large">
                  Book a Discovery Call<span className="btn-arrow">→</span>
                </Link>
                <Link href="/headless-cms" className="btn btn-secondary btn-large">
                  Headless CMS
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">
                Why Teams Move to <span className="transform-word">Custom Frontends</span>
              </h2>
            </div>
            <div className="services-grid">
              {problems.map((p, i) => (
                <div key={i} className="service-card">
                  <div className="service-image">
                    <div className="service-icon">
                      <GradientIcon icon={p.icon} size="xl" className="danger" />
                    </div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{p.title}</h3>
                    <p className="service-description">{p.description}</p>
                    <div className="impact-badge">
                      <span className="impact-text">{p.impact}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="case-studies-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">What We Build</h2>
            </div>
            <div className="services-grid">
              {capabilities.map((c, i) => (
                <div key={i} className="service-card">
                  <div className="service-image">
                    <div className="service-icon">
                      <GradientIcon icon={c.icon} size="xl" className="primary" />
                    </div>
                  </div>
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
            <div className="section-header slide-in-right">
              <h2 className="section-title">Our Process</h2>
            </div>
            <div className="services-grid">
              {processSteps.map((s, i) => (
                <div key={i} className="service-card">
                  <div className="service-image">
                    <div className="service-icon">
                      <GradientIcon icon={s.icon} size="xl" className="primary" />
                    </div>
                  </div>
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
              <p className="section-description">
                Starting at <strong>$5,000</strong> for focused Next.js
                engagements. Full custom builds scoped based on pages,
                integrations, and design complexity.
              </p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Build a Custom Frontend?</h2>
              <div className="cta-actions">
                <Link href="/strategy-call" className="btn btn-primary btn-large">
                  Book a Discovery Call<span className="btn-arrow">→</span>
                </Link>
                <Link href="/growth-website-system" className="btn btn-secondary btn-large">
                  Growth Website System
                </Link>
              </div>
              <p className="bc-guides">
                Related:{" "}
                <Link href="/headless-cms">Headless CMS</Link>
                {" · "}
                <Link href="/api-integrations">API Integrations</Link>
                {" · "}
                <Link href="/technical-seo">Technical SEO</Link>
                {" · "}
                <Link href="/website-performance-optimization">
                  Performance Optimization
                </Link>
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
