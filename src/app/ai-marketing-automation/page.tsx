import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import {
  faBolt,
  faCheck,
  faClock,
  faShareNodes,
  faEnvelope,
  faBriefcase,
  faHashtag,
  faCalendarDays,
  faPaperPlane,
  faDatabase,
  faArrowsRotate,
  faShieldHalved,
  faBrain,
  faUsers,
  faRocket,
  faGears,
  faDiagramProject,
  faBullseye,
  faRepeat,
  faUserCheck,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const problems = [
  {
    icon: faClock,
    title: "Repurposing Eats Your Week",
    description:
      "Turning one blog post into social captions, a newsletter, and platform posts is hours of manual copy-paste and reformatting.",
    impact: "Great content gets published once and forgotten",
  },
  {
    icon: faShareNodes,
    title: "Channels Go Quiet",
    description:
      "Without a system, social and email fall behind. You post in bursts, then disappear for weeks.",
    impact: "Inconsistent presence across every channel",
  },
  {
    icon: faRepeat,
    title: "Manual Work Doesn't Scale",
    description:
      "Every new channel multiplies the manual effort. More platforms means more copy-paste, not more reach.",
    impact: "Growth stalls at the limits of your time",
  },
  {
    icon: faDatabase,
    title: "Disconnected Tools",
    description:
      "Content, email, CRM, and social live in separate tools that don't talk to each other, so nothing flows automatically.",
    impact: "Data and effort trapped in silos",
  },
];

const outputs = [
  {
    icon: faShareNodes,
    title: "Blog-to-Social Repurposing",
    description:
      "Turn each approved blog post into platform-specific social captions and posts, ready for review.",
  },
  {
    icon: faEnvelope,
    title: "Newsletter Drafts",
    description:
      "Assemble newsletter drafts from your latest content and updates — ready to edit and send.",
  },
  {
    icon: faBriefcase,
    title: "LinkedIn Posts",
    description:
      "Professional, on-brand LinkedIn post drafts derived from your content and expertise.",
  },
  {
    icon: faHashtag,
    title: "X / Twitter Threads",
    description:
      "Multi-post thread drafts that break down your articles into engaging, sequential posts.",
  },
  {
    icon: faPaperPlane,
    title: "Email Campaigns",
    description:
      "Campaign and sequence drafts built from your offers, content, and audience segments.",
  },
  {
    icon: faCalendarDays,
    title: "Content Calendars",
    description:
      "Organized publishing calendars that map what goes out, where, and when.",
  },
  {
    icon: faGears,
    title: "Publishing Workflows",
    description:
      "Approval-based workflows that move content from draft to scheduled to published.",
  },
  {
    icon: faDatabase,
    title: "CRM & Email Integrations",
    description:
      "Connect your CRM or email platform so approved content flows into the right lists and sequences.",
  },
  {
    icon: faPaperPlane,
    title: "Scheduled Distribution",
    description:
      "Once approved, content can be scheduled and distributed automatically across channels.",
  },
];

const workflowSteps = [
  { icon: faCheck, label: "Approved Content" },
  { icon: faBrain, label: "AI Repurposing" },
  { icon: faUserCheck, label: "Human Review" },
  { icon: faCalendarDays, label: "Content Calendar" },
  { icon: faPaperPlane, label: "Scheduled Distribution" },
  { icon: faChartLine, label: "Performance Feedback" },
];

const integrations = [
  "WordPress",
  "Mailchimp / Klaviyo / ConvertKit",
  "HubSpot & other CRMs",
  "LinkedIn & X / Twitter",
  "Buffer / Hootsuite scheduling",
  "Zapier, Make, and n8n",
  "Google Sheets & Airtable",
  "Webhooks & custom APIs",
];

const humanControl = [
  {
    icon: faShieldHalved,
    iconClass: "success",
    title: "Approval Before Distribution",
    description:
      "Content is repurposed and queued for your review. Nothing is distributed until it is approved as part of the workflow.",
    highlight: "You approve. Then it ships.",
  },
  {
    icon: faBrain,
    iconClass: "primary",
    title: "One Input, Many Outputs",
    description:
      "A single approved piece becomes social posts, a newsletter, and platform content — without manual copy-paste for each channel.",
    highlight: "Write once. Distribute everywhere.",
  },
  {
    icon: faUsers,
    iconClass: "warning",
    title: "Consistent Brand Voice",
    description:
      "Repurposed content is shaped around your tone and each platform's format, so it reads naturally — not like recycled filler.",
    highlight: "On-brand across every channel.",
  },
];

const useCases = [
  {
    icon: faShareNodes,
    title: "Content-Driven Businesses",
    description:
      "Get maximum reach from every article by distributing it across all channels automatically.",
  },
  {
    icon: faUsers,
    title: "Agencies",
    description:
      "Run consistent multi-channel distribution for multiple clients from one workflow.",
  },
  {
    icon: faEnvelope,
    title: "Newsletter Publishers",
    description:
      "Assemble and schedule recurring newsletters from your content pipeline.",
  },
  {
    icon: faBullseye,
    title: "Lead Generation",
    description:
      "Feed approved content into CRM sequences and nurture campaigns automatically.",
  },
  {
    icon: faBriefcase,
    title: "Personal & Founder Brands",
    description:
      "Stay active on LinkedIn and X with drafts derived from your existing content.",
  },
  {
    icon: faCalendarDays,
    title: "Lean Marketing Teams",
    description:
      "Do the work of a larger team by systematizing repurposing and distribution.",
  },
];

const faqs = [
  {
    question: "Does content post automatically without my approval?",
    answer:
      "Only if you want it to. The default workflow queues repurposed content for review, and you approve before anything is distributed. Fully automated distribution is possible once you trust the workflow, but it is opt-in.",
  },
  {
    question: "What platforms and tools can you connect?",
    answer:
      "Common integrations include WordPress, email platforms (Mailchimp, Klaviyo, ConvertKit), CRMs like HubSpot, social scheduling tools, and automation platforms like Zapier, Make, and n8n. We select the stack based on your needs.",
  },
  {
    question: "Can it match my brand voice on each platform?",
    answer:
      "Yes. Repurposing is shaped around your tone and each platform's format, so posts read naturally rather than like copy-pasted filler.",
  },
  {
    question: "Do I need AI content generation first?",
    answer:
      "Not necessarily. This works with content you already produce. It pairs well with our AI Content Growth Systems, but it can distribute any approved content you have.",
  },
  {
    question: "Will this replace my marketing team?",
    answer:
      "No. It removes repetitive repurposing and distribution work so your team can focus on strategy, creative, and engagement. It is a force multiplier, not a replacement.",
  },
  {
    question: "How is this different from just scheduling posts?",
    answer:
      "Schedulers post what you manually create. This system generates the repurposed drafts, routes them for approval, organizes the calendar, and then distributes — connecting content, email, and CRM into one flow.",
  },
];

export const metadata: Metadata = {
  title: "AI Marketing Automation Workflows | Clyra Studios",
  description:
    "Custom AI marketing automation workflows for content repurposing, social media drafts, newsletters, email campaigns, and publishing systems. Turn approved content into multi-channel output.",
  keywords:
    "AI marketing automation, content repurposing automation, social media automation, newsletter automation, email campaign automation, multi-channel publishing, content distribution workflow, CRM automation, marketing workflow automation",
  authors: [{ name: "Clyra Studios" }],
  creator: "Clyra Studios",
  publisher: "Clyra Studios",
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: {
    canonical: "/ai-marketing-automation",
  },
  openGraph: {
    title: "AI Marketing Automation Workflows | Clyra Studios",
    description:
      "Turn approved content into multi-channel marketing output — social, newsletters, email, and scheduled distribution, with human approval built in.",
    url: "https://clyrastudios.com/ai-marketing-automation",
    siteName: "Clyra Studios",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Clyra Studios - AI Marketing Automation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Marketing Automation Workflows | Clyra Studios",
    description:
      "Turn approved content into multi-channel marketing output — social, newsletters, email, and scheduled distribution, with human approval built in.",
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
  name: "AI Marketing Automation",
  description:
    "Custom AI marketing automation workflows for content repurposing, social media drafts, newsletters, email campaigns, content calendars, and multi-channel publishing systems.",
  provider: {
    "@type": "Organization",
    name: "Clyra Studios",
    url: "https://clyrastudios.com",
    logo: "https://clyrastudios.com/images/clyra_logo.png",
  },
  areaServed: "US",
  serviceType: "AI Marketing Automation",
  category: "Marketing Automation",
  offers: [
    {
      "@type": "Offer",
      name: "AI Marketing Workflow Setup",
      description:
        "Repurposing workflow design, channel and CRM integration, publishing system, testing, and launch",
      priceRange: "$1000+",
      priceCurrency: "USD",
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

export default function AIMarketingAutomationPage() {
  return (
    <>
      <Script
        id="ai-marketing-structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <Script
        id="ai-marketing-faq-data"
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
                  <span className="title-line">AI Marketing Automation to Turn</span>
                  <span className="title-line highlight">
                    One Piece of Content Into Every Channel
                  </span>
                </h1>
                <p className="hero-description">
                  We build AI marketing automation workflows that repurpose your
                  approved content into social posts, newsletters, email
                  campaigns, and scheduled distribution — so your best content
                  works across every channel instead of being published once.
                </p>
                <p className="hero-hook">
                  Write once. Approve. Distribute everywhere.
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
                <Link href="#how-it-works" className="btn btn-secondary btn-large">
                  See How It Works
                </Link>
              </div>

              <div className="trust-signals">
                <div className="trust-item">
                  <GradientIcon icon={faShareNodes} size="sm" className="primary" />
                  <span className="trust-text">Multi-Channel</span>
                </div>
                <div className="trust-item">
                  <GradientIcon
                    icon={faShieldHalved}
                    size="sm"
                    className="success"
                  />
                  <span className="trust-text">Approval-Based</span>
                </div>
                <div className="trust-item">
                  <GradientIcon
                    icon={faDiagramProject}
                    size="sm"
                    className="primary"
                  />
                  <span className="trust-text">Connected Tools</span>
                </div>
                <div className="trust-item">
                  <GradientIcon icon={faBolt} size="sm" className="warning" />
                  <span className="trust-text">Consistent Output</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="services-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball services-ball-1"></div>
            <div className="section-floating-ball services-ball-2"></div>
            <div className="section-floating-ball services-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">
                The Problem With Manually{" "}
                <span className="transform-word">Repurposing Content</span>
              </h2>
              <p className="section-description">
                You already create good content. The bottleneck is getting it
                onto every channel, consistently, without it eating your week.
              </p>
            </div>

            <div className="services-grid">
              {problems.map((problem, index) => {
                const animationClass =
                  index === 0
                    ? "float-in-left"
                    : index === 1
                    ? "float-in-center"
                    : index === 2
                    ? "float-in-bottom-left"
                    : "float-in-right";
                return (
                  <div key={index} className={`service-card ${animationClass}`}>
                    <div className="service-image">
                      <div className="service-icon">
                        <GradientIcon
                          icon={problem.icon}
                          size="xl"
                          className="danger"
                        />
                      </div>
                    </div>
                    <div className="service-content">
                      <h3 className="service-title">{problem.title}</h3>
                      <p className="service-description">
                        {problem.description}
                      </p>
                      <div className="impact-badge">
                        <span className="impact-text">{problem.impact}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Outputs Section */}
        <section className="case-studies-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball case-studies-ball-1"></div>
            <div className="section-floating-ball case-studies-ball-2"></div>
            <div className="section-floating-ball case-studies-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">
                One Piece of Content,{" "}
                <span className="transform-word">Multiple Channels</span>
              </h2>
              <p className="section-description">
                A single approved piece of content can become a full week of
                multi-channel marketing — all created for your review.
              </p>
            </div>

            <div className="services-grid">
              {outputs.map((output, index) => {
                const animationClass =
                  index % 3 === 0
                    ? "float-in-left"
                    : index % 3 === 1
                    ? "float-in-center"
                    : "float-in-right";
                return (
                  <div key={index} className={`service-card ${animationClass}`}>
                    <div className="service-image">
                      <div className="service-icon">
                        <GradientIcon
                          icon={output.icon}
                          size="xl"
                          className="primary"
                        />
                      </div>
                    </div>
                    <div className="service-content">
                      <h3 className="service-title">{output.title}</h3>
                      <p className="service-description">{output.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How the Workflow Works Section */}
        <section id="how-it-works" className="services-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball services-ball-1"></div>
            <div className="section-floating-ball services-ball-2"></div>
            <div className="section-floating-ball services-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">How the Workflow Works</h2>
              <p className="section-description">
                Approved content moves through a connected, human-reviewed
                pipeline — from repurposing to distribution to reporting.
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
                        className={index === 2 ? "success" : "primary"}
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
          </div>
        </section>

        {/* Human Control Section */}
        <section className="case-studies-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball case-studies-ball-1"></div>
            <div className="section-floating-ball case-studies-ball-2"></div>
            <div className="section-floating-ball case-studies-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">
                Approval-Based.{" "}
                <span className="transform-word">Not Blind Automation.</span>
              </h2>
              <p className="section-description">
                Automation handles the repetitive distribution work. You keep
                control of what actually goes out.
              </p>
            </div>

            <div className="human-control-grid">
              {humanControl.map((item, index) => (
                <div key={index} className="human-control-card">
                  <div className="human-control-card-header">
                    <GradientIcon
                      icon={item.icon}
                      size="lg"
                      className={item.iconClass}
                    />
                    <h3 className="human-control-card-title">{item.title}</h3>
                  </div>
                  <p className="human-control-card-description">
                    {item.description}
                  </p>
                  <div className="impact-badge">
                    <span className="impact-text">{item.highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Integrations Section */}
        <section className="services-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball services-ball-1"></div>
            <div className="section-floating-ball services-ball-2"></div>
            <div className="section-floating-ball services-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Tools &amp; Integrations</h2>
              <p className="section-description">
                We connect the platforms you already use into one flow. Common
                integrations include:
              </p>
            </div>

            <div className="included-panel">
              <div className="included-grid">
                {integrations.map((item, index) => (
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
                <GradientIcon icon={faArrowsRotate} size="sm" className="warning" />
                <span>
                  The right stack depends on your business. We recommend tools
                  based on your channels, budget, and existing systems.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="case-studies-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball case-studies-ball-1"></div>
            <div className="section-floating-ball case-studies-ball-2"></div>
            <div className="section-floating-ball case-studies-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Use Cases</h2>
              <p className="section-description">
                Wherever content needs to reach more channels consistently, a
                marketing workflow helps.
              </p>
            </div>

            <div className="services-grid">
              {useCases.map((useCase, index) => {
                const animationClass =
                  index % 3 === 0
                    ? "float-in-left"
                    : index % 3 === 1
                    ? "float-in-center"
                    : "float-in-right";
                return (
                  <div key={index} className={`service-card ${animationClass}`}>
                    <div className="service-image">
                      <div className="service-icon">
                        <GradientIcon
                          icon={useCase.icon}
                          size="xl"
                          className="primary"
                        />
                      </div>
                    </div>
                    <div className="service-content">
                      <h3 className="service-title">{useCase.title}</h3>
                      <p className="service-description">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="services-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball services-ball-1"></div>
            <div className="section-floating-ball services-ball-2"></div>
            <div className="section-floating-ball services-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Pricing</h2>
              <p className="section-description">
                Exact pricing depends on channels, integrations, content volume,
                and support needs. The range below is a starting point.
              </p>
            </div>

            <div className="case-studies-grid">
              <div className="case-study-card float-in-left">
                <div className="case-study-content">
                  <div className="case-study-header">
                    <div className="service-icon">
                      <GradientIcon icon={faRocket} size="xl" className="primary" />
                    </div>
                    <h3 className="case-study-title">Workflow Setup</h3>
                  </div>
                  <div className="case-study-story">
                    <div className="solution-text">
                      Starting at <strong>$1,000</strong>
                    </div>
                  </div>
                  <ul className="service-features">
                    {[
                      "Repurposing and distribution strategy",
                      "Channel and CRM/email integration",
                      "Approval-based publishing workflow",
                      "Content calendar setup",
                      "Testing, launch, and documentation",
                    ].map((item, idx) => (
                      <li key={idx} className="feature-item">
                        <GradientIcon icon={faCheck} size="sm" className="success" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="case-study-card float-in-right">
                <div className="case-study-content">
                  <div className="case-study-header">
                    <div className="service-icon">
                      <GradientIcon icon={faGears} size="xl" className="warning" />
                    </div>
                    <h3 className="case-study-title">Monthly Support</h3>
                  </div>
                  <div className="case-study-story">
                    <div className="solution-text">
                      Optional monthly support available
                    </div>
                  </div>
                  <ul className="service-features">
                    {[
                      "Workflow monitoring and adjustments",
                      "New channels and integrations",
                      "Template and sequence refinements",
                      "Performance review and optimization",
                      "Scoped to your volume and needs",
                    ].map((item, idx) => (
                      <li key={idx} className="feature-item">
                        <GradientIcon icon={faCheck} size="sm" className="success" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
                Ready to Make Every Piece of Content Work Harder?
              </h2>
              <p className="cta-description">
                Let&apos;s build a marketing workflow that turns your approved
                content into consistent, multi-channel output — without the
                manual grind.
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
                Related AI systems:{" "}
                <Link href="/ai-content-automation">
                  AI Content Growth Systems
                </Link>
                {" · "}
                <Link href="/business-process-automation">
                  Business Process Automation
                </Link>
                {" · "}
                <Link href="/ai-business-systems">AI Business Systems</Link>
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
                AI Marketing Automation: Common Questions
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
