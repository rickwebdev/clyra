import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import RFPForm from "@/components/RFPForm";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Request for Proposal (RFP) – Clyra Studios",
  description:
    "Submit an RFP for website builds, redesigns, headless CMS, SEO, or automation. Clyra Studios delivers high‑performance sites and growth systems for SMBs.",
  openGraph: {
    title: "Request for Proposal (RFP) – Clyra Studios",
    description:
      "Submit an RFP for website builds, redesigns, headless CMS, SEO, or automation.",
    type: "website",
  },
};

export default function RFPPage() {
  return (
    <>
      <Nav />
      <main className="inner-page">
        <section className="inner-page-hero-section">
          <div className="inner-page-floating-elements">
            <div className="inner-page-floating-ball inner-page-ball-1"></div>
            <div className="inner-page-floating-ball inner-page-ball-2"></div>
            <div className="inner-page-floating-ball inner-page-ball-3"></div>
          </div>
          <div className="container">
            <div className="inner-page-header">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 mb-4">
                <GradientIcon icon={faFileAlt} size="sm" className="primary" />
                <span className="ml-2">RFP – Request for Proposal</span>
              </div>
              <h1 className="inner-page-title">Request a Proposal for Your Next Project</h1>
              <p className="inner-page-subtitle">
                Send your scope, goals, and timeline. We respond within 24 hours with a clear
                plan of action and next steps. We support WordPress, Next.js, Shopify, and
                headless CMS (Sanity, Contentful), plus SEO and automation.
              </p>
            </div>
          </div>
        </section>

        <section className="inner-page-main-content">
          <div className="container">
            <div className="inner-page-card">
              <h2 className="inner-page-card-title">Tell Us About Your Campaign or Build</h2>
              <p className="inner-page-card-description">
                Whether you’re planning a new website, a migration, a performance overhaul, or a
                multi‑channel campaign, this form helps us evaluate fit, budget, and delivery
                timeline quickly. Include success criteria so we can align on outcomes.
              </p>
              <RFPForm />
              <div className="inner-page-card-note">
                Prefer to start with a strategy call instead? You can also {" "}
                <a href="/strategy-call" className="text-blue-400 underline">book a free strategy call</a>.
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


