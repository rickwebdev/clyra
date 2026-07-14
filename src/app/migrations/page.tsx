import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Website Migration Services | Wix, Squarespace, Webflow & Shopify | Clyra Studios",
  description:
    "Outgrown Wix, Squarespace, Webflow, or Shopify? Clyra helps businesses migrate to the right platform, including WordPress, static sites, Shopify, and headless CMS, while preserving SEO, content, and design.",
  keywords:
    "website migration, Wix to WordPress migration, Squarespace migration, Webflow migration, Shopify migration, platform migration, website builder migration, SEO preservation, platform lock-in",
  alternates: {
    canonical: "/migrations",
  },
  openGraph: {
    title:
      "Website Migration Services | Wix, Squarespace, Webflow & Shopify | Clyra Studios",
    description:
      "Technical migration consulting for businesses leaving Wix, Squarespace, Webflow, Shopify, or legacy CMS platforms. Preserve SEO and move to the platform that fits.",
    url: "https://clyrastudios.com/migrations",
    type: "website",
  },
};

const leaveBuilderReasons = [
  {
    title: "Paying every month for a finished site",
    description:
      "If your website is already built, you may be paying for tools and subscriptions you no longer need.",
  },
  {
    title: "Platform lock-in",
    description:
      "Your content, design, and business logic live inside someone else's system. Moving feels risky or unclear.",
  },
  {
    title: "Performance limits",
    description:
      "Pages load slowly, mobile scores suffer, and the platform is hard to optimize beyond surface-level fixes.",
  },
  {
    title: "Limited integrations",
    description:
      "You need CRM, booking, analytics, or automation connections that the current platform cannot support cleanly.",
  },
  {
    title: "Limited ownership",
    description:
      "You do not fully control hosting, code, exports, or long-term portability if the business outgrows the builder.",
  },
  {
    title: "SEO and structure constraints",
    description:
      "URLs, redirects, metadata, and technical SEO are harder to manage as the site becomes more important to lead generation.",
  },
];

const keepWhatWorks = [
  "Your content",
  "Your SEO",
  "Your URLs",
  "Your design (when practical)",
  "Your rankings",
];

const businessOutcomeMatch = [
  {
    situation: "Finished website that rarely changes",
    platform: "Static Website",
    href: "/managed-websites",
  },
  {
    situation: "Growing business publishing content",
    platform: "WordPress",
    href: "/wordpress-studio",
  },
  {
    situation: "Selling products online",
    platform: "Shopify",
    href: "/shopify-development",
  },
  {
    situation: "Enterprise marketing team",
    platform: "Headless CMS",
    href: "/headless-cms",
  },
];

const platformFitCards = [
  {
    title: "Static Website",
    bestWhen: [
      "The site rarely changes",
      "You want the fastest performance",
      "You want the lowest ongoing technical overhead",
    ],
    href: "/managed-websites",
    linkLabel: "Managed website plans",
  },
  {
    title: "WordPress",
    bestWhen: [
      "You publish blog or resource content regularly",
      "Multiple people need to edit the site",
      "You want flexible plugins and ownership",
    ],
    href: "/wordpress-studio",
    linkLabel: "WordPress Studio",
  },
  {
    title: "Shopify",
    bestWhen: [
      "Ecommerce is the core business model",
      "You need product, checkout, and order workflows",
      "You want a platform built for online sales",
    ],
    href: "/shopify-development",
    linkLabel: "Shopify development",
  },
  {
    title: "Headless CMS",
    bestWhen: [
      "Marketing and product teams need flexible content models",
      "You need advanced integrations or multi-channel delivery",
      "You want a modern stack with room to scale",
    ],
    href: "/headless-cms",
    linkLabel: "Headless CMS",
  },
];

const faqs = [
  {
    question: "Do you only migrate websites to WordPress?",
    answer:
      "No. WordPress is one option, not the default. We recommend the platform that fits your business model, content workflow, ecommerce needs, and long-term growth plans. That may be a static site, WordPress, Shopify, headless CMS, or a custom solution.",
  },
  {
    question: "Will I lose my Google rankings during a migration?",
    answer:
      "Not if the migration is planned correctly. We preserve URLs where possible, map redirects, carry over metadata, and validate indexing and analytics after launch. SEO preservation is part of the migration plan, not an afterthought.",
  },
  {
    question: "Can you migrate from Wix, Squarespace, Webflow, or Shopify?",
    answer:
      "Yes. Those are common starting points. We also work with legacy CMS platforms, old WordPress installs, and custom builds that need a cleaner long-term foundation.",
  },
  {
    question: "How long does a website migration take?",
    answer:
      "It depends on site size, content complexity, integrations, and the destination platform. Smaller brochure sites often move in a few weeks. Larger ecommerce or content-heavy migrations take longer because redirect mapping, QA, and analytics validation require more care.",
  },
  {
    question: "What happens to my forms, analytics, and tracking?",
    answer:
      "We inventory what is live today, preserve what should carry over, and rebuild or reconnect what the new platform requires. Forms, GA4, ad pixels, and key integrations are documented before launch so nothing important disappears quietly.",
  },
  {
    question: "What does a platform assessment include?",
    answer:
      "We review your current platform, content, SEO footprint, performance, integrations, and business goals. You get an honest recommendation for the right destination platform plus a migration plan with scope, risks, and next steps. We are advising you, not pitching a default stack.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://clyrastudios.com/migrations/#webpage",
      url: "https://clyrastudios.com/migrations",
      name: "Website Migration Services",
      description:
        "Migration consulting for businesses leaving Wix, Squarespace, Webflow, Shopify, and legacy CMS platforms.",
      isPartOf: { "@id": "https://clyrastudios.com/#website" },
      about: { "@id": "https://clyrastudios.com/migrations/#service" },
      inLanguage: "en-US",
    },
    {
      "@type": "Service",
      "@id": "https://clyrastudios.com/migrations/#service",
      name: "Website Migration Services",
      url: "https://clyrastudios.com/migrations",
      description:
        "Platform migration consulting for businesses outgrowing website builders and legacy CMS platforms, including Wix, Squarespace, Webflow, Shopify, WordPress, static sites, and headless CMS.",
      provider: { "@id": "https://clyrastudios.com/#organization" },
      areaServed: { "@type": "Country", name: "United States" },
      serviceType: "Website migration consulting",
    },
    {
      "@type": "FAQPage",
      "@id": "https://clyrastudios.com/migrations/#faq",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function MigrationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
              <h1 className="inner-page-title">Outgrown Your Website Builder?</h1>

              <div className="migrations-reassurance">
                <p className="migrations-reassurance-title">Keep what already works</p>
                <ul className="migrations-reassurance-list">
                  {keepWhatWorks.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="migrations-reassurance-note">No unnecessary rebuild.</p>
              </div>

              <p className="inner-page-subtitle">
                Clyra helps businesses leaving Wix, Squarespace, Webflow, Shopify,
                or a legacy CMS move to the platform that fits how they operate
                today. We do not migrate everyone to WordPress. We recommend what
                makes sense for your business. See also our{" "}
                <Link
                  href="/redesign-migration"
                  className="underline"
                  style={{ color: "#60a5fa" }}
                >
                  redesign and migration overview
                </Link>
                .
              </p>
              <div className="inner-page-cta-actions" style={{ marginTop: "1.5rem" }}>
                <Link href="/site-audit" className="btn btn-primary btn-large">
                  Free Platform Assessment
                  <span className="btn-arrow">→</span>
                </Link>
                <Link href="/contact?service=migration" className="btn btn-secondary btn-large">
                  Talk Through Your Options
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="inner-page-main-content">
          <div className="inner-page-content">
            <div className="migrations-emotional-hook">
              Many businesses continue paying monthly for website builders long
              after their website is finished.
            </div>

            <div className="inner-page-summary-section">
              <h2 className="inner-page-section-title">
                Why Businesses Leave Website Builders
              </h2>
              <p className="inner-page-summary-text">
                Many businesses eventually outgrow their website platform. That
                does not mean the platform was wrong. It often means the business
                changed, and the monthly cost or limits no longer match how the
                company operates today.
              </p>

              <div className="inner-page-summary-grid">
                {leaveBuilderReasons.map((item) => (
                  <div key={item.title} className="inner-page-summary-item">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="inner-page-summary-section">
              <h2 className="inner-page-section-title">
                Not Every Business Needs WordPress
              </h2>
              <p className="inner-page-summary-text">
                Clyra is a technical consultancy, not a WordPress agency. We do
                not migrate everyone to WordPress. We recommend the platform that
                best fits your business, whether that is a static site, WordPress,
                Shopify, headless CMS, or something custom.
              </p>

              <div className="inner-page-grid">
                {platformFitCards.map((platform) => (
                  <div key={platform.title} className="inner-page-card">
                    <h3 className="inner-page-card-title">{platform.title}</h3>
                    <p className="inner-page-card-description">Best when:</p>
                    <ul className="inner-page-feature-list">
                      {platform.bestWhen.map((item) => (
                        <li key={item} className="inner-page-feature-item">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="inner-page-card-note">
                      <Link
                        href={platform.href}
                        className="underline"
                        style={{ color: "#60a5fa", textDecoration: "underline" }}
                      >
                        {platform.linkLabel}
                      </Link>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="inner-page-summary-section">
              <h2 className="inner-page-section-title">
                Which Platform Fits Your Business?
              </h2>
              <p className="inner-page-summary-text">
                Start with your situation. The platform should follow the business,
                not the other way around.
              </p>

              <div className="migrations-outcome-list">
                {businessOutcomeMatch.map((item) => (
                  <div key={item.platform} className="migrations-outcome-row">
                    <span className="migrations-outcome-label">Your business is:</span>
                    <span className="migrations-outcome-situation">{item.situation}</span>
                    <span className="migrations-outcome-arrow">→</span>
                    <Link href={item.href} className="migrations-outcome-platform">
                      {item.platform}
                    </Link>
                  </div>
                ))}
              </div>

              <p className="inner-page-summary-text" style={{ marginTop: "2rem", marginBottom: 0 }}>
                We are not trying to sell you a platform. We are trying to recommend
                the right solution.
              </p>
            </div>

            <h2 className="inner-page-section-title">Platform Migration Paths</h2>
            <p className="inner-page-section-description">
              These are the website migrations we handle most often. Each project
              starts with a conversation and an assessment, then moves to the
              platform that makes sense for the business.
            </p>

            <div className="inner-page-grid">
              <div className="inner-page-card">
                <h3 className="inner-page-card-title">From Wix and Squarespace</h3>
                <p className="inner-page-card-description">
                  Common when a business has outgrown builder limits, wants better
                  SEO control, or needs a platform it can actually own. WordPress is
                  a frequent destination, but static sites and other stacks are
                  considered when they are the better long-term fit.
                </p>
                <ul className="inner-page-feature-list">
                  <li className="inner-page-feature-item">Preserve rankings and URL structure where possible</li>
                  <li className="inner-page-feature-item">Transfer content, media, and key design elements</li>
                  <li className="inner-page-feature-item">Improve performance and technical SEO foundations</li>
                  <li className="inner-page-feature-item">Reduce platform lock-in and long-term friction</li>
                </ul>
                <p className="inner-page-card-note">
                  <Link
                    href="/wix-to-wordpress"
                    className="underline"
                    style={{ color: "#60a5fa", textDecoration: "underline" }}
                  >
                    Wix to WordPress
                  </Link>
                  {" · "}
                  <Link
                    href="/squarespace-to-wordpress"
                    className="underline"
                    style={{ color: "#60a5fa", textDecoration: "underline" }}
                  >
                    Squarespace to WordPress
                  </Link>
                  {" · "}
                  <Link
                    href="/contact?service=wix-squarespace"
                    className="underline"
                    style={{ color: "#60a5fa", textDecoration: "underline" }}
                  >
                    Get a recommendation
                  </Link>
                </p>
              </div>

              <div className="inner-page-card">
                <h3 className="inner-page-card-title">From Webflow</h3>
                <p className="inner-page-card-description">
                  Common when design quality is strong but content workflows,
                  integrations, or SEO control need more flexibility than the
                  current setup allows.
                </p>
                <ul className="inner-page-feature-list">
                  <li className="inner-page-feature-item">Maintain visual design intent</li>
                  <li className="inner-page-feature-item">Improve content management and publishing workflows</li>
                  <li className="inner-page-feature-item">Expand hosting and integration options</li>
                  <li className="inner-page-feature-item">Plan redirects and SEO continuity carefully</li>
                </ul>
                <p className="inner-page-card-note">
                  <Link
                    href="/webflow-to-wordpress"
                    className="underline"
                    style={{ color: "#60a5fa", textDecoration: "underline" }}
                  >
                    Webflow to WordPress
                  </Link>
                  {" · "}
                  <Link
                    href="/contact?service=webflow"
                    className="underline"
                    style={{ color: "#60a5fa", textDecoration: "underline" }}
                  >
                    Talk through your options
                  </Link>
                </p>
              </div>

              <div className="inner-page-card" id="shopify">
                <h3 className="inner-page-card-title">From Shopify</h3>
                <p className="inner-page-card-description">
                  Some stores should stay on Shopify and be improved. Others need a
                  different ecommerce stack or a content-led platform with stronger
                  marketing flexibility. We assess before recommending a move.
                </p>
                <ul className="inner-page-feature-list">
                  <li className="inner-page-feature-item">Review fees, workflows, and platform fit honestly</li>
                  <li className="inner-page-feature-item">Preserve product, customer, and order data where applicable</li>
                  <li className="inner-page-feature-item">Improve content, SEO, and conversion architecture when needed</li>
                  <li className="inner-page-feature-item">Plan integrations and analytics before launch</li>
                </ul>
                <p className="inner-page-card-note">
                  <Link
                    href="/shopify-development"
                    className="underline"
                    style={{ color: "#60a5fa", textDecoration: "underline" }}
                  >
                    Shopify development
                  </Link>
                  {" · "}
                  <Link
                    href="/contact?service=shopify"
                    className="underline"
                    style={{ color: "#60a5fa", textDecoration: "underline" }}
                  >
                    Get a recommendation
                  </Link>
                </p>
              </div>

              <div className="inner-page-card">
                <h3 className="inner-page-card-title">From Custom or Outdated CMS</h3>
                <p className="inner-page-card-description">
                  Common when the current system is unsupported, hard to update, or
                  no longer matches how the business operates today.
                </p>
                <ul className="inner-page-feature-list">
                  <li className="inner-page-feature-item">Audit content, data, and integrations first</li>
                  <li className="inner-page-feature-item">Recommend the right replacement platform</li>
                  <li className="inner-page-feature-item">Improve security, performance, and maintainability</li>
                  <li className="inner-page-feature-item">Reduce dependence on one unavailable developer or vendor</li>
                </ul>
                <p className="inner-page-card-note">
                  <Link
                    href="/contact?service=custom-cms"
                    className="underline"
                    style={{ color: "#60a5fa", textDecoration: "underline" }}
                  >
                    Free platform assessment
                  </Link>
                </p>
              </div>
            </div>

            <div className="inner-page-summary-section">
              <h2 className="inner-page-section-title">Our 4-Step Migration Process</h2>
              <p className="inner-page-summary-text">
                Every migration follows the same disciplined process, regardless of
                the starting platform or destination stack.
              </p>

              <div className="inner-page-summary-grid">
                <div className="inner-page-summary-item">
                  <h4>1. Audit and Plan</h4>
                  <p>
                    We review the current site, SEO footprint, content, forms,
                    analytics, integrations, and business goals, then recommend the
                    right destination platform.
                  </p>
                </div>
                <div className="inner-page-summary-item">
                  <h4>2. Build and Migrate</h4>
                  <p>
                    Content, structure, media, and functionality move into the new
                    platform with staging, QA, and as much design continuity as the
                    project allows.
                  </p>
                </div>
                <div className="inner-page-summary-item">
                  <h4>3. SEO and Redirects</h4>
                  <p>
                    URLs, metadata, redirects, sitemaps, and analytics are mapped so
                    search visibility and measurement survive the transition.
                  </p>
                </div>
                <div className="inner-page-summary-item">
                  <h4>4. Launch and Validate</h4>
                  <p>
                    We launch carefully, verify forms and tracking, and confirm the
                    new platform is stable before calling the migration complete.
                  </p>
                </div>
              </div>
            </div>

            <div className="inner-page-summary-section">
              <h2 className="inner-page-section-title">What We Preserve During Migration</h2>
              <p className="inner-page-summary-text">
                The goal is not a flashy rebuild. It is a better long-term platform
                with as little business disruption as possible. We are not trying to
                sell you a platform. We are trying to recommend the right solution.
              </p>

              <div className="inner-page-summary-grid">
                <div className="inner-page-summary-item">
                  <h4>Search visibility</h4>
                  <p>Rankings, URLs, redirects, and metadata are mapped before launch.</p>
                </div>
                <div className="inner-page-summary-item">
                  <h4>Content and media</h4>
                  <p>Pages, posts, assets, and core messaging carry over with intent intact.</p>
                </div>
                <div className="inner-page-summary-item">
                  <h4>Analytics and forms</h4>
                  <p>GA4, key conversion paths, and lead capture are documented and reconnected.</p>
                </div>
                <div className="inner-page-summary-item">
                  <h4>Business continuity</h4>
                  <p>Staging, launch planning, and validation help minimize downtime and surprises.</p>
                </div>
              </div>
            </div>

            <div className="inner-page-summary-section">
              <h2 className="inner-page-section-title">Common Situations We Help With</h2>
              <p className="inner-page-summary-text">
                These are representative scenarios, not inflated case study claims.
                The right migration plan depends on the business, the current
                platform, and what needs to keep working on day one.
              </p>

              <div className="inner-page-summary-grid">
                <div className="inner-page-summary-item">
                  <h4>Local service business on Wix</h4>
                  <p>
                    The site works, but you are paying every month for a finished
                    brochure site while wanting better local visibility, lead flow,
                    and ownership.
                  </p>
                </div>
                <div className="inner-page-summary-item">
                  <h4>Professional practice on Squarespace</h4>
                  <p>
                    Content updates are painful, booking or intake needs more
                    flexibility, and the team wants a platform they can maintain.
                  </p>
                </div>
                <div className="inner-page-summary-item">
                  <h4>Marketing site on Webflow</h4>
                  <p>
                    Design is strong, but publishing, SEO control, or integrations
                    need more room than the current setup allows.
                  </p>
                </div>
                <div className="inner-page-summary-item">
                  <h4>Store or legacy CMS at a crossroads</h4>
                  <p>
                    Fees, maintenance, or missing features make it clear the current
                    platform is no longer the right long-term home.
                  </p>
                </div>
              </div>
            </div>

            <div className="inner-page-summary-section">
              <h2 className="inner-page-section-title">Website Migration FAQ</h2>
              <p className="inner-page-summary-text">
                Common questions from business owners comparing Wix, Squarespace,
                Webflow, Shopify, WordPress, and other platform options.
              </p>

              <div className="inner-page-summary-grid">
                {faqs.map((faq) => (
                  <div key={faq.question} className="inner-page-summary-item">
                    <h4>{faq.question}</h4>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="inner-page-cta-section">
              <h2 className="inner-page-cta-title">Find the Right Platform Before You Move</h2>
              <p className="inner-page-cta-description">
                Tell us where you are today. We will review your site, explain the
                tradeoffs honestly, and recommend the path that fits your business.
                No platform pitch. No unnecessary rebuild.
              </p>
              <div className="inner-page-cta-actions">
                <Link href="/site-audit" className="btn btn-primary btn-large">
                  Free Platform Assessment
                  <span className="btn-arrow">→</span>
                </Link>
                <Link href="/contact?service=migration" className="btn btn-secondary btn-large">
                  Talk Through Your Options
                </Link>
                <Link href="/strategy-call" className="btn btn-secondary btn-large">
                  Get a Recommendation
                </Link>
              </div>
              <p className="inner-page-cta-note">
                <strong>Consultative first step:</strong> We assess your current
                platform, SEO footprint, and business goals before recommending
                WordPress, Shopify, a static site, headless CMS, or another path.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
