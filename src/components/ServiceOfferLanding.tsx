import Link from "next/link";
import Script from "next/script";
import type { ReactNode } from "react";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";

export type ServiceOfferItem = {
  icon: IconDefinition;
  title: string;
  description: string;
  impact?: string;
};

export type ServiceOfferFaq = {
  question: string;
  answer: string;
};

export type ServiceOfferRelatedLink = {
  href: string;
  label: string;
};

export type ServiceOfferLandingProps = {
  schemaId: string;
  serviceName: string;
  serviceDescription: string;
  priceRange?: string;
  problemsTitle: ReactNode;
  capabilitiesTitle?: string;
  processTitle?: string;
  pricingNote?: ReactNode;
  ctaTitle: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
  heroTitle: ReactNode;
  heroDescription: string;
  heroHook?: string;
  problems: ServiceOfferItem[];
  capabilities: ServiceOfferItem[];
  processSteps: ServiceOfferItem[];
  faqs: ServiceOfferFaq[];
  relatedLinks: ServiceOfferRelatedLink[];
};

export default function ServiceOfferLanding({
  schemaId,
  serviceName,
  serviceDescription,
  priceRange = "$1000+",
  problemsTitle,
  capabilitiesTitle = "What We Do",
  processTitle = "Our Process",
  pricingNote,
  ctaTitle,
  primaryCta,
  secondaryCta,
  heroTitle,
  heroDescription,
  heroHook,
  problems,
  capabilities,
  processSteps,
  faqs,
  relatedLinks,
}: ServiceOfferLandingProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    provider: {
      "@type": "Organization",
      name: "Clyra Studios",
      url: "https://clyrastudios.com",
    },
    areaServed: "US",
    offers: [
      {
        "@type": "Offer",
        name: serviceName,
        priceRange,
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

  return (
    <>
      <Script
        id={`${schemaId}-service`}
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <Script
        id={`${schemaId}-faq`}
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
                <h1 className="hero-title">{heroTitle}</h1>
                <p className="hero-description">{heroDescription}</p>
                {heroHook ? <p className="hero-hook">{heroHook}</p> : null}
              </div>
              <div className="hero-actions">
                <Link href={primaryCta.href} className="btn btn-primary btn-large">
                  {primaryCta.label}
                  <span className="btn-arrow">→</span>
                </Link>
                <Link href={secondaryCta.href} className="btn btn-secondary btn-large">
                  {secondaryCta.label}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">{problemsTitle}</h2>
            </div>
            <div className="services-grid">
              {problems.map((p) => (
                <div key={p.title} className="service-card">
                  <div className="service-image">
                    <div className="service-icon">
                      <GradientIcon icon={p.icon} size="xl" className="danger" />
                    </div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{p.title}</h3>
                    <p className="service-description">{p.description}</p>
                    {p.impact ? (
                      <div className="impact-badge">
                        <span className="impact-text">{p.impact}</span>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="case-studies-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">{capabilitiesTitle}</h2>
            </div>
            <div className="services-grid">
              {capabilities.map((c) => (
                <div key={c.title} className="service-card">
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
              <h2 className="section-title">{processTitle}</h2>
            </div>
            <div className="services-grid">
              {processSteps.map((s) => (
                <div key={s.title} className="service-card">
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

        {pricingNote ? (
          <section className="services-section">
            <div className="container">
              <div className="section-header slide-in-right">
                <h2 className="section-title">Pricing</h2>
                <p className="section-description">{pricingNote}</p>
              </div>
            </div>
          </section>
        ) : null}

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">{ctaTitle}</h2>
              <div className="cta-actions">
                <Link href={primaryCta.href} className="btn btn-primary btn-large">
                  {primaryCta.label}
                  <span className="btn-arrow">→</span>
                </Link>
                <Link href={secondaryCta.href} className="btn btn-secondary btn-large">
                  {secondaryCta.label}
                </Link>
              </div>
              <p className="bc-guides">
                Related:{" "}
                {relatedLinks.map((link, index) => (
                  <span key={link.href}>
                    {index > 0 ? " · " : null}
                    <Link href={link.href}>{link.label}</Link>
                  </span>
                ))}
              </p>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="container">
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
