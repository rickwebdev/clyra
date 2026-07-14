import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import {
  faBolt,
  faCheck,
  faChartLine,
  faChartBar,
  faCode,
  faCogs,
  faCrown,
  faFileLines,
  faGaugeHigh,
  faLock,
  faMagnifyingGlass,
  faMoneyBillTrendUp,
  faPlug,
  faRocket,
  faSearch,
  faServer,
  faShieldHalved,
  faStore,
  faBriefcase,
  faBullhorn,
  faCartShopping,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

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

const keepWhatWorks = [
  { label: "Your content", icon: faFileLines },
  { label: "Your SEO", icon: faSearch },
  { label: "Your URLs", icon: faLayerGroup },
  { label: "Your design", icon: faBolt },
  { label: "Your rankings", icon: faChartLine },
];

const leaveBuilderReasons: {
  icon: IconDefinition;
  title: string;
  description: string;
  impact: string;
}[] = [
  {
    icon: faMoneyBillTrendUp,
    title: "Paying every month for a finished site",
    description:
      "If your website is already built, you may be paying for tools and subscriptions you no longer need.",
    impact: "Monthly cost without ongoing value",
  },
  {
    icon: faLock,
    title: "Platform lock-in",
    description:
      "Your content, design, and business logic live inside someone else's system. Moving feels risky or unclear.",
    impact: "Hard to export or scale",
  },
  {
    icon: faGaugeHigh,
    title: "Performance limits",
    description:
      "Pages load slowly, mobile scores suffer, and the platform is hard to optimize beyond surface-level fixes.",
    impact: "Visitors leave before converting",
  },
  {
    icon: faPlug,
    title: "Limited integrations",
    description:
      "You need CRM, booking, analytics, or automation connections that the current platform cannot support cleanly.",
    impact: "Workflows stay disconnected",
  },
  {
    icon: faCrown,
    title: "Limited ownership",
    description:
      "You do not fully control hosting, code, exports, or long-term portability if the business outgrows the builder.",
    impact: "You rent, you do not own",
  },
  {
    icon: faMagnifyingGlass,
    title: "SEO and structure constraints",
    description:
      "URLs, redirects, metadata, and technical SEO are harder to manage as the site becomes more important to lead generation.",
    impact: "Search growth hits a ceiling",
  },
];

const businessOutcomeMatch = [
  {
    situation: "Finished website that rarely changes",
    platform: "Static Website",
    href: "/managed-websites",
    icon: faBolt,
  },
  {
    situation: "Growing business publishing content",
    platform: "WordPress",
    href: "/wordpress-studio",
    icon: faFileLines,
  },
  {
    situation: "Selling products online",
    platform: "Shopify",
    href: "/shopify-development",
    icon: faCartShopping,
  },
  {
    situation: "Enterprise marketing team",
    platform: "Headless CMS",
    href: "/headless-cms",
    icon: faCode,
  },
];

const platformFitCards = [
  {
    icon: faBolt,
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
    icon: faFileLines,
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
    icon: faCartShopping,
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
    icon: faCode,
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

const migrationPaths = [
  {
    icon: faLayerGroup,
    title: "From Wix and Squarespace",
    description:
      "Common when a business has outgrown builder limits, wants better SEO control, or needs a platform it can actually own. WordPress is a frequent destination, but static sites and other stacks are considered when they are the better long-term fit.",
    features: [
      "Preserve rankings and URL structure where possible",
      "Transfer content, media, and key design elements",
      "Improve performance and technical SEO foundations",
      "Reduce platform lock-in and long-term friction",
    ],
    links: [
      { href: "/wix-to-wordpress", label: "Wix to WordPress" },
      { href: "/squarespace-to-wordpress", label: "Squarespace to WordPress" },
      { href: "/contact?service=wix-squarespace", label: "Get a recommendation" },
    ],
  },
  {
    icon: faBolt,
    title: "From Webflow",
    description:
      "Common when design quality is strong but content workflows, integrations, or SEO control need more flexibility than the current setup allows.",
    features: [
      "Maintain visual design intent",
      "Improve content management and publishing workflows",
      "Expand hosting and integration options",
      "Plan redirects and SEO continuity carefully",
    ],
    links: [
      { href: "/webflow-to-wordpress", label: "Webflow to WordPress" },
      { href: "/contact?service=webflow", label: "Talk through your options" },
    ],
  },
  {
    icon: faStore,
    title: "From Shopify",
    description:
      "Some stores should stay on Shopify and be improved. Others need a different ecommerce stack or a content-led platform with stronger marketing flexibility. We assess before recommending a move.",
    features: [
      "Review fees, workflows, and platform fit honestly",
      "Preserve product, customer, and order data where applicable",
      "Improve content, SEO, and conversion architecture when needed",
      "Plan integrations and analytics before launch",
    ],
    links: [
      { href: "/shopify-development", label: "Shopify development" },
      { href: "/contact?service=shopify", label: "Get a recommendation" },
    ],
    id: "shopify",
  },
  {
    icon: faServer,
    title: "From Custom or Outdated CMS",
    description:
      "Common when the current system is unsupported, hard to update, or no longer matches how the business operates today.",
    features: [
      "Audit content, data, and integrations first",
      "Recommend the right replacement platform",
      "Improve security, performance, and maintainability",
      "Reduce dependence on one unavailable developer or vendor",
    ],
    links: [{ href: "/contact?service=custom-cms", label: "Free platform assessment" }],
  },
];

const processSteps = [
  {
    icon: faMagnifyingGlass,
    title: "1. Audit and Plan",
    description:
      "We review the current site, SEO footprint, content, forms, analytics, integrations, and business goals, then recommend the right destination platform.",
  },
  {
    icon: faCogs,
    title: "2. Build and Migrate",
    description:
      "Content, structure, media, and functionality move into the new platform with staging, QA, and as much design continuity as the project allows.",
  },
  {
    icon: faChartLine,
    title: "3. SEO and Redirects",
    description:
      "URLs, metadata, redirects, sitemaps, and analytics are mapped so search visibility and measurement survive the transition.",
  },
  {
    icon: faRocket,
    title: "4. Launch and Validate",
    description:
      "We launch carefully, verify forms and tracking, and confirm the new platform is stable before calling the migration complete.",
  },
];

const preserveItems = [
  {
    icon: faSearch,
    title: "Search visibility",
    description: "Rankings, URLs, redirects, and metadata are mapped before launch.",
  },
  {
    icon: faFileLines,
    title: "Content and media",
    description: "Pages, posts, assets, and core messaging carry over with intent intact.",
  },
  {
    icon: faChartBar,
    title: "Analytics and forms",
    description: "GA4, key conversion paths, and lead capture are documented and reconnected.",
  },
  {
    icon: faShieldHalved,
    title: "Business continuity",
    description: "Staging, launch planning, and validation help minimize downtime and surprises.",
  },
];

const commonSituations = [
  {
    icon: faStore,
    title: "Local service business on Wix",
    description:
      "The site works, but you are paying every month for a finished brochure site while wanting better local visibility, lead flow, and ownership.",
  },
  {
    icon: faBriefcase,
    title: "Professional practice on Squarespace",
    description:
      "Content updates are painful, booking or intake needs more flexibility, and the team wants a platform they can maintain.",
  },
  {
    icon: faBullhorn,
    title: "Marketing site on Webflow",
    description:
      "Design is strong, but publishing, SEO control, or integrations need more room than the current setup allows.",
  },
  {
    icon: faCode,
    title: "Store or legacy CMS at a crossroads",
    description:
      "Fees, maintenance, or missing features make it clear the current platform is no longer the right long-term home.",
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
      <Script id="migrations-structured-data" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(structuredData)}
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
                  <span className="title-line">Outgrown Your Website Builder?</span>
                  <span className="title-line highlight">Move to the Platform That Fits</span>
                </h1>
                <p className="hero-description">
                  Clyra helps businesses leaving Wix, Squarespace, Webflow, Shopify,
                  or a legacy CMS move to the platform that fits how they operate
                  today. We do not migrate everyone to WordPress. We recommend what
                  makes sense for your business. See also our{" "}
                  <Link href="/redesign-migration">redesign and migration overview</Link>.
                </p>
                <p className="hero-hook">
                  Keep what already works. No unnecessary rebuild.
                </p>
                <div className="trust-signals">
                  {keepWhatWorks.map((item) => (
                    <div key={item.label} className="trust-item">
                      <GradientIcon icon={item.icon} size="sm" className="success" />
                      <span className="trust-text">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hero-actions">
                <Link href="/site-audit" className="btn btn-primary btn-large">
                  Free Platform Assessment
                  <span className="btn-arrow">→</span>
                </Link>
                <Link href="/contact?service=migration" className="btn btn-secondary btn-large">
                  Talk Through Your Options
                </Link>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">SEO</span>
                  <span className="stat-label">Preserved</span>
                </div>
                <div className="stat">
                  <span className="stat-number">4+</span>
                  <span className="stat-label">Platform Paths</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Consultative</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball services-ball-1"></div>
            <div className="section-floating-ball services-ball-2"></div>
            <div className="section-floating-ball services-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">
                Why Businesses Leave <span className="transform-word">Website Builders</span>
              </h2>
              <p className="section-description">
                Many businesses continue paying monthly for website builders long
                after their website is finished. That does not mean the platform was
                wrong. It often means the business changed, and the monthly cost or
                limits no longer match how the company operates today.
              </p>
            </div>
            <div className="services-grid">
              {leaveBuilderReasons.map((item, index) => {
                const animationClass =
                  index === 0
                    ? "float-in-left"
                    : index === 1
                      ? "float-in-center"
                      : index === 2
                        ? "float-in-bottom-left"
                        : index === 3
                          ? "float-in-right"
                          : index === 4
                            ? "float-in-bottom-right"
                            : "float-in-center";
                return (
                  <div key={item.title} className={`service-card ${animationClass}`}>
                    <div className="service-image">
                      <div className="service-icon">
                        <GradientIcon icon={item.icon} size="xl" className="danger" />
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

        <section className="case-studies-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball case-studies-ball-1"></div>
            <div className="section-floating-ball case-studies-ball-2"></div>
            <div className="section-floating-ball case-studies-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Not Every Business Needs WordPress</h2>
              <p className="section-description">
                Clyra is a technical consultancy, not a WordPress agency. We do
                not migrate everyone to WordPress. We recommend the platform that
                best fits your business, whether that is a static site, WordPress,
                Shopify, headless CMS, or something custom.
              </p>
            </div>
            <div className="case-studies-grid">
              {platformFitCards.map((platform, index) => {
                const animationClass = index % 2 === 0 ? "float-in-left" : "float-in-right";
                return (
                  <div key={platform.title} className={`case-study-card ${animationClass}`}>
                    <div className="case-study-content">
                      <div className="case-study-header">
                        <div className="service-icon">
                          <GradientIcon icon={platform.icon} size="xl" className="primary" />
                        </div>
                        <h3 className="case-study-title">{platform.title}</h3>
                      </div>
                      <div className="case-study-story">
                        <div className="solution-text">Best when:</div>
                      </div>
                      <ul className="service-features">
                        {platform.bestWhen.map((item) => (
                          <li key={item} className="feature-item">
                            <GradientIcon icon={faCheck} size="sm" className="success" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Link href={platform.href} className="case-study-link">
                        {platform.linkLabel}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Which Platform Fits Your Business?</h2>
              <p className="section-description">
                Start with your situation. The platform should follow the business,
                not the other way around. We are not trying to sell you a platform.
                We are trying to recommend the right solution.
              </p>
            </div>
            <div className="migrations-outcome-list">
              {businessOutcomeMatch.map((item) => (
                <div key={item.platform} className="migrations-outcome-row">
                  <div className="migrations-outcome-icon">
                    <GradientIcon icon={item.icon} size="sm" className="primary" />
                  </div>
                  <span className="migrations-outcome-label">Your business is:</span>
                  <span className="migrations-outcome-situation">{item.situation}</span>
                  <span className="migrations-outcome-arrow">→</span>
                  <Link href={item.href} className="migrations-outcome-platform">
                    {item.platform}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="case-studies-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball case-studies-ball-1"></div>
            <div className="section-floating-ball case-studies-ball-2"></div>
            <div className="section-floating-ball case-studies-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Platform Migration Paths</h2>
              <p className="section-description">
                These are the website migrations we handle most often. Each project
                starts with a conversation and an assessment, then moves to the
                platform that makes sense for the business.
              </p>
            </div>
            <div className="case-studies-grid">
              {migrationPaths.map((path, index) => {
                const animationClass = index % 2 === 0 ? "float-in-left" : "float-in-right";
                return (
                  <div
                    key={path.title}
                    id={path.id}
                    className={`case-study-card ${animationClass}`}
                  >
                    <div className="case-study-content">
                      <div className="case-study-header">
                        <div className="service-icon">
                          <GradientIcon icon={path.icon} size="xl" className="primary" />
                        </div>
                        <h3 className="case-study-title">{path.title}</h3>
                      </div>
                      <div className="case-study-story">
                        <div className="solution-text">{path.description}</div>
                      </div>
                      <ul className="service-features">
                        {path.features.map((feature) => (
                          <li key={feature} className="feature-item">
                            <GradientIcon icon={faCheck} size="sm" className="success" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="migrations-path-links">
                        {path.links.map((link, linkIndex) => (
                          <span key={link.href}>
                            {linkIndex > 0 && " · "}
                            <Link href={link.href} className="case-study-link inline-link">
                              {link.label}
                            </Link>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball services-ball-1"></div>
            <div className="section-floating-ball services-ball-2"></div>
            <div className="section-floating-ball services-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Our 4-Step Migration Process</h2>
              <p className="section-description">
                Every migration follows the same disciplined process, regardless of
                the starting platform or destination stack.
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
                  <div key={step.title} className={`service-card ${animationClass}`}>
                    <div className="service-image">
                      <div className="service-icon">
                        <GradientIcon icon={step.icon} size="xl" className="primary" />
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

        <section className="case-studies-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">What We Preserve During Migration</h2>
              <p className="section-description">
                The goal is not a flashy rebuild. It is a better long-term platform
                with as little business disruption as possible.
              </p>
            </div>
            <div className="services-grid">
              {preserveItems.map((item) => (
                <div key={item.title} className="service-card">
                  <div className="service-image">
                    <div className="service-icon">
                      <GradientIcon icon={item.icon} size="xl" className="success" />
                    </div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{item.title}</h3>
                    <p className="service-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Common Situations We Help With</h2>
              <p className="section-description">
                These are representative scenarios, not inflated case study claims.
                The right migration plan depends on the business, the current
                platform, and what needs to keep working on day one.
              </p>
            </div>
            <div className="services-grid">
              {commonSituations.map((item) => (
                <div key={item.title} className="service-card">
                  <div className="service-image">
                    <div className="service-icon">
                      <GradientIcon icon={item.icon} size="xl" className="primary" />
                    </div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{item.title}</h3>
                    <p className="service-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball cta-ball-1"></div>
            <div className="section-floating-ball cta-ball-2"></div>
            <div className="section-floating-ball cta-ball-3"></div>
          </div>
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Find the Right Platform Before You Move</h2>
              <p className="cta-description">
                Tell us where you are today. We will review your site, explain the
                tradeoffs honestly, and recommend the path that fits your business.
                No platform pitch. No unnecessary rebuild.
              </p>
              <div className="cta-actions">
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
              <p className="bc-guides">
                <strong>Consultative first step:</strong> We assess your current
                platform, SEO footprint, and business goals before recommending
                WordPress, Shopify, a static site, headless CMS, or another path.
              </p>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Website Migration FAQ</h2>
              <p className="section-description">
                Common questions from business owners comparing Wix, Squarespace,
                Webflow, Shopify, WordPress, and other platform options.
              </p>
            </div>
            <div className="faq-grid">
              {faqs.map((faq) => (
                <div key={faq.question} className="faq-item">
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
