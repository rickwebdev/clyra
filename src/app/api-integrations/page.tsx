import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import {
  faBolt,
  faDiagramProject,
  faGears,
  faLink,
  faMagnifyingGlass,
  faPlug,
  faRocket,
  faShieldHalved,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const problems = [
  {
    icon: faGears,
    title: "Manual Data Handoffs",
    description:
      "Teams copy leads, orders, and customer data between systems. It's slow, error-prone, and impossible to scale.",
    impact: "Hours lost every week",
  },
  {
    icon: faPlug,
    title: "Tools That Don't Talk",
    description:
      "CRM, website, email, ads, and ops platforms each hold part of the picture with no reliable connection between them.",
    impact: "Fragmented customer view",
  },
  {
    icon: faTriangleExclamation,
    title: "Fragile Zap-Together Stacks",
    description:
      "Ad-hoc automations break silently when APIs change, fields shift, or volume increases.",
    impact: "Automation you can't trust",
  },
  {
    icon: faShieldHalved,
    title: "Security & Reliability Ignored",
    description:
      "API keys in spreadsheets, no error handling, and no documentation: a liability waiting to surface.",
    impact: "Risk hidden in workflows",
  },
];

const capabilities = [
  {
    icon: faDiagramProject,
    title: "Integration Architecture",
    description:
      "Map data flows between your website, CRM, email, payments, and internal tools before writing code.",
  },
  {
    icon: faPlug,
    title: "REST & Webhook Integrations",
    description:
      "Reliable connections to HubSpot, Salesforce, Stripe, Shopify, custom backends, and third-party APIs.",
  },
  {
    icon: faBolt,
    title: "Automation Platforms",
    description:
      "Zapier, Make, n8n, and custom middleware, chosen for maintainability, not novelty.",
  },
  {
    icon: faLink,
    title: "Website & Form Connections",
    description:
      "Lead capture, booking flows, and checkout events routed to the right systems with validation.",
  },
  {
    icon: faShieldHalved,
    title: "Error Handling & Monitoring",
    description:
      "Retries, logging, alerts, and documentation so integrations fail visibly, not quietly.",
  },
  {
    icon: faGears,
    title: "Custom API Development",
    description:
      "When off-the-shelf connectors aren't enough, we build lightweight API layers and endpoints.",
  },
];

const processSteps = [
  {
    icon: faMagnifyingGlass,
    title: "1. Map the Stack",
    description:
      "Current tools, data owners, pain points, and what should happen automatically.",
  },
  {
    icon: faDiagramProject,
    title: "2. Design Data Flows",
    description:
      "Triggers, field mapping, error paths, and security requirements documented upfront.",
  },
  {
    icon: faPlug,
    title: "3. Build & Test",
    description:
      "Integrations implemented with staging validation before production cutover.",
  },
  {
    icon: faRocket,
    title: "4. Document & Support",
    description:
      "Runbooks for your team and optional ongoing maintenance through our automation services.",
  },
];

const faqs = [
  {
    question: "What tools do you integrate?",
    answer:
      "Common stacks include HubSpot, Salesforce, Pipedrive, Stripe, Shopify, WooCommerce, Mailchimp, Klaviyo, Airtable, Google Sheets, Slack, and custom APIs. If it has a documented API, we can usually connect it.",
  },
  {
    question: "Is this the same as business process automation?",
    answer:
      "Overlapping but different emphasis. API integrations focus on connecting systems and data. Business process automation covers broader workflow design, often including integrations as one layer.",
  },
  {
    question: "Do you use no-code tools or custom code?",
    answer:
      "Both, depending on complexity and long-term maintenance. Simple flows may live in Zapier or Make; critical paths often deserve custom code with proper error handling.",
  },
  {
    question: "Can you fix broken integrations?",
    answer:
      "Yes. Rescue engagements are common: auditing what's broken, stabilizing flows, and documenting what was inherited.",
  },
  {
    question: "How do you handle API security?",
    answer:
      "Environment variables, scoped credentials, least-privilege access, and no secrets in client-side code. We document what connects where for your team's security review.",
  },
];

export const metadata: Metadata = {
  title: "API Integrations & System Connections | Clyra Studios",
  description:
    "Custom API integrations connecting websites, CRMs, email, payments, and operations tools. Reliable data flows for businesses that need their stack to work as one system.",
  keywords:
    "API integration services, webhook integration, CRM integration, Zapier development, Make automation, HubSpot integration, Shopify API integration, custom API development",
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: { canonical: "/api-integrations" },
  openGraph: {
    title: "API Integrations | Clyra Studios",
    description:
      "Connect your tools so data flows reliably between website, CRM, and operations.",
    url: "https://clyrastudios.com/api-integrations",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "API Integrations",
  description:
    "API integrations and system connections for business websites and marketing operations.",
  provider: {
    "@type": "Organization",
    name: "Clyra Studios",
    url: "https://clyrastudios.com",
  },
  offers: [
    {
      "@type": "Offer",
      name: "API Integrations",
      priceRange: "$1500+",
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

export default function APIIntegrationsPage() {
  return (
    <>
      <Script
        id="api-integrations-data"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <Script
        id="api-integrations-faq"
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
                  <span className="title-line">API Integrations That Connect</span>
                  <span className="title-line highlight">
                    Your Website to Your Business Systems
                  </span>
                </h1>
                <p className="hero-description">
                  Your website shouldn&apos;t be an island. We build reliable
                  API connections between your site, CRM, email, payments, and
                  operations tools, so leads, customers, and data move where
                  they need to without manual copy-paste.
                </p>
                <p className="hero-hook">
                  Connect the stack. Automate the handoffs.
                </p>
              </div>
              <div className="hero-actions">
                <Link href="/strategy-call" className="btn btn-primary btn-large">
                  Book a Discovery Call<span className="btn-arrow">→</span>
                </Link>
                <Link
                  href="/business-process-automation"
                  className="btn btn-secondary btn-large"
                >
                  Process Automation
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">
                Why Disconnected Systems <span className="transform-word">Cost You</span>
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
                Starting at <strong>$1,500</strong> for focused integration
                work. Multi-system architectures and ongoing automation support
                scoped separately.
              </p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Connect Your Stack?</h2>
              <div className="cta-actions">
                <Link href="/strategy-call" className="btn btn-primary btn-large">
                  Book a Discovery Call<span className="btn-arrow">→</span>
                </Link>
                <Link href="/ai-business-systems" className="btn btn-secondary btn-large">
                  AI Business Systems
                </Link>
              </div>
              <p className="bc-guides">
                Related:{" "}
                <Link href="/business-process-automation">
                  Business Process Automation
                </Link>
                {" · "}
                <Link href="/marketing-technology-consulting">
                  Marketing Technology Consulting
                </Link>
                {" · "}
                <Link href="/ga4-implementation">GA4 Implementation</Link>
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
