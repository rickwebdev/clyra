import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import {
  faArrowRight,
  faBolt,
  faBullseye,
  faChartLine,
  faCheck,
  faCheckCircle,
  faClock,
  faDollarSign,
  faExclamationTriangle,
  faFileAlt,
  faGavel,
  faHammer,
  faHospital,
  faLink,
  faMapPin,
  faQuoteLeft,
  faRocket,
  faShieldHalved,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const processPhases = [
  {
    icon: faClock,
    title: "1. Strategy Call",
    timeline: "Week 1",
    description: "Goals, economics, audience, and growth priorities.",
  },
  {
    icon: faFileAlt,
    title: "2. Blueprint",
    timeline: "Weeks 2-3",
    description: "Funnel map, page structure, wireframes, and technical plan.",
  },
  {
    icon: faHammer,
    title: "3. Build & Integrate",
    timeline: "Weeks 4-6",
    description: "Custom site on WordPress or Next.js with CRM, SEO, and tracking.",
  },
  {
    icon: faChartLine,
    title: "4. Launch & Measure",
    timeline: "Post-launch",
    description: "Speed validation, analytics, training, and optimization roadmap.",
  },
];

const growthIncludes = [
  "Custom strategy and conversion architecture",
  "Custom design and development",
  "SEO and local search foundations",
  "Analytics dashboard setup",
  "CRM, forms, booking, and automation integrations",
  "Performance and mobile optimization",
];

const managedIncludes = [
  "Simple monthly website plan",
  "Lower upfront cost",
  "Hosting and support included",
  "Best for a clean, professional managed site",
];

const faqs = [
  {
    question: "Who is the Growth Website System best for?",
    answer:
      "Businesses that need more than a brochure site: professional services, healthcare, local service brands, restaurants, agencies, consultants, and growth-focused small businesses ready to invest in strategy, conversion, SEO, analytics, and integrations.",
  },
  {
    question: "How is this different from Managed Websites?",
    answer:
      "Managed Websites is a lower-friction monthly plan for local businesses that need a professionally managed site with hosting and support. The Growth Website System is a premium custom build with strategy, conversion architecture, integrations, and measurable growth systems.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Typical projects range from $5,000 to $15,000+. Minimum engagement is $3,000. Scope depends on pages, integrations, design complexity, and automation needs.",
  },
  {
    question: "Do you build on WordPress?",
    answer:
      "Yes. WordPress is our primary CMS for many growth builds. For higher performance or decoupled needs, we also build on Next.js and headless setups.",
  },
  {
    question: "Can this include analytics and dashboards?",
    answer:
      "Yes. GA4 setup, conversion tracking, and Looker Studio dashboards are common parts of the system so you can see what is working.",
  },
  {
    question: "Can this include automation or CRM integrations?",
    answer:
      "Yes. Lead routing, CRM connections, booking flows, email follow-ups, and workflow automation can be scoped into the build when they support your growth goals.",
  },
  {
    question: "Can you redesign my existing site?",
    answer:
      "Yes. Many engagements start as redesigns or rescues. We preserve SEO equity where possible and rebuild around conversion and measurement.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most projects take 4 to 8 weeks depending on complexity, content readiness, integrations, and feedback cycles.",
  },
  {
    question: "What happens after launch?",
    answer:
      "You receive training, documentation, and a clear optimization path. Ongoing support, SEO, analytics, and automation can continue through Clyra advisory services or scoped retainers.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Growth Website System",
  description:
    "Custom website and digital growth build combining strategy, design, development, SEO, analytics, and conversion architecture.",
  provider: {
    "@type": "Organization",
    name: "Clyra Studios",
    url: "https://clyrastudios.com",
  },
  areaServed: "US",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "3000",
    highPrice: "15000",
  },
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

function GrowthCtaBlock({
  title,
  description,
  showApplication = true,
}: {
  title: string;
  description: string;
  showApplication?: boolean;
}) {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">{title}</h2>
          <p className="cta-description">{description}</p>
          <div className="cta-actions">
            <Link href="/strategy-call" className="btn btn-primary btn-large">
              Book a Free Strategy Call
              <span className="btn-arrow">→</span>
            </Link>
            <Link href="/site-audit" className="btn btn-secondary btn-large">
              Start Your Growth Website Review
            </Link>
            {showApplication && (
              <Link
                href="/growth-website-system/apply"
                className="btn btn-secondary btn-large"
              >
                Start Your Application
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function GrowthWebsiteSystemPage() {
  return (
    <>
      <Script
        id="growth-website-system-data"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <Script
        id="growth-website-system-faq"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(faqStructuredData)}
      </Script>

      <Nav />
      <main className="redesign-migration-page growth-website-system-page">
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
                  <span className="title-line">
                    Websites Built to Generate Leads,
                  </span>
                  <span className="title-line highlight">
                    Measure Growth, and Scale With Your Business
                  </span>
                </h1>
                <p className="hero-description">
                  The Growth Website System is a custom website and digital growth
                  build for businesses that need more than a brochure site. We
                  combine strategy, design, development, SEO, analytics,
                  automation, and conversion architecture into one measurable
                  system.
                </p>
                <p className="hero-hook">
                  Qualified leads, booked appointments, predictable revenue, and
                  growth you can track.
                </p>
                <p className="hero-description" style={{ marginTop: "1rem" }}>
                  Best fit for professional services, healthcare, local service
                  brands, restaurants, agencies, consultants, and growth-focused
                  small businesses.
                </p>
              </div>
              <div className="hero-actions">
                <Link href="/strategy-call" className="btn btn-primary btn-large">
                  Book a Free Strategy Call
                  <span className="btn-arrow">→</span>
                </Link>
                <Link href="/managed-websites" className="btn btn-secondary btn-large">
                  View Managed Website Plans
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="managed-websites-promo growth-offer-callout">
              <div className="managed-websites-promo-content">
                <h3 className="managed-websites-promo-title">
                  Need a simpler monthly website plan?
                </h3>
                <p className="managed-websites-promo-description">
                  For smaller businesses that need a professionally managed site
                  without a full custom growth build, see{" "}
                  <Link href="/managed-websites">Managed Websites</Link>.
                </p>
                <Link href="/managed-websites" className="btn btn-secondary btn-compact">
                  Compare Managed Websites
                  <span className="btn-arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="case-studies-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Before &amp; After</h2>
              <p className="section-description">
                See the shift from a static brochure site to a growth-focused
                website system built to capture, track, and convert demand.
              </p>
            </div>

            <div className="growth-transformation-stack">
              <div className="growth-transformation-card growth-transformation-before">
                <div className="growth-transformation-header">
                  <GradientIcon icon={faExclamationTriangle} size="lg" className="danger" />
                  <div>
                    <h3 className="growth-transformation-title">Before: Your Current Website</h3>
                    <p className="growth-transformation-subtitle">
                      Problems that cost you calls, leads, and trust
                    </p>
                  </div>
                </div>
                <div className="growth-transformation-grid">
                  <div className="growth-transformation-image">
                    <Image
                      src="/images/marketing/website-upgrade-needed.png"
                      alt="Before: slow, non-converting website with poor mobile performance"
                      width={640}
                      height={400}
                      className="growth-transformation-img"
                    />
                  </div>
                  <ul className="service-features">
                    {[
                      "Leads falling through the cracks",
                      "Slow site that drives visitors away",
                      "Invisible on Google for local searches",
                    ].map((item) => (
                      <li key={item} className="feature-item">
                        <GradientIcon icon={faExclamationTriangle} size="sm" className="danger" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="growth-transformation-arrow" aria-hidden="true">
                <GradientIcon icon={faArrowRight} size="lg" className="primary" />
                <span>Our Growth Website System</span>
              </div>

              <div className="growth-transformation-card growth-transformation-after">
                <div className="growth-transformation-header">
                  <GradientIcon icon={faChartLine} size="lg" className="success" />
                  <div>
                    <h3 className="growth-transformation-title">After: Your Growth Website</h3>
                    <p className="growth-transformation-subtitle">
                      A faster, clearer, more measurable client-generation system
                    </p>
                  </div>
                </div>
                <div className="growth-transformation-grid">
                  <div className="growth-transformation-image">
                    <Image
                      src="/images/marketing/web-growth-system.png"
                      alt="After: fast, conversion-optimized website with integrated CRM and tracking"
                      width={640}
                      height={400}
                      className="growth-transformation-img"
                    />
                  </div>
                  <ul className="service-features">
                    {[
                      "Under 2 second load targets on key pages",
                      "Conversion architecture with sticky CTAs, forms, and booking flows",
                      "CRM-integrated leads and analytics dashboards",
                    ].map((item) => (
                      <li key={item} className="feature-item">
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

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">4-Phase Growth System</h2>
              <p className="section-description">
                From strategy to launch, we handle the build so you can focus on
                running the business.
              </p>
            </div>
            <div className="services-grid">
              {processPhases.map((phase, i) => (
                <div key={phase.title} className="service-card">
                  <div className="service-image">
                    <div className="service-icon">
                      <GradientIcon icon={phase.icon} size="xl" className="primary" />
                    </div>
                  </div>
                  <div className="service-content">
                    <p className="solution-text">{phase.timeline}</p>
                    <h3 className="service-title">{phase.title}</h3>
                    <p className="service-description">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <GrowthCtaBlock
          title="Ready to Map Your Growth Website Build?"
          description="Book a strategy call or start with a growth website review. We will recommend the right scope, timeline, and integrations for your goals."
        />

        <section className="case-studies-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Expected Results</h2>
              <p className="section-description">
                Results vary by industry, offer, traffic, and sales process. These
                ranges reflect typical outcomes we design toward, not guarantees.
              </p>
            </div>
            <div className="growth-results-grid">
              <div className="growth-result-card">
                <div className="growth-result-number">10-20+</div>
                <p className="growth-result-label">qualified inquiries per month*</p>
                <p className="growth-result-note">*Typical range for professional services</p>
              </div>
              <div className="growth-result-card">
                <div className="growth-result-number">$15k-$30k</div>
                <p className="growth-result-label">in new pipeline opportunities*</p>
                <p className="growth-result-note">*Often within the first 90 days for the right fit</p>
              </div>
            </div>
            <div className="growth-trust-pills">
              {[
                { icon: faBolt, text: "More qualified leads" },
                { icon: faBullseye, text: "Better conversion paths" },
                { icon: faLink, text: "CRM-ready integrations" },
                { icon: faMapPin, text: "Stronger local visibility" },
              ].map((item) => (
                <div key={item.text} className="growth-trust-pill">
                  <GradientIcon icon={item.icon} size="sm" className="primary" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section" id="pricing">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Premium Project-Based Pricing</h2>
              <p className="section-description">
                Typical projects range from <strong>$5,000 to $15,000+</strong>.
                Minimum engagement: <strong>$3,000</strong>.
              </p>
              <p className="section-description">
                Need a lower upfront monthly plan?{" "}
                <Link href="/managed-websites">View Managed Websites</Link>.
              </p>
            </div>
            <div className="included-grid">
              {[
                "Custom strategy and discovery",
                "Conversion-focused design and development",
                "SEO and analytics setup",
                "CRM, forms, and automation integrations",
                "Launch support and training",
                "Post-launch optimization roadmap",
              ].map((item) => (
                <div key={item} className="included-item">
                  <GradientIcon icon={faCheck} size="sm" className="success" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="bc-guides" style={{ marginTop: "2rem" }}>
              Related:{" "}
              <Link href="/wordpress-studio">WordPress Studio</Link>
              {" · "}
              <Link href="/technical-seo">Technical SEO</Link>
              {" · "}
              <Link href="/ga4-implementation">GA4 Implementation</Link>
              {" · "}
              <Link href="/google-analytics-looker-studio-dashboards">
                Analytics Dashboards
              </Link>
            </p>
          </div>
        </section>

        <GrowthCtaBlock
          title="Want a Clear Quote for Your Growth Build?"
          description="Share your goals, current site, and integrations. We will outline a realistic scope and investment range."
          showApplication={false}
        />

        <section className="case-studies-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Growth Website System vs Managed Websites</h2>
              <p className="section-description">
                Two ways to work with Clyra, depending on how much strategy,
                customization, and growth infrastructure you need right now.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="dreamhost-pro">
                <h3 className="text-white font-semibold mb-3">Growth Website System</h3>
                <ul className="space-y-2">
                  {growthIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <GradientIcon icon={faCheck} size="sm" className="success" />
                      <span>{item}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-2">
                    <GradientIcon icon={faCheck} size="sm" className="success" />
                    <span>Best for businesses ready to invest in growth</span>
                  </li>
                </ul>
                <Link href="/strategy-call" className="btn btn-primary btn-compact" style={{ marginTop: "1.5rem" }}>
                  Book a Free Strategy Call
                </Link>
              </div>
              <div className="godaddy-con">
                <h3 className="text-white font-semibold mb-3">Managed Websites</h3>
                <ul className="space-y-2">
                  {managedIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <GradientIcon icon={faCheck} size="sm" className="success" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/managed-websites" className="btn btn-secondary btn-compact" style={{ marginTop: "1.5rem" }}>
                  View Managed Website Plans
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Guarantee</h2>
            </div>
            <div className="growth-guarantee-card">
              <GradientIcon icon={faShieldHalved} size="xl" className="success" />
              <p className="growth-guarantee-copy">
                If you do not see measurable speed and conversion improvements within
                30 days of launch, we optimize at no additional cost until those
                foundations are in place.
              </p>
              <div className="growth-guarantee-badge">
                <GradientIcon icon={faCheckCircle} size="sm" className="success" />
                <span>Risk-aware launch commitment</span>
              </div>
            </div>
          </div>
        </section>

        <section className="case-studies-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Authority &amp; Client Results</h2>
              <p className="section-description">
                10+ years across agency, regulated, and growth-focused industries.
              </p>
            </div>
            <div className="growth-results-grid">
              <div className="growth-result-card">
                <div className="growth-result-number">90+</div>
                <p className="growth-result-label">mobile Lighthouse targets on key templates</p>
              </div>
              <div className="growth-result-card">
                <div className="growth-result-number">4-8 weeks</div>
                <p className="growth-result-label">typical build timeline for most projects</p>
              </div>
            </div>

            <div className="case-studies-grid" style={{ marginTop: "2rem" }}>
              <div className="case-study-card float-in-left">
                <div className="case-study-content">
                  <GradientIcon icon={faQuoteLeft} size="md" className="primary" />
                  <blockquote className="growth-testimonial-quote">
                    Our site was hacked and taken offline by the host. Within a week,
                    we had a brand new site, modern hosting, and uninterrupted
                    reservations.
                  </blockquote>
                  <cite className="growth-testimonial-cite">Demarchelier Bistro</cite>
                  <p className="growth-testimonial-meta">Family-owned French restaurant</p>
                  <a
                    href="https://demarchelierrestaurant.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-cta"
                  >
                    Visit website <span className="link-arrow">→</span>
                  </a>
                </div>
              </div>
              <div className="case-study-card float-in-right">
                <div className="case-study-content">
                  <GradientIcon icon={faQuoteLeft} size="md" className="primary" />
                  <blockquote className="growth-testimonial-quote">
                    We had no online presence before. Within weeks of launch, new
                    local customers started finding and calling us.
                  </blockquote>
                  <cite className="growth-testimonial-cite">Coastal Luxe Painting</cite>
                  <p className="growth-testimonial-meta">Long Island, NY</p>
                  <a
                    href="https://coastalluxepainting.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-cta"
                  >
                    Visit website <span className="link-arrow">→</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="managed-industries-grid" style={{ marginTop: "2rem" }}>
              {[
                { icon: faHospital, name: "Healthcare", desc: "Medical practices" },
                { icon: faGavel, name: "Legal", desc: "Law firms" },
                { icon: faDollarSign, name: "Finance", desc: "Financial services" },
              ].map((item) => (
                <div key={item.name} className="managed-industry-card">
                  <div className="managed-industry-icon">
                    <GradientIcon icon={item.icon} size="lg" className="primary" />
                  </div>
                  <h3 className="managed-industry-title">{item.name}</h3>
                  <p className="growth-testimonial-meta">{item.desc}</p>
                </div>
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
              {faqs.map((faq) => (
                <div key={faq.question} className="faq-item">
                  <h3 className="faq-question">{faq.question}</h3>
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
            <p className="bc-guides" style={{ marginTop: "2rem" }}>
              Explore more:{" "}
              <Link href="/managed-websites">Managed Websites</Link>
              {" · "}
              <Link href="/ai-business-systems">AI Business Systems</Link>
              {" · "}
              <Link href="/business-process-automation">Process Automation</Link>
              {" · "}
              <Link href="/fractional-digital-systems-consultant">
                Fractional Consultant
              </Link>
              {" · "}
              <Link href="/redesign-migration">Redesign &amp; Migration</Link>
            </p>
          </div>
        </section>

        <GrowthCtaBlock
          title="Still Have Questions About Fit or Scope?"
          description="Book a strategy call and we will help you choose between a full growth build, a redesign, or a managed website plan."
        />

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <p className="cta-description" style={{ marginBottom: "1rem" }}>
                <span className="growth-scarcity-pill">
                  <GradientIcon icon={faRocket} size="sm" className="primary" />
                  Limited to 2 new projects per month
                </span>
              </p>
              <h2 className="cta-title">
                Ready to Turn Your Website Into a Growth System?
              </h2>
              <p className="cta-description">
                Apply for a build slot or start with a strategy call. We will
                review fit, scope, and the fastest path to a site that supports
                measurable growth.
              </p>
              <div className="cta-actions">
                <Link href="/strategy-call" className="btn btn-primary btn-large">
                  Book a Free Strategy Call
                  <span className="btn-arrow">→</span>
                </Link>
                <Link
                  href="/growth-website-system/apply"
                  className="btn btn-secondary btn-large"
                >
                  Start Your Application
                </Link>
              </div>
              <p className="bc-guides">
                Related services:{" "}
                <Link href="/wordpress-studio">WordPress Studio</Link>
                {" · "}
                <Link href="/managed-websites">Managed Websites</Link>
                {" · "}
                <Link href="/technical-seo">Technical SEO</Link>
                {" · "}
                <Link href="/strategy-call">Strategy Call</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
