import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import {
  faBrain,
  faComments,
  faFileLines,
  faMagnifyingGlass,
  faSitemap,
  faShieldHalved,
  faTriangleExclamation,
  faRocket,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";

const problems = [
  {
    icon: faMagnifyingGlass,
    title: "Search Is Changing",
    description: "Users increasingly get answers from AI-assisted search, not just ten blue links. Structure matters differently now.",
    impact: "Old SEO-only playbooks fall short",
  },
  {
    icon: faFileLines,
    title: "Content Isn't Structured for Answers",
    description: "Long, unfocused pages without clear questions, FAQs, and direct answers are harder for humans and AI systems to use.",
    impact: "Authority without discoverability",
  },
  {
    icon: faComments,
    title: "No FAQ or Entity Clarity",
    description: "If your site doesn't clearly explain who you are, what you do, and answer common questions, you miss both snippets and AI citations.",
    impact: "Invisible in answer engines",
  },
  {
    icon: faTriangleExclamation,
    title: "AEO Treated as a Gimmick",
    description: "Keyword stuffing for AI doesn't work. Clear expertise, structure, and trustworthy content does.",
    impact: "Hype without outcomes",
  },
];

const capabilities = [
  { icon: faComments, title: "FAQ & Q&A Content Structure", description: "Pages organized around real customer questions with direct, useful answers." },
  { icon: faSitemap, title: "Topic Clusters & Internal Linking", description: "Connected content that builds topical authority across your site." },
  { icon: faFileLines, title: "Answer-Focused Page Templates", description: "Service pages, guides, and resources formatted for clarity and extraction." },
  { icon: faShieldHalved, title: "Trust & Entity Signals", description: "Clear about pages, authorship, and business information search systems can understand." },
  { icon: faBrain, title: "AI-Assisted Content Workflows", description: "Human-reviewed drafts at scale, paired with our AI Content Growth Systems." },
  { icon: faMagnifyingGlass, title: "Traditional SEO Alignment", description: "AEO builds on technical SEO and content foundations, not instead of them." },
];

const processSteps = [
  { icon: faMagnifyingGlass, title: "1. Audit Discovery Surfaces", description: "How you appear in search today: queries, pages, and gaps." },
  { icon: faSitemap, title: "2. Map Questions & Topics", description: "Priority questions your audience and AI systems need answered." },
  { icon: faUserCheck, title: "3. Structure & Publish", description: "Templates, FAQs, and content updates, human-reviewed before launch." },
  { icon: faRocket, title: "4. Measure & Refine", description: "Track visibility, engagement, and iterate on what earns traction." },
];

const faqs = [
  {
    question: "What is AEO?",
    answer: "Answer Engine Optimization (AEO) focuses on structuring content so it's useful in AI-assisted search and featured answers: clear questions, direct responses, FAQs, and authoritative coverage.",
  },
  {
    question: "Does AEO replace SEO?",
    answer: "No. Technical SEO, speed, and traditional search fundamentals still matter. AEO extends your strategy for how discovery is changing.",
  },
  {
    question: "Can AI write all my AEO content?",
    answer: "AI can accelerate drafts, but we recommend human review for accuracy, expertise, and brand voice. That's how our content growth systems are built.",
  },
  {
    question: "Will this guarantee AI citations or rankings?",
    answer: "No. We improve structure and coverage; visibility depends on competition, authority, and platform behavior over time.",
  },
  {
    question: "How does this connect to AI Content Growth Systems?",
    answer: "AEO defines what to answer and how to structure it. AI content workflows help produce and maintain that library consistently.",
  },
];

export const metadata: Metadata = {
  title: "AEO & AI Search Optimization for Business Websites | Clyra Studios",
  description:
    "Answer Engine Optimization (AEO) and AI search strategy: FAQ libraries, structured content, topic clusters, and human-reviewed workflows for modern discovery.",
  keywords:
    "AEO, answer engine optimization, AI search optimization, FAQ SEO, AI-assisted search, structured content SEO, topic clusters, featured snippets",
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: { canonical: "/aeo-ai-search-optimization" },
  openGraph: {
    title: "AEO & AI Search Optimization | Clyra Studios",
    description: "Structure your content for search engines and AI-assisted discovery.",
    url: "https://clyrastudios.com/aeo-ai-search-optimization",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AEO & AI Search Optimization",
  description: "Answer Engine Optimization and AI search strategy for business websites.",
  provider: { "@type": "Organization", name: "Clyra Studios", url: "https://clyrastudios.com" },
  offers: [{ "@type": "Offer", name: "AEO Strategy", priceRange: "$1000+", priceCurrency: "USD" }],
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

export default function AEOPage() {
  return (
    <>
      <Script id="aeo-data" type="application/ld+json" strategy="beforeInteractive">{JSON.stringify(structuredData)}</Script>
      <Script id="aeo-faq" type="application/ld+json" strategy="beforeInteractive">{JSON.stringify(faqStructuredData)}</Script>
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
                  <span className="title-line">AEO &amp; AI Search Optimization for</span>
                  <span className="title-line highlight">How Discovery Is Changing</span>
                </h1>
                <p className="hero-description">
                  Search isn&apos;t only ten blue links anymore. We help businesses
                  structure content for traditional SEO and AI-assisted discovery:
                  clear answers, FAQ libraries, topic depth, and human-reviewed
                  workflows that support real expertise.
                </p>
                <p className="hero-hook">Clear answers. Structured authority. Human oversight.</p>
              </div>
              <div className="hero-actions">
                <Link href="/strategy-call" className="btn btn-primary btn-large">Book a Discovery Call<span className="btn-arrow">→</span></Link>
                <Link href="/ai-content-automation" className="btn btn-secondary btn-large">AI Content Growth Systems</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="section-header slide-in-right"><h2 className="section-title">Why <span className="transform-word">AEO Matters Now</span></h2></div>
            <div className="services-grid">
              {problems.map((p, i) => (
                <div key={i} className="service-card">
                  <div className="service-image"><div className="service-icon"><GradientIcon icon={p.icon} size="xl" className="danger" /></div></div>
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

        <section className="case-studies-section">
          <div className="container">
            <div className="section-header slide-in-right"><h2 className="section-title">What We Build</h2></div>
            <div className="services-grid">
              {capabilities.map((c, i) => (
                <div key={i} className="service-card">
                  <div className="service-image"><div className="service-icon"><GradientIcon icon={c.icon} size="xl" className="primary" /></div></div>
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
            <div className="section-header slide-in-right"><h2 className="section-title">Our Process</h2></div>
            <div className="services-grid">
              {processSteps.map((s, i) => (
                <div key={i} className="service-card">
                  <div className="service-image"><div className="service-icon"><GradientIcon icon={s.icon} size="xl" className="primary" /></div></div>
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
              <h2 className="section-title">Pricing</h2>
              <p className="section-description">Starting at <strong>$1,000</strong> for AEO strategy and structural improvements. Ongoing content workflows priced separately.</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Structure Content for Modern Discovery?</h2>
              <div className="cta-actions">
                <Link href="/strategy-call" className="btn btn-primary btn-large">Book a Discovery Call<span className="btn-arrow">→</span></Link>
                <Link href="/contact" className="btn btn-secondary btn-large">Get in Touch</Link>
              </div>
              <p className="bc-guides">
                Related:{" "}
                <Link href="/technical-seo">Technical SEO</Link>
                {" · "}
                <Link href="/ai-content-automation">AI Content Growth Systems</Link>
                {" · "}
                <Link href="/ai-business-systems">AI Business Systems</Link>
              </p>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="container">
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
