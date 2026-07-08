import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import {
  faBrain,
  faChartLine,
  faCheck,
  faClipboardList,
  faEnvelope,
  faFileContract,
  faHandshake,
  faListCheck,
  faPhone,
  faShieldHalved,
  faTimeline,
  faTriangleExclamation,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

const contextProblems = [
  {
    icon: faEnvelope,
    title: "Email Threads Nobody Re-reads",
    description:
      "Important decisions live in inboxes. Six months later, nobody remembers what was agreed to or who approved the exception.",
    impact: "Promises get forgotten",
  },
  {
    icon: faPhone,
    title: "Call Notes That Never Connect",
    description:
      "You take notes on a call, then they sit in a doc, a CRM field, or nowhere at all. The next conversation starts from zero.",
    impact: "Clients repeat themselves",
  },
  {
    icon: faFileContract,
    title: "Proposals That Drift From Reality",
    description:
      "The signed SOW said one thing. The client's latest request assumes another. Your team is caught in the middle.",
    impact: "Scope disputes and unpaid work",
  },
  {
    icon: faTriangleExclamation,
    title: "Expectations Without a Paper Trail",
    description:
      "A quick text, a Slack message, a verbal yes on a call. None of it ties back to what was quoted, excluded, or recommended.",
    impact: "Trust erodes on both sides",
  },
];

const features = [
  {
    icon: faBrain,
    title: "Client Memory",
    description:
      "Persistent context across projects: goals, preferences, pricing history, and decisions that matter for the next conversation.",
    href: "/ai-client-memory",
  },
  {
    icon: faTimeline,
    title: "Communication Timeline",
    description:
      "A chronological view of emails, messages, calls, proposals, and notes tied to each client relationship.",
    href: "/clyra-intelligence-features",
  },
  {
    icon: faFileContract,
    title: "Proposal Intelligence",
    description:
      "Draft proposals with awareness of what you quoted before, what was signed, and what language stayed consistent.",
    href: "/ai-proposal-assistant",
  },
  {
    icon: faShieldHalved,
    title: "Scope Guard",
    description:
      "Compare new client requests against signed scope. Flag out-of-scope work and suggest professional responses.",
    href: "/ai-scope-guard",
  },
  {
    icon: faHandshake,
    title: "Relationship History",
    description:
      "See how the engagement evolved: projects delivered, open opportunities, past recommendations, and unresolved items.",
    href: "/clyra-intelligence-features",
  },
  {
    icon: faWandMagicSparkles,
    title: "AI Reply Assistant",
    description:
      "Draft replies grounded in client history, tone preferences, and what was already promised. You review before sending.",
    href: "/clyra-intelligence-features",
  },
  {
    icon: faClipboardList,
    title: "Meeting & Call Notes",
    description:
      "Capture decisions and action items from calls, then connect them to the client record instead of a forgotten doc.",
    href: "/clyra-intelligence-features",
  },
  {
    icon: faListCheck,
    title: "Action Items",
    description:
      "Track follow-ups, deliverables, and open questions so nothing falls through after a busy week.",
    href: "/clyra-intelligence-features",
  },
  {
    icon: faChartLine,
    title: "Client Timeline",
    description:
      "One view of the full relationship: first contact, proposals, projects, scope changes, and current status.",
    href: "/clyra-intelligence-features",
  },
];

const benefits = [
  "Stop re-explaining context every time a client returns",
  "Protect margin by catching scope creep early",
  "Keep proposals and pricing consistent across your team",
  "Reply faster with drafts that reflect real history",
  "Onboard team members without losing institutional knowledge",
  "Turn scattered communication into a usable client record",
];

const faqs = [
  {
    question: "What is Clyra Intelligence?",
    answer:
      "Clyra Intelligence is an AI-powered client intelligence platform we are building at Clyra Studios. It is designed to act as a second brain for agencies and consultants: remembering context, connecting communication history, and helping you respond with awareness of what was promised, quoted, and excluded.",
  },
  {
    question: "Is this a CRM?",
    answer:
      "No. CRMs store contacts, deals, and fields. Clyra Intelligence is being built to understand relationships: what was said, what was agreed to, what changed, and what still needs follow-up. It is complementary to tools you may already use, not a replacement pitch for another database.",
  },
  {
    question: "Is Clyra Intelligence available now?",
    answer:
      "It is currently in development with a private beta. We are building it from real client workflows inside Clyra Studios and select consulting engagements. You can contact us if you want early access or to share how your team manages client context today.",
  },
  {
    question: "How is this different from ChatGPT?",
    answer:
      "General AI tools do not know your clients, your signed proposals, or your pricing history. Clyra Intelligence is being designed around persistent client memory and operational context for agencies, not one-off prompts in a blank chat window.",
  },
  {
    question: "Who is it for?",
    answer:
      "Marketing agencies, web agencies, SEO consultants, fractional operators, freelancers, developers, and creative teams who juggle multiple clients and lose context across email, text, calls, proposals, and project discussions.",
  },
  {
    question: "What modules are part of Clyra Intelligence?",
    answer:
      "The platform includes AI Client Memory, AI Proposal Assistant, AI Scope Guard, and an agency operating system view that connects communication, proposals, and relationship history. Explore the feature overview for the full module list.",
  },
  {
    question: "Will AI send messages without my approval?",
    answer:
      "No. The system is being built with human review by default. AI assists with drafts, summaries, and recommendations. You decide what gets sent, quoted, or committed.",
  },
];

export const metadata: Metadata = {
  title: "AI Client Intelligence for Agencies & Consultants | Clyra Intelligence",
  description:
    "Never lose client context again. Clyra Intelligence is an AI-powered client intelligence platform for agencies and consultants. Built from real workflows, currently in development.",
  keywords:
    "AI client intelligence, agency client memory, scope creep prevention, proposal intelligence, client context platform, consultant CRM alternative, agency operating system",
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: { canonical: "/ai-client-intelligence" },
  openGraph: {
    title: "AI Client Intelligence | Clyra Intelligence",
    description:
      "Never lose client context again. Client memory, proposal intelligence, scope guard, and relationship history for agencies and consultants.",
    url: "https://clyrastudios.com/ai-client-intelligence",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Clyra Intelligence",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "AI-powered client intelligence platform for agencies and consultants. Client memory, proposal intelligence, scope guard, and relationship history.",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/PreOrder",
    price: "0",
    priceCurrency: "USD",
  },
  provider: {
    "@type": "Organization",
    name: "Clyra Studios",
    url: "https://clyrastudios.com",
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

export default function AIClientIntelligencePage() {
  return (
    <>
      <Script
        id="clyra-intelligence-data"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <Script
        id="clyra-intelligence-faq"
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
                  <span className="title-line">Never Lose</span>
                  <span className="title-line highlight">Client Context Again</span>
                </h1>
                <p className="hero-description">
                  Clyra Intelligence is an AI-powered client intelligence platform
                  for agencies and consultants. It connects email, calls, proposals,
                  notes, and project history into one relationship-aware workspace.
                  Built from real operational pain inside Clyra Studios.
                </p>
                <p className="hero-hook">
                  Traditional CRMs store data. Clyra Intelligence understands
                  relationships.
                </p>
              </div>
              <div className="hero-actions">
                <Link href="/contact" className="btn btn-primary btn-large">
                  Get in Touch
                  <span className="btn-arrow">→</span>
                </Link>
                <Link
                  href="/clyra-intelligence-features"
                  className="btn btn-secondary btn-large"
                >
                  Explore Features
                </Link>
              </div>
              <div className="ci-example-callout">
                <p>
                  <strong>Real scenario we are designing for:</strong> A client asks
                  six months later for a homepage redesign. Clyra Intelligence
                  surfaces that the signed proposal only included SEO and content
                  support. The system suggests a professional reply and recommends
                  creating a separate estimate instead of absorbing the work silently.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">
                How Agencies and Consultants{" "}
                <span className="transform-word">Lose Context</span>
              </h2>
              <p className="section-description">
                Consultants, freelancers, agencies, and digital service providers
                communicate across email, text, phone, proposals, invoices, notes,
                and project threads. Over time, the full picture fragments. People
                forget what was promised, quoted, excluded, recommended, or agreed
                to on a call.
              </p>
            </div>
            <div className="services-grid">
              {contextProblems.map((p, i) => (
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
              <h2 className="section-title">Fragmented Communication Adds Up</h2>
              <p className="section-description">
                Scope creep, inconsistent proposals, and mismatched client
                expectations are rarely caused by bad intent. They happen when
                context lives in too many places and nobody has the full picture
                before replying.
              </p>
            </div>
            <div className="included-grid">
              {[
                "What was promised on the last call",
                "What the signed proposal actually included",
                "What was intentionally excluded from scope",
                "Previous pricing and revision history",
                "Recommendations the client ignored or deferred",
                "Communication preferences and decision-makers",
                "Open opportunities and unfinished follow-ups",
                "Who on your team last spoke with the client",
              ].map((item) => (
                <div key={item} className="included-item">
                  <GradientIcon icon={faTriangleExclamation} size="sm" className="danger" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">How Clyra Intelligence Solves It</h2>
              <p className="section-description">
                We are building Clyra Intelligence as a second brain for client
                relationships. Not another empty CRM record. A system that connects
                communication, proposals, scope, and history so you can respond with
                confidence.
              </p>
            </div>
            <div className="services-grid">
              {features.map((f, i) => (
                <div key={i} className="service-card">
                  <div className="service-image">
                    <div className="service-icon">
                      <GradientIcon icon={f.icon} size="xl" className="primary" />
                    </div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{f.title}</h3>
                    <p className="service-description">{f.description}</p>
                    <Link href={f.href} className="service-cta">
                      Learn more <span className="link-arrow">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="case-studies-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">What Changes When Context Stays Intact</h2>
            </div>
            <div className="included-grid">
              {benefits.map((item) => (
                <div key={item} className="included-item">
                  <GradientIcon icon={faCheck} size="sm" className="success" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="bc-guides" style={{ marginTop: "2rem" }}>
              Explore modules:{" "}
              <Link href="/ai-proposal-assistant">Proposal Assistant</Link>
              {" · "}
              <Link href="/ai-scope-guard">Scope Guard</Link>
              {" · "}
              <Link href="/ai-client-memory">Client Memory</Link>
              {" · "}
              <Link href="/ai-agency-operating-system">Agency Operating System</Link>
            </p>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Built From Real Agency Workflows</h2>
              <p className="cta-description">
                Clyra Intelligence is in development at Clyra Studios. We are
                testing it internally and with select consulting engagements before
                wider release. If fragmented client context is a problem you know
                well, we would like to hear how your team works today.
              </p>
              <div className="cta-actions">
                <Link href="/contact" className="btn btn-primary btn-large">
                  Get in Touch
                  <span className="btn-arrow">→</span>
                </Link>
                <Link href="/strategy-call" className="btn btn-secondary btn-large">
                  Book a Strategy Call
                </Link>
              </div>
              <p className="bc-guides">
                Related:{" "}
                <Link href="/clyra-intelligence-use-cases">Use Cases</Link>
                {" · "}
                <Link href="/clyra-intelligence-comparison">vs CRMs</Link>
                {" · "}
                <Link href="/business-process-automation">
                  Business Process Automation
                </Link>
                {" · "}
                <Link href="/fractional-digital-systems-consultant">
                  Fractional Consultant
                </Link>
              </p>
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
              <h2 className="cta-title">Want Early Access to Clyra Intelligence?</h2>
              <p className="cta-description">
                Tell us how your team manages proposals, scope, and client history
                today. We will share what is available in the private beta and what
                is coming next.
              </p>
              <div className="cta-actions">
                <Link href="/contact" className="btn btn-primary btn-large">
                  Get in Touch
                  <span className="btn-arrow">→</span>
                </Link>
                <Link
                  href="/clyra-intelligence-features"
                  className="btn btn-secondary btn-large"
                >
                  View All Features
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
