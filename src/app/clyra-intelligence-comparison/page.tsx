import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import {
  faCheck,
  faXmark,
  faDatabase,
  faBrain,
  faComments,
  faFileContract,
} from "@fortawesome/free-solid-svg-icons";

const comparisons = [
  {
    name: "HubSpot",
    subtitle: "Marketing CRM",
    competitor: [
      "Strong for pipeline stages, email sequences, and marketing automation",
      "Contact records organized around deals and campaigns",
      "Requires manual logging to capture proposal and scope context",
      "Limited memory of what was promised outside the CRM fields",
      "Built for sales and marketing teams, not agency delivery workflows",
    ],
    clyra: [
      "Designed to connect proposals, emails, calls, and project notes in one client view",
      "Remembers pricing history and signed scope across engagements",
      "Built for agencies and consultants who deliver custom work",
      "Surfaces context when a client returns months later with a new request",
      "Complements CRM data with relationship intelligence, not replaces your stack",
    ],
  },
  {
    name: "Salesforce",
    subtitle: "Enterprise CRM",
    competitor: [
      "Powerful for large sales organizations and complex reporting",
      "Highly customizable with significant implementation overhead",
      "Stores structured data well, but context lives in separate files and threads",
      "Expensive to configure for small agencies and solo consultants",
      "Scope and proposal history often scattered across attachments and notes",
    ],
    clyra: [
      "Focused on client context, not enterprise sales pipeline management",
      "Built from real agency workflows, not a generic CRM template",
      "Designed to understand what was quoted, excluded, and agreed to",
      "Practical for teams of one to twenty, without months of setup",
      "In development for agencies who need memory, not more data fields",
    ],
  },
  {
    name: "Monday",
    subtitle: "Work Management",
    competitor: [
      "Good for task boards, project timelines, and team coordination",
      "Tracks what is happening now, not always what was promised originally",
      "Client communication history lives outside the board",
      "Proposal and pricing context requires manual cross-referencing",
      "Project management, not client relationship memory",
    ],
    clyra: [
      "Connects delivery work to the original proposal and client conversations",
      "Flags when a new request may fall outside signed scope",
      "Maintains a client timeline across projects, not just current tasks",
      "Built to answer \"what did we agree to?\" without digging through boards",
      "Designed as client intelligence, not a replacement for project tools",
    ],
  },
  {
    name: "Notion",
    subtitle: "Docs & Wikis",
    competitor: [
      "Flexible for notes, wikis, and internal documentation",
      "Requires discipline to keep client pages updated and organized",
      "No automatic connection between emails, proposals, and meeting notes",
      "Search helps, but context still fragments across workspaces",
      "You build the system yourself and maintain it over time",
    ],
    clyra: [
      "Purpose-built to assemble client context from real communication channels",
      "Designed to remember decisions, quotes, and preferences automatically",
      "Structured around client relationships, not blank pages to maintain",
      "Built for consultants who cannot afford to rebuild context every quarter",
      "A focused intelligence layer, not another workspace to manage",
    ],
  },
  {
    name: "Traditional CRM",
    subtitle: "Contact & Deal Tracking",
    competitor: [
      "Stores contacts, companies, deals, and activity logs",
      "Treats each interaction as a data point, not a connected story",
      "Proposal details, scope boundaries, and pricing history often live elsewhere",
      "Relies on humans to remember and manually update records",
      "Built to manage pipelines, not protect agency profitability",
    ],
    clyra: [
      "Understands relationships: what was promised, quoted, and excluded",
      "Connects proposals, communications, and decisions in one client view",
      "Designed to detect scope drift before it becomes unpaid work",
      "Built for service providers who lose margin to forgotten context",
      "Client intelligence for agencies, not another contact database",
    ],
  },
];

const summaryRows = [
  {
    criteria: "Primary purpose",
    traditional: "Store and organize contact and deal data",
    clyra: "Understand client context across engagements",
  },
  {
    criteria: "Proposal & scope memory",
    traditional: "Manual notes and attachments",
    clyra: "Connected to signed scope and pricing history",
  },
  {
    criteria: "Communication context",
    traditional: "Logged activities, not full relationship view",
    clyra: "Timeline across email, calls, notes, and proposals",
  },
  {
    criteria: "Scope creep protection",
    traditional: "Not a core CRM function",
    clyra: "Compare new requests to signed agreements",
  },
  {
    criteria: "Built for",
    traditional: "Sales teams and pipeline management",
    clyra: "Agencies, consultants, and service providers",
  },
  {
    criteria: "Setup complexity",
    traditional: "Varies; often significant for full adoption",
    clyra: "Focused module within Clyra Intelligence, in development",
  },
];

const faqs = [
  {
    question: "Is Clyra Intelligence a CRM replacement?",
    answer:
      "No. Clyra Intelligence is a client intelligence layer being built for agencies and consultants. It is designed to understand context that traditional CRMs do not capture well: signed scope, pricing history, communication preferences, and what was intentionally excluded from a proposal. Many teams will keep their CRM and add Clyra Intelligence for relationship memory.",
  },
  {
    question: "How is this different from HubSpot or Salesforce?",
    answer:
      "HubSpot and Salesforce excel at pipeline management, marketing automation, and enterprise sales reporting. Clyra Intelligence is being built for a different problem: fragmented client context across email, proposals, calls, and project notes. It is designed to help you remember what you agreed to, not manage a sales funnel.",
  },
  {
    question: "Can I use Clyra Intelligence with my existing tools?",
    answer:
      "That is the intent. Clyra Intelligence is being designed to complement project management tools, CRMs, and document systems rather than replace them. The goal is one intelligent client view that connects context your other tools store separately.",
  },
  {
    question: "Is Clyra Intelligence available now?",
    answer:
      "Clyra Intelligence is in development at Clyra Studios. We are building it from real agency workflows and running a private beta before wider release. Contact us if you want early access or to share how your team manages client context today.",
  },
  {
    question: "Who is this built for?",
    answer:
      "Marketing agencies, web agencies, SEO consultants, fractional consultants, freelancers, developers, and creative agencies. Anyone who delivers custom work across multiple channels and loses context between engagements.",
  },
];

export const metadata: Metadata = {
  title: "Clyra Intelligence vs CRMs & Productivity Tools | Clyra Studios",
  description:
    "Compare Clyra Intelligence vs HubSpot, Salesforce, Monday, Notion, and traditional CRMs. Traditional CRMs store data. Clyra Intelligence understands context. Currently in development.",
  keywords:
    "Clyra Intelligence vs HubSpot, CRM comparison, agency CRM alternative, client intelligence, scope management, proposal memory, Clyra Studios",
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: { canonical: "/clyra-intelligence-comparison" },
  openGraph: {
    title: "Clyra Intelligence vs CRMs & Productivity Tools | Clyra Studios",
    description:
      "Traditional CRMs store data. Clyra Intelligence understands context. Compare Clyra Intelligence vs HubSpot, Salesforce, Monday, Notion, and traditional CRM.",
    url: "https://clyrastudios.com/clyra-intelligence-comparison",
    siteName: "Clyra Studios",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Clyra Intelligence vs CRMs and Productivity Tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clyra Intelligence vs CRMs & Productivity Tools | Clyra Studios",
    description:
      "Traditional CRMs store data. Clyra Intelligence understands context. Compare against HubSpot, Salesforce, Monday, Notion, and traditional CRM.",
    images: ["/images/thumbnail.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Clyra Intelligence",
  description:
    "Client intelligence platform in development for agencies and consultants. Designed to understand client context across proposals, communications, and project history.",
  provider: {
    "@type": "Organization",
    name: "Clyra Studios",
    url: "https://clyrastudios.com",
    logo: "https://clyrastudios.com/images/clyra_logo.png",
  },
  areaServed: "US",
  serviceType: "Client Intelligence Platform",
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

export default function ClyraIntelligenceComparisonPage() {
  return (
    <>
      <Script
        id="clyra-intelligence-comparison-data"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <Script
        id="clyra-intelligence-comparison-faq"
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
                  <span className="title-line">Traditional CRMs Store Data.</span>
                  <span className="title-line highlight">
                    Clyra Intelligence Understands Context.
                  </span>
                </h1>
                <p className="hero-description">
                  HubSpot, Salesforce, Monday, and Notion each solve real problems.
                  Clyra Intelligence is being built for a different one: the client
                  context that gets lost between proposals, emails, calls, and project
                  notes. This is not a CRM pitch. It is a comparison of what each
                  tool is actually designed to do.
                </p>
                <p className="hero-hook">
                  Built from agency workflows.
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
                Different Tools,{" "}
                <span className="transform-word">Different Jobs</span>
              </h2>
              <p className="section-description">
                CRMs and productivity tools are good at what they were built for.
                Agencies and consultants often need something else: a way to remember
                what was quoted, what was excluded, and what the client expects when
                they come back six months later.
              </p>
            </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-image">
                  <div className="service-icon">
                    <GradientIcon icon={faDatabase} size="xl" className="danger" />
                  </div>
                </div>
                <div className="service-content">
                  <h3 className="service-title">What CRMs Do Well</h3>
                  <p className="service-description">
                    Track contacts, manage pipelines, log activities, and run
                    marketing automation. Solid systems for sales and marketing teams
                    who need structured data and reporting.
                  </p>
                </div>
              </div>
              <div className="service-card">
                <div className="service-image">
                  <div className="service-icon">
                    <GradientIcon icon={faBrain} size="xl" className="primary" />
                  </div>
                </div>
                <div className="service-content">
                  <h3 className="service-title">What Clyra Intelligence Is For</h3>
                  <p className="service-description">
                    Client relationship memory. Connecting proposals, scope,
                    communications, and decisions so you stop rebuilding context
                    every time a client reappears.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {comparisons.map((comp) => (
          <section key={comp.name} className="case-studies-section">
            <div className="container">
              <div className="section-header slide-in-right">
                <h2 className="section-title">
                  Clyra Intelligence vs {comp.name}
                </h2>
                <p className="section-description">{comp.subtitle}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="godaddy-con">
                  <h3 className="text-white font-semibold mb-3">{comp.name}</h3>
                  <ul className="space-y-2">
                    {comp.competitor.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <GradientIcon icon={faXmark} size="sm" className="danger" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="dreamhost-pro">
                  <h3 className="text-white font-semibold mb-3">Clyra Intelligence</h3>
                  <ul className="space-y-2">
                    {comp.clyra.map((item) => (
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
        ))}

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Summary Comparison</h2>
              <p className="section-description">
                A quick view of how Clyra Intelligence differs from traditional CRM
                and productivity approaches. Clyra Intelligence is in development;
                capabilities described here reflect what we are building toward.
              </p>
            </div>

            <div className="services-grid">
              {summaryRows.map((row, index) => (
                <div key={index} className="service-card">
                  <div className="service-content">
                    <h3 className="service-title">{row.criteria}</h3>
                    <div className="before-after" style={{ marginTop: "1rem" }}>
                      <div className="before">
                        <div className="before-label">Traditional CRM / PM tools</div>
                        <div className="before-text">{row.traditional}</div>
                      </div>
                      <div className="after">
                        <div className="after-label">Clyra Intelligence</div>
                        <div className="after-text">{row.clyra}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="builder-comparison" style={{ marginTop: "3rem" }}>
              <div className="bc-table">
                <div className="bc-row bc-head">
                  <div className="bc-cell bc-criteria">What matters</div>
                  <div className="bc-cell">
                    CRMs &amp; Productivity Tools
                    <span className="bc-subtle">HubSpot · Salesforce · Monday · Notion</span>
                  </div>
                  <div className="bc-cell bc-clyra-col">
                    Clyra Intelligence
                    <span className="bc-subtle">Client intelligence for agencies</span>
                  </div>
                </div>
                {summaryRows.map((row, index) => (
                  <div key={index} className="bc-row">
                    <div className="bc-cell bc-criteria">{row.criteria}</div>
                    <div className="bc-cell bc-builder">
                      <GradientIcon icon={faXmark} size="sm" className="danger" />
                      <span>{row.traditional}</span>
                    </div>
                    <div className="bc-cell bc-clyra-col">
                      <GradientIcon icon={faCheck} size="sm" className="success" />
                      <span>{row.clyra}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="bc-note">
                Clyra Intelligence is not trying to replace your CRM. It is being
                built to solve the context problem that CRMs were never designed
                to handle: remembering what you promised, quoted, and agreed to
                across every client touchpoint.
              </p>
              <p className="bc-guides">
                Clyra Intelligence guides:{" "}
                <Link href="/ai-client-intelligence">AI Client Intelligence</Link>
                {" · "}
                <Link href="/clyra-intelligence-features">Features</Link>
                {" · "}
                <Link href="/clyra-intelligence-use-cases">Use Cases</Link>
                {" · "}
                <Link href="/ai-proposal-assistant">Proposal Assistant</Link>
                {" · "}
                <Link href="/ai-scope-guard">Scope Guard</Link>
                {" · "}
                <Link href="/ai-client-memory">Client Memory</Link>
              </p>
            </div>
          </div>
        </section>

        <section className="case-studies-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">A Real Example</h2>
              <p className="section-description">
                This is the kind of situation Clyra Intelligence is being built to
                handle. Not a hypothetical. A pattern we see in agency work
                constantly.
              </p>
            </div>
            <div className="case-studies-grid">
              <div className="case-study-card float-in-left">
                <div className="case-study-content">
                  <div className="case-study-header">
                    <div className="service-icon">
                      <GradientIcon icon={faComments} size="xl" className="danger" />
                    </div>
                    <h3 className="case-study-title">Without Client Intelligence</h3>
                  </div>
                  <div className="case-study-story">
                    <div className="solution-text">
                      A client emails six months after a signed SEO proposal asking
                      for a full homepage redesign. Your CRM shows the deal as closed.
                      The scope details live in a PDF somewhere. You are not sure what
                      was excluded. You either do unpaid work or send an awkward
                      follow-up asking what you agreed to.
                    </div>
                  </div>
                </div>
              </div>
              <div className="case-study-card float-in-right">
                <div className="case-study-content">
                  <div className="case-study-header">
                    <div className="service-icon">
                      <GradientIcon icon={faFileContract} size="xl" className="success" />
                    </div>
                    <h3 className="case-study-title">With Clyra Intelligence</h3>
                  </div>
                  <div className="case-study-story">
                    <div className="solution-text">
                      Clyra Intelligence surfaces the signed scope: SEO only, redesign
                      explicitly excluded. It suggests a professional reply and
                      recommends creating a separate estimate for the redesign work.
                      You respond with confidence instead of guessing.
                    </div>
                  </div>
                </div>
              </div>
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
                See If Clyra Intelligence Fits Your Workflow
              </h2>
              <p className="cta-description">
                Clyra Intelligence is in development. We are looking for agencies and
                consultants who want to help shape a client intelligence system
                built from real operational pain, not marketing theory.
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
                <Link href="/clyra-intelligence-features">All Features</Link>
                {" · "}
                <Link href="/clyra-intelligence-use-cases">Use Cases</Link>
                {" · "}
                <Link href="/ai-agency-operating-system">Agency Operating System</Link>
                {" · "}
                <Link href="/ai-business-systems">AI Business Systems</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
