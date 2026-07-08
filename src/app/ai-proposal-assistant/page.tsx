import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import {
  faCheck,
  faClockRotateLeft,
  faFileContract,
  faFileInvoiceDollar,
  faFileLines,
  faPenToSquare,
  faRotate,
  faScaleBalanced,
  faTriangleExclamation,
  faTimesCircle,
  faWandMagicSparkles,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";

const problems = [
  {
    icon: faPenToSquare,
    title: "Inconsistent Proposals",
    description:
      "Every new quote starts from scratch or a stale template. Scope, pricing, and language drift between projects, clients, and team members.",
    impact: "Clients notice when numbers do not line up",
  },
  {
    icon: faClockRotateLeft,
    title: "Forgotten Pricing History",
    description:
      "You quoted a similar project eight months ago, but nobody remembers the rate, the discount, or what was actually included.",
    impact: "You underprice, overpromise, or repeat old mistakes",
  },
  {
    icon: faRotate,
    title: "Revision Chaos",
    description:
      "Proposals go through five rounds of edits across email, Slack, and Google Docs. Nobody is sure which version the client signed.",
    impact: "Scope disputes start before the project does",
  },
];

const capabilities = [
  "Generate proposal drafts from your templates and past work",
  "Remember previous pricing for similar scopes and clients",
  "Maintain consistent language across proposals and SOWs",
  "Flag contradictions between new quotes and signed agreements",
  "Build structured statements of work from approved scope",
  "Draft invoices aligned with proposal line items",
  "Suggest relevant upsells based on project context",
  "Track proposal revisions and version history",
];

const faqs = [
  {
    question: "What is the AI Proposal Assistant?",
    answer:
      "It is a Clyra Intelligence module being built for agencies and consultants who write proposals, SOWs, and estimates regularly. The goal is to help you draft faster, remember what you quoted before, and keep documents consistent across clients and projects.",
  },
  {
    question: "Is this available now?",
    answer:
      "Not yet. AI Proposal Assistant is in development as part of Clyra Intelligence. We are building it with agency workflows in mind and running a private beta before wider release. You can get in touch if you want early access or to share how your team handles proposals today.",
  },
  {
    question: "Will it replace my proposal process entirely?",
    answer:
      "No. The system is designed to assist, not automate blindly. You review every draft, adjust pricing, and approve what goes to the client. The value is speed, consistency, and fewer mistakes, not removing human judgment from client-facing documents.",
  },
  {
    question: "How does it connect to other Clyra Intelligence modules?",
    answer:
      "Proposal Assistant is designed to work alongside AI Client Memory, AI Scope Guard, and AI Client Intelligence. Pricing history, signed scope, and client context feed into each other so proposals stay aligned with what you already agreed to.",
  },
  {
    question: "Who is this built for?",
    answer:
      "Agencies, studios, and independent consultants who send custom proposals and SOWs. If your team recreates quotes from memory, loses track of revisions, or sends inconsistent pricing for similar work, this module is being built for that problem.",
  },
];

export const metadata: Metadata = {
  title: "AI Proposal Assistant for Agencies & Consultants | Clyra Intelligence",
  description:
    "Draft proposals, remember pricing history, and keep SOWs consistent. Part of Clyra Intelligence, currently in development at Clyra Studios.",
  keywords:
    "AI proposal assistant, agency proposals, SOW generator, proposal consistency, pricing history, scope of work, Clyra Intelligence, agency operations",
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: { canonical: "/ai-proposal-assistant" },
  openGraph: {
    title: "AI Proposal Assistant for Agencies & Consultants | Clyra Intelligence",
    description:
      "Draft proposals, remember pricing history, and keep SOWs consistent. Part of Clyra Intelligence, currently in development.",
    url: "https://clyrastudios.com/ai-proposal-assistant",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Proposal Assistant",
  description:
    "Clyra Intelligence module in development for agencies and consultants. Designed to draft proposals, remember pricing history, maintain SOW consistency, and track revisions.",
  provider: {
    "@type": "Organization",
    name: "Clyra Studios",
    url: "https://clyrastudios.com",
  },
  areaServed: "US",
  serviceType: "AI Proposal Assistant",
  isRelatedTo: [
    {
      "@type": "Service",
      name: "AI Client Intelligence",
      url: "https://clyrastudios.com/ai-client-intelligence",
    },
    {
      "@type": "Service",
      name: "AI Scope Guard",
      url: "https://clyrastudios.com/ai-scope-guard",
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

export default function AIProposalAssistantPage() {
  return (
    <>
      <Script
        id="ai-proposal-assistant-data"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <Script
        id="ai-proposal-assistant-faq"
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
                  <span className="title-line">Proposals That Remember</span>
                  <span className="title-line highlight">What You Already Quoted</span>
                </h1>
                <p className="hero-description">
                  AI Proposal Assistant is a Clyra Intelligence module being built
                  for agencies and consultants. It is designed to help you draft
                  proposals faster, recall pricing from similar projects, and keep
                  SOWs consistent so you stop reinventing every estimate from scratch.
                </p>
                <p className="hero-hook">
                  Faster drafts. Consistent scope. Fewer pricing surprises.
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
                Proposals Should Not Start{" "}
                <span className="transform-word">From a Blank Page Every Time</span>
              </h2>
              <p className="section-description">
                Most agencies lose margin and credibility in the proposal stage,
                not during delivery. Inconsistent quotes, forgotten pricing, and
                messy revisions create problems before the project even starts.
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
              <h2 className="section-title">What Proposal Assistant Is Being Built to Do</h2>
              <p className="section-description">
                A practical proposal workflow for agencies, not a generic document
                generator. These capabilities are in development as part of Clyra
                Intelligence.
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
              <Link href="/ai-scope-guard">AI Scope Guard</Link>
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
                This is the kind of situation Proposal Assistant is being designed
                to catch before it becomes a client conversation you regret.
              </p>
            </div>
            <div className="included-panel">
              <div className="case-study-story">
                <p>
                  An agency quoted a website redesign and SEO package at $12,500
                  eight months ago. The project wrapped, the client was happy, and
                  the team moved on.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Six months later, the same client asks for a similar scope on a
                  second brand. A different account manager sends a proposal at
                  $9,800 with slightly different deliverables and no reference to
                  the original agreement.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  The client notices the gap. Now the agency is explaining pricing
                  instead of closing the deal. Proposal Assistant is being built to
                  surface prior pricing, flag inconsistencies, and help the team
                  send a quote that matches what the business already established.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="case-studies-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Manual Proposals vs. Connected Intelligence</h2>
              <p className="section-description">
                Most teams manage proposals in disconnected docs and inboxes.
                Clyra Intelligence is being built to connect pricing history,
                scope, and client context in one place.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="godaddy-con">
                <h3 className="text-white font-semibold mb-3">
                  Scattered Docs and Memory
                </h3>
                <ul className="space-y-2">
                  {[
                    "Every proposal starts from a blank doc or old template",
                    "Nobody remembers what you quoted six months ago",
                    "Revisions live in email threads and Slack messages",
                    "SOW language drifts between projects and team members",
                    "Contradictions surface only after the client pushes back",
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
                  AI Proposal Assistant
                </h3>
                <ul className="space-y-2">
                  {[
                    "Draft proposals from templates and past project context",
                    "Recall pricing and scope from similar work",
                    "Keep SOW language consistent across clients",
                    "Track revisions so the signed version is always clear",
                    "Flag contradictions before a quote goes out the door",
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
              <h2 className="section-title">Built for Agency Proposal Workflows</h2>
              <p className="section-description">
                Proposal Assistant connects to the documents and decisions your
                team already makes. These are the workflow areas we are designing
                around during development.
              </p>
            </div>
            <div className="services-grid">
              {[
                {
                  icon: faWandMagicSparkles,
                  title: "Proposal Drafts",
                  description:
                    "Start from structured drafts instead of blank pages. Pull in scope, deliverables, and language that matches how your agency actually works.",
                },
                {
                  icon: faScaleBalanced,
                  title: "Pricing Consistency",
                  description:
                    "See what you charged for similar work before you send a number. Reduce underpricing and awkward client conversations about rate changes.",
                },
                {
                  icon: faFileContract,
                  title: "SOW Generation",
                  description:
                    "Turn approved scope into clear statements of work with consistent terms, milestones, and deliverable language across projects.",
                },
                {
                  icon: faFileInvoiceDollar,
                  title: "Invoice Alignment",
                  description:
                    "Draft invoices that line up with proposal line items so billing matches what the client agreed to in writing.",
                },
                {
                  icon: faArrowTrendUp,
                  title: "Upsell Suggestions",
                  description:
                    "Surface relevant add-ons based on project type and client history. Help account managers spot opportunities without overselling.",
                },
                {
                  icon: faFileLines,
                  title: "Revision Tracking",
                  description:
                    "Keep a clear history of proposal versions so everyone knows what changed, when, and which draft the client actually approved.",
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
                Interested in Early Access to Proposal Assistant?
              </h2>
              <p className="cta-description">
                Clyra Intelligence is in private beta. If inconsistent proposals
                and forgotten pricing are costing your agency time and margin, we
                would like to hear how your team works today.
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
                <Link href="/ai-client-intelligence">AI Client Intelligence</Link>
                {" · "}
                <Link href="/ai-scope-guard">AI Scope Guard</Link>
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
