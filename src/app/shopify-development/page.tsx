import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import {
  faBolt,
  faCheck,
  faCartShopping,
  faCreditCard,
  faChartLine,
  faMobileScreen,
  faPalette,
  faGears,
  faStore,
  faTriangleExclamation,
  faRocket,
  faMagnifyingGlass,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const problems = [
  {
    icon: faCartShopping,
    title: "Outgrowing a Basic Store Setup",
    description:
      "Default themes and DIY configuration work until they don't — checkout friction, messy catalogs, and conversion leaks start costing real revenue.",
    impact: "Sales stall before marketing spend pays off",
  },
  {
    icon: faCreditCard,
    title: "Transaction Fees & Platform Limits",
    description:
      "Shopify's value is speed to market, but fees, app costs, and platform constraints add up as you scale.",
    impact: "Margins shrink as volume grows",
  },
  {
    icon: faGears,
    title: "Disconnected Store & Marketing",
    description:
      "Your store, email, ads, analytics, and content don't connect — so you can't see what's actually driving purchases.",
    impact: "Hard to optimize what you can't measure",
  },
  {
    icon: faPalette,
    title: "Brand & UX That Don't Convert",
    description:
      "A store can look fine and still lose sales — unclear product pages, weak mobile UX, and checkout drop-off kill growth.",
    impact: "Traffic without conversion",
  },
];

const capabilities = [
  {
    icon: faStore,
    title: "Custom Shopify Store Builds",
    description:
      "New stores designed around your products, brand, and conversion goals — not a generic theme with your logo dropped in.",
  },
  {
    icon: faCartShopping,
    title: "Shopify Theme Development",
    description:
      "Custom or heavily customized themes for product storytelling, collections, and mobile-first shopping.",
  },
  {
    icon: faGears,
    title: "Shopify App & Integration Setup",
    description:
      "Reviews, subscriptions, email, CRM, inventory, and fulfillment tools connected into a coherent stack.",
  },
  {
    icon: faChartLine,
    title: "Conversion-Focused Product Pages",
    description:
      "Layouts, messaging, and UX patterns that help visitors understand value and complete checkout.",
  },
  {
    icon: faMagnifyingGlass,
    title: "Shopify SEO Foundations",
    description:
      "Technical and on-page SEO setup so collections and products can compete in search — paired with our technical SEO work when needed.",
  },
  {
    icon: faMobileScreen,
    title: "Mobile Commerce UX",
    description:
      "Most Shopify traffic is mobile. We build for thumb-friendly browsing, fast loads, and low-friction checkout.",
  },
];

const processSteps = [
  {
    icon: faMagnifyingGlass,
    title: "1. Discovery & Store Strategy",
    description:
      "Products, audience, margins, fulfillment, and growth goals — so the build matches how you actually sell.",
  },
  {
    icon: faPalette,
    title: "2. Design & Theme Build",
    description:
      "Brand-aligned store design, collection structure, and product page templates built for conversion.",
  },
  {
    icon: faGears,
    title: "3. Integrations & Tracking",
    description:
      "Payments, apps, GA4, pixels, email, and operational tools connected and tested.",
  },
  {
    icon: faRocket,
    title: "4. Launch & Optimize",
    description:
      "QA, launch support, and a clear path for performance, SEO, and ongoing improvements.",
  },
];

const useCases = [
  {
    icon: faStore,
    title: "Product Brands Launching Online",
    description: "First Shopify store or replatform from a limited setup.",
  },
  {
    icon: faCartShopping,
    title: "Growing Ecommerce Businesses",
    description: "Stores that need better UX, integrations, and conversion structure.",
  },
  {
    icon: faUsers,
    title: "DTC & Subscription Brands",
    description: "Recurring revenue models with the right apps and checkout flows.",
  },
  {
    icon: faChartLine,
    title: "Retail Expanding to Ecommerce",
    description: "Physical or wholesale businesses adding a direct sales channel.",
  },
];

const faqs = [
  {
    question: "Do you only build on Shopify?",
    answer:
      "Shopify is a strong fit for many product brands. We also work with WordPress + WooCommerce and other platforms when that's the better business fit. We'll recommend based on your goals, not a single stack.",
  },
  {
    question: "Can you migrate from WooCommerce or another platform to Shopify?",
    answer:
      "Yes. We handle product, customer, and order migrations with SEO redirects and QA. See our migration services for platform-specific details.",
  },
  {
    question: "Do you handle ongoing Shopify maintenance?",
    answer:
      "Yes. One-off builds can include launch support, and ongoing maintenance or fractional advisory is available depending on your needs.",
  },
  {
    question: "Will this guarantee more sales?",
    answer:
      "No. A better store removes friction and supports growth, but revenue depends on product-market fit, traffic, pricing, fulfillment, and marketing — not the platform alone.",
  },
  {
    question: "Can you connect analytics and marketing tools?",
    answer:
      "Yes. GA4, Looker Studio dashboards, email platforms, ads tracking, and automation workflows are common additions — we build the store as part of a connected system.",
  },
];

export const metadata: Metadata = {
  title: "Shopify Development for Growing Product Brands | Clyra Studios",
  description:
    "Custom Shopify store development, theme customization, app integrations, and conversion-focused ecommerce builds. Part of Clyra's digital growth systems — not just a theme install.",
  keywords:
    "Shopify development, Shopify store build, custom Shopify theme, Shopify agency, ecommerce development, Shopify conversion optimization, Shopify integrations, Shopify SEO setup",
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: { canonical: "/shopify-development" },
  openGraph: {
    title: "Shopify Development for Growing Product Brands | Clyra Studios",
    description:
      "Custom Shopify builds with conversion-focused UX, integrations, and connected analytics.",
    url: "https://clyrastudios.com/shopify-development",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Shopify Development",
  description:
    "Custom Shopify store development, theme customization, integrations, and conversion-focused ecommerce builds for growing product brands.",
  provider: {
    "@type": "Organization",
    name: "Clyra Studios",
    url: "https://clyrastudios.com",
  },
  areaServed: "US",
  serviceType: "Shopify Development",
  offers: [
    {
      "@type": "Offer",
      name: "Shopify Store Development",
      priceRange: "$3000+",
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
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function ShopifyDevelopmentPage() {
  return (
    <>
      <Script id="shopify-structured-data" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(structuredData)}
      </Script>
      <Script id="shopify-faq-data" type="application/ld+json" strategy="beforeInteractive">
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
                  <span className="title-line">Shopify Development for</span>
                  <span className="title-line highlight">Stores Built to Sell &amp; Scale</span>
                </h1>
                <p className="hero-description">
                  We build and improve Shopify stores as part of broader digital
                  growth systems — custom themes, conversion-focused UX, app
                  integrations, tracking, and the connections to analytics and
                  marketing that help you understand what drives revenue.
                </p>
                <p className="hero-hook">Better store. Clearer data. Room to grow.</p>
              </div>
              <div className="hero-actions">
                <Link href="/strategy-call" className="btn btn-primary btn-large">
                  Book a Discovery Call<span className="btn-arrow">→</span>
                </Link>
                <Link href="#what-we-build" className="btn btn-secondary btn-large">
                  See What We Build
                </Link>
              </div>
              <div className="trust-signals">
                <div className="trust-item">
                  <GradientIcon icon={faCartShopping} size="sm" className="primary" />
                  <span className="trust-text">Conversion-Focused</span>
                </div>
                <div className="trust-item">
                  <GradientIcon icon={faGears} size="sm" className="success" />
                  <span className="trust-text">Connected Stack</span>
                </div>
                <div className="trust-item">
                  <GradientIcon icon={faChartLine} size="sm" className="primary" />
                  <span className="trust-text">Analytics-Ready</span>
                </div>
                <div className="trust-item">
                  <GradientIcon icon={faBolt} size="sm" className="warning" />
                  <span className="trust-text">Built to Scale</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">
                When a Shopify Store <span className="transform-word">Holds You Back</span>
              </h2>
              <p className="section-description">
                Shopify is the right platform for many brands — but default setups
                often stop supporting growth before marketing does.
              </p>
            </div>
            <div className="services-grid">
              {problems.map((p, i) => (
                <div key={i} className={`service-card float-in-${i === 0 ? "left" : i === 1 ? "center" : i === 2 ? "bottom-left" : "right"}`}>
                  <div className="service-image">
                    <div className="service-icon">
                      <GradientIcon icon={p.icon} size="xl" className="danger" />
                    </div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{p.title}</h3>
                    <p className="service-description">{p.description}</p>
                    <div className="impact-badge"><span className="impact-text">{p.impact}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="what-we-build" className="case-studies-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">What We Build on Shopify</h2>
            </div>
            <div className="services-grid">
              {capabilities.map((c, i) => (
                <div key={i} className={`service-card float-in-${i % 3 === 0 ? "left" : i % 3 === 1 ? "center" : "right"}`}>
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
              <h2 className="section-title">How We Work</h2>
            </div>
            <div className="services-grid">
              {processSteps.map((s, i) => (
                <div key={i} className={`service-card float-in-${i === 0 ? "left" : i === 1 ? "center" : i === 2 ? "right" : "bottom-right"}`}>
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

        <section className="case-studies-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Use Cases</h2>
            </div>
            <div className="services-grid">
              {useCases.map((u, i) => (
                <div key={i} className={`service-card float-in-${i % 2 === 0 ? "left" : "right"}`}>
                  <div className="service-image">
                    <div className="service-icon">
                      <GradientIcon icon={u.icon} size="xl" className="primary" />
                    </div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{u.title}</h3>
                    <p className="service-description">{u.description}</p>
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
                Scope depends on catalog size, custom design, integrations, and
                migration needs. Starting ranges below.
              </p>
            </div>
            <div className="case-studies-grid">
              <div className="case-study-card float-in-left">
                <div className="case-study-content">
                  <h3 className="case-study-title">Shopify Store Build</h3>
                  <div className="solution-text">Starting at <strong>$3,000</strong></div>
                  <ul className="service-features">
                    {["Discovery & store strategy", "Theme design or customization", "Product & collection setup", "Core integrations & GA4 tracking", "Launch QA & handoff"].map((item) => (
                      <li key={item} className="feature-item">
                        <GradientIcon icon={faCheck} size="sm" className="success" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="case-study-card float-in-right">
                <div className="case-study-content">
                  <h3 className="case-study-title">Ongoing Support</h3>
                  <div className="solution-text">Optional monthly support</div>
                  <ul className="service-features">
                    {["Store updates & app maintenance", "Conversion & UX improvements", "Analytics & reporting support", "Seasonal campaigns & merchandising", "Scoped to your needs"].map((item) => (
                      <li key={item} className="feature-item">
                        <GradientIcon icon={faCheck} size="sm" className="success" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Build a Shopify Store That Supports Growth?</h2>
              <p className="cta-description">
                Tell us about your products, current setup, and goals. We&apos;ll
                recommend the right build — and what to connect next.
              </p>
              <div className="cta-actions">
                <Link href="/strategy-call" className="btn btn-primary btn-large">
                  Book a Discovery Call<span className="btn-arrow">→</span>
                </Link>
                <Link href="/contact" className="btn btn-secondary btn-large">Get in Touch</Link>
              </div>
              <p className="bc-guides">
                Related:{" "}
                <Link href="/technical-seo">Technical SEO</Link>
                {" · "}
                <Link href="/ga4-implementation">GA4 Implementation</Link>
                {" · "}
                <Link href="/website-performance-optimization">Performance Optimization</Link>
                {" · "}
                <Link href="/google-analytics-looker-studio-dashboards">Analytics Dashboards</Link>
              </p>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Shopify Development: Common Questions</h2>
            </div>
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
