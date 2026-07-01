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
  faRoute,
  faBell,
  faDatabase,
  faEnvelopeOpenText,
  faUserPlus,
  faFileSignature,
  faTableColumns,
  faDiagramProject,
  faPlug,
  faShieldHalved,
  faMagnifyingGlass,
  faScrewdriverWrench,
  faRocket,
  faGears,
  faCopy,
  faTriangleExclamation,
  faArrowRightArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const problems = [
  {
    icon: faCopy,
    title: "Manual, Repetitive Tasks",
    description:
      "Copying data between tools, sending the same emails, and updating records by hand — every day, forever.",
    impact: "Hours lost to work software should handle",
  },
  {
    icon: faTriangleExclamation,
    title: "Things Slip Through Cracks",
    description:
      "Leads go unrouted, follow-ups get missed, and onboarding steps are forgotten when everything is manual.",
    impact: "Lost leads and inconsistent client experience",
  },
  {
    icon: faDatabase,
    title: "Disconnected Systems",
    description:
      "Your forms, CRM, email, spreadsheets, and tools don't talk to each other, so data is entered more than once.",
    impact: "Duplicate work and out-of-sync data",
  },
  {
    icon: faClock,
    title: "Growth Adds More Busywork",
    description:
      "As volume grows, manual processes don't scale — they just consume more of your team's time.",
    impact: "You hire for tasks automation could handle",
  },
];

const whatCanBeAutomated = [
  {
    icon: faRoute,
    title: "Lead Routing",
    description:
      "Automatically capture, qualify, and route leads to the right person or pipeline the moment they come in.",
  },
  {
    icon: faBell,
    title: "Form Notifications",
    description:
      "Instant alerts and structured notifications when forms are submitted — to email, Slack, or your CRM.",
  },
  {
    icon: faDatabase,
    title: "CRM Updates",
    description:
      "Keep contact records, deal stages, and activity synced automatically across your tools.",
  },
  {
    icon: faEnvelopeOpenText,
    title: "Email Workflows",
    description:
      "Trigger the right emails and sequences based on actions, stages, or timing — without manual sends.",
  },
  {
    icon: faUserPlus,
    title: "Client Onboarding",
    description:
      "Automate welcome sequences, document collection, task creation, and kickoff steps for every new client.",
  },
  {
    icon: faFileSignature,
    title: "Proposal Workflows",
    description:
      "Streamline proposal creation, delivery, reminders, and follow-up so deals keep moving.",
  },
  {
    icon: faTableColumns,
    title: "Internal Dashboards",
    description:
      "Bring key data into one live view so your team sees status without digging through tools.",
  },
  {
    icon: faPlug,
    title: "API Connections",
    description:
      "Custom integrations that connect systems without native support — so everything works together.",
  },
];

const processSteps = [
  {
    icon: faMagnifyingGlass,
    title: "1. Map the Process",
    description:
      "We document how the task or workflow runs today, where the friction is, and what the ideal flow looks like.",
  },
  {
    icon: faScrewdriverWrench,
    title: "2. Design the Automation",
    description:
      "We choose the right tools and design a workflow that connects your systems and handles the repetitive steps.",
  },
  {
    icon: faGears,
    title: "3. Build & Test",
    description:
      "We build the automation, test it against real scenarios, and add safeguards so nothing breaks silently.",
  },
  {
    icon: faRocket,
    title: "4. Launch & Refine",
    description:
      "We roll it out, monitor how it performs, and refine over time as your processes and volume change.",
  },
];

const tools = [
  "Airtable",
  "Google Sheets",
  "Notion",
  "HubSpot",
  "Zapier",
  "Make",
  "n8n",
  "Slack & email platforms",
  "Webhooks & custom APIs",
];

const humanControl = [
  {
    icon: faShieldHalved,
    iconClass: "success",
    title: "Reliable, Not Fragile",
    description:
      "We build in error handling, notifications, and fallbacks so you know when something needs attention — automations shouldn't fail silently.",
    highlight: "Built to be monitored.",
  },
  {
    icon: faArrowRightArrowLeft,
    iconClass: "primary",
    title: "Connects What You Already Use",
    description:
      "We work with your existing tools where possible instead of forcing a rip-and-replace. Automation should reduce friction, not add a new platform to learn.",
    highlight: "Your stack, connected.",
  },
  {
    icon: faGears,
    iconClass: "warning",
    title: "Scales With Your Business",
    description:
      "As volume grows, automated processes handle more without adding manual work — so you spend on growth, not repetitive tasks.",
    highlight: "Handle more, not busier.",
  },
];

const useCases = [
  {
    icon: faRoute,
    title: "Sales & Lead Management",
    description:
      "Capture, qualify, route, and follow up with leads automatically across your pipeline.",
  },
  {
    icon: faUserPlus,
    title: "Client Onboarding",
    description:
      "Give every new client a consistent, automated onboarding experience.",
  },
  {
    icon: faEnvelopeOpenText,
    title: "Operations & Admin",
    description:
      "Automate recurring internal tasks, reminders, and data entry.",
  },
  {
    icon: faTableColumns,
    title: "Reporting & Dashboards",
    description:
      "Pull data from multiple tools into live internal dashboards.",
  },
  {
    icon: faFileSignature,
    title: "Proposals & Contracts",
    description:
      "Automate proposal delivery, reminders, and status tracking.",
  },
  {
    icon: faDatabase,
    title: "Data Sync",
    description:
      "Keep records consistent across CRM, spreadsheets, and databases.",
  },
];

const faqs = [
  {
    question: "What kinds of tasks can you automate?",
    answer:
      "Repetitive, rules-based work: lead routing, form notifications, CRM updates, email workflows, onboarding, proposal follow-ups, data syncing, reporting, and connecting tools that don't natively integrate.",
  },
  {
    question: "Do I need to replace my current tools?",
    answer:
      "Usually not. We connect the tools you already use where possible. The goal is to reduce friction, not force you onto a new platform.",
  },
  {
    question: "What platforms do you work with?",
    answer:
      "Common ones include Airtable, Google Sheets, Notion, HubSpot, Zapier, Make, and n8n — plus custom API and webhook integrations when needed.",
  },
  {
    question: "What if an automation breaks?",
    answer:
      "We build in error handling and notifications so failures surface instead of going unnoticed. Optional ongoing support keeps everything monitored and maintained.",
  },
  {
    question: "Is this the same as AI automation?",
    answer:
      "Not exactly. Business process automation focuses on connecting systems and automating repetitive tasks. AI can be added where it helps — but a lot of valuable automation is simply reliable workflow logic.",
  },
  {
    question: "How much time can this actually save?",
    answer:
      "It depends on the process, but automating high-frequency manual tasks often recovers hours per week and reduces errors. We identify the highest-impact processes first.",
  },
];

export const metadata: Metadata = {
  title: "Business Process Automation for Small Businesses | Clyra Studios",
  description:
    "Custom business process automation for small businesses, including CRM workflows, lead routing, onboarding, email automation, dashboards, and API integrations with Zapier, Make, n8n, Airtable, and more.",
  keywords:
    "business process automation, small business automation, workflow automation, CRM automation, lead routing automation, Zapier automation, Make automation, n8n workflows, Airtable automation, API integration, client onboarding automation",
  authors: [{ name: "Clyra Studios" }],
  creator: "Clyra Studios",
  publisher: "Clyra Studios",
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: {
    canonical: "/business-process-automation",
  },
  openGraph: {
    title: "Business Process Automation for Small Businesses | Clyra Studios",
    description:
      "Automate repetitive tasks, internal workflows, and manual processes — lead routing, onboarding, CRM updates, dashboards, and integrations.",
    url: "https://clyrastudios.com/business-process-automation",
    siteName: "Clyra Studios",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Clyra Studios - Business Process Automation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Process Automation for Small Businesses | Clyra Studios",
    description:
      "Automate repetitive tasks, internal workflows, and manual processes — lead routing, onboarding, CRM updates, dashboards, and integrations.",
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
  name: "Business Process Automation",
  description:
    "Custom business process automation for small businesses — lead routing, CRM workflows, onboarding, email automation, internal dashboards, and API integrations.",
  provider: {
    "@type": "Organization",
    name: "Clyra Studios",
    url: "https://clyrastudios.com",
    logo: "https://clyrastudios.com/images/clyra_logo.png",
  },
  areaServed: "US",
  serviceType: "Business Process Automation",
  category: "Workflow Automation",
  offers: [
    {
      "@type": "Offer",
      name: "Automation Workflow Setup",
      description:
        "Process mapping, workflow design, tool integration, testing, and launch",
      priceRange: "$750+",
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

export default function BusinessProcessAutomationPage() {
  return (
    <>
      <Script
        id="bpa-structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <Script
        id="bpa-faq-data"
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
                  <span className="title-line">Business Process Automation to</span>
                  <span className="title-line highlight">
                    Stop Doing Work Software Should Handle
                  </span>
                </h1>
                <p className="hero-description">
                  We automate the repetitive business tasks, internal workflows,
                  and manual processes that eat your team&apos;s time — lead
                  routing, onboarding, CRM updates, notifications, dashboards,
                  and the integrations that connect your tools together.
                </p>
                <p className="hero-hook">
                  Less manual work. Fewer dropped balls. More time to grow.
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
                <Link href="#what-can-be-automated" className="btn btn-secondary btn-large">
                  See What&apos;s Possible
                </Link>
              </div>

              <div className="trust-signals">
                <div className="trust-item">
                  <GradientIcon icon={faDiagramProject} size="sm" className="primary" />
                  <span className="trust-text">Connected Tools</span>
                </div>
                <div className="trust-item">
                  <GradientIcon
                    icon={faShieldHalved}
                    size="sm"
                    className="success"
                  />
                  <span className="trust-text">Reliable Workflows</span>
                </div>
                <div className="trust-item">
                  <GradientIcon icon={faPlug} size="sm" className="primary" />
                  <span className="trust-text">Custom Integrations</span>
                </div>
                <div className="trust-item">
                  <GradientIcon icon={faBolt} size="sm" className="warning" />
                  <span className="trust-text">Time Recovered</span>
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
                Repetitive Work{" "}
                <span className="transform-word">Slows Growth</span>
              </h2>
              <p className="section-description">
                Manual processes feel manageable at first — then they quietly
                become the ceiling on how much your team can handle.
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

        {/* What Can Be Automated Section */}
        <section id="what-can-be-automated" className="case-studies-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball case-studies-ball-1"></div>
            <div className="section-floating-ball case-studies-ball-2"></div>
            <div className="section-floating-ball case-studies-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">
                What Can Be <span className="transform-word">Automated</span>
              </h2>
              <p className="section-description">
                If a process is repetitive and rules-based, it can usually be
                automated. Common examples include:
              </p>
            </div>

            <div className="services-grid">
              {whatCanBeAutomated.map((item, index) => {
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

        {/* How Clyra Builds Workflows Section */}
        <section className="services-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball services-ball-1"></div>
            <div className="section-floating-ball services-ball-2"></div>
            <div className="section-floating-ball services-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">How Clyra Builds Workflows</h2>
              <p className="section-description">
                A practical, low-risk process — from mapping what you do today to
                a reliable automation you can trust.
              </p>
            </div>

            <div className="services-grid">
              {processSteps.map((step, index) => {
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
                          icon={step.icon}
                          size="xl"
                          className="primary"
                        />
                      </div>
                    </div>
                    <div className="service-content">
                      <h3 className="service-title">{step.title}</h3>
                      <p className="service-description">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Human / Reliability Section */}
        <section className="case-studies-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball case-studies-ball-1"></div>
            <div className="section-floating-ball case-studies-ball-2"></div>
            <div className="section-floating-ball case-studies-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">
                Built to Be{" "}
                <span className="transform-word">Reliable</span>
              </h2>
              <p className="section-description">
                Good automation is dependable and connected to what you already
                use — not a fragile black box.
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

        {/* Tools We Connect Section */}
        <section className="services-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball services-ball-1"></div>
            <div className="section-floating-ball services-ball-2"></div>
            <div className="section-floating-ball services-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Tools We Connect</h2>
              <p className="section-description">
                We work with the platforms you already use and add custom
                integrations where needed.
              </p>
            </div>

            <div className="included-panel">
              <div className="included-grid">
                {tools.map((item, index) => (
                  <div key={index} className="included-item">
                    <GradientIcon icon={faPlug} size="sm" className="primary" />
                    <span>{item}</span>
                  </div>
                ))}
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
                Wherever manual, repetitive work is slowing your team, a workflow
                can help.
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
                Exact pricing depends on process complexity, number of
                integrations, and support needs. The range below is a starting
                point.
              </p>
            </div>

            <div className="case-studies-grid">
              <div className="case-study-card float-in-left">
                <div className="case-study-content">
                  <div className="case-study-header">
                    <div className="service-icon">
                      <GradientIcon icon={faRocket} size="xl" className="primary" />
                    </div>
                    <h3 className="case-study-title">Automation Setup</h3>
                  </div>
                  <div className="case-study-story">
                    <div className="solution-text">
                      Starting at <strong>$750</strong>
                    </div>
                  </div>
                  <ul className="service-features">
                    {[
                      "Process mapping and discovery",
                      "Workflow and integration design",
                      "Build, testing, and error handling",
                      "Tool connections (Zapier, Make, n8n, APIs)",
                      "Launch and documentation",
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
                    <h3 className="case-study-title">Ongoing Support</h3>
                  </div>
                  <div className="case-study-story">
                    <div className="solution-text">
                      Optional monthly support available
                    </div>
                  </div>
                  <ul className="service-features">
                    {[
                      "Workflow monitoring and maintenance",
                      "New automations as you grow",
                      "Adjustments when tools or processes change",
                      "Priority troubleshooting",
                      "Scoped to your needs",
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
                Ready to Automate the Work That&apos;s Slowing You Down?
              </h2>
              <p className="cta-description">
                Let&apos;s map your most repetitive processes and build reliable
                automations that give your team its time back.
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
                <Link href="/ai-marketing-automation">
                  AI Marketing Automation
                </Link>
                {" · "}
                <Link href="/ai-content-automation">
                  AI Content Growth Systems
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
                Business Process Automation: Common Questions
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
