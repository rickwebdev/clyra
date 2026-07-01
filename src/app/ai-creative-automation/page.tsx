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
  faImage,
  faPalette,
  faShareNodes,
  faQuoteRight,
  faRectangleAd,
  faEnvelopeOpenText,
  faVideo,
  faCube,
  faChartSimple,
  faShieldHalved,
  faBrain,
  faUsers,
  faRocket,
  faGears,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

const problems = [
  {
    icon: faClock,
    title: "Design Is a Bottleneck",
    description:
      "Every blog post, social update, and campaign needs visuals. Waiting on design slows down everything else.",
    impact: "Content ships late — or without images at all",
  },
  {
    icon: faShareNodes,
    title: "Volume Kills Consistency",
    description:
      "Producing enough on-brand graphics for every channel, every week, is more than most small teams can sustain.",
    impact: "Inconsistent visuals dilute the brand",
  },
  {
    icon: faPalette,
    title: "Off-Brand AI Output",
    description:
      "Generic AI image tools produce random visuals that ignore your colors, fonts, and style — unusable without heavy rework.",
    impact: "More cleanup than time saved",
  },
  {
    icon: faRectangleAd,
    title: "Creative Doesn't Scale",
    description:
      "Ad variations, thumbnails, and campaign assets multiply fast. Manual production can't keep up with testing needs.",
    impact: "Fewer variations, slower iteration",
  },
];

const outputs = [
  {
    icon: faImage,
    title: "Blog Featured Image Prompts",
    description:
      "Consistent, on-brand featured image concepts and prompts tied to each article you publish.",
  },
  {
    icon: faShareNodes,
    title: "Social Media Graphics",
    description:
      "Templated, brand-consistent graphics for posts, stories, and announcements across platforms.",
  },
  {
    icon: faQuoteRight,
    title: "Quote Cards",
    description:
      "Shareable quote and stat cards generated from your content, ready for review and posting.",
  },
  {
    icon: faRectangleAd,
    title: "Ad Creative",
    description:
      "Multiple ad variations for testing — sized and styled for each platform, based on your brand system.",
  },
  {
    icon: faEnvelopeOpenText,
    title: "Email Graphics",
    description:
      "Header images, banners, and supporting visuals for newsletters and email campaigns.",
  },
  {
    icon: faVideo,
    title: "YouTube Thumbnails",
    description:
      "On-brand thumbnail concepts designed to stay consistent across your channel.",
  },
  {
    icon: faCube,
    title: "Product Mockup Concepts",
    description:
      "Concept mockups and product presentation visuals for launches and landing pages.",
  },
  {
    icon: faChartSimple,
    title: "Infographic Drafts",
    description:
      "First-draft infographic layouts from your data and content — ready for design refinement.",
  },
  {
    icon: faPalette,
    title: "Brand-Consistent Visual Systems",
    description:
      "Reusable templates and prompt systems so every asset stays aligned with your brand.",
  },
];

const humanControl = [
  {
    icon: faShieldHalved,
    iconClass: "success",
    title: "Brand-Aligned, Not Random",
    description:
      "The workflow is built around your colors, fonts, logos, and style — so output looks like your brand, not a generic AI tool.",
    highlight: "On-brand by design.",
  },
  {
    icon: faBrain,
    iconClass: "primary",
    title: "Concepts and Drafts, Faster",
    description:
      "AI accelerates ideation and first drafts. You get more directions to choose from, without starting every asset from scratch.",
    highlight: "More options, less busywork.",
  },
  {
    icon: faUsers,
    iconClass: "warning",
    title: "Human Approval Before Publishing",
    description:
      "Every asset is created for review, refinement, and approval. Nothing goes out without a human sign-off.",
    highlight: "Review-ready. Never auto-posted.",
  },
];

const useCases = [
  {
    icon: faShareNodes,
    title: "Social Content Teams",
    description:
      "Keep every channel supplied with on-brand graphics without a full-time designer.",
  },
  {
    icon: faRectangleAd,
    title: "Paid Ad Testing",
    description:
      "Generate more creative variations to test, faster, across ad platforms.",
  },
  {
    icon: faImage,
    title: "Content Marketing",
    description:
      "Featured images and supporting visuals for every article in your content pipeline.",
  },
  {
    icon: faEnvelopeOpenText,
    title: "Email & Newsletters",
    description:
      "Consistent header and section graphics for recurring campaigns.",
  },
  {
    icon: faVideo,
    title: "Video & YouTube",
    description:
      "Thumbnail systems that keep your channel visually consistent.",
  },
  {
    icon: faCube,
    title: "Product & Launch Pages",
    description:
      "Mockups and concept visuals to support new offers and landing pages.",
  },
];

const futureExpansion = [
  "Automated resizing across platform formats",
  "Brand template libraries in Canva or Figma",
  "Direct-to-social publishing after approval",
  "Dynamic ad variation generation for testing",
  "Video snippet and short-form clip concepts",
  "Seasonal and campaign creative refresh workflows",
];

const faqs = [
  {
    question: "Is this just random AI image generation?",
    answer:
      "No. This is a workflow for producing branded, review-ready creative assets. It is built around your brand system — colors, fonts, logos, and style — so output is usable, not random.",
  },
  {
    question: "Will the visuals actually match my brand?",
    answer:
      "That is the point. We set up prompt systems, templates, and brand references so generated assets stay consistent with your identity. You review and refine before anything is used.",
  },
  {
    question: "Does anything publish automatically?",
    answer:
      "Not unless you explicitly want it to. The default workflow creates assets for human review and approval before publishing.",
  },
  {
    question: "What tools does it use?",
    answer:
      "It depends on the project. Workflows may combine AI image models, design tools like Canva or Figma, automation platforms, and your brand asset libraries.",
  },
  {
    question: "Can this work alongside my existing designer?",
    answer:
      "Yes. It is often most valuable as a way to hand designers stronger starting points and handle high-volume, repetitive assets — freeing them for higher-value work.",
  },
];

export const metadata: Metadata = {
  title: "AI Creative Automation for Branded Visual Content | Clyra Studios",
  description:
    "AI-assisted creative automation systems for branded visuals, social graphics, blog images, ad creative, and marketing assets. Built with human review and brand consistency in mind.",
  keywords:
    "AI creative automation, AI branded visuals, AI social media graphics, AI ad creative, AI blog images, brand visual system, AI design workflow, automated creative production, AI marketing assets, YouTube thumbnail automation",
  authors: [{ name: "Clyra Studios" }],
  creator: "Clyra Studios",
  publisher: "Clyra Studios",
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: {
    canonical: "/ai-creative-automation",
  },
  openGraph: {
    title: "AI Creative Automation for Branded Visual Content | Clyra Studios",
    description:
      "AI-assisted creative workflows for branded visuals, social graphics, ad creative, and marketing assets — with human review and brand consistency built in.",
    url: "https://clyrastudios.com/ai-creative-automation",
    siteName: "Clyra Studios",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Clyra Studios - AI Creative Automation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Creative Automation for Branded Visual Content | Clyra Studios",
    description:
      "AI-assisted creative workflows for branded visuals, social graphics, ad creative, and marketing assets — with human review and brand consistency built in.",
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
  name: "AI Creative Automation",
  description:
    "AI-assisted creative automation systems for producing branded, review-ready visual content — social graphics, blog images, ad creative, thumbnails, and brand-consistent visual systems.",
  provider: {
    "@type": "Organization",
    name: "Clyra Studios",
    url: "https://clyrastudios.com",
    logo: "https://clyrastudios.com/images/clyra_logo.png",
  },
  areaServed: "US",
  serviceType: "AI Creative Automation",
  category: "Creative Production Automation",
  offers: [
    {
      "@type": "Offer",
      name: "AI Creative Workflow Setup",
      description:
        "Brand system setup, template and prompt design, tool integration, testing, and launch",
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

export default function AICreativeAutomationPage() {
  return (
    <>
      <Script
        id="ai-creative-structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <Script
        id="ai-creative-faq-data"
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
                  <span className="title-line">AI Creative Automation for</span>
                  <span className="title-line highlight">
                    Branded Visual Content at Scale
                  </span>
                </h1>
                <p className="hero-description">
                  Generate branded visuals and design assets faster with
                  AI-assisted creative workflows — featured images, social
                  graphics, ad creative, thumbnails, and more, built around your
                  brand system and approved by a human before anything ships.
                </p>
                <p className="hero-hook">
                  Not random AI images. Branded, review-ready creative.
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
                <Link href="#what-it-creates" className="btn btn-secondary btn-large">
                  See What It Creates
                </Link>
              </div>

              <div className="trust-signals">
                <div className="trust-item">
                  <GradientIcon icon={faPalette} size="sm" className="primary" />
                  <span className="trust-text">Brand-Consistent</span>
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
                  <GradientIcon
                    icon={faWandMagicSparkles}
                    size="sm"
                    className="primary"
                  />
                  <span className="trust-text">Faster Production</span>
                </div>
                <div className="trust-item">
                  <GradientIcon icon={faBolt} size="sm" className="warning" />
                  <span className="trust-text">Multi-Channel</span>
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
                Why Creative Production{" "}
                <span className="transform-word">Slows Teams Down</span>
              </h2>
              <p className="section-description">
                Visuals are required everywhere — but producing enough
                on-brand creative, consistently, is where most small teams get
                stuck.
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

        {/* What It Can Generate Section */}
        <section id="what-it-creates" className="case-studies-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball case-studies-ball-1"></div>
            <div className="section-floating-ball case-studies-ball-2"></div>
            <div className="section-floating-ball case-studies-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">
                What AI Creative Automation{" "}
                <span className="transform-word">Can Generate</span>
              </h2>
              <p className="section-description">
                A connected creative workflow can produce a full range of
                branded assets — all created for your review.
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

        {/* Human Review & Brand Control Section */}
        <section className="case-studies-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball case-studies-ball-1"></div>
            <div className="section-floating-ball case-studies-ball-2"></div>
            <div className="section-floating-ball case-studies-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">
                Human Review and{" "}
                <span className="transform-word">Brand Control</span>
              </h2>
              <p className="section-description">
                This is not random AI image generation. It is a workflow for
                producing branded, review-ready creative — with human approval
                at the end.
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
                Wherever you need consistent, high-volume visuals, a creative
                workflow can help.
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

        {/* Future Expansion Section */}
        <section className="case-studies-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball case-studies-ball-1"></div>
            <div className="section-floating-ball case-studies-ball-2"></div>
            <div className="section-floating-ball case-studies-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Future Expansion</h2>
              <p className="section-description">
                Creative workflows can grow with your needs. Common extensions
                added over time include:
              </p>
            </div>

            <div className="included-panel">
              <div className="included-grid">
                {futureExpansion.map((item, index) => (
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
                Exact pricing depends on brand complexity, asset types, volume,
                and integrations. The range below is a starting point.
              </p>
            </div>

            <div className="case-studies-grid">
              <div className="case-study-card float-in-left">
                <div className="case-study-content">
                  <div className="case-study-header">
                    <div className="service-icon">
                      <GradientIcon icon={faRocket} size="xl" className="primary" />
                    </div>
                    <h3 className="case-study-title">Creative Workflow Setup</h3>
                  </div>
                  <div className="case-study-story">
                    <div className="solution-text">
                      Starting at <strong>$750</strong>
                    </div>
                  </div>
                  <ul className="service-features">
                    {[
                      "Brand system and style setup",
                      "Template and prompt design",
                      "Tool integration (AI models, Canva/Figma)",
                      "Asset generation testing",
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
                    <h3 className="case-study-title">Ongoing Support</h3>
                  </div>
                  <div className="case-study-story">
                    <div className="solution-text">
                      Optional monthly support available
                    </div>
                  </div>
                  <ul className="service-features">
                    {[
                      "Template and prompt refinements",
                      "New asset types and formats",
                      "Seasonal and campaign creative",
                      "Workflow optimization over time",
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
                Ready to Produce Branded Creative Faster?
              </h2>
              <p className="cta-description">
                Let&apos;s build a creative workflow that keeps every channel
                supplied with on-brand visuals — without the production
                bottleneck.
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
                <Link href="/ai-marketing-automation">
                  AI Marketing Automation
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
                AI Creative Automation: Common Questions
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
