import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Selected Work & Project Examples | Clyra Studios",
  description:
    "Selected Clyra Studios client work, internal product examples, and founder experience. Honest project examples, not a fabricated agency portfolio.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Selected Work & Project Examples | Clyra Studios",
    description:
      "Clyra client work, internal systems, and founder experience across websites, analytics, and automation.",
    url: "https://clyrastudios.com/case-studies",
    type: "website",
  },
};

const workCategories = [
  {
    title: "Clyra Studios Client Work",
    description:
      "Selective client engagements across website builds, migrations, analytics setup, and automation workflows. Clyra is an early-stage studio. We share real work as it becomes available to publish.",
    items: [
      "Website builds and platform migrations",
      "Analytics dashboards and reporting setup",
      "AI-assisted content and automation workflows",
      "Ongoing digital systems advisory",
    ],
    cta: { href: "/contact", label: "Discuss your project" },
  },
  {
    title: "Internal Product & Systems",
    description:
      "Examples of systems Clyra builds and uses internally, using the same approach we bring to client work.",
    items: [
      "This website: Next.js, SEO, and service architecture",
      "AI content and marketing workflow systems",
      "Analytics and reporting integrations",
      "Automation between content, CRM, and publishing tools",
    ],
    cta: { href: "/ai-business-systems", label: "Explore AI Business Systems" },
  },
  {
    title: "Founder Experience",
    description:
      "Additional project history and technical depth from founder Rick Owadally, separate from Clyra Studios client engagements. Enterprise and agency work referenced here was completed through founder experience, not implied as Clyra agency portfolio.",
    items: [
      "WordPress, Next.js, and headless CMS builds",
      "E-commerce and migration projects",
      "Analytics, SEO, and marketing technology",
      "Video, motion, and creative production",
    ],
    cta: {
      href: "https://rickthewebdev.com",
      label: "View Founder Portfolio",
      external: true,
    },
  },
];

export default function CaseStudiesPage() {
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
              <h1 className="inner-page-title">
                Selected Work &amp; Project Examples
              </h1>
              <p className="inner-page-subtitle">
                Clyra is a growing digital growth systems consultancy, not a
                large agency with hundreds of case studies. Here&apos;s how we
                frame our work honestly: client engagements, internal systems,
                and founder experience.
              </p>
            </div>
          </div>
        </div>

        <div className="inner-page-main-content">
          <div className="inner-page-content">
            <div className="inner-page-grid">
              {workCategories.map((category) => (
                <div key={category.title} className="inner-page-card">
                  <h3 className="inner-page-card-title">{category.title}</h3>
                  <p className="inner-page-card-description">
                    {category.description}
                  </p>
                  <ul className="inner-page-feature-list">
                    {category.items.map((item) => (
                      <li key={item} className="inner-page-feature-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                  {category.cta.external ? (
                    <a
                      href={category.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inner-page-cta"
                      style={{ marginTop: "1rem", display: "inline-flex" }}
                    >
                      {category.cta.label} →
                    </a>
                  ) : (
                    <Link
                      href={category.cta.href}
                      className="inner-page-cta"
                      style={{ marginTop: "1rem", display: "inline-flex" }}
                    >
                      {category.cta.label} →
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="inner-page-cta-section">
              <h3 className="inner-page-cta-title">
                Want to see if we&apos;re a fit?
              </h3>
              <p className="inner-page-cta-description">
                Share your goals and current setup. We&apos;ll be direct about
                what Clyra can help with and what we&apos;d recommend next.
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
