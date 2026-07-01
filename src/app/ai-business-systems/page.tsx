import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import {
  faBolt,
  faPenNib,
  faPalette,
  faShareNodes,
  faGears,
  faChartLine,
  faBrain,
  faUserCheck,
  faFileLines,
  faDiagramProject,
  faPuzzlePiece,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

const serviceCards = [
  {
    icon: faPenNib,
    title: "AI Content Growth Systems",
    description:
      "AI-assisted workflows that generate review-ready blog drafts, FAQ content, newsletters, and social posts based on your niche and voice.",
    href: "/ai-content-automation",
  },
  {
    icon: faPalette,
    title: "AI Creative Automation",
    description:
      "Branded, review-ready visuals at scale — featured images, social graphics, ad creative, thumbnails, and brand-consistent design systems.",
    href: "/ai-creative-automation",
  },
  {
    icon: faShareNodes,
    title: "AI Marketing Automation",
    description:
      "Turn approved content into multi-channel output — social posts, newsletters, email campaigns, and scheduled distribution.",
    href: "/ai-marketing-automation",
  },
  {
    icon: faGears,
    title: "Business Process Automation",
    description:
      "Automate repetitive tasks and connect your tools — lead routing, onboarding, CRM updates, dashboards, and API integrations.",
    href: "/business-process-automation",
  },
];

const principles = [
  {
    icon: faPuzzlePiece,
    title: "Solve Real Workflow Problems",
    description:
      "We start with the bottleneck, not the buzzword. AI is only worth adding where it removes friction or unlocks capacity you actually need.",
  },
  {
    icon: faUserCheck,
    title: "Human-in-the-Loop by Default",
    description:
      "Systems generate drafts and handle repetitive steps. People review, approve, and stay in control of what goes live.",
  },
  {
    icon: faDiagramProject,
    title: "Connected, Not Siloed",
    description:
      "Your website, content, analytics, CRM, and workflows should talk to each other. We build systems that connect, not another disconnected tool.",
  },
  {
    icon: faShieldHalved,
    title: "Practical and Reliable",
    description:
      "No hype, no black boxes. We build systems you can understand, monitor, and rely on as your business grows.",
  },
];

const workflowSteps = [
  { icon: faChartLine, label: "Analytics Data" },
  { icon: faBrain, label: "Content Recommendations" },
  { icon: faPenNib, label: "AI Drafts" },
  { icon: faUserCheck, label: "Human Approval" },
  { icon: faFileLines, label: "WordPress Draft" },
  { icon: faShareNodes, label: "Social Captions" },
  { icon: faChartLine, label: "Dashboard Reporting" },
];

const whyClyra = [
  {
    icon: faDiagramProject,
    title: "Systems Thinking, Not One-Off Tools",
    description:
      "We design how your website, content, marketing, and operations connect — so each piece reinforces the others.",
  },
  {
    icon: faBrain,
    title: "Technical Depth",
    description:
      "Full-stack development plus automation and AI integration experience — we build the connections, not just recommend them.",
  },
  {
    icon: faShieldHalved,
    title: "Honest About What AI Can Do",
    description:
      "We position AI as a practical tool with real limits — no promises of automated riches or guaranteed results.",
  },
  {
    icon: faUserCheck,
    title: "You Stay in Control",
    description:
      "Every system is designed with human review and oversight. You decide what ships, what publishes, and what runs automatically.",
  },
];

const faqs = [
  {
    question: "What are AI business systems?",
    answer:
      "Custom systems that connect your website, content, analytics, CRM, and workflows — using AI and automation where it genuinely helps. Rather than one tool, it's an integrated set of workflows built around how your business operates.",
  },
  {
    question: "Do I have to buy all four services?",
    answer:
      "No. Each service stands on its own. Many businesses start with one — often content or process automation — and expand as they see value. The umbrella approach just means the pieces are designed to connect later.",
  },
  {
    question: "Is this just AI hype?",
    answer:
      "No. We're deliberately practical about where AI adds value and where it doesn't. A lot of high-value automation is reliable workflow logic, not AI. We use AI where it meaningfully reduces friction or unlocks capacity.",
  },
  {
    question: "Will everything run automatically without oversight?",
    answer:
      "Only where you explicitly want it to. The default is human-in-the-loop: systems generate and prepare, people review and approve. You stay in control of what goes live.",
  },
  {
    question: "How do we get started?",
    answer:
      "A discovery call. We identify where your biggest bottlenecks and opportunities are, then recommend which system (or combination) will deliver the most value first.",
  },
];

export const metadata: Metadata = {
  title:
    "AI Business Systems for Websites, Marketing and Automation | Clyra Studios",
  description:
    "Custom AI business systems for content creation, creative workflows, marketing automation, reporting, CRM workflows, and digital operations. Practical, connected, human-reviewed systems.",
  keywords:
    "AI business systems, AI systems consultant, custom AI automation, AI for small business, digital growth systems, AI content automation, AI marketing automation, business process automation, connected business systems",
  authors: [{ name: "Clyra Studios" }],
  creator: "Clyra Studios",
  publisher: "Clyra Studios",
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: {
    canonical: "/ai-business-systems",
  },
  openGraph: {
    title:
      "AI Business Systems for Websites, Marketing and Automation | Clyra Studios",
    description:
      "Custom AI systems that connect your website, content, analytics, CRM, and workflows — practical, connected, and human-reviewed.",
    url: "https://clyrastudios.com/ai-business-systems",
    siteName: "Clyra Studios",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Clyra Studios - AI Business Systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Business Systems for Websites, Marketing and Automation | Clyra Studios",
    description:
      "Custom AI systems that connect your website, content, analytics, CRM, and workflows — practical, connected, and human-reviewed.",
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
  name: "AI Business Systems",
  description:
    "Custom AI business systems connecting website, content, analytics, CRM, and workflows — including AI content growth, creative automation, marketing automation, and business process automation.",
  provider: {
    "@type": "Organization",
    name: "Clyra Studios",
    url: "https://clyrastudios.com",
    logo: "https://clyrastudios.com/images/clyra_logo.png",
  },
  areaServed: "US",
  serviceType: "AI Business Systems",
  category: "Digital Growth Systems",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Systems Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Content Growth Systems",
          url: "https://clyrastudios.com/ai-content-automation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Creative Automation",
          url: "https://clyrastudios.com/ai-creative-automation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Marketing Automation",
          url: "https://clyrastudios.com/ai-marketing-automation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Process Automation",
          url: "https://clyrastudios.com/business-process-automation",
        },
      },
    ],
  },
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

export default function AIBusinessSystemsPage() {
  return (
    <>
      <Script
        id="ai-systems-structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <Script
        id="ai-systems-faq-data"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(faqStructuredData)}
      </Script>
      <Nav />

      <main className="redesign-migration-page">
        {/* Hero Section */}
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
                  <span className="title-line">AI Business Systems for</span>
                  <span className="title-line highlight">
                    Websites, Marketing &amp; Automation
                  </span>
                </h1>
                <p className="hero-description">
                  Custom AI systems that connect your website, content,
                  analytics, CRM, and workflows into one operation. We build
                  practical, human-reviewed systems that solve real business
                  problems — not generic AI tools looking for a use case.
                </p>
                <p className="hero-hook">
                  Connected systems. Human oversight. Real workflow value.
                </p>
              </div>

              <div className="hero-actions">
                <Link
                  href="/strategy-call"
                  className="btn btn-primary btn-large"
                >
                  Book a Discovery Call
                  <span className="btn-arrow">→</span>
                </Link>
                <Link href="#services" className="btn btn-secondary btn-large">
                  Explore the Systems
                </Link>
              </div>

              <div className="trust-signals">
                <div className="trust-item">
                  <GradientIcon icon={faDiagramProject} size="sm" className="primary" />
                  <span className="trust-text">Connected Systems</span>
                </div>
                <div className="trust-item">
                  <GradientIcon
                    icon={faUserCheck}
                    size="sm"
                    className="success"
                  />
                  <span className="trust-text">Human-in-the-Loop</span>
                </div>
                <div className="trust-item">
                  <GradientIcon icon={faBrain} size="sm" className="primary" />
                  <span className="trust-text">Practical AI</span>
                </div>
                <div className="trust-item">
                  <GradientIcon icon={faBolt} size="sm" className="warning" />
                  <span className="trust-text">Built to Scale</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Positioning Section */}
        <section className="services-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball services-ball-1"></div>
            <div className="section-floating-ball services-ball-2"></div>
            <div className="section-floating-ball services-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">
                AI Should Solve{" "}
                <span className="transform-word">Real Workflow Problems</span>
              </h2>
              <p className="section-description">
                The value of AI isn&apos;t the technology — it&apos;s what it
                removes from your plate. We build around a few clear principles.
              </p>
            </div>

            <div className="services-grid">
              {principles.map((item, index) => {
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
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Four Services Section */}
        <section id="services" className="case-studies-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball case-studies-ball-1"></div>
            <div className="section-floating-ball case-studies-ball-2"></div>
            <div className="section-floating-ball case-studies-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">The AI Systems We Build</h2>
              <p className="section-description">
                Four connected services. Start with one, or combine them into a
                system that runs your content, creative, marketing, and
                operations.
              </p>
            </div>

            <div className="case-studies-grid">
              {serviceCards.map((card, index) => {
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
                            icon={card.icon}
                            size="xl"
                            className="primary"
                          />
                        </div>
                        <h3 className="case-study-title">{card.title}</h3>
                      </div>
                      <div className="case-study-story">
                        <div className="solution-text">{card.description}</div>
                      </div>
                      <Link href={card.href} className="case-study-link">
                        Explore {card.title}
                        <span className="btn-arrow"> →</span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How the Systems Connect Section */}
        <section className="services-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball services-ball-1"></div>
            <div className="section-floating-ball services-ball-2"></div>
            <div className="section-floating-ball services-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">How the Systems Connect</h2>
              <p className="section-description">
                The real power is in the connections. Here&apos;s an example of
                how data, content, and channels can flow through one connected
                system.
              </p>
            </div>

            <div className="workflow-flow">
              {workflowSteps.map((step, index) => (
                <div key={index} className="workflow-step-wrap">
                  <div className="workflow-step">
                    <div className="workflow-step-icon">
                      <GradientIcon
                        icon={step.icon}
                        size="lg"
                        className={index === 3 ? "success" : "primary"}
                      />
                    </div>
                    <span className="workflow-step-label">{step.label}</span>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <span className="workflow-arrow" aria-hidden="true">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="included-panel" style={{ marginTop: "2.5rem" }}>
              <div className="bc-note">
                <GradientIcon icon={faChartLine} size="sm" className="warning" />
                <span>
                  Pair any of these systems with our{" "}
                  <Link href="/google-analytics-looker-studio-dashboards">
                    GA4 &amp; Looker Studio dashboards
                  </Link>{" "}
                  to close the loop — so analytics feed back into what you
                  create next.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Clyra Section */}
        <section className="case-studies-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball case-studies-ball-1"></div>
            <div className="section-floating-ball case-studies-ball-2"></div>
            <div className="section-floating-ball case-studies-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Why Clyra Studios</h2>
              <p className="section-description">
                A technical partner that builds useful systems for real business
                workflows — not a generic AI agency.
              </p>
            </div>

            <div className="services-grid">
              {whyClyra.map((item, index) => {
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
                          className="success"
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball cta-ball-1"></div>
            <div className="section-floating-ball cta-ball-2"></div>
            <div className="section-floating-ball cta-ball-3"></div>
          </div>
          <div className="container">
            <div className="cta-content" data-aos="fade-up">
              <h2 className="cta-title">
                Let&apos;s Build a System, Not Just Another Tool
              </h2>
              <p className="cta-description">
                Tell us where your business is spending time and losing momentum.
                We&apos;ll recommend which system — or combination — will deliver
                the most value first.
              </p>
              <div className="cta-actions">
                <Link
                  href="/strategy-call"
                  className="btn btn-primary btn-large"
                >
                  Book a Discovery Call
                  <span className="btn-arrow">→</span>
                </Link>
                <Link href="/contact" className="btn btn-secondary btn-large">
                  Get in Touch
                </Link>
              </div>
              <p className="bc-guides">
                Explore each system:{" "}
                <Link href="/ai-content-automation">Content Growth</Link>
                {" · "}
                <Link href="/ai-creative-automation">Creative</Link>
                {" · "}
                <Link href="/ai-marketing-automation">Marketing</Link>
                {" · "}
                <Link href="/business-process-automation">Process</Link>
                {" · "}
                <Link href="/fractional-digital-systems-consultant">
                  Ongoing Advisory
                </Link>
                {" · "}
                <Link href="/api-integrations">API Integrations</Link>
                {" · "}
                <Link href="/marketing-technology-consulting">
                  MarTech Consulting
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball faq-ball-1"></div>
            <div className="section-floating-ball faq-ball-2"></div>
            <div className="section-floating-ball faq-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">
                AI Business Systems: Common Questions
              </h2>
              <p className="section-description">
                Honest answers before you get started.
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
      </main>

      <Footer />
    </>
  );
}
