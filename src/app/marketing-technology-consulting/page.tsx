import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import {
  faChartLine,
  faCompass,
  faDiagramProject,
  faGears,
  faMagnifyingGlass,
  faRocket,
  faSitemap,
  faTriangleExclamation,
  faUsers,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

const problems = [
  {
    icon: faGears,
    title: "Too Many Overlapping Tools",
    description:
      "CRM, email, ads, analytics, automation, and CMS — each bought for a reason, none designed to work together.",
    impact: "Stack sprawl and wasted spend",
  },
  {
    icon: faChartLine,
    title: "Data Without Decisions",
    description:
      "Dashboards exist but teams still argue about numbers — tracking gaps and disconnected attribution undermine trust.",
    impact: "Measurement theater",
  },
  {
    icon: faUsers,
    title: "No Single Owner of the Stack",
    description:
      "Marketing, sales, and ops each manage their tools. Nobody maps how the full system should support growth.",
    impact: "Coordination by accident",
  },
  {
    icon: faTriangleExclamation,
    title: "Vendor-Led Strategy",
    description:
      "Platform sales demos drive decisions instead of business requirements — leading to expensive misfit tools.",
    impact: "Buy first, regret later",
  },
];

const capabilities = [
  {
    icon: faCompass,
    title: "MarTech Stack Assessment",
    description:
      "Audit what you have, what's redundant, what's missing, and what actually supports your growth goals.",
  },
  {
    icon: faSitemap,
    title: "Tool Selection & Roadmaps",
    description:
      "Unbiased recommendations for CRM, email, analytics, CMS, and automation — aligned to team size and budget.",
  },
  {
    icon: faDiagramProject,
    title: "Data Flow & Attribution Design",
    description:
      "How leads, customers, and revenue should be tracked across website, ads, email, and sales systems.",
  },
  {
    icon: faWandMagicSparkles,
    title: "AI & Automation Fit",
    description:
      "Where AI-assisted workflows belong in your stack — and where simpler tools are the better answer.",
  },
  {
    icon: faChartLine,
    title: "Analytics & Reporting Strategy",
    description:
      "GA4, dashboards, and KPI definitions that leadership can use — paired with our implementation services.",
  },
  {
    icon: faUsers,
    title: "Fractional Advisory",
    description:
      "Ongoing guidance as your stack evolves — often through our Fractional Digital Systems Consultant offering.",
  },
];

const processSteps = [
  {
    icon: faMagnifyingGlass,
    title: "1. Discover the Stack",
    description:
      "Current tools, contracts, team workflows, pain points, and growth priorities.",
  },
  {
    icon: faCompass,
    title: "2. Assess & Recommend",
    description:
      "Gap analysis, consolidation opportunities, and a prioritized roadmap — not a shopping list.",
  },
  {
    icon: faDiagramProject,
    title: "3. Plan Implementation",
    description:
      "Phased rollout, data migration considerations, and who owns each piece.",
  },
  {
    icon: faRocket,
    title: "4. Execute with Clyra or Your Team",
    description:
      "We can implement directly or advise your internal team and vendors through delivery.",
  },
];

const faqs = [
  {
    question: "What is marketing technology consulting?",
    answer:
      "Strategic guidance on your marketing and growth technology stack — which tools to use, how they connect, what to measure, and how to phase changes without disrupting the business.",
  },
  {
    question: "Are you vendor-neutral?",
    answer:
      "Yes. We recommend based on your requirements, team capabilities, and budget — not reseller incentives. We implement on platforms we know well, including WordPress, Shopify, HubSpot ecosystems, and common analytics tools.",
  },
  {
    question: "Do you only advise or also implement?",
    answer:
      "Both. Many engagements start with assessment and roadmap, then continue into GA4 setup, integrations, website builds, or automation — depending on what you need.",
  },
  {
    question: "How is this different from the Fractional Digital Systems Consultant?",
    answer:
      "MarTech consulting is often project-based stack strategy. Fractional consulting is ongoing leadership across website, analytics, SEO, automation, and AI systems. They complement each other.",
  },
  {
    question: "Can you help us reduce tool costs?",
    answer:
      "Often yes — by identifying overlap, unused licenses, and workflows that a simpler stack can handle. Savings depend on what you're paying for today.",
  },
];

export const metadata: Metadata = {
  title: "Marketing Technology Consulting | Clyra Studios",
  description:
    "Marketing technology consulting for businesses that need a clear MarTech stack strategy — tool selection, data flows, analytics, automation, and implementation roadmaps.",
  keywords:
    "marketing technology consulting, MarTech consulting, marketing stack audit, CRM selection, marketing automation strategy, analytics strategy, digital growth consulting",
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: { canonical: "/marketing-technology-consulting" },
  openGraph: {
    title: "Marketing Technology Consulting | Clyra Studios",
    description:
      "Clarify your marketing stack, data flows, and growth technology roadmap.",
    url: "https://clyrastudios.com/marketing-technology-consulting",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Marketing Technology Consulting",
  description:
    "MarTech stack assessment, tool selection, and implementation roadmaps for growing businesses.",
  provider: {
    "@type": "Organization",
    name: "Clyra Studios",
    url: "https://clyrastudios.com",
  },
  offers: [
    {
      "@type": "Offer",
      name: "MarTech Consulting",
      priceRange: "$2000+",
      priceCurrency: "USD",
    },
  ],
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

export default function MarTechConsultingPage() {
  return (
    <>
      <Script
        id="martech-data"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <Script
        id="martech-faq"
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
                  <span className="title-line">Marketing Technology Consulting for</span>
                  <span className="title-line highlight">
                    Stacks That Support Growth
                  </span>
                </h1>
                <p className="hero-description">
                  Your marketing tools should work as a system — not a pile of
                  subscriptions. We help businesses assess, simplify, and plan
                  their MarTech stack: CRM, analytics, automation, CMS, and the
                  connections between them.
                </p>
                <p className="hero-hook">
                  Strategy first. Tools second. Outcomes always.
                </p>
              </div>
              <div className="hero-actions">
                <Link href="/strategy-call" className="btn btn-primary btn-large">
                  Book a Discovery Call<span className="btn-arrow">→</span>
                </Link>
                <Link
                  href="/fractional-digital-systems-consultant"
                  className="btn btn-secondary btn-large"
                >
                  Fractional Consultant
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">
                Why MarTech <span className="transform-word">Gets Messy</span>
              </h2>
            </div>
            <div className="services-grid">
              {problems.map((p, i) => (
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
              <h2 className="section-title">What We Deliver</h2>
            </div>
            <div className="services-grid">
              {capabilities.map((c, i) => (
                <div key={i} className="service-card">
                  <div className="service-image">
                    <div className="service-icon">
                      <GradientIcon icon={c.icon} size="xl" className="primary" />
                    </div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{c.title}</h3>
                    <p className="service-description">{c.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Our Process</h2>
            </div>
            <div className="services-grid">
              {processSteps.map((s, i) => (
                <div key={i} className="service-card">
                  <div className="service-image">
                    <div className="service-icon">
                      <GradientIcon icon={s.icon} size="xl" className="primary" />
                    </div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{s.title}</h3>
                    <p className="service-description">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Pricing</h2>
              <p className="section-description">
                Starting at <strong>$2,000</strong> for stack assessments and
                strategy engagements. Ongoing fractional advisory priced
                separately.
              </p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Clarify Your Marketing Stack?</h2>
              <div className="cta-actions">
                <Link href="/strategy-call" className="btn btn-primary btn-large">
                  Book a Discovery Call<span className="btn-arrow">→</span>
                </Link>
                <Link href="/rfp" className="btn btn-secondary btn-large">
                  Submit an RFP
                </Link>
              </div>
              <p className="bc-guides">
                Related:{" "}
                <Link href="/fractional-digital-systems-consultant">
                  Fractional Digital Systems Consultant
                </Link>
                {" · "}
                <Link href="/api-integrations">API Integrations</Link>
                {" · "}
                <Link href="/google-analytics-looker-studio-dashboards">
                  Analytics Dashboards
                </Link>
                {" · "}
                <Link href="/ai-marketing-automation">
                  AI Marketing Automation
                </Link>
              </p>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="container">
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
      </main>
      <Footer />
    </>
  );
}
