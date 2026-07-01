import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import {
  faBolt,
  faBriefcase,
  faBroom,
  faCar,
  faCheck,
  faGavel,
  faHardHat,
  faLeaf,
  faMagnifyingGlass,
  faMobileScreen,
  faRocket,
  faScissors,
  faShieldHalved,
  faStethoscope,
  faStore,
  faTriangleExclamation,
  faUtensils,
  faWind,
  faWrench,
  faChartLine,
  faHeadset,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const problems = [
  {
    icon: faStore,
    title: "Relying Only on Social or Listings",
    description:
      "Many local businesses depend on Facebook, Google Business Profile, or word of mouth alone. That works until a competitor looks more professional online.",
    impact: "Trust goes to whoever shows up best",
  },
  {
    icon: faTriangleExclamation,
    title: "Outdated Sites Hurt Credibility",
    description:
      "An old template, broken layout, or missing information makes customers question whether you are still in business or take your work seriously.",
    impact: "First impressions cost calls",
  },
  {
    icon: faMobileScreen,
    title: "Poor Mobile Experience Loses Leads",
    description:
      "Most local searches happen on phones. Slow loads, tiny text, and hard-to-find contact info send people to the next result.",
    impact: "Clicks without conversions",
  },
  {
    icon: faMagnifyingGlass,
    title: "Missing SEO Basics Means Invisibility",
    description:
      "Without proper titles, local structure, and technical foundations, your business may never show up when nearby customers search.",
    impact: "Invisible in your own market",
  },
  {
    icon: faShieldHalved,
    title: "Unmanaged Sites Break Down",
    description:
      "Unpatched plugins, expired SSL, broken forms, and neglected updates turn a website into a liability instead of an asset.",
    impact: "Risk grows while leads slip away",
  },
];

const solutionIncludes = [
  "Modern responsive website",
  "Managed hosting",
  "SSL and security",
  "Performance optimization",
  "Contact forms and click-to-call",
  "Basic local SEO setup",
  "Google Analytics setup",
  "Search Console setup",
  "Content updates",
  "Ongoing support",
];

const plans = [
  {
    name: "Essential Website",
    price: "$149",
    launchFee: "$499",
    description:
      "Best for businesses that need a clean, professional online presence.",
    features: [
      "1 to 5 page website",
      "Managed hosting",
      "SSL",
      "Mobile optimization",
      "Contact form",
      "Click-to-call",
      "Basic SEO setup",
      "Google Analytics setup",
      "Monthly maintenance",
      "Minor content updates",
    ],
    featured: false,
  },
  {
    name: "Growth Website",
    price: "$299",
    launchFee: "$799",
    description:
      "Best for businesses that want better local visibility and ongoing improvements.",
    features: [
      "Everything in Essential",
      "Up to 10 pages",
      "Monthly content updates",
      "Local SEO improvements",
      "Google Business Profile guidance",
      "Performance reporting",
      "Priority support",
      "Quarterly strategy review",
    ],
    featured: true,
  },
  {
    name: "Growth Partner",
    price: "$499",
    launchFee: "$1,200+",
    description:
      "Best for businesses that want ongoing marketing, SEO, content, analytics, and growth support.",
    features: [
      "Everything in Growth",
      "Service area landing pages",
      "AI-assisted blog and content creation",
      "Looker Studio dashboard",
      "Conversion optimization",
      "Monthly strategy call",
      "Automation recommendations",
      "Advanced SEO improvements",
    ],
    featured: false,
  },
];

const industries = [
  { name: "Plumbers", icon: faWrench },
  { name: "Electricians", icon: faBolt },
  { name: "HVAC", icon: faWind },
  { name: "Contractors", icon: faHardHat },
  { name: "Landscapers", icon: faLeaf },
  { name: "Restaurants", icon: faUtensils },
  { name: "Salons", icon: faScissors },
  { name: "Medical Offices", icon: faStethoscope },
  { name: "Law Firms", icon: faGavel },
  { name: "Auto Shops", icon: faCar },
  { name: "Cleaning Companies", icon: faBroom },
  { name: "Professional Services", icon: faBriefcase },
];

const processSteps = [
  {
    icon: faMagnifyingGlass,
    title: "1. Free Website Review",
    description:
      "We review your current website, Google visibility, and online presence.",
  },
  {
    icon: faChartLine,
    title: "2. Build Plan",
    description:
      "We recommend the right website structure, pages, and monthly plan.",
  },
  {
    icon: faRocket,
    title: "3. Launch",
    description:
      "We build, optimize, connect analytics, and launch your new site.",
  },
  {
    icon: faHeadset,
    title: "4. Manage & Improve",
    description:
      "We keep the site updated, secure, fast, and improving over time.",
  },
];

const upsellLinks = [
  { href: "/growth-website-system", label: "Growth Website System" },
  { href: "/wordpress-studio", label: "WordPress Studio" },
  { href: "/redesign-migration", label: "Redesign & Migration" },
  { href: "/technical-seo", label: "Technical SEO" },
  { href: "/ga4-implementation", label: "GA4 Implementation" },
  {
    href: "/google-analytics-looker-studio-dashboards",
    label: "Analytics Dashboards",
  },
  { href: "/ai-business-systems", label: "AI Business Systems" },
  { href: "/business-process-automation", label: "Business Process Automation" },
  {
    href: "/fractional-digital-systems-consultant",
    label: "Fractional Digital Systems Consultant",
  },
];

const faqs = [
  {
    question: "What is a managed website?",
    answer:
      "A managed website is a professional site that Clyra Studios builds, hosts, maintains, and supports for one predictable monthly price. You get the website, technical upkeep, SEO foundations, analytics setup, and help when you need updates.",
  },
  {
    question: "Do I own my website?",
    answer:
      "Yes. Your business owns the site, content, and domain. We manage the technical side so you do not have to. Plan details and ownership terms are outlined clearly before launch.",
  },
  {
    question: "Is there a setup fee?",
    answer:
      "Most plans include a recommended launch fee to cover the initial build, setup, and onboarding. Essential starts at $499, Growth at $799, and Growth Partner at $1,200 or more depending on scope.",
  },
  {
    question: "Can I cancel?",
    answer:
      "Yes. Monthly plans are designed to be flexible. We will explain terms upfront so you know what is included, what happens at cancellation, and how content or site files are handled.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. Many local businesses come to us with an outdated site or no site at all. We can rebuild on a managed plan or recommend a larger redesign if your goals outgrow the monthly offering.",
  },
  {
    question: "Do you handle hosting?",
    answer:
      "Yes. Managed hosting is included. We handle SSL, security basics, performance, and the technical maintenance that keeps your site online and working.",
  },
  {
    question: "Can I request updates?",
    answer:
      "Yes. Every plan includes support for content and site updates. Higher tiers include more frequent updates, reporting, and strategic guidance.",
  },
  {
    question: "Is SEO included?",
    answer:
      "Yes. All plans include SEO foundations such as proper page structure, titles, local setup basics, and technical health. Growth and Growth Partner add ongoing local SEO improvements and advanced work.",
  },
  {
    question: "Can this grow into a larger website later?",
    answer:
      "Absolutely. Managed Websites are a strong starting point. When you need custom development, deeper SEO, automation, or analytics systems, we can expand into our Growth Website System or other Clyra services.",
  },
  {
    question: "Do you work with WordPress?",
    answer:
      "Yes. WordPress is our primary platform for managed local business websites because it is flexible, reliable, and easy to grow over time. We also support more advanced WordPress and custom builds when needed.",
  },
];

export const metadata: Metadata = {
  title: "Managed Websites for Local Businesses | Clyra Studios",
  description:
    "Professional websites, hosting, maintenance, SEO foundations, analytics, and support for local businesses. Clyra Studios builds and manages your website for one predictable monthly price.",
  keywords:
    "managed websites, local business websites, small business website plans, website management, website hosting and maintenance, monthly website plans, managed WordPress for small business",
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: { canonical: "/managed-websites" },
  openGraph: {
    title: "Managed Websites for Local Businesses | Clyra Studios",
    description:
      "Professional websites fully managed for one predictable monthly price. Built for local service businesses and professional practices.",
    url: "https://clyrastudios.com/managed-websites",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Managed Websites",
  description:
    "Professional managed website plans for local businesses including hosting, maintenance, SEO foundations, analytics, and support.",
  provider: {
    "@type": "Organization",
    name: "Clyra Studios",
    url: "https://clyrastudios.com",
  },
  areaServed: "US",
  offers: plans.map((plan) => ({
    "@type": "Offer",
    name: plan.name,
    price: plan.price.replace(/[^0-9]/g, ""),
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: plan.price.replace(/[^0-9]/g, ""),
      priceCurrency: "USD",
      unitText: "MONTH",
    },
  })),
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

export default function ManagedWebsitesPage() {
  return (
    <>
      <Script
        id="managed-websites-data"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <Script
        id="managed-websites-faq"
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
                  <span className="title-line">Professional Websites,</span>
                  <span className="title-line highlight">Fully Managed for You</span>
                </h1>
                <p className="hero-description">
                  Get a modern, fast, Google-friendly website without dealing with
                  hosting, updates, security, or technical headaches. Clyra Studios
                  builds, launches, and manages your site so your business can focus
                  on getting more calls, leads, and customers.
                </p>
                <p className="hero-hook">
                  Professional websites, hosting, and support for one predictable
                  monthly price.
                </p>
                <p className="hero-description" style={{ marginTop: "1rem" }}>
                  Built for local businesses, contractors, restaurants, healthcare
                  practices, and professional services.
                </p>
              </div>
              <div className="hero-actions">
                <Link href="/site-audit" className="btn btn-primary btn-large">
                  Request a Free Website Review
                  <span className="btn-arrow">→</span>
                </Link>
                <Link href="#pricing" className="btn btn-secondary btn-large">
                  View Monthly Plans
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">
                Your Website Should Help Customers{" "}
                <span className="transform-word">Trust You Before They Call</span>
              </h2>
              <p className="section-description">
                For many local businesses, the website is the first real impression.
                When it looks outdated, loads slowly, or is hard to use on mobile,
                customers move on before you ever get the chance to earn their trust.
              </p>
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
              <h2 className="section-title">A Website Plan That Handles the Tech for You</h2>
              <p className="section-description">
                Clyra Studios provides a managed website system for local businesses
                and small businesses that need a professional online presence without
                becoming their own web department. Your monthly plan includes the
                website build, hosting, maintenance, SEO foundation, analytics, and
                support.
              </p>
            </div>
            <div className="included-grid">
              {solutionIncludes.map((item) => (
                <div key={item} className="included-item">
                  <GradientIcon icon={faCheck} size="sm" className="success" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="bc-guides" style={{ marginTop: "2rem" }}>
              Need more than a monthly plan? Explore{" "}
              <Link href="/growth-website-system">Growth Website System</Link>
              {" · "}
              <Link href="/wordpress-studio">WordPress Studio</Link>
              {" · "}
              <Link href="/technical-seo">Technical SEO</Link>
            </p>
          </div>
        </section>

        <section className="services-section" id="pricing">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Simple Monthly Website Plans</h2>
              <p className="section-description">
                Predictable managed website plans for local businesses that want a
                professional site without surprise costs or technical busywork.
              </p>
            </div>
            <div className="pricing-grid">
              {plans.map((plan, i) => (
                <div
                  key={plan.name}
                  className={`pricing-card ${plan.featured ? "pricing-card-featured" : ""} float-in-${i % 2 === 0 ? "left" : "right"}`}
                >
                  <div className="pricing-card-header">
                    {plan.featured && (
                      <span className="pricing-badge">Most Popular</span>
                    )}
                    <h3 className="pricing-card-title">{plan.name}</h3>
                    <div className="pricing-card-price">
                      {plan.price}
                      <span>/month</span>
                    </div>
                    <p className="pricing-launch-fee">
                      Recommended launch fee: <strong>{plan.launchFee}</strong>
                    </p>
                    <p className="pricing-card-description">{plan.description}</p>
                  </div>
                  <ul className="service-features">
                    {plan.features.map((feature) => (
                      <li key={feature} className="feature-item">
                        <GradientIcon icon={faCheck} size="sm" className="success" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/site-audit" className="btn btn-primary btn-large pricing-card-cta">
                    Request a Free Website Review
                  </Link>
                </div>
              ))}
            </div>
            <p className="section-description" style={{ marginTop: "2rem", textAlign: "center" }}>
              Custom builds, ecommerce, booking systems, CRM integrations, and advanced
              automation may require a custom quote.{" "}
              <Link href="/contact">Contact us</Link> or{" "}
              <Link href="/rfp">submit an RFP</Link> for larger projects.
            </p>
          </div>
        </section>

        <section className="case-studies-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Better Than Renting a DIY Website</h2>
              <p className="section-description">
                DIY builders can work for simple projects, but most local businesses
                need more than a template and a monthly login.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="godaddy-con">
                <h3 className="text-white font-semibold mb-3">
                  DIY Builders and Cheap Templates
                </h3>
                <ul className="space-y-2">
                  {[
                    "Limited ownership and portability",
                    "Weak SEO and local visibility",
                    "Generic design that looks like everyone else",
                    "No strategic support when something breaks",
                    "You manage hosting, updates, and fixes yourself",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <GradientIcon icon={faTimesCircle} size="sm" className="danger" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="dreamhost-pro">
                <h3 className="text-white font-semibold mb-3">Clyra Managed Websites</h3>
                <ul className="space-y-2">
                  {[
                    "Professionally built for your business",
                    "Fully managed hosting and maintenance",
                    "Faster performance and mobile-ready design",
                    "SEO foundation and analytics included",
                    "Support from a real developer and digital systems consultant",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <GradientIcon icon={faCheck} size="sm" className="success" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="case-studies-section industries-section managed-industries-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball industries-ball-1"></div>
            <div className="section-floating-ball industries-ball-2"></div>
            <div className="section-floating-ball industries-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">
                Built for Local Businesses That Need More Calls, Leads, and Trust
              </h2>
              <p className="section-description">
                Managed website plans for service businesses, trades, hospitality,
                healthcare, legal, and professional practices.
              </p>
            </div>
            <div className="managed-industries-grid">
              {industries.map((industry, idx) => (
                <div
                  key={industry.name}
                  className={`managed-industry-card ${idx % 2 === 0 ? "float-in-left" : "float-in-right"}`}
                >
                  <div className="managed-industry-icon">
                    <GradientIcon icon={industry.icon} size="lg" className="primary" />
                  </div>
                  <h3 className="managed-industry-title">{industry.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="case-studies-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">How It Works</h2>
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
              <h2 className="section-title">Need More Than a Managed Website?</h2>
              <p className="section-description">
                For businesses ready to go deeper, Clyra Studios also provides
                advanced WordPress development, SEO, analytics dashboards,
                automation, AI systems, and fractional digital consulting.
              </p>
            </div>
            <div className="upsell-links-grid">
              {upsellLinks.map((link) => (
                <Link key={link.href} href={link.href} className="upsell-link-card">
                  {link.label}
                  <span className="link-arrow">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Frequently Asked Questions</h2>
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

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">
                Ready for a Website You Don&apos;t Have to Worry About?
              </h2>
              <p className="cta-description">
                We&apos;ll review your current website or online presence and
                recommend the simplest path to a faster, cleaner, more professional
                site.
              </p>
              <div className="cta-actions">
                <Link href="/site-audit" className="btn btn-primary btn-large">
                  Request a Free Website Review
                  <span className="btn-arrow">→</span>
                </Link>
                <Link href="/strategy-call" className="btn btn-secondary btn-large">
                  Book a Strategy Call
                </Link>
              </div>
              <p className="bc-guides">
                Related:{" "}
                <Link href="/growth-website-system">Growth Website System</Link>
                {" · "}
                <Link href="/wordpress-studio">WordPress Studio</Link>
                {" · "}
                <Link href="/site-audit">Website Audit</Link>
                {" · "}
                <Link href="/services">All Services</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
