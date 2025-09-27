import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ServicesPage() {
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
              <h1 className="inner-page-title">Our Services</h1>
              <p className="inner-page-subtitle">
                Premium WordPress solutions designed to give you control, performance, and growth.
              </p>
            </div>
          </div>
        </div>
        
        <div className="inner-page-main-content">
          <div className="inner-page-content">
            <div className="inner-page-grid">
              <div id="custom-builds" className="inner-page-card">
                <h3 className="inner-page-card-title">Custom WordPress Builds</h3>
                <p className="inner-page-card-description">
                  Bespoke, component-driven, blazing fast. We build WordPress sites that perform and scale.
                </p>
                <ul className="inner-page-feature-list">
                  <li className="inner-page-feature-item">Custom theme development</li>
                  <li className="inner-page-feature-item">Performance optimization</li>
                  <li className="inner-page-feature-item">Component-based architecture</li>
                  <li className="inner-page-feature-item">Mobile-first responsive design</li>
                </ul>
              </div>

              <div id="rescues" className="inner-page-card">
                <h3 className="inner-page-card-title">Rescues & Fixes</h3>
                <p className="inner-page-card-description">
                  Unhack, update, stabilize, speed up. We fix broken WordPress sites and make them bulletproof.
                </p>
                <ul className="inner-page-feature-list">
                  <li className="inner-page-feature-item">Security cleanup and hardening</li>
                  <li className="inner-page-feature-item">Performance optimization</li>
                  <li className="inner-page-feature-item">Plugin conflicts resolution</li>
                  <li className="inner-page-feature-item">Core and plugin updates</li>
                </ul>
              </div>

              <div id="seo" className="inner-page-card">
                <h3 className="inner-page-card-title">SEO & Core Web Vitals</h3>
                <p className="inner-page-card-description">
                  Structured data, clean markup, real speed. Technical SEO that actually works.
                </p>
                <ul className="inner-page-feature-list">
                  <li className="inner-page-feature-item">Core Web Vitals optimization</li>
                  <li className="inner-page-feature-item">Schema markup implementation</li>
                  <li className="inner-page-feature-item">Technical SEO audits</li>
                  <li className="inner-page-feature-item">Page speed optimization</li>
                </ul>
              </div>

              <div id="ux" className="inner-page-card">
                <h3 className="inner-page-card-title">UX & CRO</h3>
                <p className="inner-page-card-description">
                  Clarity, hierarchy, conversion flows. Design that converts visitors into customers.
                </p>
                <ul className="inner-page-feature-list">
                  <li className="inner-page-feature-item">User experience optimization</li>
                  <li className="inner-page-feature-item">Conversion rate optimization</li>
                  <li className="inner-page-feature-item">A/B testing implementation</li>
                  <li className="inner-page-feature-item">User journey mapping</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <Link href="/contact" className="inner-page-cta">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
