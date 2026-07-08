import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import {
  faBrain,
  faBullseye,
  faComments,
  faDollarSign,
  faGavel,
  faHandshake,
  faLightbulb,
  faMagnifyingGlass,
  faUser,
  faEnvelope,
  faPhone,
  faCommentSms,
  faClock,
  faDatabase,
  faDiagramProject,
  faShieldHalved,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

const problems = [
  {
    icon: faEnvelope,
    title: "Context Lost in Email Threads",
    description:
      "Important decisions, pricing notes, and commitments get buried in long email chains. When you return to a client months later, you scroll instead of working.",
    impact: "You re-read instead of remembering",
  },
  {
    icon: faCommentSms,
    title: "Quick Texts Disappear",
    description:
      "Clients share preferences, deadlines, and approvals in text messages. Those details rarely make it into your CRM or project notes.",
    impact: "Informal agreements get forgotten",
  },
  {
    icon: faPhone,
    title: "Call Notes Never Stick",
    description:
      "You hang up knowing what was discussed, but the specifics fade. Without a reliable record, the next conversation starts from scratch.",
    impact: "Every call feels like the first one",
  },
  {
    icon: faDatabase,
    title: "Scattered Records, No Story",
    description:
      "Proposals, invoices, and meeting notes live in different tools. None of them tell you who this client is, what they care about, or what comes next.",
    impact: "Data without relationship context",
  },
];

const features = [
  {
    icon: faBrain,
    title: "Persistent Client Memory",
    description:
      "A living record of what you know about each client, built from real conversations and documents, not manual data entry.",
  },
  {
    icon: faBullseye,
    title: "Business Goals",
    description:
      "Track what the client is trying to achieve, so every recommendation and follow-up stays aligned with their priorities.",
  },
  {
    icon: faComments,
    title: "Communication Preferences",
    description:
      "Remember how each client prefers to communicate, their tone, response patterns, and what level of detail they expect.",
  },
  {
    icon: faDollarSign,
    title: "Pricing History",
    description:
      "See what was quoted, what was approved, and what changed over time, so you never contradict a previous number.",
  },
  {
    icon: faGavel,
    title: "Important Decisions",
    description:
      "Capture scope boundaries, approved changes, and key commitments so nothing gets lost between projects.",
  },
  {
    icon: faUser,
    title: "Client Personality",
    description:
      "Understand how this client thinks, what frustrates them, and what builds trust, so you show up prepared every time.",
  },
  {
    icon: faHandshake,
    title: "Relationship Summary",
    description:
      "A clear snapshot of where the relationship stands: history, health, recent activity, and what matters right now.",
  },
  {
    icon: faLightbulb,
    title: "Open Opportunities",
    description:
      "Surface follow-ups, upsells, and unfinished conversations so revenue does not slip through the cracks.",
  },
];

const benefits = [
  {
    icon: faClock,
    title: "Pick Up Where You Left Off",
    description:
      "Return to any client after weeks or months and get oriented in seconds, not hours of inbox archaeology.",
  },
  {
    icon: faShieldHalved,
    title: "Fewer Costly Mistakes",
    description:
      "Stop quoting the wrong price, forgetting exclusions, or making recommendations that contradict past agreements.",
  },
  {
    icon: faDiagramProject,
    title: "Better Handoffs",
    description:
      "When someone else joins the account, they inherit context instead of starting blind.",
  },
  {
    icon: faRocket,
    title: "Stronger Client Relationships",
    description:
      "Clients notice when you remember their goals, preferences, and history. That builds trust and retention.",
  },
];

const faqs = [
  {
    question: "What is AI Client Memory?",
    answer:
      "A persistent intelligence layer that remembers what you know about each client: goals, preferences, pricing history, decisions, and open opportunities. It is designed to solve the context problem that CRMs and note apps leave unsolved.",
  },
  {
    question: "Is this just another CRM field?",
    answer:
      "No. CRMs store contact records and deal stages. Client Memory is built to understand relationships over time, pulling context from how you actually communicate with clients across email, text, calls, proposals, and invoices.",
  },
  {
    question: "Does it replace my CRM?",
    answer:
      "Not necessarily. Clyra Intelligence is designed to sit above the tools you already use. It connects context across channels so your CRM, project tools, and inbox are not each telling a different story.",
  },
  {
    question: "Is AI Client Memory available now?",
    answer:
      "It is currently in development at Clyra Studios and available through select private beta engagements. We are building it from real agency workflows, not launching a generic product before it is ready.",
  },
  {
    question: "How is client data handled?",
    answer:
      "Client intelligence is sensitive. We are designing Clyra Intelligence with privacy and control as core requirements. Specific data handling policies will be published before general availability.",
  },
];

export const metadata: Metadata = {
  title: "AI Client Memory for Agencies | Clyra Intelligence",
  description:
    "Persistent client memory for agencies and consultants: business goals, communication preferences, pricing history, decisions, and open opportunities. Part of Clyra Intelligence, currently in development.",
  keywords:
    "AI client memory, client intelligence, agency client context, client relationship memory, pricing history, communication preferences, client context for consultants",
  authors: [{ name: "Clyra Studios" }],
  creator: "Clyra Studios",
  publisher: "Clyra Studios",
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: {
    canonical: "/ai-client-memory",
  },
  openGraph: {
    title: "AI Client Memory for Agencies | Clyra Intelligence",
    description:
      "Never lose client context again. Persistent memory for goals, preferences, pricing, decisions, and opportunities. Built for agencies, currently in private beta.",
    url: "https://clyrastudios.com/ai-client-memory",
    siteName: "Clyra Studios",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Clyra Intelligence - AI Client Memory",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Client Memory for Agencies | Clyra Intelligence",
    description:
      "Persistent client memory for agencies: goals, preferences, pricing history, and open opportunities. Currently in development.",
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
  name: "AI Client Memory",
  description:
    "Persistent client memory for agencies and consultants, including business goals, communication preferences, pricing history, important decisions, relationship summaries, and open opportunities.",
  provider: {
    "@type": "Organization",
    name: "Clyra Studios",
    url: "https://clyrastudios.com",
    logo: "https://clyrastudios.com/images/clyra_logo.png",
  },
  areaServed: "US",
  serviceType: "Client Intelligence",
  category: "Clyra Intelligence",
  isRelatedTo: [
    {
      "@type": "Service",
      name: "Clyra Intelligence",
      url: "https://clyrastudios.com/ai-client-intelligence",
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

export default function AIClientMemoryPage() {
  return (
    <>
      <Script
        id="ai-client-memory-structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <Script
        id="ai-client-memory-faq-data"
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
                  <span className="title-line">AI Client Memory</span>
                  <span className="title-line highlight">
                    for Agencies &amp; Consultants
                  </span>
                </h1>
                <p className="hero-description">
                  Your clients live across email, text, calls, proposals, and
                  invoices. Clyra Intelligence Client Memory keeps the full
                  picture in one place, so you never walk into a conversation
                  unprepared again.
                </p>
                <p className="hero-hook">
                  Built from real agency workflows.
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

              <div className="trust-signals">
                <div className="trust-item">
                  <GradientIcon icon={faBrain} size="sm" className="primary" />
                  <span className="trust-text">Persistent Memory</span>
                </div>
                <div className="trust-item">
                  <GradientIcon icon={faComments} size="sm" className="success" />
                  <span className="trust-text">Communication Context</span>
                </div>
                <div className="trust-item">
                  <GradientIcon icon={faDollarSign} size="sm" className="warning" />
                  <span className="trust-text">Pricing History</span>
                </div>
                <div className="trust-item">
                  <GradientIcon icon={faLightbulb} size="sm" className="primary" />
                  <span className="trust-text">Open Opportunities</span>
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
                Context Gets Lost Across{" "}
                <span className="transform-word">Email, Text, and Calls</span>
              </h2>
              <p className="section-description">
                Agencies and consultants do not lose clients because they lack
                tools. They lose context because every conversation lives in a
                different place.
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

            <div className="ci-example-callout">
              <p>
                <strong>Real example:</strong> A fractional consultant returns
                to a client after four months away from the account. Instead of
                digging through email, Clyra Intelligence surfaces the
                client&apos;s current goals, tone preferences, last quote, and
                open follow-ups in one view. The conversation picks up where it
                left off.
              </p>
            </div>
          </div>
        </section>

        <section className="case-studies-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball case-studies-ball-1"></div>
            <div className="section-floating-ball case-studies-ball-2"></div>
            <div className="section-floating-ball case-studies-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">What Client Memory Captures</h2>
              <p className="section-description">
                Not a contact record. A relationship intelligence layer that
                grows with every interaction.
              </p>
            </div>

            <div className="services-grid">
              {features.map((item, index) => {
                const animationClass =
                  index % 4 === 0
                    ? "float-in-left"
                    : index % 4 === 1
                    ? "float-in-center"
                    : index % 4 === 2
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
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="included-panel" style={{ marginTop: "2.5rem" }}>
              <div className="bc-note">
                <GradientIcon icon={faMagnifyingGlass} size="sm" className="warning" />
                <span>
                  Client Memory works alongside{" "}
                  <Link href="/ai-proposal-assistant">Proposal Intelligence</Link>
                  {" "}and{" "}
                  <Link href="/ai-scope-guard">Scope Guard</Link>
                  {" "}as part of the broader{" "}
                  <Link href="/ai-client-intelligence">Clyra Intelligence</Link>
                  {" "}platform.
                </span>
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
              <h2 className="section-title">Why It Matters</h2>
              <p className="section-description">
                When you remember the relationship, not just the last ticket,
                everything gets easier.
              </p>
            </div>

            <div className="case-studies-grid">
              {benefits.map((item, index) => {
                const animationClass =
                  index % 2 === 0 ? "float-in-left" : "float-in-right";
                return (
                  <div
                    key={index}
                    className={`case-study-card ${animationClass}`}
                  >
                    <div className="case-study-content">
                      <div className="case-study-header">
                        <div className="service-icon">
                          <GradientIcon
                            icon={item.icon}
                            size="xl"
                            className="success"
                          />
                        </div>
                        <h3 className="case-study-title">{item.title}</h3>
                      </div>
                      <div className="case-study-story">
                        <div className="solution-text">{item.description}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
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
              <h2 className="section-title">AI Client Memory: Common Questions</h2>
              <p className="section-description">
                Honest answers about what we are building and where it fits.
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
                Stop Rebuilding Context Every Time You Open an Account
              </h2>
              <p className="cta-description">
                Clyra Intelligence Client Memory is in development and available
                for select consulting engagements. Tell us how your team manages
                client relationships today.
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
                <Link href="/ai-proposal-assistant">Proposal Assistant</Link>
                {" · "}
                <Link href="/ai-scope-guard">Scope Guard</Link>
                {" · "}
                <Link href="/ai-agency-operating-system">Agency OS</Link>
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
