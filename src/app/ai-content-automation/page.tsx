import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import {
  faBolt,
  faCheck,
  faPenToSquare,
  faClock,
  faSearch,
  faCalendarDays,
  faArrowTrendDown,
  faArrowTrendUp,
  faBrain,
  faRss,
  faComments,
  faLightbulb,
  faLayerGroup,
  faBullseye,
  faGears,
  faFileLines,
  faShieldHalved,
  faTriangleExclamation,
  faHashtag,
  faArrowsRotate,
  faEnvelope,
  faRocket,
  faLink,
  faChartLine,
  faUsers,
  faLocationDot,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

const problems = [
  {
    icon: faPenToSquare,
    title: "Every Post Starts From Scratch",
    description:
      "Writing a single article requires research, an outline, a draft, an edit, and formatting. That alone takes hours.",
    impact: "Most businesses publish inconsistently or stop entirely",
  },
  {
    icon: faClock,
    title: "Time Is the Bottleneck",
    description:
      "You know content matters. But between running the business and serving clients, writing gets pushed to the bottom of the list every week.",
    impact: "The to-do list wins. Publishing doesn't happen.",
  },
  {
    icon: faSearch,
    title: "SEO Structure Is Hard to Get Right",
    description:
      "Good SEO content needs keyword intent, headings, internal links, meta descriptions, and the right structure. It's not just writing — it's a system.",
    impact: "Published content that never gets found",
  },
  {
    icon: faCalendarDays,
    title: "Consistency Is What Builds Authority",
    description:
      "Search engines and audiences reward consistent publishing. One article a month won't move the needle. You need volume and regularity.",
    impact: "Sporadic publishing = slow or stalled organic growth",
  },
  {
    icon: faArrowTrendDown,
    title: "Without Consistency, Growth Stalls",
    description:
      "Topical authority comes from covering a subject thoroughly over time. Without a repeatable content process, you stay invisible in search.",
    impact: "Competitors who publish more, rank more",
  },
];

const capabilities = [
  {
    icon: faRss,
    title: "Topic & Keyword Monitoring",
    description:
      "The system can track your niche, relevant keywords, competitor topics, industry news, financial tickers, or product categories to surface timely content opportunities.",
  },
  {
    icon: faBrain,
    title: "Draft Article Generation",
    description:
      "AI-generated first drafts based on your content strategy, brand voice, audience, and target keywords. A foundation to review and publish — not a blank page.",
  },
  {
    icon: faComments,
    title: "FAQ & AEO Content",
    description:
      "Generate question-and-answer content structured for featured snippets, People Also Ask, and AI-assisted search experiences.",
  },
  {
    icon: faFileLines,
    title: "WordPress Draft Preparation",
    description:
      "Drafts can be pushed directly into WordPress as unpublished posts — ready for review, editing, and one-click publishing when you approve.",
  },
  {
    icon: faLightbulb,
    title: "Social & Newsletter Ideas",
    description:
      "Each piece of content can seed social captions, newsletter sections, and repurposing ideas — so one article becomes multiple touchpoints.",
  },
  {
    icon: faLayerGroup,
    title: "A Pipeline That Keeps Moving",
    description:
      "Instead of starting from zero each week, you have a queue of draft content waiting for your review. The system keeps producing. You control what goes live.",
  },
];

const process = [
  {
    icon: faBullseye,
    title: "1. Define Your Content Strategy",
    description:
      "We identify your niche, target audience, core topics, target keywords, tone of voice, and publishing goals. The system is only as good as the strategy behind it.",
  },
  {
    icon: faGears,
    title: "2. Build the Automation Workflow",
    description:
      "We connect the right tools — WordPress, AI models, research APIs, automation platforms, and analytics — into a workflow built for your business.",
  },
  {
    icon: faFileLines,
    title: "3. Generate Review-Ready Drafts",
    description:
      "The system produces structured draft content for your review. Nothing publishes automatically unless you explicitly approve it. You stay in control.",
  },
  {
    icon: faArrowTrendUp,
    title: "4. Improve Over Time",
    description:
      "We refine the workflow based on search performance, analytics, and what's resonating with your audience. The system gets better as it runs.",
  },
];

const benefits = [
  "Publish more consistently without writing every word manually",
  "Reduce blank-page friction for your team or yourself",
  "Build topical authority across your niche over time",
  "Improve SEO coverage with a higher volume of structured content",
  "Support AEO and AI-assisted search discovery",
  "Target specific keywords, niches, or product categories",
  "Turn research and trends into draft content faster",
  "Reuse content across blogs, FAQs, email, and social",
];

const humanControl = [
  {
    icon: faShieldHalved,
    iconClass: "success",
    title: "You Stay in Control",
    description:
      "Every draft is created for your review before anything goes live. The system generates — you decide. Nothing publishes automatically unless you explicitly approve it.",
    highlight: "Drafts in. Human decision out.",
  },
  {
    icon: faBrain,
    iconClass: "primary",
    title: "Supports Your Expertise, Doesn't Replace It",
    description:
      "AI generates the structure and first draft. You bring the judgment, accuracy, and context that makes content worth publishing. The system accelerates production — your voice and expertise remain the filter.",
    highlight: "Speed up production, not decision-making.",
  },
  {
    icon: faUsers,
    iconClass: "warning",
    title: "Quality, Accuracy, Brand Voice",
    description:
      "The goal is to reduce blank-page friction, not to eliminate editorial standards. Review time is shorter because the draft is already structured — but it is still your judgment that makes it publishable.",
    highlight: "Faster to publish. Never bypassed.",
  },
];

const useCases = [
  {
    icon: faSearch,
    title: "SEO Blog Draft Generation",
    description:
      "Consistent, keyword-targeted article drafts for review — the foundation of an organic traffic strategy.",
  },
  {
    icon: faComments,
    title: "FAQ & AEO Content Libraries",
    description:
      "Question-and-answer content structured for featured snippets and AI-assisted search results.",
  },
  {
    icon: faChartLine,
    title: "Financial Market Commentary",
    description:
      "Automated first-draft market summaries and commentary based on live data — for publishers and financial services.",
  },
  {
    icon: faLocationDot,
    title: "Local Business Content Ideas",
    description:
      "Location-specific content, service area pages, and local SEO articles generated for review.",
  },
  {
    icon: faBookOpen,
    title: "Product Education Content",
    description:
      "How-to guides, feature explanations, and product FAQs that help customers find and understand what you offer.",
  },
  {
    icon: faEnvelope,
    title: "Newsletter Draft Generation",
    description:
      "Weekly or monthly newsletter sections drafted from your content pipeline — ready to edit and send.",
  },
  {
    icon: faHashtag,
    title: "Social Media Caption Generation",
    description:
      "Platform-specific captions and post ideas pulled from your articles and content calendar.",
  },
  {
    icon: faArrowsRotate,
    title: "Content Refresh Recommendations",
    description:
      "Identify and redraft underperforming content to recover rankings, update accuracy, and add new information.",
  },
];

const seoAeoFeatures = [
  "Target specific search queries and long-tail keywords",
  "Structure content around clear questions and direct answers",
  "Generate FAQ sections formatted for featured snippets",
  "Support internal linking opportunities across your site",
  "Use search-friendly H2/H3 heading structures",
  "Prepare content for AI-assisted search (AEO) discovery",
  "Cover topics thoroughly to build topical authority",
  "Align content format with People Also Ask patterns",
];

const faqs = [
  {
    question: "Will the AI publish automatically?",
    answer:
      "No. The recommended setup creates drafts for human review before anything goes live. Nothing publishes automatically unless you explicitly configure it that way. You stay in control of what goes live.",
  },
  {
    question: "Can it match my writing style and brand voice?",
    answer:
      "Yes. We build the prompt strategy around your existing content, tone, structure, and preferences. The more reference material you provide, the closer the drafts will be to your voice.",
  },
  {
    question: "Do I need to use WordPress?",
    answer:
      "WordPress is a common integration and works well for this workflow. The system can be adapted to other CMS platforms depending on available APIs and integrations.",
  },
  {
    question: "Does this guarantee SEO results?",
    answer:
      "No. It supports consistent publishing and SEO best practices, but rankings and traffic cannot be guaranteed. Search performance depends on competition, content quality, publishing frequency, domain authority, and audience demand.",
  },
  {
    question: "Can it create social posts and newsletters too?",
    answer:
      "Yes. Social captions, newsletter drafts, and content repurposing can be included in the initial workflow or added as extensions over time.",
  },
  {
    question: "What tools does it use?",
    answer:
      "The tools depend on the project. Workflows typically include AI language models, automation platforms (such as Make or n8n), WordPress, research APIs, and analytics integrations. We select the right stack for your requirements.",
  },
  {
    question: "How much content can it generate?",
    answer:
      "Volume depends on how the workflow is configured and your review capacity. The system can produce multiple drafts per week — but publishing quality content you have actually reviewed is more valuable than high volume you have not.",
  },
];

export const metadata: Metadata = {
  title: "AI Content Automation for Small Businesses | Clyra Studios",
  description:
    "Custom AI content automation systems that generate SEO-ready article drafts, FAQ content, and social media ideas for review before publishing. Built for businesses that need consistent content without doing everything manually.",
  keywords:
    "AI content automation, AI content generation, automated content creation, AI blog writing, content automation small business, SEO content automation, AI writing system, content workflow automation, automated SEO content, AI article generation, WordPress content automation, FAQ content generation, AEO content, content marketing automation",
  authors: [{ name: "Clyra Studios" }],
  creator: "Clyra Studios",
  publisher: "Clyra Studios",
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: {
    canonical: "/ai-content-automation",
  },
  openGraph: {
    title: "AI Content Automation for Small Businesses | Clyra Studios",
    description:
      "Custom AI content systems that generate SEO-ready drafts for human review. Consistent publishing without starting from a blank page every week.",
    url: "https://clyrastudios.com/ai-content-automation",
    siteName: "Clyra Studios",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Clyra Studios - AI Content Automation Systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Content Automation for Small Businesses | Clyra Studios",
    description:
      "Custom AI content systems that generate SEO-ready drafts for human review. Consistent publishing without starting from a blank page every week.",
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
  name: "AI Content Automation for Small Businesses",
  description:
    "Custom AI-powered content workflow systems that generate SEO-ready draft articles, FAQ content, and marketing ideas for human review before publishing.",
  provider: {
    "@type": "Organization",
    name: "Clyra Studios",
    url: "https://clyrastudios.com",
    logo: "https://clyrastudios.com/images/clyra_logo.png",
  },
  areaServed: "US",
  serviceType: "AI Content Automation",
  category: "Content Marketing Automation",
  offers: [
    {
      "@type": "Offer",
      name: "AI Content Workflow Setup",
      description:
        "Strategy, workflow design, AI prompt development, WordPress integration, testing, and launch",
      priceRange: "$1000+",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "Monthly Content Automation Support",
      description:
        "Workflow monitoring, prompt updates, SEO and content improvements, and light optimization",
      priceRange: "$250+/month",
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

export default function AIContentAutomationPage() {
  return (
    <>
      <Script
        id="ai-content-structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <Script
        id="ai-content-faq-data"
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
                  <span className="title-line">AI Content Automation for</span>
                  <span className="title-line highlight">
                    Businesses That Need to Publish Consistently
                  </span>
                </h1>
                <p className="hero-description">
                  We build custom AI content systems that generate SEO-ready
                  article drafts, FAQ content, and marketing ideas based on your
                  niche, audience, and existing voice — so you can grow your
                  content library without starting from a blank page every week.
                </p>
                <p className="hero-hook">
                  Draft-first. Human-reviewed. Consistently published.
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
                <Link
                  href="#how-it-works"
                  className="btn btn-secondary btn-large"
                >
                  See How It Works
                </Link>
              </div>

              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">Draft</span>
                  <span className="stat-label">First Workflow</span>
                </div>
                <div className="stat">
                  <span className="stat-number">Human</span>
                  <span className="stat-label">Review Required</span>
                </div>
                <div className="stat">
                  <span className="stat-number">Your</span>
                  <span className="stat-label">Brand Voice</span>
                </div>
              </div>

              <div className="trust-signals">
                <div className="trust-item">
                  <GradientIcon icon={faBrain} size="sm" className="primary" />
                  <span className="trust-text">AI-Assisted Drafts</span>
                </div>
                <div className="trust-item">
                  <GradientIcon
                    icon={faShieldHalved}
                    size="sm"
                    className="success"
                  />
                  <span className="trust-text">Human-Reviewed</span>
                </div>
                <div className="trust-item">
                  <GradientIcon icon={faSearch} size="sm" className="primary" />
                  <span className="trust-text">SEO & AEO Structured</span>
                </div>
                <div className="trust-item">
                  <GradientIcon icon={faBolt} size="sm" className="warning" />
                  <span className="trust-text">WordPress Ready</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Section */}
        <section className="services-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball services-ball-1"></div>
            <div className="section-floating-ball services-ball-2"></div>
            <div className="section-floating-ball services-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">
                Content Growth Is Hard When{" "}
                <span className="transform-word">Every Post Starts From Zero</span>
              </h2>
              <p className="section-description">
                Most businesses know they need more content. The problem
                is not intent — it is time, structure, and the friction
                of doing it manually week after week.
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
                    : index === 3
                    ? "float-in-right"
                    : "float-in-bottom-right";
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

        {/* Solution Section */}
        <section className="case-studies-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball case-studies-ball-1"></div>
            <div className="section-floating-ball case-studies-ball-2"></div>
            <div className="section-floating-ball case-studies-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">
                A Content Engine Built Around{" "}
                <span className="transform-word">Your Business</span>
              </h2>
              <p className="section-description">
                Clyra Studios builds an AI-assisted content workflow tailored to
                your niche, publishing goals, and existing voice. Not a generic
                tool. A system built for how your business actually works.
              </p>
            </div>

            <div className="services-grid">
              {capabilities.map((cap, index) => {
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
                          icon={cap.icon}
                          size="xl"
                          className="primary"
                        />
                      </div>
                    </div>
                    <div className="service-content">
                      <h3 className="service-title">{cap.title}</h3>
                      <p className="service-description">{cap.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="services-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball services-ball-1"></div>
            <div className="section-floating-ball services-ball-2"></div>
            <div className="section-floating-ball services-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">How It Works</h2>
              <p className="section-description">
                A clear four-step process from strategy to a content pipeline
                that keeps producing.
              </p>
            </div>

            <div className="services-grid">
              {process.map((step, index) => {
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

        {/* Benefits Section */}
        <section className="case-studies-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball case-studies-ball-1"></div>
            <div className="section-floating-ball case-studies-ball-2"></div>
            <div className="section-floating-ball case-studies-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">What This Helps You Do</h2>
              <p className="section-description">
                The goal is a repeatable content process — not a one-time
                article, but a system that keeps your pipeline moving.
              </p>
            </div>

            <div className="included-panel">
              <div className="included-grid">
                {benefits.map((benefit, index) => (
                  <div key={index} className="included-item">
                    <GradientIcon icon={faCheck} size="sm" className="success" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
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
                AI-Assisted.{" "}
                <span className="transform-word">Not Autopilot.</span>
              </h2>
              <p className="section-description">
                This is not fully automated spam publishing. It is a
                human-reviewed content workflow — built to support your
                expertise, not replace it.
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

        {/* Use Cases Section */}
        <section className="services-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball services-ball-1"></div>
            <div className="section-floating-ball services-ball-2"></div>
            <div className="section-floating-ball services-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Use Cases</h2>
              <p className="section-description">
                The system can be configured for a wide range of content types,
                industries, and publishing goals.
              </p>
            </div>

            <div className="services-grid">
              {useCases.map((useCase, index) => {
                const animationClass =
                  index % 5 === 0
                    ? "float-in-left"
                    : index % 5 === 1
                    ? "float-in-center"
                    : index % 5 === 2
                    ? "float-in-bottom-left"
                    : index % 5 === 3
                    ? "float-in-right"
                    : "float-in-bottom-right";
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

        {/* SEO & AEO Section */}
        <section className="case-studies-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball case-studies-ball-1"></div>
            <div className="section-floating-ball case-studies-ball-2"></div>
            <div className="section-floating-ball case-studies-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">
                Built for Search Engines{" "}
                <span className="transform-word">and AI-Assisted Search</span>
              </h2>
              <p className="section-description">
                The workflow structures content for traditional SEO while also
                preparing it for the AI-assisted search experiences increasingly
                appearing in Google, Bing, and AI answer engines. Both matter
                for discoverability now.
              </p>
            </div>

            <div className="included-panel">
              <div className="included-grid">
                {seoAeoFeatures.map((feature, index) => (
                  <div key={index} className="included-item">
                    <GradientIcon icon={faLink} size="sm" className="primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="bc-note">
                <GradientIcon icon={faChartLine} size="sm" className="warning" />
                <span>
                  Need a dashboard to track how your content is performing?{" "}
                  <Link href="/google-analytics-looker-studio-dashboards">
                    See our GA4 &amp; Looker Studio dashboard service.
                  </Link>
                </span>
              </div>
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
                Exact pricing depends on scope, integrations, content volume,
                and complexity. The ranges below are starting points for a
                standard single-workflow setup.
              </p>
            </div>

            <div className="case-studies-grid">
              <div className="case-study-card float-in-left">
                <div className="case-study-content">
                  <div className="case-study-header">
                    <div className="service-icon">
                      <GradientIcon icon={faRocket} size="xl" className="primary" />
                    </div>
                    <h3 className="case-study-title">Setup</h3>
                  </div>
                  <div className="case-study-story">
                    <div className="solution-text">
                      Starting at <strong>$1,000</strong>
                    </div>
                  </div>
                  <ul className="service-features">
                    {[
                      "Content strategy and niche mapping",
                      "Workflow architecture and tool selection",
                      "AI prompt development and voice training",
                      "WordPress or CMS integration",
                      "Testing and quality review",
                      "Launch and handoff documentation",
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
                      Starting at <strong>$250/month</strong>
                    </div>
                  </div>
                  <ul className="service-features">
                    {[
                      "Up to 3 hours of workflow monitoring",
                      "Prompt updates and refinements",
                      "SEO and content performance review",
                      "Light workflow optimization",
                      "Additional work billed separately",
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

        {/* Expectations / Disclaimer Section */}
        <section className="case-studies-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball case-studies-ball-1"></div>
            <div className="section-floating-ball case-studies-ball-2"></div>
            <div className="section-floating-ball case-studies-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Content Growth Takes Time</h2>
              <p className="section-description">
                AI content automation helps increase consistency and reduce
                production friction. It does not guarantee rankings, traffic,
                leads, or revenue.
              </p>
            </div>

            <div className="included-panel">
              <div className="bc-note">
                <GradientIcon
                  icon={faTriangleExclamation}
                  size="sm"
                  className="warning"
                />
                <span>
                  Search growth depends on competition, content quality,
                  publishing frequency, domain authority, and audience demand —
                  none of which can be controlled by automation alone. The value
                  of this system is in building a repeatable content process and
                  improving it over time. Results vary, and growth is not
                  instant.
                </span>
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
                Ready to Build a Content System Instead of Writing From Scratch
                Every Week?
              </h2>
              <p className="cta-description">
                Whether you need a focused blog draft workflow or a fully
                connected content automation system, we can build something
                tailored to your business, niche, and publishing goals.
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
                Related services:{" "}
                <Link href="/google-analytics-looker-studio-dashboards">
                  Analytics &amp; Looker Studio Dashboards
                </Link>
                {" · "}
                <Link href="/wordpress-studio">WordPress Studio</Link>
                {" · "}
                <Link href="/redesign-migration">Redesign &amp; Migration</Link>
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
                AI Content Automation: Common Questions
              </h2>
              <p className="section-description">
                Honest answers to the questions most people have before getting
                started.
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
