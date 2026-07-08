import Link from "next/link";
import Script from "next/script";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import { getOtherAILabLinks } from "@/lib/ai-lab/cross-links";
import type { AILabSolutionContent } from "@/lib/ai-lab/types";
import {
  faArrowRight,
  faCheck,
  faListOl,
} from "@fortawesome/free-solid-svg-icons";

type AILabSolutionPageProps = {
  content: AILabSolutionContent;
};

export default function AILabSolutionPage({ content }: AILabSolutionPageProps) {
  const otherSolutions = getOtherAILabLinks(content.slug);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.serviceName,
    description: content.metadata.description,
    provider: {
      "@type": "Organization",
      name: "Clyra Studios",
      url: "https://clyrastudios.com",
    },
    areaServed: "US",
    serviceType: content.serviceName,
    url: `https://clyrastudios.com/ai-lab/${content.slug}`,
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <Script
        id={`ai-lab-${content.slug}-data`}
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <Script
        id={`ai-lab-${content.slug}-faq`}
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(faqStructuredData)}
      </Script>
      <Nav />
      <main className="redesign-migration-page ai-lab-page">
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
                {content.hero.eyebrow && (
                  <p className="hero-hook">{content.hero.eyebrow}</p>
                )}
                <h1 className="hero-title">
                  <span className="title-line">{content.hero.titleLine}</span>
                  <span className="title-line highlight">
                    {content.hero.titleHighlight}
                  </span>
                </h1>
                <p className="hero-description">{content.hero.description}</p>
              </div>
              <div className="hero-actions">
                <Link
                  href={content.hero.primaryCta.href}
                  className="btn btn-primary btn-large"
                >
                  {content.hero.primaryCta.label}
                  <span className="btn-arrow">→</span>
                </Link>
                <Link
                  href={content.hero.secondaryCta.href}
                  className="btn btn-secondary btn-large"
                >
                  {content.hero.secondaryCta.label}
                </Link>
              </div>
              <p className="bc-guides">
                <Link href="/ai-lab">← Back to AI Lab</Link>
              </p>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">{content.whatItDoes.title}</h2>
              <p className="section-description">{content.whatItDoes.description}</p>
            </div>
            <div className="section-header slide-in-right">
              <h2 className="section-title">{content.whoItsFor.title}</h2>
              <p className="section-description">{content.whoItsFor.description}</p>
            </div>
            <div className="included-grid">
              {content.whoItsFor.audiences.map((audience) => (
                <div key={audience} className="included-item">
                  <GradientIcon icon={faCheck} size="sm" className="success" />
                  <span>{audience}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="case-studies-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Common Use Cases</h2>
            </div>
            <div className="included-grid">
              {content.useCases.map((useCase) => (
                <div key={useCase} className="included-item">
                  <GradientIcon icon={faArrowRight} size="sm" className="primary" />
                  <span>{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">How It Works</h2>
            </div>
            <div className="ai-lab-workflow-grid">
              {content.workflowSteps.map((step, index) => (
                <div key={index} className="ai-lab-workflow-step">
                  <div className="ai-lab-workflow-step-icon">
                    <GradientIcon
                      icon={step.icon ?? faListOl}
                      size="md"
                      className="primary"
                    />
                  </div>
                  <div className="ai-lab-workflow-step-content">
                    <h3 className="ai-lab-workflow-step-title">
                      {index + 1}. {step.label}
                    </h3>
                    <p className="ai-lab-workflow-step-description">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="case-studies-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Business Benefits</h2>
            </div>
            <div className="services-grid">
              {content.benefits.map((benefit) => (
                <div key={benefit.title} className="service-card">
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
              <h2 className="section-title">Ideal Industries</h2>
            </div>
            <ul className="ai-lab-tag-list ai-lab-tag-list--centered">
              {content.idealIndustries.map((industry) => (
                <li key={industry} className="ai-lab-tag">
                  {industry}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="case-studies-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Common Integrations</h2>
              <p className="section-description">
                Connect the system to the tools your team already uses for sales,
                communication, scheduling, and operations.
              </p>
            </div>
            <ul className="ai-lab-tag-list ai-lab-tag-list--centered">
              {content.integrations.map((integration) => (
                <li key={integration} className="ai-lab-tag ai-lab-tag--tech">
                  {integration}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">{content.exampleWorkflow.title}</h2>
              {content.exampleWorkflow.intro && (
                <p className="section-description">
                  {content.exampleWorkflow.intro}
                </p>
              )}
            </div>
            <div className="ai-lab-dialog">
              {content.exampleWorkflow.turns.map((turn, index) => (
                <div key={index} className="ai-lab-dialog-turn">
                  <span className="ai-lab-dialog-speaker">{turn.speaker}</span>
                  <p>{turn.message}</p>
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
              {content.faqs.map((faq, index) => (
                <div key={index} className="faq-item">
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
              <h2 className="cta-title">Want This Built for Your Business?</h2>
              <p className="cta-description">
                We customize each AI Lab solution around your services, workflows,
                data sources, and approval process.
              </p>
              <div className="cta-actions">
                <Link href="/strategy-call" className="btn btn-primary btn-large">
                  Book a Strategy Call
                  <span className="btn-arrow">→</span>
                </Link>
                <Link href="/contact" className="btn btn-secondary btn-large">
                  Request Demo Access
                </Link>
              </div>
              <p className="bc-guides">
                More AI Lab solutions:{" "}
                {otherSolutions.map((link, index) => (
                  <span key={link.slug}>
                    {index > 0 && " · "}
                    <Link href={link.href}>{link.title}</Link>
                  </span>
                ))}
              </p>
              <p className="bc-guides" style={{ marginTop: "0.75rem" }}>
                Related:{" "}
                <Link href="/ai-lab">AI Lab</Link>
                {" · "}
                <Link href="/ai-business-systems">AI Business Systems</Link>
                {" · "}
                <Link href="/business-process-automation">
                  Business Process Automation
                </Link>
                {" · "}
                <Link href="/ai-client-intelligence">Clyra Intelligence</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
