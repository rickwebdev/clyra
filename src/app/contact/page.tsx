import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import {
  faPhone,
  faCalendarAlt,
  faEnvelope,
  faClock,
  faCheckCircle,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Contact Clyra Studios | Digital Growth Systems",
  description:
    "Get in touch with Clyra Studios about websites, analytics dashboards, AI systems, automation, or ongoing digital strategy. Call, email, book a call, or submit an RFP.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Clyra Studios",
    description:
      "Discuss your website, analytics, AI systems, or automation needs with Clyra Studios.",
    url: "https://clyrastudios.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <div className="inner-page">
        <div className="inner-page-floating-elements">
          <div className="inner-page-floating-ball inner-page-ball-1"></div>
          <div className="inner-page-floating-ball inner-page-ball-2"></div>
          <div className="inner-page-floating-ball inner-page-ball-3"></div>
        </div>

        <div className="inner-page-hero-section">
          <div className="inner-page-content">
            <div className="inner-page-header">
              <h1 className="inner-page-title">Get in Touch</h1>
              <p className="inner-page-subtitle">
                Ready to improve your digital platform? Let&apos;s discuss your
                goals and how Clyra can help you build, measure, automate, and
                grow.
              </p>

              <div className="contact-divider"></div>
            </div>
          </div>
        </div>

        <div className="inner-page-main-content">
          <div className="inner-page-content">
            <div className="max-w-4xl mx-auto">
              <div className="contact-options-grid">
                <div className="contact-option-card">
                  <div className="contact-option-icon">
                    <GradientIcon icon={faPhone} size="lg" className="text-white" />
                  </div>
                  <h3 className="contact-option-title">Call Directly</h3>
                  <p className="contact-option-description">
                    Prefer to talk right now? Give us a call for immediate
                    assistance.
                  </p>
                  <div className="contact-phone-number">
                    <strong>+1 (646) 632-2070</strong>
                  </div>
                  <a href="tel:+16466322070" className="contact-option-cta">
                    <GradientIcon icon={faPhone} size="sm" className="mr-2" />
                    Call Now
                  </a>
                </div>

                <div className="contact-option-card">
                  <div className="contact-option-icon">
                    <GradientIcon
                      icon={faCalendarAlt}
                      size="lg"
                      className="text-white"
                    />
                  </div>
                  <h3 className="contact-option-title">Schedule a Call</h3>
                  <p className="contact-option-description">
                    Book a strategy call to discuss your project and goals.
                  </p>
                  <a
                    href="https://calendly.com/rickthewebdev/30-minute-meeting-clone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-option-cta"
                  >
                    <GradientIcon icon={faCalendarAlt} size="sm" className="mr-2" />
                    Book Now
                  </a>
                </div>

                <div className="contact-option-card">
                  <div className="contact-option-icon">
                    <GradientIcon
                      icon={faEnvelope}
                      size="lg"
                      className="text-white"
                    />
                  </div>
                  <h3 className="contact-option-title">Send an Email</h3>
                  <p className="contact-option-description">
                    Have a detailed project? Send us an email with your
                    requirements.
                  </p>
                  <a href="mailto:rick@clyrastudios.com" className="contact-option-cta">
                    <GradientIcon icon={faEnvelope} size="sm" className="mr-2" />
                    Email Us
                  </a>
                </div>
              </div>

              <div className="inner-page-cta-section">
                <h3 className="inner-page-cta-title">
                  Have a Defined Project Scope?
                </h3>
                <p className="inner-page-cta-description">
                  For website builds, redesigns, migrations, AI systems, or
                  multi-channel campaigns — submit a request for proposal with
                  your goals, timeline, and budget. We respond within 24 hours
                  with a clear plan and next steps.
                </p>
                <div className="inner-page-cta-actions">
                  <Link href="/rfp" className="btn btn-primary btn-large">
                    <GradientIcon icon={faFileAlt} size="sm" className="mr-2" />
                    Submit an RFP
                    <span className="btn-arrow">→</span>
                  </Link>
                </div>
                <p className="inner-page-cta-note">
                  Prefer a quick conversation first?{" "}
                  <Link href="/strategy-call" className="text-blue-400 underline">
                    Book a strategy call
                  </Link>{" "}
                  instead.
                </p>
              </div>

              <div className="contact-expectations">
                <h3 className="contact-expectations-title">What to Expect</h3>
                <div className="contact-expectations-grid">
                  <div className="expectation-item">
                    <div className="expectation-icon">
                      <GradientIcon
                        icon={faClock}
                        size="lg"
                        className="text-white"
                      />
                    </div>
                    <div>
                      <h4>Quick Response</h4>
                      <p>
                        We respond to all inquiries within 24 hours, often much
                        sooner.
                      </p>
                    </div>
                  </div>

                  <div className="expectation-item">
                    <div className="expectation-icon">
                      <GradientIcon
                        icon={faCheckCircle}
                        size="lg"
                        className="text-white"
                      />
                    </div>
                    <div>
                      <h4>No Pressure</h4>
                      <p>
                        This is a consultation, not a sales call. We&apos;ll give
                        you honest advice.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
