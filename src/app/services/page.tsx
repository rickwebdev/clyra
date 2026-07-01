import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Growth Systems & Services | Clyra Studios",
  description:
    "Clyra Studios helps businesses build, improve, automate, measure, and grow digital platforms — websites, analytics dashboards, AI systems, migrations, and ongoing advisory.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Digital Growth Systems & Services | Clyra Studios",
    description:
      "Websites, analytics, AI systems, automation, and creative production support for businesses that need connected digital growth.",
    url: "https://clyrastudios.com/services",
    type: "website",
  },
};

const serviceClusters = [
  {
    title: "Websites & Platforms",
    description:
      "Build, rescue, redesign, and migrate websites on platforms that support long-term growth.",
    links: [
      { href: "/wordpress-studio", label: "WordPress Studio" },
      { href: "/growth-website-system", label: "Growth Website System" },
      { href: "/redesign-migration", label: "Redesign & Migration" },
      { href: "/migrations", label: "Migration Services Hub" },
      { href: "/wordpress-mechanic", label: "Website Rescue & Repair" },
      { href: "/shopify-development", label: "Shopify Development" },
      {
        href: "/website-performance-optimization",
        label: "Website Performance Optimization",
      },
    ],
  },
  {
    title: "Analytics & Measurement",
    description:
      "Turn marketing and site data into dashboards and decisions you can actually use.",
    links: [
      {
        href: "/google-analytics-looker-studio-dashboards",
        label: "GA4 & Looker Studio Dashboards",
      },
      { href: "/ga4-implementation", label: "GA4 Implementation" },
      { href: "/site-audit", label: "Website Audit" },
    ],
  },
  {
    title: "SEO & Discovery",
    description:
      "Technical foundations and structured content for traditional search and AI-assisted discovery.",
    links: [
      { href: "/technical-seo", label: "Technical SEO" },
      {
        href: "/aeo-ai-search-optimization",
        label: "AEO & AI Search Optimization",
      },
    ],
  },
  {
    title: "AI Systems",
    description:
      "Practical AI-assisted workflows for content, creative, marketing, and business operations.",
    links: [
      { href: "/ai-business-systems", label: "AI Business Systems Overview" },
      { href: "/ai-content-automation", label: "AI Content Growth Systems" },
      { href: "/ai-creative-automation", label: "AI Creative Automation" },
      { href: "/ai-marketing-automation", label: "AI Marketing Automation" },
      {
        href: "/business-process-automation",
        label: "Business Process Automation",
      },
      {
        href: "/fractional-digital-systems-consultant",
        label: "Fractional Digital Systems Consultant",
      },
    ],
  },
  {
    title: "Creative Production",
    description:
      "Supporting creative production through trusted collaborators — video, motion, 3D, and social assets that complement your website and marketing systems. Clyra is not a creative agency; we coordinate production when it supports the broader system.",
    links: [
      { href: "/ai-creative-automation", label: "AI Creative Automation" },
    ],
    note: "Video editing, motion graphics, 3D visualization, product rendering, post-production, and social creative available through collaborator network.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <div className="inner-page">
        <div className="inner-page-floating-elements">
          <div className="inner-page-floating-ball inner-page-ball-1"></div>
          <div className="inner-page-floating-ball inner-page-ball-2"></div>
          <div className="inner-page-floating-ball inner-page-ball-3"></div>
        </div>

        <div className="inner-page-hero-section">
          <div className="inner-page-content">
            <div className="inner-page-header">
              <h1 className="inner-page-title">Digital Growth Systems</h1>
              <p className="inner-page-subtitle">
                Clyra helps businesses build, improve, automate, measure, and
                grow digital platforms. Technology supports the work — business
                outcomes lead the conversation.
              </p>
            </div>
          </div>
        </div>

        <div className="inner-page-main-content">
          <div className="inner-page-content">
            {serviceClusters.map((cluster) => (
              <section key={cluster.title} className="services-cluster-section">
                <h2 className="inner-page-section-title">{cluster.title}</h2>
                <p className="inner-page-section-description">
                  {cluster.description}
                </p>
                <div className="inner-page-grid">
                  {cluster.links.map((link) => (
                    <div key={link.href} className="inner-page-card">
                      <h3 className="inner-page-card-title">{link.label}</h3>
                      <Link
                        href={link.href}
                        className="inner-page-cta"
                        style={{ marginTop: "1rem", display: "inline-flex" }}
                      >
                        Learn more →
                      </Link>
                    </div>
                  ))}
                </div>
                {cluster.note && (
                  <p className="inner-page-card-note" style={{ marginTop: "1rem" }}>
                    {cluster.note}
                  </p>
                )}
              </section>
            ))}

            <div className="inner-page-cta-section">
              <h3 className="inner-page-cta-title">Not sure where to start?</h3>
              <p className="inner-page-cta-description">
                Book a strategy call or submit an RFP with your goals, timeline,
                and current stack. We&apos;ll recommend the right starting point.
              </p>
              <div className="inner-page-cta-actions">
                <Link href="/strategy-call" className="btn btn-primary btn-large">
                  Book a Strategy Call
                </Link>
                <Link href="/rfp" className="btn btn-secondary btn-large">
                  Submit an RFP
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
