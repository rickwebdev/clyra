import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import {
  faBook,
  faBrain,
  faBriefcase,
  faCalculator,
  faClipboardList,
  faComments,
  faFileContract,
  faGears,
  faHeadset,
  faMagnifyingGlass,
  faPuzzlePiece,
  faStethoscope,
  faUserCheck,
  faUtensils,
  faUsers,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

type SolutionStatus = "live" | "beta";

type LabSolution = {
  id: string;
  icon: IconDefinition;
  title: string;
  description: string;
  status: SolutionStatus;
  primaryCta: { label: string; href: string };
  learnMoreHref: string;
  futureRoute: string;
};

const solutions: LabSolution[] = [
  {
    id: "virtual-assistant",
    icon: faHeadset,
    title: "AI Virtual Assistant",
    description:
      "Answer customer questions, qualify leads, and route booking requests using your approved services, policies, and scheduling rules.",
    status: "beta",
    primaryCta: {
      label: "Request Demo Access",
      href: "/contact?demo=virtual-assistant",
    },
    learnMoreHref: "/ai-lab/virtual-assistant",
    futureRoute: "/ai-lab/virtual-assistant",
  },
  {
    id: "quote-builder",
    icon: faCalculator,
    title: "AI Quote Builder",
    description:
      "Generate guided project estimates for contractors, service businesses, and professional services.",
    status: "beta",
    primaryCta: {
      label: "Request Demo Access",
      href: "/contact?demo=quote-builder",
    },
    learnMoreHref: "/ai-lab/quote-builder",
    futureRoute: "/ai-lab/quote-builder",
  },
  {
    id: "customer-intake",
    icon: faClipboardList,
    title: "AI Customer Intake",
    description:
      "Qualify leads, collect project details, and route inquiries before your team spends time on the phone.",
    status: "beta",
    primaryCta: {
      label: "Request Demo Access",
      href: "/contact?demo=customer-intake",
    },
    learnMoreHref: "/ai-lab/customer-intake",
    futureRoute: "/ai-lab/customer-intake",
  },
  {
    id: "website-audit",
    icon: faMagnifyingGlass,
    title: "AI Website Audit",
    description:
      "Analyze website performance, SEO, accessibility, and conversion issues, then generate clear recommendations.",
    status: "live",
    primaryCta: { label: "Try Live Demo", href: "/site-audit" },
    learnMoreHref: "/site-audit",
    futureRoute: "/site-audit",
  },
  {
    id: "proposal-assistant",
    icon: faFileContract,
    title: "AI Proposal Assistant",
    description:
      "Turn discovery notes into structured scopes, timelines, recommendations, and proposal-ready language.",
    status: "beta",
    primaryCta: {
      label: "Request Demo Access",
      href: "/contact?demo=proposal-assistant",
    },
    learnMoreHref: "/ai-lab/proposal-assistant",
    futureRoute: "/ai-lab/proposal-assistant",
  },
  {
    id: "knowledge-assistant",
    icon: faBook,
    title: "AI Knowledge Assistant",
    description:
      "Search company documents, policies, services, and internal knowledge through a guided AI assistant.",
    status: "beta",
    primaryCta: {
      label: "Request Demo Access",
      href: "/contact?demo=knowledge-assistant",
    },
    learnMoreHref: "/ai-lab/knowledge-assistant",
    futureRoute: "/ai-lab/knowledge-assistant",
  },
];

const modularFeatures = [
  {
    icon: faGears,
    title: "Custom workflows",
    description:
      "Built around how your team quotes, qualifies, audits, proposes, and responds to clients.",
  },
  {
    icon: faPuzzlePiece,
    title: "CRM and form integrations",
    description:
      "Connect to your website forms, CRM, email tools, booking systems, and project platforms.",
  },
  {
    icon: faBrain,
    title: "Memory and context tracking",
    description:
      "Keep client history, pricing, scope, and prior recommendations available across conversations.",
  },
  {
    icon: faUserCheck,
    title: "Human approval controls",
    description:
      "Review drafts, estimates, and responses before anything client-facing is sent or committed.",
  },
];

const useCases = [
  {
    icon: faWrench,
    title: "Contractors",
    description:
      "Quote requests, estimate intake, and service area routing for trades and home services.",
  },
  {
    icon: faBriefcase,
    title: "Agencies",
    description:
      "Proposal drafts, discovery summaries, and client knowledge bases for account teams.",
  },
  {
    icon: faUtensils,
    title: "Restaurants",
    description:
      "Catering inquiries, private event intake, and FAQ automation for hospitality teams.",
  },
  {
    icon: faStethoscope,
    title: "Healthcare and professional services",
    description:
      "Intake, scheduling support, and document search for practices and consultancies.",
  },
  {
    icon: faUsers,
    title: "Internal teams",
    description:
      "Knowledge assistants, workflow automation, and reporting for operations and support staff.",
  },
];

export const metadata: Metadata = {
  title: "AI Lab | Interactive AI Solutions | Clyra Studios",
  description:
    "Try practical AI systems for quoting, customer intake, website audits, proposals, and internal knowledge. Customizable business solutions built by Clyra Studios.",
  keywords:
    "AI lab, interactive AI solutions, AI quote builder, AI customer intake, AI website audit, AI proposal assistant, AI knowledge assistant, business AI systems",
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: { canonical: "/ai-lab" },
  openGraph: {
    title: "AI Lab | Interactive AI Solutions | Clyra Studios",
    description:
      "A showroom for working AI business systems. Try live solutions and request access to systems customized for your workflows.",
    url: "https://clyrastudios.com/ai-lab",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Clyra Studios AI Lab",
  description:
    "Interactive showroom of customizable AI business systems built by Clyra Studios.",
  url: "https://clyrastudios.com/ai-lab",
  provider: {
    "@type": "Organization",
    name: "Clyra Studios",
    url: "https://clyrastudios.com",
  },
};

export default function AILabPage() {
  return (
    <>
      <Script
        id="ai-lab-structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(structuredData)}
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
                <p className="hero-hook">
                  A showroom for working AI business systems by Clyra Studios.
                </p>
                <h1 className="hero-title">
                  <span className="title-line">Experience AI That Solves</span>
                  <span className="title-line highlight">Real Business Problems</span>
                </h1>
                <p className="hero-description">
                  Try practical AI systems built for virtual assistance, quoting,
                  customer intake, website audits, proposals, and internal knowledge.
                  Each solution can be customized around your business, workflows,
                  data, and team.
                </p>
              </div>
              <div className="hero-actions">
                <Link href="/site-audit" className="btn btn-primary btn-large">
                  Try Live Demo
                  <span className="btn-arrow">→</span>
                </Link>
                <Link href="/strategy-call" className="btn btn-secondary btn-large">
                  Book a Strategy Call
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Interactive AI Solutions</h2>
              <p className="section-description">
                Explore practical systems that can be adapted for contractors,
                agencies, restaurants, healthcare practices, consultants, and service
                businesses.
              </p>
            </div>
            <div className="ai-lab-grid">
              {solutions.map((solution) => (
                <article key={solution.id} className="ai-lab-card" id={solution.id}>
                  <div className="ai-lab-card-icon">
                    <GradientIcon
                      icon={solution.icon}
                      size="xl"
                      className="primary"
                    />
                  </div>
                  <h3 className="ai-lab-card-title">{solution.title}</h3>
                  <p className="ai-lab-card-description">{solution.description}</p>

                  <div className="ai-lab-card-actions">
                    <Link href={solution.primaryCta.href} className="btn btn-primary">
                      {solution.primaryCta.label}
                      <span className="btn-arrow">→</span>
                    </Link>
                    <Link href={solution.learnMoreHref} className="btn btn-secondary">
                      Learn More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-studies-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Built as Modular AI Systems</h2>
              <p className="section-description">
                These are not generic chatbot widgets. Each solution can be connected
                to your forms, CRM, website, documents, analytics, email tools,
                booking systems, and internal workflows.
              </p>
            </div>
            <div className="ai-lab-feature-grid">
              {modularFeatures.map((feature) => (
                <div key={feature.title} className="ai-lab-feature-card">
                  <div className="ai-lab-feature-icon">
                    <GradientIcon icon={feature.icon} size="lg" className="primary" />
                  </div>
                  <h3 className="ai-lab-feature-title">{feature.title}</h3>
                  <p className="ai-lab-feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Common Use Cases</h2>
            </div>
            <div className="ai-lab-use-cases-grid">
              {useCases.map((useCase) => (
                <div key={useCase.title} className="ai-lab-use-case-card">
                  <div className="ai-lab-use-case-icon">
                    <GradientIcon icon={useCase.icon} size="md" className="primary" />
                  </div>
                  <h3 className="ai-lab-use-case-title">{useCase.title}</h3>
                  <p className="ai-lab-use-case-description">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Want One of These Built for Your Business?</h2>
              <p className="cta-description">
                We can customize an AI solution around your website, services, data,
                sales process, and existing tools.
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
                Related:{" "}
                <Link href="/ai-lab/virtual-assistant">AI Virtual Assistant</Link>
                {" · "}
                <Link href="/ai-lab/quote-builder">AI Quote Builder</Link>
                {" · "}
                <Link href="/ai-lab/customer-intake">AI Customer Intake</Link>
                {" · "}
                <Link href="/ai-lab/proposal-assistant">AI Proposal Assistant</Link>
                {" · "}
                <Link href="/ai-lab/knowledge-assistant">AI Knowledge Assistant</Link>
              </p>
              <p className="bc-guides" style={{ marginTop: "0.75rem" }}>
                Services:{" "}
                <Link href="/ai-business-systems">AI Business Systems</Link>
                {" · "}
                <Link href="/business-process-automation">
                  Business Process Automation
                </Link>
                {" · "}
                <Link href="/ai-marketing-automation">AI Marketing Automation</Link>
                {" · "}
                <Link href="/ai-client-intelligence">Clyra Intelligence</Link>
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
