import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import ManagedWebsiteCta, {
  ManagedWebsiteEmailLink,
  ManagedWebsitePhoneLink,
} from "@/components/ManagedWebsiteCta";
import ManagedWebsiteForm from "@/components/ManagedWebsiteForm";
import {
  faBolt,
  faBriefcase,
  faBroom,
  faCar,
  faCheck,
  faClipboardList,
  faComments,
  faGavel,
  faHardHat,
  faHeadset,
  faLeaf,
  faMagnifyingGlass,
  faMobileScreen,
  faPaintRoller,
  faPenToSquare,
  faPhone,
  faRocket,
  faScissors,
  faShieldHalved,
  faStethoscope,
  faStore,
  faBug,
  faCamera,
  faHouseChimney,
  faUtensils,
  faWind,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

const valueBenefits = [
  {
    icon: faStore,
    title: "Look Professional",
    description:
      "Give customers confidence that they are hiring a legitimate, established business.",
  },
  {
    icon: faPhone,
    title: "Get More Calls and Inquiries",
    description:
      "Make it easy for customers to call, request a quote, or contact your business.",
  },
  {
    icon: faMagnifyingGlass,
    title: "Show Up on Google",
    description:
      "Give your business a strong website foundation for local search visibility.",
  },
  {
    icon: faShieldHalved,
    title: "Never Worry About Your Website",
    description:
      "Clyra handles hosting, updates, security, maintenance, and support.",
  },
];

const heroHighlights = [
  { icon: faPenToSquare, label: "Professional website" },
  { icon: faMobileScreen, label: "Mobile friendly" },
  { icon: faComments, label: "Easy customer contact" },
  { icon: faHeadset, label: "Fully handled by Clyra" },
];

const plans = [
  {
    name: "Launch",
    price: "$149",
    launchFee: "$499",
    description:
      "For new or small businesses that need a clean, professional website online quickly.",
    features: [
      "1 to 5 pages",
      "Hosting and SSL included",
      "Contact form and click-to-call",
      "Mobile-friendly design",
      "Basic search setup",
      "1 included update request per month",
      "Email support",
      "1 round of revisions at launch",
      "Month-to-month after launch",
      "Domain registration billed separately",
      "Cancel anytime with 30 days notice",
    ],
    featured: false,
  },
  {
    name: "Grow",
    price: "$299",
    launchFee: "$799",
    description:
      "For growing local businesses that want more pages, better visibility, and regular updates.",
    features: [
      "Up to 10 pages",
      "Everything in Launch",
      "3 included update requests per month",
      "Local SEO improvements",
      "Google Business Profile guidance",
      "Priority email support",
      "2 rounds of revisions at launch",
      "Quarterly performance check-in",
      "Month-to-month after launch",
      "Cancel anytime with 30 days notice",
    ],
    featured: true,
  },
  {
    name: "Pro",
    price: "$499",
    launchFee: "$1,200+",
    description:
      "For businesses that want ongoing marketing support, content help, and growth guidance.",
    features: [
      "Everything in Grow",
      "Service area landing pages",
      "Monthly content updates",
      "Analytics reporting",
      "5 included update requests per month",
      "Monthly strategy call",
      "Conversion recommendations",
      "Priority support",
      "Custom scope for larger needs",
      "Month-to-month after launch",
      "Cancel anytime with 30 days notice",
    ],
    featured: false,
  },
];

const processSteps = [
  {
    icon: faClipboardList,
    title: "1. Tell Us About Your Business",
    description:
      "Complete a short questionnaire and send your logo, services, contact details, and photos.",
  },
  {
    icon: faPenToSquare,
    title: "2. We Build Your Website",
    description:
      "Clyra creates the copy, layout, pages, forms, and mobile experience.",
  },
  {
    icon: faComments,
    title: "3. You Review It",
    description:
      "Review the website and request the revisions included with your plan.",
  },
  {
    icon: faRocket,
    title: "4. We Launch and Manage It",
    description:
      "We connect your domain, launch the website, host it, and keep it running.",
  },
];

const industries = [
  { name: "Painters", icon: faPaintRoller },
  { name: "Contractors", icon: faHardHat },
  { name: "Landscapers", icon: faLeaf },
  { name: "Electricians", icon: faBolt },
  { name: "Plumbers", icon: faWrench },
  { name: "HVAC", icon: faWind },
  { name: "Cleaning Companies", icon: faBroom },
  { name: "Restaurants", icon: faUtensils },
  { name: "Salons", icon: faScissors },
  { name: "Medical Offices", icon: faStethoscope },
  { name: "Law Firms", icon: faGavel },
  { name: "Auto Shops", icon: faCar },
  { name: "Professional Services", icon: faBriefcase },
  { name: "Roofers", icon: faHouseChimney },
  { name: "Pest Control", icon: faBug },
  { name: "Photographers", icon: faCamera },
];

const addOns = [
  { label: "Additional pages", href: "/contact" },
  { label: "Logo refresh", href: "/contact" },
  { label: "Google Business Profile setup", href: "/technical-seo" },
  { label: "Local SEO", href: "/technical-seo" },
  { label: "Online booking", href: "/contact" },
  { label: "Quote request forms", href: "/contact" },
  { label: "Analytics dashboard", href: "/google-analytics-looker-studio-dashboards" },
  { label: "WordPress or CMS upgrade", href: "/wordpress-studio" },
];

const faqs = [
  {
    question: "What is a managed website?",
    answer:
      "It is a professional business website that Clyra builds, hosts, maintains, and supports for you. You get the design, contact tools, hosting, security, updates, and help when you need changes. You focus on your business. We handle the website.",
  },
  {
    question: "Do I own my domain?",
    answer:
      "Yes. Your domain should be registered in your name or your business name. Clyra can help you connect an existing domain or guide you through purchasing one. Domain registration is billed separately from the monthly plan.",
  },
  {
    question: "Can I use a domain I already own?",
    answer:
      "Yes. If you already own a domain, we connect it during launch. We will walk you through the simple DNS steps or handle the connection for you.",
  },
  {
    question: "Can I make changes later?",
    answer:
      "Yes. Every plan includes a set number of update requests each month. Send us the change by email and we handle it. Larger updates or new pages can be added as needed.",
  },
  {
    question: "How quickly can the website launch?",
    answer:
      "Most Launch and Grow websites launch in 2 to 4 weeks after we receive your content and questionnaire. Timeline depends on how quickly you provide photos, services, and feedback during review.",
  },
  {
    question: "Do I need to provide the website copy?",
    answer:
      "You provide the basics: services, service area, contact details, photos, and any offers you want highlighted. Clyra writes and organizes the website copy as part of the build.",
  },
  {
    question: "Is hosting included?",
    answer:
      "Yes. Hosting, SSL, security basics, and performance monitoring are included in every plan. You do not need a separate hosting account.",
  },
  {
    question: "Is this WordPress?",
    answer:
      "The standard managed website is a fast, secure, professionally built static website. WordPress and other CMS platforms are available separately when you need frequent publishing, ecommerce, memberships, or more complex functionality.",
  },
  {
    question: "What happens if I cancel?",
    answer:
      "Plans are month-to-month after launch with 30 days notice to cancel. We explain what is included, what happens at cancellation, and how your content is handled before you start. You keep ownership of your domain and business content.",
  },
  {
    question: "Can I move the website later?",
    answer:
      "Your business owns the content, branding, and domain. If you outgrow the managed plan or want a custom build, Clyra can help you transition to a larger project. We are upfront about what transfers and what is tied to our managed hosting.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. Many businesses come to us with an outdated site or no site at all. We can rebuild on a managed plan or recommend a custom project if your goals need more than the monthly offering.",
  },
  {
    question: "Can you help me show up on Google?",
    answer:
      "Yes. All plans include basic search setup: proper page titles, structure, mobile-friendly design, and local foundations. Grow and Pro add ongoing local SEO improvements. We do not guarantee rankings, but we build the foundation Google expects.",
  },
  {
    question: "Are there setup fees?",
    answer:
      "Yes. Each plan has a one-time launch fee that covers the initial build and onboarding: Launch $499, Grow $799, and Pro $1,200 or more depending on scope.",
  },
  {
    question: "Is there a contract?",
    answer:
      "No long-term contract is required. After launch, plans are month-to-month. Launch fees cover the initial build. Cancellation terms are explained clearly before you start.",
  },
  {
    question: "What types of businesses is this for?",
    answer:
      "Local service businesses, trades, solo owners, new businesses, and professional practices that want a professional website without managing the technical side. Painters, contractors, landscapers, cleaners, restaurants, salons, medical offices, and similar businesses are a strong fit.",
  },
];

const SITE_URL = "https://clyrastudios.com";
const PAGE_URL = `${SITE_URL}/managed-websites`;

function parsePrice(value: string): string {
  return value.replace(/[^0-9]/g, "");
}

export const metadata: Metadata = {
  title: "Managed Websites for Small Businesses | Build, Host & Manage | Clyra Studios",
  description:
    "Clyra builds, hosts, and manages professional websites for small businesses. Get a fast, mobile-friendly business website without dealing with technical maintenance.",
  keywords:
    "professional websites for small businesses, affordable small business websites, managed websites for small businesses, business website service, website design for local businesses",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/managed-websites" },
  openGraph: {
    title: "Managed Websites for Small Businesses | Build, Host & Manage | Clyra Studios",
    description:
      "Clyra builds, hosts, and manages professional websites for small businesses. Get online without builders, plugins, or technical headaches.",
    url: PAGE_URL,
    siteName: "Clyra Studios",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Clyra Studios Managed Websites for Small Businesses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Managed Websites for Small Businesses | Clyra Studios",
    description:
      "Professional websites built, hosted, and managed for local service businesses. Launch, Grow, and Pro plans with no long-term contract.",
    images: ["/images/thumbnail.png"],
    creator: "@clyrastudios",
    site: "@clyrastudios",
  },
};

const pageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: PAGE_URL,
      name: "Managed Websites for Small Businesses",
      description:
        "Professional website design, hosting, maintenance, and support for small businesses and local service companies.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${PAGE_URL}/#service` },
      breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Managed Websites", item: PAGE_URL },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#service`,
      name: "Managed Business Websites",
      url: PAGE_URL,
      description:
        "Professional website design, hosting, maintenance, and support for small businesses and local service companies. Fast static websites by default with optional WordPress or custom CMS upgrades.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "United States" },
      serviceType: "Website design and management",
      offers: plans.map((plan) => ({
        "@type": "Offer",
        name: `${plan.name} Plan`,
        url: PAGE_URL,
        price: parsePrice(plan.price),
        priceCurrency: "USD",
        description: `${plan.price}/month plus one-time launch fee of ${plan.launchFee}.`,
        priceSpecification: [
          {
            "@type": "UnitPriceSpecification",
            name: "Monthly plan",
            price: parsePrice(plan.price),
            priceCurrency: "USD",
            unitText: "MONTH",
          },
          {
            "@type": "UnitPriceSpecification",
            name: "One-time launch fee",
            price: parsePrice(plan.launchFee),
            priceCurrency: "USD",
            billingDuration: "P0M",
          },
        ],
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}/#faq`,
      isPartOf: { "@id": `${PAGE_URL}/#webpage` },
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

export default function ManagedWebsitesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageStructuredData) }}
      />
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
                <p className="hero-hook">Websites for Small Businesses</p>
                <h1 className="hero-title">
                  <span className="title-line">Need a Website</span>
                  <span className="title-line highlight">for Your Business?</span>
                </h1>
                <div className="trust-signals managed-hero-signals">
                  {heroHighlights.map((item) => (
                    <div key={item.label} className="trust-item">
                      <GradientIcon icon={item.icon} size="sm" className="primary" />
                      <span className="trust-text">{item.label}</span>
                    </div>
                  ))}
                </div>
                <p className="hero-description">
                  We design it, launch it, host it, and keep it updated. You get
                  a professional website without dealing with builders, plugins,
                  hosting, or technical headaches.
                </p>
                <p className="hero-hook managed-hero-trust-line">
                  Fast launch. Professional design. Hosting and support included.
                </p>
              </div>
              <div className="hero-actions">
                <ManagedWebsiteCta
                  href="#get-website"
                  className="btn btn-primary btn-large"
                  ctaLabel="get_my_website_hero"
                >
                  Get My Website
                  <span className="btn-arrow">→</span>
                </ManagedWebsiteCta>
                <ManagedWebsiteCta
                  href="#pricing"
                  className="btn btn-secondary btn-large"
                  event="managed_website_view_plans"
                  ctaLabel="view_plans_hero"
                >
                  View Plans
                </ManagedWebsiteCta>
              </div>
            </div>
          </div>
        </section>

        <section className="case-studies-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">
                Everything You Need to Get Your Business Online
              </h2>
            </div>
            <div className="services-grid">
              {valueBenefits.map((benefit, i) => (
                <div key={i} className="service-card">
                  <div className="service-image">
                    <div className="service-icon">
                      <GradientIcon icon={benefit.icon} size="xl" className="primary" />
                    </div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{benefit.title}</h3>
                    <p className="service-description">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">
                Still Relying on Facebook or Google Alone?
              </h2>
              <p className="section-description">
                Social profiles are useful, but they do not replace a professional
                website. Your website gives customers one trusted place to learn
                about your services, see your work, and contact you.
              </p>
            </div>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <ManagedWebsiteCta
                href="#get-website"
                className="btn btn-primary btn-large"
                ctaLabel="get_my_website_social"
              >
                Get My Website
                <span className="btn-arrow">→</span>
              </ManagedWebsiteCta>
            </div>
          </div>
        </section>

        <section className="case-studies-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">How It Works</h2>
              <p className="section-description">
                A simple process designed for busy business owners. You share
                the basics. Clyra handles the rest.
              </p>
            </div>
            <div className="services-grid">
              {processSteps.map((step, i) => (
                <div key={i} className="service-card">
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
              ))}
            </div>
          </div>
        </section>

        <section className="services-section" id="pricing">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Simple Monthly Plans</h2>
              <p className="section-description">
                Predictable pricing for a professional business website with
                hosting, maintenance, and support included.
              </p>
            </div>
            <div className="pricing-grid">
              {plans.map((plan, i) => (
                <div
                  key={plan.name}
                  className={`pricing-card ${plan.featured ? "pricing-card-featured" : ""} float-in-${i % 2 === 0 ? "left" : "right"}`}
                >
                  <div className="pricing-card-header">
                    <div className="pricing-badge-slot">
                      {plan.featured && (
                        <span className="pricing-badge">Recommended</span>
                      )}
                    </div>
                    <h3 className="pricing-card-title">{plan.name}</h3>
                    <div className="pricing-card-price">
                      {plan.price}
                      <span>/month</span>
                    </div>
                    <p className="pricing-launch-fee">
                      One-time launch fee: <strong>{plan.launchFee}</strong>
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
                  <ManagedWebsiteCta
                    href="#get-website"
                    className="btn btn-primary btn-large pricing-card-cta"
                    ctaLabel={`get_started_${plan.name.toLowerCase()}`}
                  >
                    Get Started
                  </ManagedWebsiteCta>
                </div>
              ))}
            </div>
            <p
              className="section-description"
              style={{ marginTop: "2rem", textAlign: "center" }}
            >
              Already have a website?{" "}
              <Link href="/site-audit">Request a Free Website Review</Link> and
              we will tell you what to improve.
            </p>
          </div>
        </section>

        <section className="case-studies-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">You Do Not Have to Build It Yourself</h2>
              <p className="section-description">
                DIY builders work for some people, but most business owners do not
                want to become their own web department.
              </p>
            </div>
            <div className="included-grid">
              {[
                "No learning Wix or Squarespace",
                "No fighting with templates",
                "No plugin updates or security patches",
                "No hosting setup or DNS confusion",
                "No technical maintenance on your plate",
                "A real person handles your website",
              ].map((item) => (
                <div key={item} className="included-item">
                  <GradientIcon icon={faCheck} size="sm" className="success" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Which Option Fits Your Business?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="dreamhost-pro">
                <h3 className="text-white font-semibold mb-3">
                  Managed Business Website
                </h3>
                <ul className="space-y-2">
                  {[
                    "Fast launch",
                    "Fixed monthly pricing",
                    "Hosting and maintenance included",
                    "Clyra handles updates",
                    "Best for local service businesses",
                    "No technical management required",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <GradientIcon icon={faCheck} size="sm" className="success" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="godaddy-con">
                <h3 className="text-white font-semibold mb-3">
                  Custom Website Project
                </h3>
                <ul className="space-y-2">
                  {[
                    "Fully custom strategy and design",
                    "Advanced functionality",
                    "CMS or ecommerce when needed",
                    "Larger initial investment",
                    "Best for established and growing organizations",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <GradientIcon icon={faCheck} size="sm" className="primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="hero-actions" style={{ justifyContent: "center", marginTop: "2rem" }}>
              <ManagedWebsiteCta
                href="/contact"
                className="btn btn-secondary btn-large"
                ctaLabel="not_sure_contact"
              >
                Not sure which option fits? Talk to Clyra
              </ManagedWebsiteCta>
            </div>
            <p className="bc-guides" style={{ marginTop: "1.5rem", textAlign: "center" }}>
              Need a CMS, ecommerce, or advanced features? See{" "}
              <Link href="/growth-website-system">Growth Website System</Link>
              {" · "}
              <Link href="/wordpress-studio">WordPress Studio</Link>
            </p>
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
                Built for Local Service Businesses
              </h2>
              <p className="section-description">
                Painters, contractors, landscapers, cleaners, restaurants, salons,
                medical offices, and other businesses that need more calls and trust.
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

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Popular Add-Ons</h2>
              <p className="section-description">
                Start with the plan that fits today. Add services as your business grows.
              </p>
            </div>
            <div className="upsell-links-grid">
              {addOns.map((addon) => (
                <Link key={addon.label} href={addon.href} className="upsell-link-card">
                  {addon.label}
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

        <section className="services-section" id="get-website">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">
                Your Business Deserves a Professional Website
              </h2>
              <p className="section-description">
                Tell us about your business and we will recommend the simplest,
                most affordable way to get your website online.
              </p>
            </div>
            <ManagedWebsiteForm />
            <p className="bc-guides" style={{ marginTop: "1.5rem", textAlign: "center" }}>
              Prefer to talk first? Call{" "}
              <ManagedWebsitePhoneLink className="managed-contact-link">
                (646) 632-2070
              </ManagedWebsitePhoneLink>
              {" · "}
              Email{" "}
              <ManagedWebsiteEmailLink className="managed-contact-link">
                rick@clyrastudios.com
              </ManagedWebsiteEmailLink>
            </p>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">
                Ready to Get Your Business Online?
              </h2>
              <p className="cta-description">
                No builders. No plugins. No technical headaches. Just a
                professional website handled by Clyra.
              </p>
              <div className="cta-actions">
                <ManagedWebsiteCta
                  href="#get-website"
                  className="btn btn-primary btn-large"
                  ctaLabel="get_my_website_footer"
                >
                  Get My Website
                  <span className="btn-arrow">→</span>
                </ManagedWebsiteCta>
                <ManagedWebsiteCta
                  href="/strategy-call"
                  className="btn btn-secondary btn-large"
                  ctaLabel="talk_to_clyra"
                >
                  Talk to Clyra
                </ManagedWebsiteCta>
              </div>
              <p className="bc-guides">
                Already have a site?{" "}
                <Link href="/site-audit">Free Website Review</Link>
                {" · "}
                <Link href="/growth-website-system">Custom Website Projects</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
