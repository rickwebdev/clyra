import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function SiteAuditPage() {
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
              <h1 className="inner-page-title">Free Site Audit</h1>
              <p className="inner-page-subtitle">
                Get a comprehensive analysis of your website's performance, SEO, and technical health.
              </p>
            </div>
          </div>
        </div>
        
        <div className="inner-page-main-content">
          <div className="inner-page-content">
            <div className="max-w-3xl mx-auto">
              <div className="inner-page-card">
                <h2 className="inner-page-card-title">What's included:</h2>
                <ul className="inner-page-feature-list">
                  <li className="inner-page-feature-item">Core Web Vitals analysis</li>
                  <li className="inner-page-feature-item">SEO technical audit</li>
                  <li className="inner-page-feature-item">Security assessment</li>
                  <li className="inner-page-feature-item">Performance optimization recommendations</li>
                  <li className="inner-page-feature-item">Migration readiness evaluation</li>
                </ul>
                
                <div className="text-center mt-8">
                  <a 
                    href="mailto:rickthewebdev@gmail.com?subject=Free Site Audit Request" 
                    className="inner-page-cta"
                  >
                    Request Your Free Audit
                  </a>
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
