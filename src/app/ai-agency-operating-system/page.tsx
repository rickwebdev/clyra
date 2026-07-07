import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import ClyraIntelligenceBadge from "@/components/ClyraIntelligenceBadge";
import {
  faBrain,
  faCheck,
  faDatabase,
  faDiagramProject,
  faLayerGroup,
  faListCheck,
  faMagnifyingGlass,
  faShieldHalved,
  faSitemap,
  faTimesCircle,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

const problems = [
  {
    icon: faDatabase,
    title: "CRMs Store Records, Not Context",
    description:
      "Your CRM knows the company name and deal stage. It does not know what was promised on a call, what the client prefers, or why the last project went sideways.",
    impact: "Data without understanding",
  },
  {
    icon: faListCheck,
    title: "Project Tools Track Tasks, Not Relationships",
    description:
      "Project management keeps work moving, but it does not connect tasks to pricing history, scope boundaries, or the full communication timeline.",
    impact: "Execution without memory",
  },
  {
    icon: faLayerGroup,
    title: "Notes Apps Fragment Everything",
    description:
      "Notion docs, sticky notes, and random spreadsheets hold pieces of the story. None of them stay current or talk to each other.",
    impact: "Documentation that goes stale",
  },
  {
    icon: faSitemap,
    title: "Too Many Tools, No Single View",
    description:
      "Email, texting, invoicing, proposals, and calls each live in their own silo. Switching between them is how agencies lose time and context.",
    impact: "Operational overhead on every account",
  },
];

const connections = [
  "Email and inbox threads",
  "Text message conversations",
  "Phone and video call notes",
  "Proposals and SOWs",
  "Invoices and payment history",
  "CRM contact and deal records",
  "Project management tasks",
  "Meeting notes and action items",
  "Internal team discussions",
  "Client timeline and activity feed",
];

const crmComparison = {
  traditional: [
    "Stores contact fields and pipeline stages",
    "Requires manual updates after every conversation",
    "Does not understand scope or pricing history",
    "No memory across email, text, and calls",
    "Built for sales teams, not service delivery",
  ],
  clyra: [
    "Understands relationships, not just records",
    "Builds context from how you actually work",
    "Connects proposals, scope, and communication",
    "Surfaces memory before every client interaction",
    "Built for agencies, consultants, and service providers",
  ],
};

const faqs = [
  {
    question: "What is an AI Agency Operating System?",
    answer:
      "An intelligent workspace that connects client communication, proposals, scope, memory, and opportunities into one system. It goes beyond CRM, project management, and note taking by understanding context across all of them.",
  },
  {
    question: "Is this a replacement for HubSpot, Monday, or Notion?",
    answer:
      "Not necessarily. Clyra Intelligence is designed to sit above the tools you already use, connecting context that those tools were never built to share. Many teams will keep their CRM and PM tools while adding an intelligence layer.",
  },
  {
    question: "How is this different from ChatGPT for agencies?",
    answer:
      "Generic AI chat tools do not know your clients, your pricing history, or your signed scope. Clyra Intelligence is built around persistent client memory and operational workflows, not open-ended prompts.",
  },
  {
    question: "Is the Agency Operating System live?",
    answer:
      "It is currently in development at Clyra Studios and available through select private beta engagements. We are building it from real agency workflows before opening general access.",
  },
  {
    question: "Who is this for?",
    answer:
      "Marketing agencies, web studios, SEO consultants, fractional operators, freelancers, developers, and creative teams who manage ongoing client relationships across multiple channels and tools.",
  },
];

export const metadata: Metadata = {
  title: "AI Agency Operating System | Clyra Intelligence",
  description:
    "Beyond CRM, beyond project management, beyond note taking. One intelligent workspace for agencies and consultants. Clyra Intelligence, currently in development.",
  keywords:
    "AI agency operating system, agency intelligence platform, client intelligence, agency CRM alternative, consultant workspace, Clyra Intelligence",
  authors: [{ name: "Clyra Studios" }],
  creator: "Clyra Studios",
  publisher: "Clyra Studios",
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: {
    canonical: "/ai-agency-operating-system",
  },
  openGraph: {
    title: "AI Agency Operating System | Clyra Intelligence",
    description:
      "One intelligent workspace beyond CRM, project management, and note taking. Built for agencies, currently in private beta.",
    url: "https://clyrastudios.com/ai-agency-operating-system",
    siteName: "Clyra Studios",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Clyra Intelligence - AI Agency Operating System",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agency Operating System | Clyra Intelligence",
    description:
      "One intelligent workspace for agencies. Beyond CRM, PM, and notes. Currently in development.",
    images: ["/images/thumbnail.png"],
    creator: "@clyrastudios",
    site: "@clyrastudios",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Agency Operating System",
  description:
    "An intelligent workspace for agencies and consultants that connects client communication, proposals, scope intelligence, client memory, and opportunity tracking beyond traditional CRM and project management tools.",
  provider: {
    "@type": "Organization",
    name: "Clyra Studios",
    url: "https://clyrastudios.com",
    logo: "https://clyrastudios.com/images/clyra_logo.png",
  },
  areaServed: "US",
  serviceType: "Agency Operating System",
  category: "Clyra Intelligence",
  isRelatedTo: [
    {
      "@type": "Service",
      name: "Clyra Intelligence",
      url: "https://clyrastudios.com/ai-client-intelligence",
    },
    {
      "@type": "Service",
      name: "AI Client Memory",
      url: "https://clyrastudios.com/ai-client-memory",
    },
    {
      "@type": "Service",
      name: "AI Proposal Assistant",
      url: "https://clyrastudios.com/ai-proposal-assistant",
    },
    {
      "@type": "Service",
      name: "AI Scope Guard",
      url: "https://clyrastudios.com/ai-scope-guard",
    },
  ],
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function AIAgencyOperatingSystemPage() {
  return (
    <>
      <Script
        id="ai-agency-os-structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <Script
        id="ai-agency-os-faq-data"
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
              <ClyraIntelligenceBadge />
              <div className="hero-headlines">
                <h1 className="hero-title">
                  <span className="title-line">AI Agency Operating System</span>
                  <span className="title-line highlight">
                    One Intelligent Workspace
                  </span>
                </h1>
                <p className="hero-description">
                  Beyond CRM. Beyond project management. Beyond note taking.
                  Clyra Intelligence connects how you communicate, quote, deliver,
                  and grow client relationships into one system that actually
                  understands context.
                </p>
                <p className="hero-hook">
                  Built from real agency workflows. Currently in private beta.
                </p>
              </div>

              <div className="hero-actions">
                <Link href="/contact" className="btn btn-primary btn-large">
                  Request Early Access
                  <span className="btn-arrow">→</span>
                </Link>
                <Link href="#architecture" className="btn btn-secondary btn-large">
                  See the Architecture
                </Link>
              </div>

              <div className="trust-signals">
                <div className="trust-item">
                  <GradientIcon icon={faDiagramProject} size="sm" className="primary" />
                  <span className="trust-text">Connected Workspace</span>
                </div>
                <div className="trust-item">
                  <GradientIcon icon={faBrain} size="sm" className="success" />
                  <span className="trust-text">Client Intelligence</span>
                </div>
                <div className="trust-item">
                  <GradientIcon icon={faShieldHalved} size="sm" className="warning" />
                  <span className="trust-text">Scope Protection</span>
                </div>
                <div className="trust-item">
                  <GradientIcon icon={faLightbulb} size="sm" className="primary" />
                  <span className="trust-text">Opportunity Tracking</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball services-ball-1"></div>
            <div className="section-floating-ball services-ball-2"></div>
            <div className="section-floating-ball services-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">
                Your Tools Were Built for{" "}
                <span className="transform-word">Different Jobs</span>
              </h2>
              <p className="section-description">
                CRMs track deals. Project tools track tasks. Note apps hold
                fragments. None of them were designed to understand a client
                relationship over time.
              </p>
            </div>

            <div className="services-grid">
              {problems.map((item, index) => {
                const animationClass =
                  index === 0
                    ? "float-in-left"
                    : index === 1
                    ? "float-in-center"
                    : index === 2
                    ? "float-in-right"
                    : "float-in-bottom-right";
                return (
                  <div key={index} className={`service-card ${animationClass}`}>
                    <div className="service-image">
                      <div className="service-icon">
                        <GradientIcon
                          icon={item.icon}
                          size="xl"
                          className="primary"
                        />
                      </div>
                    </div>
                    <div className="service-content">
                      <h3 className="service-title">{item.title}</h3>
                      <p className="service-description">{item.description}</p>
                      <div className="impact-badge">
                        <span className="impact-text">{item.impact}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="architecture" className="case-studies-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball case-studies-ball-1"></div>
            <div className="section-floating-ball case-studies-ball-2"></div>
            <div className="section-floating-ball case-studies-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">How Clyra Intelligence Connects</h2>
              <p className="section-description">
                Client communication flows in. Intelligence flows out. One system
                that understands the full relationship.
              </p>
            </div>

            <div className="ci-architecture">
              <div className="ci-architecture-row">
                <div className="ci-architecture-node">
                  <h4>Email</h4>
                  <p>Threads, decisions, and commitments</p>
                </div>
                <div className="ci-architecture-node">
                  <h4>Text</h4>
                  <p>Quick approvals and preferences</p>
                </div>
                <div className="ci-architecture-node">
                  <h4>Calls</h4>
                  <p>Meeting notes and verbal agreements</p>
                </div>
                <div className="ci-architecture-node">
                  <h4>Proposals</h4>
                  <p>Scope, pricing, and signed terms</p>
                </div>
                <div className="ci-architecture-node">
                  <h4>Invoices</h4>
                  <p>Billing history and payment context</p>
                </div>
              </div>

              <div className="ci-architecture-arrow" aria-hidden="true">
                ↓
              </div>

              <div className="ci-architecture-row">
                <div className="ci-architecture-node ci-architecture-core">
                  <h4>Clyra Intelligence</h4>
                  <p>
                    Understands relationships across every channel and surfaces
                    context when you need it
                  </p>
                </div>
              </div>

              <div className="ci-architecture-arrow" aria-hidden="true">
                ↓
              </div>

              <div className="ci-architecture-row">
                <div className="ci-architecture-node">
                  <h4>
                    <Link href="/ai-client-memory">Client Memory</Link>
                  </h4>
                  <p>Goals, preferences, and relationship history</p>
                </div>
                <div className="ci-architecture-node">
                  <h4>
                    <Link href="/ai-proposal-assistant">Proposal Intelligence</Link>
                  </h4>
                  <p>Consistent pricing and SOW drafting</p>
                </div>
                <div className="ci-architecture-node">
                  <h4>
                    <Link href="/ai-scope-guard">Scope Guard</Link>
                  </h4>
                  <p>Out-of-scope detection and protection</p>
                </div>
                <div className="ci-architecture-node">
                  <h4>Opportunity Tracking</h4>
                  <p>Follow-ups, upsells, and open conversations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball services-ball-1"></div>
            <div className="section-floating-ball services-ball-2"></div>
            <div className="section-floating-ball services-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">What It Connects</h2>
              <p className="section-description">
                Clyra Intelligence is designed to sit above the tools you
                already use, not replace them overnight.
              </p>
            </div>

            <div className="included-panel">
              <div className="included-grid">
                {connections.map((item, index) => (
                  <div key={index} className="included-item">
                    <GradientIcon
                      icon={faDiagramProject}
                      size="sm"
                      className="primary"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="bc-note">
                <GradientIcon icon={faMagnifyingGlass} size="sm" className="warning" />
                <span>
                  See the full feature set on our{" "}
                  <Link href="/clyra-intelligence-features">
                    Clyra Intelligence features page
                  </Link>
                  {" "}or explore{" "}
                  <Link href="/clyra-intelligence-use-cases">use cases</Link>
                  {" "}for your type of agency.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="case-studies-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">
                Traditional CRMs Store Data. Clyra Intelligence Understands Context.
              </h2>
              <p className="section-description">
                The difference is not more fields. It is a system built for how
                agencies and consultants actually work with clients.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="godaddy-con">
                <h3 className="text-white font-semibold mb-3">
                  CRM, PM, and Note Tools
                </h3>
                <ul className="space-y-2">
                  {crmComparison.traditional.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <GradientIcon icon={faTimesCircle} size="sm" className="danger" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="dreamhost-pro">
                <h3 className="text-white font-semibold mb-3">
                  Clyra Intelligence Agency OS
                </h3>
                <ul className="space-y-2">
                  {crmComparison.clyra.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <GradientIcon icon={faCheck} size="sm" className="success" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="bc-guides" style={{ marginTop: "2rem" }}>
              Detailed comparisons:{" "}
              <Link href="/clyra-intelligence-comparison">
                Clyra Intelligence vs HubSpot, Salesforce, Monday, and Notion
              </Link>
            </p>
          </div>
        </section>

        <section className="faq-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball faq-ball-1"></div>
            <div className="section-floating-ball faq-ball-2"></div>
            <div className="section-floating-ball faq-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">
                Agency Operating System: Common Questions
              </h2>
              <p className="section-description">
                What we are building, who it is for, and how it fits your stack.
              </p>
            </div>

            <div className="faq-grid">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="faq-item"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <h3 className="faq-question">{faq.question}</h3>
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball cta-ball-1"></div>
            <div className="section-floating-ball cta-ball-2"></div>
            <div className="section-floating-ball cta-ball-3"></div>
          </div>
          <div className="container">
            <div className="cta-content" data-aos="fade-up">
              <h2 className="cta-title">
                One Workspace for How You Actually Run Client Relationships
              </h2>
              <p className="cta-description">
                Clyra Intelligence Agency Operating System is in development and
                available for select consulting engagements. Tell us where your
                team loses context today.
              </p>
              <div className="cta-actions">
                <Link href="/contact" className="btn btn-primary btn-large">
                  Request Early Access
                  <span className="btn-arrow">→</span>
                </Link>
                <Link
                  href="/ai-client-intelligence"
                  className="btn btn-secondary btn-large"
                >
                  View Clyra Intelligence
                </Link>
              </div>
              <p className="bc-guides">
                Explore Clyra Intelligence:{" "}
                <Link href="/ai-client-intelligence">Overview</Link>
                {" · "}
                <Link href="/ai-client-memory">Client Memory</Link>
                {" · "}
                <Link href="/ai-proposal-assistant">Proposal Assistant</Link>
                {" · "}
                <Link href="/ai-scope-guard">Scope Guard</Link>
                {" · "}
                <Link href="/clyra-intelligence-features">Features</Link>
                {" · "}
                <Link href="/clyra-intelligence-use-cases">Use Cases</Link>
                {" · "}
                <Link href="/clyra-intelligence-comparison">Comparisons</Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
