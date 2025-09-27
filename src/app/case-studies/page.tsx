import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function CaseStudiesPage() {
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
              <h1 className="inner-page-title">Case Studies</h1>
              <p className="inner-page-subtitle">
                Real results from our WordPress builds, migrations, and optimizations.
              </p>
            </div>
          </div>
        </div>
        
        <div className="inner-page-main-content">
          <div className="inner-page-content">
            <div className="inner-page-grid">
              <div className="inner-page-card">
                <h3 className="inner-page-card-title">E-commerce Migration</h3>
                <p className="inner-page-card-description">
                  Migrated a Shopify store to WordPress with WooCommerce, improving performance and reducing costs.
                </p>
                <ul className="inner-page-feature-list">
                  <li className="inner-page-feature-item">40% faster page load times</li>
                  <li className="inner-page-feature-item">60% reduction in monthly costs</li>
                  <li className="inner-page-feature-item">Zero transaction fees</li>
                  <li className="inner-page-feature-item">Better SEO rankings</li>
                </ul>
              </div>

              <div className="inner-page-card">
                <h3 className="inner-page-card-title">Site Rescue & Optimization</h3>
                <p className="inner-page-card-description">
                  Fixed a hacked WordPress site and optimized it for performance and security.
                </p>
                <ul className="inner-page-feature-list">
                  <li className="inner-page-feature-item">Removed malware and vulnerabilities</li>
                  <li className="inner-page-feature-item">50% improvement in Core Web Vitals</li>
                  <li className="inner-page-feature-item">Implemented security hardening</li>
                  <li className="inner-page-feature-item">Set up automated backups</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <p className="inner-page-subtitle mb-6">
                Want to see more case studies or discuss your project?
              </p>
              <Link href="/contact" className="inner-page-cta">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
