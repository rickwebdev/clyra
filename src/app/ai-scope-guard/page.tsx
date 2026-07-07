import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import ClyraIntelligenceBadge from "@/components/ClyraIntelligenceBadge";
import {
  faCheck,
  faComments,
  faFileContract,
  faMagnifyingGlass,
  faShieldHalved,
  faTriangleExclamation,
  faTimesCircle,
  faScaleBalanced,
  faBan,
  faChartLine,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const problems = [
  {
    icon: faTriangleExclamation,
    title: "Scope Creep",
    description:
      "Small requests pile up. A quick favicon change becomes a layout overhaul. What started as a defined project quietly turns into unpaid work.",
    impact: "Margins shrink while the project stays on the same budget",
  },
  {
    icon: faBan,
    title: "Unpaid Work",
    description:
      "Your team delivers extra rounds of revisions, new pages, and feature requests because saying no feels harder than just doing it.",
    impact: "You eat the cost and train clients to ask for more",
  },
  {
    icon: faFileContract,
    title: "Vague Boundaries",
    description:
      "The signed proposal said SEO. The client now wants a homepage redesign. Nobody checked whether that was in scope before the work started.",
    impact: "Disputes start late, when they are hardest to fix",
  },
];

const capabilities = [
  "Detect scope creep as client requests come in",
  "Compare new requests against signed proposals and SOWs",
  "Flag work that falls outside agreed deliverables",
  "Suggest professional responses for out-of-scope asks",
  "Help protect agency profitability on active projects",
];

const faqs = [
  {
    question: "What is AI Scope Guard?",
    answer:
      "It is a Clyra Intelligence module in development for agencies that need to protect scope on active projects. The goal is to compare client requests against signed proposals, flag out-of-scope work early, and help your team respond professionally before unpaid labor starts.",
  },
  {
    question: "Is Scope Guard available today?",
    answer:
      "Not yet. It is part of Clyra Intelligence, which is currently in development with a private beta. We are building it for real agency workflows where scope creep is a recurring profitability problem.",
  },
  {
    question: "Does it automatically reject client requests?",
    answer:
      "No. Scope Guard is designed to flag and suggest, not to send messages on your behalf without review. Your team decides how to respond. The system helps you see the scope gap clearly and draft a professional reply when needed.",
  },
  {
    question: "What does it compare requests against?",
    answer:
      "Signed proposals, statements of work, and related project documents stored in Clyra Intelligence. The idea is to give your team a reference point so every new ask is checked against what was actually agreed to.",
  },
  {
    question: "How does it connect to Proposal Assistant and Client Memory?",
    answer:
      "Scope Guard is designed to work alongside AI Proposal Assistant and AI Client Memory. Proposals define the boundary. Client Memory holds the context. Scope Guard watches what comes in after the deal is signed.",
  },
];

export const metadata: Metadata = {
  title: "AI Scope Guard for Agencies | Clyra Intelligence",
  description:
    "Detect scope creep, compare client requests to signed proposals, and protect agency profitability. Clyra Intelligence, in development.",
  keywords:
    "AI scope guard, scope creep detection, agency scope management, out of scope work, proposal comparison, Clyra Intelligence, agency profitability",
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: { canonical: "/ai-scope-guard" },
  openGraph: {
    title: "AI Scope Guard for Agencies | Clyra Intelligence",
    description:
      "Detect scope creep, compare client requests to signed proposals, and protect agency profitability. Clyra Intelligence, in development.",
    url: "https://clyrastudios.com/ai-scope-guard",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Scope Guard",
  description:
    "Clyra Intelligence module in development for agencies. Designed to detect scope creep, compare client requests to signed proposals, and protect agency profitability.",
  provider: {
    "@type": "Organization",
    name: "Clyra Studios",
    url: "https://clyrastudios.com",
  },
  areaServed: "US",
  serviceType: "AI Scope Guard",
  isRelatedTo: [
    {
      "@type": "Service",
      name: "AI Proposal Assistant",
      url: "https://clyrastudios.com/ai-proposal-assistant",
    },
    {
      "@type": "Service",
      name: "AI Client Intelligence",
      url: "https://clyrastudios.com/ai-client-intelligence",
    },
    {
      "@type": "Service",
      name: "AI Client Memory",
      url: "https://clyrastudios.com/ai-client-memory",
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

export default function AIScopeGuardPage() {
  return (
    <>
      <Script
        id="ai-scope-guard-data"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <Script
        id="ai-scope-guard-faq"
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
                <ClyraIntelligenceBadge />
                <h1 className="hero-title">
                  <span className="title-line">Catch Scope Creep</span>
                  <span className="title-line highlight">Before It Costs You</span>
                </h1>
                <p className="hero-description">
                  AI Scope Guard is a Clyra Intelligence module being built for
                  agencies tired of delivering work that was never in the proposal.
                  It is designed to compare client requests against signed scope,
                  flag out-of-scope asks, and help your team respond before unpaid
                  hours pile up.
                </p>
                <p className="hero-hook">
                  Clear boundaries. Professional responses. Protected margins.
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
                Scope Problems Do Not Start{" "}
                <span className="transform-word">During Delivery</span>
              </h2>
              <p className="section-description">
                They start when nobody checks a client request against what was
                signed. By the time the team notices, the extra work is already
                underway and the conversation gets uncomfortable.
              </p>
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
              <h2 className="section-title">What Scope Guard Is Being Built to Do</h2>
              <p className="section-description">
                A scope protection layer for active projects, not a project
                management replacement. These capabilities are in development as
                part of Clyra Intelligence.
              </p>
            </div>
            <div className="included-grid">
              {capabilities.map((item) => (
                <div key={item} className="included-item">
                  <GradientIcon icon={faCheck} size="sm" className="success" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="bc-guides" style={{ marginTop: "2rem" }}>
              Part of{" "}
              <Link href="/ai-client-intelligence">AI Client Intelligence</Link>
              {" · "}
              <Link href="/ai-proposal-assistant">AI Proposal Assistant</Link>
              {" · "}
              <Link href="/ai-client-memory">AI Client Memory</Link>
              {" · "}
              <Link href="/clyra-intelligence-features">All Clyra Intelligence Features</Link>
            </p>
          </div>
        </section>

        <section className="case-studies-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">A Real Example</h2>
              <p className="section-description">
                This is the kind of request Scope Guard is being designed to flag
                before your team starts work that was never part of the deal.
              </p>
            </div>
            <div className="included-panel">
              <div className="case-study-story">
                <p>
                  An agency signed a six-month SEO retainer with a local services
                  client. The proposal covered technical audits, on-page
                  optimization, content recommendations, and monthly reporting.
                  No design or development work was included.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Four months in, the client emails asking for a full homepage
                  redesign with new hero imagery, updated service sections, and a
                  revised mobile layout. The account manager forwards it to the
                  dev team as a quick favor.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Scope Guard is being built to catch that gap immediately: compare
                  the request to the signed SEO proposal, flag the redesign as
                  out of scope, and suggest a professional response with a
                  separate estimate before anyone spends a billable hour on unpaid
                  work.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="case-studies-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Reacting Late vs. Catching It Early</h2>
              <p className="section-description">
                Most agencies handle scope creep after the work is done. Clyra
                Intelligence is being built to surface the problem when the
                request arrives.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="godaddy-con">
                <h3 className="text-white font-semibold mb-3">
                  Without Scope Protection
                </h3>
                <ul className="space-y-2">
                  {[
                    "Client requests get forwarded before anyone checks scope",
                    "Teams absorb extra work to avoid an awkward conversation",
                    "Signed proposals sit in inboxes nobody references",
                    "Out-of-scope tasks show up on invoices as surprises",
                    "Profitability drops project by project",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <GradientIcon icon={faTimesCircle} size="sm" className="danger" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="dreamhost-pro">
                <h3 className="text-white font-semibold mb-3">
                  AI Scope Guard (In Development)
                </h3>
                <ul className="space-y-2">
                  {[
                    "Compare each request against signed proposals and SOWs",
                    "Flag out-of-scope work before delivery starts",
                    "Suggest clear, professional client responses",
                    "Keep the team aligned on what was actually sold",
                    "Protect margins without damaging client relationships",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <GradientIcon icon={faCheck} size="sm" className="success" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">How Scope Guard Fits Your Workflow</h2>
              <p className="section-description">
                Scope protection works best when it connects to the documents and
                context your team already relies on. These are the areas we are
                designing around during development.
              </p>
            </div>
            <div className="services-grid">
              {[
                {
                  icon: faMagnifyingGlass,
                  title: "Scope Creep Detection",
                  description:
                    "Identify when a client request goes beyond what was defined in the signed agreement, before your team starts the work.",
                },
                {
                  icon: faScaleBalanced,
                  title: "Proposal Comparison",
                  description:
                    "Check incoming asks against the original proposal and SOW so everyone works from the same definition of what was sold.",
                },
                {
                  icon: faShieldHalved,
                  title: "Out-of-Scope Alerts",
                  description:
                    "Get a clear signal when a task falls outside agreed deliverables, with enough context for account managers to act quickly.",
                },
                {
                  icon: faComments,
                  title: "Response Suggestions",
                  description:
                    "Draft professional replies that acknowledge the request, explain the scope boundary, and open the door to a change order or new estimate.",
                },
                {
                  icon: faChartLine,
                  title: "Profitability Protection",
                  description:
                    "Stop absorbing unpaid work by default. Give your team the confidence to protect margins without sounding defensive.",
                },
                {
                  icon: faEnvelope,
                  title: "Request Context",
                  description:
                    "See the client request alongside the relevant signed scope so the scope conversation starts with facts, not memory.",
                },
              ].map((item, i) => (
                <div key={i} className="service-card">
                  <div className="service-image">
                    <div className="service-icon">
                      <GradientIcon icon={item.icon} size="xl" className="primary" />
                    </div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{item.title}</h3>
                    <p className="service-description">{item.description}</p>
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
              <h2 className="cta-title">
                Tired of Absorbing Work That Was Never in the Proposal?
              </h2>
              <p className="cta-description">
                Clyra Intelligence is in private beta. If scope creep is eating
                your margins, we would like to hear how your agency handles
                client requests today.
              </p>
              <div className="cta-actions">
                <Link href="/contact" className="btn btn-primary btn-large">
                  Get in Touch
                  <span className="btn-arrow">→</span>
                </Link>
                <Link href="/ai-client-intelligence" className="btn btn-secondary btn-large">
                  Explore Clyra Intelligence
                </Link>
              </div>
              <p className="bc-guides">
                Related:{" "}
                <Link href="/ai-proposal-assistant">AI Proposal Assistant</Link>
                {" · "}
                <Link href="/ai-client-intelligence">AI Client Intelligence</Link>
                {" · "}
                <Link href="/ai-client-memory">AI Client Memory</Link>
                {" · "}
                <Link href="/clyra-intelligence-features">Clyra Intelligence Features</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
