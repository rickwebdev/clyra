import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import {
  faBullhorn,
  faCode,
  faMagnifyingGlass,
  faBriefcase,
  faUser,
  faLaptopCode,
  faPalette,
  faCheck,
  faComments,
  faFileContract,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

const useCases = [
  {
    icon: faBullhorn,
    title: "Marketing Agencies",
    pain:
      "Campaigns, retainers, and channel work spread context across email, Slack, ad platforms, and shared drives. When a client asks about last quarter's strategy, someone digs through threads.",
    help:
      "Clyra Intelligence is being built to maintain a client timeline across campaigns, proposals, and decisions so your team picks up where you left off without an archaeology session.",
  },
  {
    icon: faLaptopCode,
    title: "Web Agencies",
    pain:
      "Scope lives in proposals. Changes happen in email. Deliverables sit in project tools. Six months later a client requests work that was never in the original SOW and nobody has the signed document handy.",
    help:
      "Scope Guard and Client Memory are in development to connect signed proposals to ongoing requests, flag out-of-scope work, and suggest professional responses before you absorb unpaid hours.",
  },
  {
    icon: faMagnifyingGlass,
    title: "SEO Consultants",
    pain:
      "Audits, recommendations, and reporting cycles create long client relationships with context scattered across spreadsheets, email threads, and Google Docs. Returning clients expect you to remember every prior recommendation.",
    help:
      "Clyra Intelligence is designed to track recommendations, pricing history, and what was implemented vs. deferred, so follow-up engagements start with full context.",
  },
  {
    icon: faBriefcase,
    title: "Fractional Consultants",
    pain:
      "You work with multiple clients on part-time retainers. Context switching is constant. You cannot afford to spend the first hour of every engagement relearning what you discussed three months ago.",
    help:
      "Client Memory is being built to surface goals, communication preferences, open follow-ups, and prior decisions the moment you open a client record.",
  },
  {
    icon: faUser,
    title: "Freelancers",
    pain:
      "You are the sales team, delivery team, and account manager. Proposals are inconsistent. Pricing varies project to project. Clients reference conversations you forgot you had.",
    help:
      "Proposal Assistant and Client Timeline modules are in development to help solo operators draft faster, remember what they quoted, and maintain consistent scope language.",
  },
  {
    icon: faCode,
    title: "Developers",
    pain:
      "Technical scope is precise until it is not. Clients add features via casual messages. Estimates from six months ago do not match the current ask. Git history does not capture the business agreement.",
    help:
      "Clyra Intelligence is being built to compare new requests against signed technical scope and surface the original agreement before you commit to additional work.",
  },
  {
    icon: faPalette,
    title: "Creative Agencies",
    pain:
      "Creative feedback lives in email, Figma comments, and revision rounds. Brand preferences and past direction get lost between projects. New team members start without client context.",
    help:
      "Communication Intelligence and Client Memory are in development to capture preferences, revision history, and creative direction so every handoff starts informed.",
  },
];

const sharedProblems = [
  {
    icon: faComments,
    title: "Fragmented Communication",
    description:
      "Email, text, calls, Slack, and video notes each hold part of the story. No single place shows what was actually discussed and agreed to.",
    impact: "Context rebuilds from scratch every engagement",
  },
  {
    icon: faFileContract,
    title: "Proposal Inconsistencies",
    description:
      "Similar projects get different pricing. Scope language drifts. Signed agreements are hard to find when a client returns with a new request.",
    impact: "Margin leaks before delivery starts",
  },
  {
    icon: faClockRotateLeft,
    title: "Forgotten History",
    description:
      "What you quoted, excluded, recommended, and decided lives in someone's memory until that person is unavailable or has moved on.",
    impact: "Clients lose confidence. Teams lose time.",
  },
];

const faqs = [
  {
    question: "Which use case fits my business?",
    answer:
      "If you deliver custom work across multiple client touchpoints and lose context between engagements, Clyra Intelligence is being built for you. The specific modules you need depend on your biggest pain: proposals, scope, memory, or communication. Contact us and we can talk through your workflow.",
  },
  {
    question: "Is Clyra Intelligence only for large agencies?",
    answer:
      "No. It is being built for teams of one to twenty. Freelancers and fractional consultants often feel this problem most acutely because they carry all client context personally, with no team to share the load.",
  },
  {
    question: "Can I use one module without the full platform?",
    answer:
      "That is the intent. Clyra Intelligence is designed as connected modules: Proposal Assistant, Scope Guard, Client Memory, and more. You can start with the area that hurts most and expand as the platform develops.",
  },
  {
    question: "Is this available now?",
    answer:
      "Clyra Intelligence is in development at Clyra Studios. We are running a private beta with select agencies and consultants. Get in touch if you want early access or to share how your team handles client context today.",
  },
  {
    question: "How is this different from a CRM?",
    answer:
      "CRMs store contact and deal data. Clyra Intelligence is being built to understand client relationships: what was promised, quoted, excluded, and discussed across every channel. See our comparison page for a detailed breakdown.",
  },
];

export const metadata: Metadata = {
  title: "Clyra Intelligence Use Cases | Agencies & Consultants",
  description:
    "Use cases for Clyra Intelligence across marketing agencies, web agencies, SEO consultants, fractional consultants, freelancers, developers, and creative agencies. In development at Clyra Studios.",
  keywords:
    "agency client intelligence, consultant client memory, scope creep agency, proposal consistency, Clyra Intelligence use cases, agency operating system",
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: { canonical: "/clyra-intelligence-use-cases" },
  openGraph: {
    title: "Clyra Intelligence Use Cases | Agencies & Consultants",
    description:
      "How Clyra Intelligence is being built for marketing agencies, web agencies, SEO consultants, freelancers, and creative teams who lose client context.",
    url: "https://clyrastudios.com/clyra-intelligence-use-cases",
    siteName: "Clyra Studios",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Clyra Intelligence Use Cases for Agencies and Consultants",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clyra Intelligence Use Cases | Agencies & Consultants",
    description:
      "Use cases for agencies and consultants who need client context, scope memory, and proposal consistency. In development at Clyra Studios.",
    images: ["/images/thumbnail.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Clyra Intelligence",
  description:
    "Client intelligence platform in development for agencies, consultants, and service providers. Use cases include marketing agencies, web agencies, SEO consultants, freelancers, and creative teams.",
  provider: {
    "@type": "Organization",
    name: "Clyra Studios",
    url: "https://clyrastudios.com",
    logo: "https://clyrastudios.com/images/clyra_logo.png",
  },
  areaServed: "US",
  serviceType: "Client Intelligence Platform",
  audience: {
    "@type": "Audience",
    audienceType: "Agencies, consultants, and service providers",
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

export default function ClyraIntelligenceUseCasesPage() {
  return (
    <>
      <Script
        id="clyra-intelligence-use-cases-data"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <Script
        id="clyra-intelligence-use-cases-faq"
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
                  <span className="title-line">Built for Agencies and Consultants</span>
                  <span className="title-line highlight">
                    Who Lose Client Context
                  </span>
                </h1>
                <p className="hero-description">
                  Clyra Intelligence is being developed for service providers who
                  communicate across email, calls, proposals, and project tools, then
                  struggle to remember what was promised when a client comes back
                  months later. These are the workflows we are building for.
                </p>
                <p className="hero-hook">
                  Real operational pain. Practical modules. No CRM replacement pitch.
                </p>
              </div>
              <div className="hero-actions">
                <Link href="/contact" className="btn btn-primary btn-large">
                  Request Early Access
                  <span className="btn-arrow">→</span>
                </Link>
                <Link href="/clyra-intelligence-features" className="btn btn-secondary btn-large">
                  View All Features
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">
                The Same Problem,{" "}
                <span className="transform-word">Different Specialties</span>
              </h2>
              <p className="section-description">
                Whether you run campaigns, build websites, or consult on strategy,
                client context fragments the same way. Proposals, emails, calls, and
                notes each hold a piece. Nobody has the full picture when it matters.
              </p>
            </div>
            <div className="services-grid">
              {sharedProblems.map((p, i) => (
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

        <section className="case-studies-section industries-section managed-industries-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball industries-ball-1"></div>
            <div className="section-floating-ball industries-ball-2"></div>
            <div className="section-floating-ball industries-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Use Cases by Specialty</h2>
              <p className="section-description">
                Clyra Intelligence modules are in development. Each use case below
                describes the operational pain we are building toward and how the
                platform is designed to help.
              </p>
            </div>
            <div className="managed-industries-grid">
              {useCases.map((uc, idx) => (
                <div
                  key={uc.title}
                  className={`managed-industry-card ${idx % 2 === 0 ? "float-in-left" : "float-in-right"}`}
                  style={{ minHeight: "auto", alignItems: "flex-start", textAlign: "left", padding: "1.75rem" }}
                >
                  <div className="managed-industry-icon">
                    <GradientIcon icon={uc.icon} size="lg" className="primary" />
                  </div>
                  <h3 className="managed-industry-title" style={{ textAlign: "left", width: "100%" }}>
                    {uc.title}
                  </h3>
                  <p
                    className="service-description"
                    style={{ marginTop: "0.75rem", fontSize: "0.875rem", width: "100%" }}
                  >
                    <strong style={{ color: "#f87171" }}>Pain: </strong>
                    {uc.pain}
                  </p>
                  <p
                    className="service-description"
                    style={{ marginTop: "0.5rem", fontSize: "0.875rem", width: "100%" }}
                  >
                    <strong style={{ color: "#4ade80" }}>How Clyra Intelligence helps: </strong>
                    {uc.help}
                  </p>
                </div>
              ))}
            </div>
            <p className="bc-guides" style={{ marginTop: "2rem" }}>
              Explore features:{" "}
              <Link href="/ai-proposal-assistant">Proposal Assistant</Link>
              {" · "}
              <Link href="/ai-scope-guard">Scope Guard</Link>
              {" · "}
              <Link href="/ai-client-memory">Client Memory</Link>
              {" · "}
              <Link href="/clyra-intelligence-features">All Features</Link>
            </p>
          </div>
        </section>

        <section className="case-studies-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">What Changes When Context Stays Connected</h2>
              <p className="section-description">
                These outcomes reflect what Clyra Intelligence is being built to
                deliver. Capabilities are in development and available through
                private beta.
              </p>
            </div>
            <div className="included-grid">
              {[
                "Pick up client relationships without a context rebuild",
                "Respond to scope requests with signed agreement in view",
                "Quote consistently using pricing history from similar work",
                "Onboard team members with full client background available",
                "Protect profitability by catching out-of-scope work early",
                "Maintain professional communication when expectations drift",
              ].map((item) => (
                <div key={item} className="included-item">
                  <GradientIcon icon={faCheck} size="sm" className="success" />
                  <span>{item}</span>
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
              <h2 className="cta-title">Does This Sound Like Your Workflow?</h2>
              <p className="cta-description">
                Clyra Intelligence is in development. If you run an agency or consult
                with clients and lose context between engagements, we want to hear
                how you work today.
              </p>
              <div className="cta-actions">
                <Link href="/contact" className="btn btn-primary btn-large">
                  Get in Touch
                  <span className="btn-arrow">→</span>
                </Link>
                <Link href="/clyra-intelligence-comparison" className="btn btn-secondary btn-large">
                  Compare vs CRMs
                </Link>
              </div>
              <p className="bc-guides">
                Related:{" "}
                <Link href="/ai-client-intelligence">AI Client Intelligence</Link>
                {" · "}
                <Link href="/clyra-intelligence-features">Features</Link>
                {" · "}
                <Link href="/clyra-intelligence-comparison">CRM Comparison</Link>
                {" · "}
                <Link href="/ai-agency-operating-system">Agency Operating System</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
