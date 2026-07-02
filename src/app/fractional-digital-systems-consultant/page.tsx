import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import {
  faBolt,
  faCheck,
  faGlobe,
  faChartLine,
  faMagnifyingGlassChart,
  faGears,
  faScrewdriverWrench,
  faSitemap,
  faRoute,
  faHandshakeAngle,
  faCalendarCheck,
  faUsers,
  faBuilding,
  faRocket,
  faLightbulb,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";

const signals = [
  {
    icon: faSitemap,
    title: "Too Many Disconnected Pieces",
    description:
      "Website, analytics, SEO, email, automation, ads: each handled by a different tool or person, with no one owning how they fit together.",
    impact: "No single view of your digital operation",
  },
  {
    icon: faCompass,
    title: "No Clear Roadmap",
    description:
      "You can react to problems, but there's no ongoing plan for what to improve next or how to prioritize limited time and budget.",
    impact: "Busy work instead of directed progress",
  },
  {
    icon: faScrewdriverWrench,
    title: "One-Off Projects Aren't Enough",
    description:
      "A developer builds what you ask, then leaves. You need a partner who understands the whole picture and keeps improving it.",
    impact: "Gaps between projects, momentum lost",
  },
  {
    icon: faUsers,
    title: "No In-House Technical Lead",
    description:
      "You're too small for a full-time CTO or head of growth, but the decisions still need someone technical and strategic.",
    impact: "Big decisions made without guidance",
  },
];

const included = [
  {
    icon: faGlobe,
    title: "Website Strategy",
    description:
      "Ongoing guidance on your site's structure, performance, conversion, and roadmap, not just a one-time build.",
  },
  {
    icon: faChartLine,
    title: "Analytics Review",
    description:
      "Regular review of your analytics and dashboards to understand what's working and where to focus next.",
  },
  {
    icon: faMagnifyingGlassChart,
    title: "SEO / AEO Direction",
    description:
      "Strategic direction for search and AI-assisted discovery: priorities, content focus, and technical fixes.",
  },
  {
    icon: faGears,
    title: "Automation Planning",
    description:
      "Identify which processes to automate next and how, so your systems keep reducing manual work.",
  },
  {
    icon: faScrewdriverWrench,
    title: "Tool Selection",
    description:
      "Objective guidance on which tools and platforms fit your needs, without vendor bias.",
  },
  {
    icon: faHandshakeAngle,
    title: "Vendor & Platform Guidance",
    description:
      "Help evaluating vendors, contractors, and platforms so you make confident, informed decisions.",
  },
  {
    icon: faRocket,
    title: "Monthly Improvements",
    description:
      "A steady cadence of prioritized improvements across your website, content, and systems.",
  },
  {
    icon: faRoute,
    title: "Roadmap Planning",
    description:
      "A living roadmap that sequences what to do next based on impact, effort, and your goals.",
  },
];

const cadence = [
  {
    icon: faCalendarCheck,
    title: "Regular Strategy Sessions",
    description:
      "Recurring calls to review progress, surface priorities, and decide what to tackle next.",
  },
  {
    icon: faChartLine,
    title: "Data-Informed Priorities",
    description:
      "Decisions grounded in analytics and performance data, not guesswork or trends.",
  },
  {
    icon: faLightbulb,
    title: "Proactive Recommendations",
    description:
      "You get suggestions before problems grow, not just answers when you ask.",
  },
];

const idealFor = [
  "Small businesses without an in-house technical lead",
  "Lean marketing teams that need senior guidance",
  "Founders juggling too many tools and vendors",
  "Businesses between one-off projects and a full-time hire",
  "Teams that want a steady roadmap, not fire drills",
  "Companies investing in websites, SEO, AI, and automation",
];

const faqs = [
  {
    question: "How is this different from hiring a developer or agency?",
    answer:
      "A developer builds what you ask. An agency runs campaigns. A fractional digital systems consultant sits above both, owning strategy, prioritization, tool selection, and how all the pieces connect over time, then implementing or coordinating the work.",
  },
  {
    question: "What does a typical month look like?",
    answer:
      "Regular strategy sessions, a review of analytics and progress, a prioritized set of improvements, and hands-on implementation or coordination, all guided by a living roadmap tied to your goals.",
  },
  {
    question: "Do you implement, or just advise?",
    answer:
      "Both. The advisory keeps direction clear, and Clyra can implement across websites, content systems, analytics, SEO, and automation, or coordinate other vendors when that's the better fit.",
  },
  {
    question: "Is there a minimum commitment?",
    answer:
      "This is an ongoing engagement designed for steady progress, typically month-to-month. We'll align on scope and cadence up front so expectations are clear.",
  },
  {
    question: "What if I only need occasional help?",
    answer:
      "If you have a defined one-off project, a standard engagement may fit better. This service is specifically for businesses that want ongoing strategic and technical support over time.",
  },
];

export const metadata: Metadata = {
  title: "Fractional Digital Systems Consultant | Clyra Studios",
  description:
    "Ongoing digital systems consulting for businesses that need help with websites, analytics, SEO, AI, automation, integrations, and marketing technology: strategy plus implementation.",
  keywords:
    "fractional digital consultant, digital systems consultant, fractional CTO, fractional head of growth, ongoing web strategy, digital strategy retainer, marketing technology consultant, SEO and automation advisory, small business technical partner",
  authors: [{ name: "Clyra Studios" }],
  creator: "Clyra Studios",
  publisher: "Clyra Studios",
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: {
    canonical: "/fractional-digital-systems-consultant",
  },
  openGraph: {
    title: "Fractional Digital Systems Consultant | Clyra Studios",
    description:
      "Ongoing technical strategy, implementation, and advisory support for businesses that need a digital partner across websites, analytics, SEO, AI, and automation.",
    url: "https://clyrastudios.com/fractional-digital-systems-consultant",
    siteName: "Clyra Studios",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Clyra Studios - Fractional Digital Systems Consultant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional Digital Systems Consultant | Clyra Studios",
    description:
      "Ongoing technical strategy, implementation, and advisory support for businesses that need a digital partner across websites, analytics, SEO, AI, and automation.",
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
  name: "Fractional Digital Systems Consultant",
  description:
    "Ongoing digital systems consulting and implementation for businesses: website strategy, analytics review, SEO/AEO direction, automation planning, tool selection, and roadmap planning.",
  provider: {
    "@type": "Organization",
    name: "Clyra Studios",
    url: "https://clyrastudios.com",
    logo: "https://clyrastudios.com/images/clyra_logo.png",
  },
  areaServed: "US",
  serviceType: "Digital Systems Consulting",
  category: "Fractional Consulting",
  offers: [
    {
      "@type": "Offer",
      name: "Fractional Digital Systems Consulting",
      description:
        "Ongoing strategy, advisory, and implementation across websites, analytics, SEO, AI, and automation",
      priceRange: "$350+/month",
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

export default function FractionalDigitalSystemsConsultantPage() {
  return (
    <>
      <Script
        id="fractional-structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <Script
        id="fractional-faq-data"
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
                  <span className="title-line">A Fractional Digital Systems</span>
                  <span className="title-line highlight">
                    Partner for Your Whole Digital Operation
                  </span>
                </h1>
                <p className="hero-description">
                  Ongoing technical strategy, implementation, and advisory
                  support for businesses that need a digital partner, across
                  websites, analytics, SEO, AI, automation, and the tools that
                  connect them. More than a developer. A partner who owns the
                  bigger picture.
                </p>
                <p className="hero-hook">
                  Strategy, implementation, and a roadmap, every month.
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
                <Link href="#whats-included" className="btn btn-secondary btn-large">
                  What&apos;s Included
                </Link>
              </div>

              <div className="trust-signals">
                <div className="trust-item">
                  <GradientIcon icon={faCompass} size="sm" className="primary" />
                  <span className="trust-text">Strategic Direction</span>
                </div>
                <div className="trust-item">
                  <GradientIcon
                    icon={faScrewdriverWrench}
                    size="sm"
                    className="success"
                  />
                  <span className="trust-text">Hands-On Implementation</span>
                </div>
                <div className="trust-item">
                  <GradientIcon icon={faRoute} size="sm" className="primary" />
                  <span className="trust-text">Living Roadmap</span>
                </div>
                <div className="trust-item">
                  <GradientIcon icon={faBolt} size="sm" className="warning" />
                  <span className="trust-text">Monthly Progress</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* When You Need More Section */}
        <section className="services-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball services-ball-1"></div>
            <div className="section-floating-ball services-ball-2"></div>
            <div className="section-floating-ball services-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">
                When You Need More Than{" "}
                <span className="transform-word">a Web Developer</span>
              </h2>
              <p className="section-description">
                If any of these sound familiar, you likely need ongoing
                strategic support, not another one-off project.
              </p>
            </div>

            <div className="services-grid">
              {signals.map((item, index) => {
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
                          icon={item.icon}
                          size="xl"
                          className="danger"
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

        {/* What's Included Section */}
        <section id="whats-included" className="case-studies-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball case-studies-ball-1"></div>
            <div className="section-floating-ball case-studies-ball-2"></div>
            <div className="section-floating-ball case-studies-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">
                What Ongoing Support{" "}
                <span className="transform-word">Includes</span>
              </h2>
              <p className="section-description">
                A single partner across the systems that run your digital
                presence: strategy and implementation together.
              </p>
            </div>

            <div className="services-grid">
              {included.map((item, index) => {
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

        {/* Monthly Cadence Section */}
        <section className="case-studies-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball case-studies-ball-1"></div>
            <div className="section-floating-ball case-studies-ball-2"></div>
            <div className="section-floating-ball case-studies-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">
                Monthly Growth and{" "}
                <span className="transform-word">Systems Planning</span>
              </h2>
              <p className="section-description">
                A steady rhythm of review, prioritization, and progress, so
                your digital systems keep improving instead of stalling.
              </p>
            </div>

            <div className="human-control-grid">
              {cadence.map((item, index) => (
                <div key={index} className="human-control-card">
                  <div className="human-control-card-header">
                    <GradientIcon icon={item.icon} size="lg" className="primary" />
                    <h3 className="human-control-card-title">{item.title}</h3>
                  </div>
                  <p className="human-control-card-description">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ideal For Section */}
        <section className="services-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball services-ball-1"></div>
            <div className="section-floating-ball services-ball-2"></div>
            <div className="section-floating-ball services-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">
                Ideal for Small Businesses{" "}
                <span className="transform-word">&amp; Lean Teams</span>
              </h2>
              <p className="section-description">
                This works best for businesses that need senior technical
                guidance without a full-time hire.
              </p>
            </div>

            <div className="included-panel">
              <div className="included-grid">
                {idealFor.map((item, index) => (
                  <div key={index} className="included-item">
                    <GradientIcon icon={faCheck} size="sm" className="success" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="case-studies-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball case-studies-ball-1"></div>
            <div className="section-floating-ball case-studies-ball-2"></div>
            <div className="section-floating-ball case-studies-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Pricing</h2>
              <p className="section-description">
                Ongoing engagements are scoped to your needs, cadence, and how
                much hands-on implementation is involved.
              </p>
            </div>

            <div className="case-studies-grid">
              <div className="case-study-card float-in-left">
                <div className="case-study-content">
                  <div className="case-study-header">
                    <div className="service-icon">
                      <GradientIcon icon={faCompass} size="xl" className="primary" />
                    </div>
                    <h3 className="case-study-title">Advisory & Systems Retainer</h3>
                  </div>
                  <div className="case-study-story">
                    <div className="solution-text">
                      Starting at <strong>$350/month</strong>
                    </div>
                  </div>
                  <ul className="service-features">
                    {[
                      "Regular strategy sessions",
                      "Analytics and performance review",
                      "SEO / AEO and automation direction",
                      "Tool and vendor guidance",
                      "Prioritized monthly improvements",
                      "Living roadmap tied to your goals",
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
                      <GradientIcon icon={faBuilding} size="xl" className="warning" />
                    </div>
                    <h3 className="case-study-title">Scaled Engagement</h3>
                  </div>
                  <div className="case-study-story">
                    <div className="solution-text">
                      For heavier implementation needs
                    </div>
                  </div>
                  <ul className="service-features">
                    {[
                      "Everything in the base retainer",
                      "More hands-on implementation hours",
                      "Coordination of other vendors",
                      "Larger builds and integrations",
                      "Priority availability",
                      "Scoped to your roadmap and pace",
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
                Ready for a Digital Partner, Not Just a Project?
              </h2>
              <p className="cta-description">
                Let&apos;s talk about where your digital systems are today and
                build a roadmap for steady, prioritized improvement.
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
                Explore related systems:{" "}
                <Link href="/ai-business-systems">AI Business Systems</Link>
                {" · "}
                <Link href="/google-analytics-looker-studio-dashboards">
                  Analytics Dashboards
                </Link>
                {" · "}
                <Link href="/business-process-automation">
                  Business Process Automation
                </Link>
                {" · "}
                <Link href="/marketing-technology-consulting">
                  MarTech Consulting
                </Link>
                {" · "}
                <Link href="/api-integrations">API Integrations</Link>
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
                Fractional Consulting: Common Questions
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
