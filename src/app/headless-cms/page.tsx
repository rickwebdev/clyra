import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import {
  faBolt,
  faCode,
  faDatabase,
  faDiagramProject,
  faGaugeHigh,
  faLayerGroup,
  faMagnifyingGlass,
  faRocket,
  faSitemap,
  faTriangleExclamation,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const problems = [
  {
    icon: faGaugeHigh,
    title: "Monolithic CMS Limits Performance",
    description:
      "Traditional CMS themes bundle content, layout, and delivery together — slowing the site and complicating updates.",
    impact: "Speed and flexibility trade-offs",
  },
  {
    icon: faLayerGroup,
    title: "Content Locked to One Frontend",
    description:
      "Marketing content lives in one system while product, docs, and apps need the same data elsewhere.",
    impact: "Duplicate work across channels",
  },
  {
    icon: faTriangleExclamation,
    title: "Headless Without Strategy",
    description:
      "Decoupling for its own sake adds complexity — without clear use cases, teams inherit more tools and less clarity.",
    impact: "Cost without business return",
  },
  {
    icon: faUsers,
    title: "Editors Left Behind",
    description:
      "A fast frontend means nothing if the content team can't publish confidently without developer help.",
    impact: "Bottlenecks after launch",
  },
];

const capabilities = [
  {
    icon: faDiagramProject,
    title: "Architecture & Platform Selection",
    description:
      "Sanity, Contentful, Strapi, WordPress headless, or hybrid — chosen for your team, content model, and growth plans.",
  },
  {
    icon: faDatabase,
    title: "Content Modeling",
    description:
      "Structured schemas for pages, products, resources, and reusable blocks that scale with your site.",
  },
  {
    icon: faCode,
    title: "API & Frontend Integration",
    description:
      "Connect your CMS to Next.js, React, or existing apps with reliable data fetching and preview workflows.",
  },
  {
    icon: faSitemap,
    title: "Migration from Legacy CMS",
    description:
      "Move content from WordPress, Webflow, or monolithic setups without losing SEO equity or editorial workflows.",
  },
  {
    icon: faBolt,
    title: "Performance-First Delivery",
    description:
      "Static generation, edge caching, and optimized media — paired with our performance optimization work when needed.",
  },
  {
    icon: faUsers,
    title: "Editor Experience Design",
    description:
      "Preview, roles, and content workflows so non-technical teams can ship without opening a ticket.",
  },
];

const processSteps = [
  {
    icon: faMagnifyingGlass,
    title: "1. Discovery & Use Cases",
    description:
      "Who publishes, what channels need content, and whether headless is the right fit — not just the trendy one.",
  },
  {
    icon: faDiagramProject,
    title: "2. Model & Architect",
    description:
      "Content types, relationships, integrations, and frontend approach documented before build.",
  },
  {
    icon: faCode,
    title: "3. Build & Migrate",
    description:
      "CMS setup, API integration, frontend templates, redirects, and content migration.",
  },
  {
    icon: faRocket,
    title: "4. Train & Hand Off",
    description:
      "Editor training, documentation, and optional ongoing support through our growth systems.",
  },
];

const faqs = [
  {
    question: "When does headless CMS make sense?",
    answer:
      "When you need faster frontends, content across multiple channels, or a more flexible content model than a traditional theme allows. We help you decide if the trade-offs are worth it for your stage and team.",
  },
  {
    question: "Which headless CMS platforms do you work with?",
    answer:
      "Sanity, Contentful, Strapi, and WordPress as a headless backend (WPGraphQL). We recommend based on your content model, budget, and editorial needs — not vendor preference alone.",
  },
  {
    question: "Can you migrate from WordPress without starting over?",
    answer:
      "Often yes — either as a headless WordPress backend or a full migration to a dedicated headless CMS. We preserve URLs, redirects, and SEO foundations as part of the plan.",
  },
  {
    question: "Do you only build the CMS or the frontend too?",
    answer:
      "Both. Headless projects typically include the content platform, Next.js or React frontend, and the integration layer. We can also connect an existing frontend if you already have one.",
  },
  {
    question: "How is this different from WordPress Studio?",
    answer:
      "WordPress Studio covers traditional and hybrid WordPress builds. Headless CMS is for decoupled architectures when performance, multi-channel content, or custom frontends are the priority.",
  },
];

export const metadata: Metadata = {
  title: "Headless CMS Development & Integration | Clyra Studios",
  description:
    "Headless CMS architecture, content modeling, and Next.js integration — Sanity, Contentful, Strapi, and WordPress headless for businesses that need flexible, high-performance content systems.",
  keywords:
    "headless CMS, headless CMS development, Sanity CMS, Contentful development, Strapi CMS, WordPress headless, WPGraphQL, Next.js CMS integration, content modeling",
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: { canonical: "/headless-cms" },
  openGraph: {
    title: "Headless CMS Development | Clyra Studios",
    description:
      "Flexible content systems with performance-first frontends and editor-friendly workflows.",
    url: "https://clyrastudios.com/headless-cms",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Headless CMS Development",
  description:
    "Headless CMS architecture, content modeling, migration, and frontend integration for business websites.",
  provider: {
    "@type": "Organization",
    name: "Clyra Studios",
    url: "https://clyrastudios.com",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Headless CMS Development",
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

export default function HeadlessCMSPage() {
  return (
    <>
      <Script
        id="headless-cms-data"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <Script
        id="headless-cms-faq"
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
                  <span className="title-line">Headless CMS Development for</span>
                  <span className="title-line highlight">
                    Flexible, High-Performance Content
                  </span>
                </h1>
                <p className="hero-description">
                  When your content needs to power more than one website — or
                  your frontend needs to move faster than a traditional CMS
                  allows — we design headless content systems with clear models,
                  reliable APIs, and editor workflows your team can actually use.
                </p>
                <p className="hero-hook">
                  Decouple with purpose. Publish with confidence.
                </p>
              </div>
              <div className="hero-actions">
                <Link href="/strategy-call" className="btn btn-primary btn-large">
                  Book a Discovery Call<span className="btn-arrow">→</span>
                </Link>
                <Link href="/redesign-migration" className="btn btn-secondary btn-large">
                  Redesign &amp; Migration
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">
                Why Teams Consider <span className="transform-word">Headless</span>
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
                Starting at <strong>$5,000</strong> for focused headless CMS
                engagements. Full platform builds and migrations scoped based on
                content volume, integrations, and frontend complexity.
              </p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">
                Ready to Explore a Headless Content Architecture?
              </h2>
              <div className="cta-actions">
                <Link href="/strategy-call" className="btn btn-primary btn-large">
                  Book a Discovery Call<span className="btn-arrow">→</span>
                </Link>
                <Link href="/rfp" className="btn btn-secondary btn-large">
                  Submit an RFP
                </Link>
              </div>
              <p className="bc-guides">
                Related:{" "}
                <Link href="/react-nextjs-development">React &amp; Next.js</Link>
                {" · "}
                <Link href="/api-integrations">API Integrations</Link>
                {" · "}
                <Link href="/wordpress-studio">WordPress Studio</Link>
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
