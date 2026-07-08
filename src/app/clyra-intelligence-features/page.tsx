import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import {
  faTimeline,
  faFileContract,
  faBrain,
  faShieldHalved,
  faLightbulb,
  faMicrophone,
  faComments,
  faWandMagicSparkles,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    icon: faTimeline,
    title: "Client Timeline",
    description:
      "A chronological view of every client touchpoint: emails, calls, proposals, decisions, and project milestones in one place. Designed so you stop searching five systems to understand where a relationship stands.",
    href: "/ai-client-intelligence",
    linkLabel: "Explore Client Intelligence",
  },
  {
    icon: faFileContract,
    title: "Proposal Assistant",
    description:
      "Draft proposals faster, recall pricing from similar projects, and keep SOW language consistent across clients. Built to prevent the inconsistent quotes and revision chaos that cost agencies margin.",
    href: "/ai-proposal-assistant",
    linkLabel: "Explore Proposal Assistant",
  },
  {
    icon: faBrain,
    title: "Memory",
    description:
      "Persistent client memory: business goals, communication preferences, pricing history, important decisions, and open opportunities. Designed so you pick up a relationship months later without starting from zero.",
    href: "/ai-client-memory",
    linkLabel: "Explore Client Memory",
  },
  {
    icon: faShieldHalved,
    title: "Scope Guard",
    description:
      "Compare new client requests against signed proposals. Detect out-of-scope work before you absorb it. Suggest professional responses when expectations drift from what was agreed to.",
    href: "/ai-scope-guard",
    linkLabel: "Explore Scope Guard",
  },
  {
    icon: faLightbulb,
    title: "Opportunity Intelligence",
    description:
      "Surface upsell and follow-on opportunities based on client history, open items, and prior recommendations. Designed to help you spot revenue you might otherwise miss between engagements.",
    href: "/ai-client-intelligence",
    linkLabel: "Explore Client Intelligence",
  },
  {
    icon: faMicrophone,
    title: "Meeting Notes",
    description:
      "Capture and connect meeting and call notes to the client timeline. Designed so decisions made on a call do not disappear into a notebook or forgotten doc.",
    href: "/ai-client-intelligence",
    linkLabel: "Explore Client Intelligence",
  },
  {
    icon: faComments,
    title: "Communication Intelligence",
    description:
      "Understand communication patterns, tone preferences, and response context across channels. Built to help you write replies that reflect the full relationship, not just the latest email.",
    href: "/ai-client-intelligence",
    linkLabel: "Explore Client Intelligence",
  },
  {
    icon: faWandMagicSparkles,
    title: "AI Recommendations",
    description:
      "Context-aware suggestions for next steps, follow-ups, and client responses based on relationship history. Designed as assistance, not automation. You review and decide what goes out.",
    href: "/ai-client-intelligence",
    linkLabel: "Explore Client Intelligence",
  },
];

const principles = [
  "Built from real agency workflows at Clyra Studios",
  "Human review before anything client-facing goes out",
  "Connected modules, not disconnected tools",
  "Practical client intelligence, not generic AI output",
];

const faqs = [
  {
    question: "Are all Clyra Intelligence features available now?",
    answer:
      "No. Clyra Intelligence is in development. Individual modules like Proposal Assistant, Scope Guard, and Client Memory are being built and tested through a private beta. Capabilities described on this page reflect what we are building toward, not a live product catalog.",
  },
  {
    question: "Do I need every feature?",
    answer:
      "No. Clyra Intelligence is designed as connected modules. Start with the area that causes the most pain: proposals, scope, memory, or communication. Modules are being built to work together when you need them to.",
  },
  {
    question: "How do the features connect?",
    answer:
      "Proposal Assistant draws on Client Memory for pricing history. Scope Guard references signed proposals. The Client Timeline connects communications, meetings, and decisions. Each module feeds context to the others so you have one coherent client view.",
  },
  {
    question: "Is this a CRM?",
    answer:
      "No. Clyra Intelligence is a client intelligence layer for agencies and consultants. It is being built to understand relationships and context, not manage sales pipelines. See our comparison page for how it differs from HubSpot, Salesforce, and traditional CRMs.",
  },
  {
    question: "How do I get access?",
    answer:
      "Contact us to learn about the private beta. We are working with agencies and consultants who want to shape a client intelligence system built from real operational workflows.",
  },
];

export const metadata: Metadata = {
  title: "Clyra Intelligence Features | Clyra Studios",
  description:
    "Overview of Clyra Intelligence features: Client Timeline, Proposal Assistant, Memory, Scope Guard, Opportunity Intelligence, Meeting Notes, Communication Intelligence, and AI Recommendations. In development.",
  keywords:
    "Clyra Intelligence features, client timeline, proposal assistant, scope guard, client memory, agency AI tools, client intelligence platform",
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: { canonical: "/clyra-intelligence-features" },
  openGraph: {
    title: "Clyra Intelligence Features | Clyra Studios",
    description:
      "Client Timeline, Proposal Assistant, Memory, Scope Guard, and more. Clyra Intelligence features for agencies and consultants, currently in development.",
    url: "https://clyrastudios.com/clyra-intelligence-features",
    siteName: "Clyra Studios",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Clyra Intelligence Features Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clyra Intelligence Features | Clyra Studios",
    description:
      "Overview of Clyra Intelligence modules for agencies and consultants. Client memory, scope protection, proposal consistency, and more. In development.",
    images: ["/images/thumbnail.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Clyra Intelligence",
  description:
    "Client intelligence platform in development with modules for client timeline, proposal assistance, client memory, scope guard, opportunity intelligence, meeting notes, communication intelligence, and AI recommendations.",
  provider: {
    "@type": "Organization",
    name: "Clyra Studios",
    url: "https://clyrastudios.com",
    logo: "https://clyrastudios.com/images/clyra_logo.png",
  },
  areaServed: "US",
  serviceType: "Client Intelligence Platform",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Clyra Intelligence Modules",
    itemListElement: features.map((f) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: f.title,
        description: f.description,
        url: `https://clyrastudios.com${f.href}`,
      },
    })),
  },
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

export default function ClyraIntelligenceFeaturesPage() {
  return (
    <>
      <Script
        id="clyra-intelligence-features-data"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <Script
        id="clyra-intelligence-features-faq"
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
                  <span className="title-line">Client Intelligence Modules</span>
                  <span className="title-line highlight">
                    Built for Agency Workflows
                  </span>
                </h1>
                <p className="hero-description">
                  Clyra Intelligence is a set of connected modules being developed
                  for agencies and consultants who lose client context across email,
                  proposals, calls, and project notes. Each feature below addresses
                  a specific operational problem. All are in development.
                </p>
                <p className="hero-hook">
                  Never lose client context again. That is what we are building toward.
                </p>
              </div>
              <div className="hero-actions">
                <Link href="/contact" className="btn btn-primary btn-large">
                  Request Early Access
                  <span className="btn-arrow">→</span>
                </Link>
                <Link href="/ai-client-intelligence" className="btn btn-secondary btn-large">
                  Explore Clyra Intelligence
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">
                Eight Modules,{" "}
                <span className="transform-word">One Connected System</span>
              </h2>
              <p className="section-description">
                Each module solves a specific problem. Together they form a client
                intelligence layer that CRMs and project tools were not designed to
                provide. Capabilities described here are in development.
              </p>
            </div>
            <div className="services-grid">
              {features.map((feature, index) => (
                <div key={index} className="service-card">
                  <div className="service-image">
                    <div className="service-icon">
                      <GradientIcon icon={feature.icon} size="xl" className="primary" />
                    </div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{feature.title}</h3>
                    <p className="service-description">{feature.description}</p>
                    <Link
                      href={feature.href}
                      className="case-study-link"
                      style={{ marginTop: "1rem", display: "inline-block" }}
                    >
                      {feature.linkLabel}
                      <span className="btn-arrow"> →</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <p className="bc-guides" style={{ marginTop: "2rem" }}>
              Clyra Intelligence guides:{" "}
              <Link href="/ai-client-intelligence">AI Client Intelligence</Link>
              {" · "}
              <Link href="/clyra-intelligence-use-cases">Use Cases</Link>
              {" · "}
              <Link href="/clyra-intelligence-comparison">CRM Comparison</Link>
              {" · "}
              <Link href="/ai-agency-operating-system">Agency Operating System</Link>
            </p>
          </div>
        </section>

        <section className="case-studies-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">How the Modules Connect</h2>
              <p className="section-description">
                The value is in the connections. A scope flag draws on the signed
                proposal. A proposal draft recalls client memory. A timeline entry
                links back to the meeting where a decision was made.
              </p>
            </div>
            <div className="included-grid">
              {[
                "Client Timeline connects communications, proposals, and meetings",
                "Proposal Assistant uses Memory for pricing and scope consistency",
                "Scope Guard references signed agreements from Proposal Assistant",
                "Opportunity Intelligence surfaces items from Memory and Timeline",
                "Communication Intelligence draws on preferences stored in Memory",
                "AI Recommendations use full client context across all modules",
              ].map((item) => (
                <div key={item} className="included-item">
                  <GradientIcon icon={faCheck} size="sm" className="success" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Built With Intention</h2>
              <p className="section-description">
                Clyra Intelligence is being developed inside Clyra Studios from
                workflows we use with clients every day. These principles guide
                every module.
              </p>
            </div>
            <div className="services-grid">
              {principles.map((principle, index) => (
                <div key={index} className="service-card">
                  <div className="service-content">
                    <div className="feature-item" style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                      <GradientIcon icon={faCheck} size="sm" className="success" />
                      <p className="service-description" style={{ margin: 0 }}>{principle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>
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

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Want to Learn More?</h2>
              <p className="cta-description">
                Clyra Intelligence is in development. If client context, scope
                protection, or proposal consistency are problems in your workflow,
                we would like to hear from you.
              </p>
              <div className="cta-actions">
                <Link href="/contact" className="btn btn-primary btn-large">
                  Get in Touch
                  <span className="btn-arrow">→</span>
                </Link>
                <Link href="/clyra-intelligence-use-cases" className="btn btn-secondary btn-large">
                  View Use Cases
                </Link>
              </div>
              <p className="bc-guides">
                Related:{" "}
                <Link href="/ai-proposal-assistant">Proposal Assistant</Link>
                {" · "}
                <Link href="/ai-scope-guard">Scope Guard</Link>
                {" · "}
                <Link href="/ai-client-memory">Client Memory</Link>
                {" · "}
                <Link href="/clyra-intelligence-comparison">CRM Comparison</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
