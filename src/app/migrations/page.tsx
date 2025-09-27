import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function MigrationsPage() {
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
              <h1 className="inner-page-title">WordPress Migration Services</h1>
              <p className="inner-page-subtitle">
                Migrate your website to WordPress without losing SEO rankings, content, or design. We specialize in seamless migrations from Wix, Squarespace, Shopify, and Webflow — preserving your visibility while giving you full ownership and future-ready performance.
              </p>
            </div>
          </div>
        </div>
        
        <div className="inner-page-main-content">
          <div className="inner-page-content">
            {/* Migration Options Section */}
            <h2 className="inner-page-section-title">Popular Migration Options</h2>
            <p className="inner-page-section-description">
              We specialize in seamless migrations from the most popular platforms. Each migration preserves your SEO, content, and design while unlocking WordPress's full potential.
            </p>
            
            <div className="inner-page-grid">
              <div className="inner-page-card">
                <h3 className="inner-page-card-title">From Wix & Squarespace</h3>
                <p className="inner-page-card-description">
                  Escape platform lock-in. Preserve your design, content, and SEO rankings while gaining faster performance, better flexibility, and full site ownership.
                </p>
                <ul className="inner-page-feature-list">
                  <li className="inner-page-feature-item">Preserve SEO rankings</li>
                  <li className="inner-page-feature-item">Transfer all content & design elements</li>
                  <li className="inner-page-feature-item">Faster site speed & Core Web Vitals improvements</li>
                  <li className="inner-page-feature-item">Full code ownership & control</li>
                </ul>
                <p className="inner-page-card-note">
                  <strong>Ready to escape platform lock-in?</strong> <Link href="/contact?service=wix-squarespace" className="underline" style={{color: '#60a5fa', textDecoration: 'underline'}}>Get your free Wix/Squarespace migration plan</Link>
                </p>
              </div>

              <div className="inner-page-card">
                <h3 className="inner-page-card-title">From Webflow</h3>
                <p className="inner-page-card-description">
                  Keep your design freedom while unlocking WordPress's powerful content management, SEO tools, and lower hosting costs.
                </p>
                <ul className="inner-page-feature-list">
                  <li className="inner-page-feature-item">Maintain visual design</li>
                  <li className="inner-page-feature-item">Add SEO + blogging tools</li>
                  <li className="inner-page-feature-item">More hosting flexibility</li>
                  <li className="inner-page-feature-item">Lower ongoing costs</li>
                </ul>
                <p className="inner-page-card-note">
                  <strong>Need better content management?</strong> <Link href="/contact?service=webflow" className="underline" style={{color: '#60a5fa', textDecoration: 'underline'}}>Get your free Webflow migration plan</Link>
                </p>
              </div>

              <div className="inner-page-card">
                <h3 className="inner-page-card-title">From Shopify</h3>
                <p className="inner-page-card-description">
                  Cut transaction fees and gain full control over your e-commerce store with WordPress + WooCommerce.
                </p>
                <ul className="inner-page-feature-list">
                  <li className="inner-page-feature-item">No transaction fees</li>
                  <li className="inner-page-feature-item">More payment options</li>
                  <li className="inner-page-feature-item">Better content marketing integration</li>
                  <li className="inner-page-feature-item">Full design control</li>
                </ul>
                <p className="inner-page-card-note">
                  <strong>Paying too much in fees?</strong> <Link href="/contact?service=shopify" className="underline" style={{color: '#60a5fa', textDecoration: 'underline'}}>Get your free Shopify migration plan</Link>
                </p>
              </div>

              <div className="inner-page-card">
                <h3 className="inner-page-card-title">From Custom/Outdated CMS</h3>
                <p className="inner-page-card-description">
                  Stuck on an old or unsupported CMS? We rebuild your site in WordPress with modern design, improved security, and easy scalability.
                </p>
                <ul className="inner-page-feature-list">
                  <li className="inner-page-feature-item">Rebuild on modern stack</li>
                  <li className="inner-page-feature-item">Preserve content & data</li>
                  <li className="inner-page-feature-item">Future-proof with plugin ecosystem</li>
                  <li className="inner-page-feature-item">Improved security & performance</li>
                </ul>
                <p className="inner-page-card-note">
                  <strong>Ready to modernize?</strong> <Link href="/contact?service=custom-cms" className="underline" style={{color: '#60a5fa', textDecoration: 'underline'}}>Get your free custom CMS migration plan</Link>
                </p>
              </div>
            </div>

            {/* Migration Process Section */}
            <div className="inner-page-summary-section">
              <h2 className="inner-page-section-title">Our 4-Step Migration Process</h2>
              <p className="inner-page-summary-text">
                We follow a proven process that ensures zero downtime, preserved SEO rankings, and seamless functionality transfer.
              </p>
              
              <div className="inner-page-summary-grid">
                <div className="inner-page-summary-item">
                  <h4>1. Audit & Plan</h4>
                  <p>We analyze your current site, SEO, and functionality to create a detailed migration strategy.</p>
                </div>
                <div className="inner-page-summary-item">
                  <h4>2. Migration & Setup</h4>
                  <p>Move content, structure, and media into WordPress while maintaining your design and functionality.</p>
                </div>
                <div className="inner-page-summary-item">
                  <h4>3. SEO & Redirects</h4>
                  <p>Preserve search rankings with proper redirects, metadata, and technical SEO optimization.</p>
                </div>
                <div className="inner-page-summary-item">
                  <h4>4. Launch & Support</h4>
                  <p>Test thoroughly, launch seamlessly, and provide ongoing support to ensure everything works perfectly.</p>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="inner-page-summary-section">
              <h2 className="inner-page-section-title">Why Choose Our Migration Service</h2>
              <p className="inner-page-summary-text">
                Our migration process is designed to minimize risk and maximize results for your business.
              </p>
              
              <div className="inner-page-summary-grid">
                <div className="inner-page-summary-item">
                  <h4>Keep SEO Rankings Intact</h4>
                  <p>No traffic loss with proper redirects and technical SEO preservation.</p>
                </div>
                <div className="inner-page-summary-item">
                  <h4>Gain Faster Site Speed</h4>
                  <p>Average 2-3x performance improvement with optimized WordPress hosting.</p>
                </div>
                <div className="inner-page-summary-item">
                  <h4>Future-Proof Your Business</h4>
                  <p>Full ownership and control with WordPress's unlimited customization options.</p>
                </div>
                <div className="inner-page-summary-item">
                  <h4>Avoid Downtime</h4>
                  <p>Zero downtime migration with staging environment and careful planning.</p>
                </div>
              </div>
            </div>

            {/* Case Studies Section */}
            <div className="inner-page-summary-section">
              <h2 className="inner-page-section-title">Real Migration Success Stories</h2>
              <p className="inner-page-summary-text">
                See how we've helped businesses transform their web presence and grow their revenue.
              </p>
              
              <div className="inner-page-summary-grid">
                <div className="inner-page-summary-item">
                  <h4>Therapist Practice</h4>
                  <p>"A therapist moved from Squarespace to WordPress — now patients can book online and her site ranks locally for 'therapist near me.'"</p>
                </div>
                <div className="inner-page-summary-item">
                  <h4>E-commerce Store</h4>
                  <p>"An e-commerce store migrated from Shopify — saving thousands in transaction fees and boosting organic traffic by 180%."</p>
                </div>
                <div className="inner-page-summary-item">
                  <h4>Restaurant Chain</h4>
                  <p>"A restaurant moved from Wix to WordPress — online orders increased 300% and site speed improved 4x."</p>
                </div>
                <div className="inner-page-summary-item">
                  <h4>Professional Services</h4>
                  <p>"A law firm migrated from custom CMS to WordPress — better security, easier updates, and 150% more qualified leads."</p>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <div className="inner-page-cta-section">
              <h2 className="inner-page-cta-title">Get Your Free Migration Plan</h2>
              <p className="inner-page-cta-description">
                We'll audit your current site and send you a step-by-step migration strategy, including SEO preservation and cost estimate. Join 100+ businesses who've successfully migrated with zero downtime.
              </p>
              <div className="inner-page-cta-actions">
                <Link href="/site-audit" className="btn btn-primary btn-large">
                  Get Free Migration Plan
                  <span className="btn-arrow">→</span>
                </Link>
                <Link href="/contact" className="btn btn-secondary btn-large">
                  Book Strategy Call
                </Link>
                <Link href="/case-studies" className="btn btn-secondary btn-large">
                  View Case Studies
                </Link>
              </div>
              <p className="inner-page-cta-note">
                <strong>Free consultation:</strong> We'll analyze your current site and show you exactly how WordPress can improve your business performance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}