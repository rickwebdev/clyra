import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Clyra Studios",
  description:
    "Privacy policy for Clyra Studios. Learn how we collect, use, and protect information when you visit our website or contact us.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Clyra Studios",
    description: "How Clyra Studios handles website data, analytics, and contact information.",
    url: "https://clyrastudios.com/privacy",
    type: "website",
  },
};

const sections = [
  {
    title: "Who We Are",
    body: [
      "Clyra Studios provides digital growth systems, including website development, analytics, AI systems, and business automation services.",
      "This policy explains how we handle information when you visit clyrastudios.com or contact us.",
    ],
  },
  {
    title: "Information We Collect",
    body: [
      "Contact information you submit voluntarily, such as name, email address, phone number, company name, and project details through contact forms, strategy call requests, or email.",
      "Technical information collected automatically when you visit our site, such as IP address, browser type, device type, pages viewed, and referring URL.",
      "Analytics data if you accept analytics cookies, processed through Google Analytics to help us understand site usage and improve our services.",
      "Scheduling information when you book a call through Calendly or similar tools linked from our site.",
    ],
  },
  {
    title: "How We Use Information",
    body: [
      "Respond to inquiries and provide requested services.",
      "Improve website performance, content, and user experience.",
      "Measure marketing and content effectiveness through analytics when consent is granted.",
      "Maintain site security and prevent abuse.",
    ],
  },
  {
    title: "Cookies and Tracking",
    body: [
      "Essential cookies and local storage are used for basic site functionality, including remembering your cookie preference.",
      "Analytics and marketing cookies are used only if you choose Accept Analytics & Marketing in our cookie banner. We use Google Analytics with Consent Mode and Meta Pixel for ad measurement. Tracking remains denied until you opt in.",
      "You can change your cookie preference at any time using Cookie Settings in the site footer.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "Google Analytics for website usage measurement when you consent to analytics cookies.",
      "Meta (Facebook) Pixel for ad performance measurement and conversion tracking when you consent to marketing cookies.",
      "Calendly for scheduling strategy calls when you choose to book a meeting.",
      "Hosting and infrastructure providers that process technical data required to deliver the website.",
      "These providers process data according to their own privacy policies and our agreements with them where applicable.",
    ],
  },
  {
    title: "How Long We Keep Information",
    body: [
      "Contact inquiry data is kept as long as needed to respond, provide services, and maintain business records.",
      "Analytics data retention follows our Google Analytics configuration.",
      "Cookie consent preferences are stored locally in your browser until you clear site data or change your settings.",
    ],
  },
  {
    title: "Your Choices and Rights",
    body: [
      "You may decline analytics cookies and continue using the site with essential cookies only.",
      "You may request access to, correction of, or deletion of personal information we hold about you by contacting us.",
      "If you are a California resident, you may have additional rights under the CCPA/CPRA, including the right to know what personal information we collect and the right to request deletion, subject to applicable exceptions.",
      "We do not sell personal information. We use analytics tools that may involve sharing limited technical data with service providers as described above.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "We use reasonable technical and organizational measures to protect information, including HTTPS, access controls, and reputable service providers.",
      "No method of transmission or storage is completely secure.",
    ],
  },
  {
    title: "International Visitors",
    body: [
      "Clyra Studios is based in the United States. If you visit from outside the U.S., your information may be processed in the United States and other countries where our service providers operate.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "Our website and services are intended for businesses and professionals. We do not knowingly collect personal information from children under 13.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this policy from time to time. The latest version will always be posted on this page with an updated effective date.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      "For privacy questions or requests, contact Clyra Studios by email, phone, or through our contact page.",
    ],
  },
];

export default function PrivacyPage() {
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
              <h1 className="inner-page-title">Privacy Policy</h1>
              <p className="inner-page-subtitle">
                How Clyra Studios collects, uses, and protects information when
                you visit our website or contact us.
              </p>
              <p className="inner-page-section-description">
                Effective date: July 8, 2026
              </p>
            </div>
          </div>
        </div>

        <div className="inner-page-main-content">
          <div className="inner-page-content">
            <div className="privacy-policy-content">
              {sections.map((section) => (
                <section key={section.title} className="privacy-policy-section">
                  <h2 className="inner-page-section-title">{section.title}</h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="inner-page-section-description">
                      {paragraph}
                    </p>
                  ))}
                  {section.title === "Contact Us" && (
                    <>
                      <p className="inner-page-section-description">
                        Email:{" "}
                        <a href="mailto:rick@clyrastudios.com">
                          rick@clyrastudios.com
                        </a>
                      </p>
                      <p className="inner-page-section-description">
                        Phone:{" "}
                        <a href="tel:+16466322070">+1 (646) 632-2070</a>
                      </p>
                      <p className="inner-page-section-description">
                        Website: <Link href="/contact">Contact page</Link>
                      </p>
                    </>
                  )}
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
