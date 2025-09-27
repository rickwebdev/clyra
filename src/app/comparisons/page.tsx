import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ComparisonsPage() {
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
              <h1 className="inner-page-title">WordPress vs Wix, Squarespace, Webflow & Shopify: The Complete 2025 Comparison</h1>
              <p className="inner-page-subtitle">
                Business owners comparing WordPress vs Wix, Squarespace, Webflow, or Shopify often ask the same question: which platform will give me the most control, growth, and long-term value? Here's how WordPress stacks up — and why it remains the best choice for small businesses, startups, and growing brands.
              </p>
            </div>
          </div>
        </div>
        
        <div className="inner-page-main-content">
          <div className="inner-page-content">
            <h2 className="inner-page-section-title">Platform-by-Platform Comparison</h2>
            <p className="inner-page-section-description">
              Here's how WordPress compares to the most popular website builders and platforms, with real data and specific benefits for your business.
            </p>
            <div className="inner-page-grid">
              <div className="inner-page-card">
                <h3 className="inner-page-card-title">WordPress vs Wix</h3>
                <p className="inner-page-card-description">
                  WordPress gives you full control over your code, hosting, and data. Wix locks you into their platform with limited customization and higher long-term costs.
                </p>
                <ul className="inner-page-feature-list">
                  <li className="inner-page-feature-item">Full code ownership — you can export, migrate, and customize without being trapped in Wix's closed system</li>
                  <li className="inner-page-feature-item">Better SEO capabilities — WordPress's clean code structure and extensive SEO plugins outperform Wix's limited optimization</li>
                  <li className="inner-page-feature-item">Unlimited customization — add any functionality with 60,000+ plugins vs Wix's limited app marketplace</li>
                  <li className="inner-page-feature-item">No platform lock-in — own your content and move to any hosting provider anytime</li>
                  <li className="inner-page-feature-item">Lower costs long-term — WordPress hosting starts at $3/month vs Wix's premium plans at $23+/month</li>
                </ul>
                <p className="inner-page-card-note">
                  <strong>Ready to escape Wix?</strong> <Link href="/migrations#wix" className="underline" style={{color: '#60a5fa', textDecoration: 'underline'}}>Our seamless WordPress migrations from Wix</Link> preserve your SEO, improve performance, and give you complete site ownership.
                </p>
              </div>

              <div className="inner-page-card">
                <h3 className="inner-page-card-title">WordPress vs Squarespace</h3>
                <p className="inner-page-card-description">
                  WordPress offers unlimited flexibility and growth potential. Squarespace limits your options with restrictive templates and expensive pricing.
                </p>
                <ul className="inner-page-feature-list">
                  <li className="inner-page-feature-item">Unlimited plugins and themes — access 60,000+ plugins vs Squarespace's limited extensions</li>
                  <li className="inner-page-feature-item">Better performance optimization — WordPress sites load 3x faster with proper hosting vs Squarespace's slower infrastructure</li>
                  <li className="inner-page-feature-item">Advanced functionality — integrate with any business tool vs Squarespace's closed ecosystem</li>
                  <li className="inner-page-feature-item">Lower long-term costs — WordPress hosting from $3/month vs Squarespace's $16+/month with transaction fees</li>
                  <li className="inner-page-feature-item">True ownership — export your content and move anywhere vs being locked into Squarespace forever</li>
                </ul>
                <p className="inner-page-card-note">
                  <strong>Outgrowing Squarespace?</strong> <Link href="/migrations#squarespace" className="underline" style={{color: '#60a5fa', textDecoration: 'underline'}}>Our WordPress migrations from Squarespace</Link> maintain your design while adding unlimited growth potential.
                </p>
              </div>

              <div className="inner-page-card">
                <h3 className="inner-page-card-title">WordPress vs Webflow</h3>
                <p className="inner-page-card-description">
                  WordPress excels at content management and SEO. Webflow is great for design but limited for content marketing and business growth.
                </p>
                <ul className="inner-page-feature-list">
                  <li className="inner-page-feature-item">Superior content management — WordPress's intuitive editor beats Webflow's complex CMS for non-technical users</li>
                  <li className="inner-page-feature-item">Better SEO out of the box — WordPress's clean code and SEO plugins outperform Webflow's limited optimization</li>
                  <li className="inner-page-feature-item">More hosting options — choose any hosting provider vs being locked into Webflow's expensive hosting</li>
                  <li className="inner-page-feature-item">Lower ongoing costs — WordPress hosting from $3/month vs Webflow's $16+/month with limited features</li>
                  <li className="inner-page-feature-item">Content marketing powerhouse — built-in blog, SEO tools, and content workflows vs Webflow's design-focused approach</li>
                </ul>
                <p className="inner-page-card-note">
                  <strong>Need better content management?</strong> <Link href="/migrations#webflow" className="underline" style={{color: '#60a5fa', textDecoration: 'underline'}}>Our WordPress migrations from Webflow</Link> preserve your design while adding powerful content marketing capabilities.
                </p>
              </div>

              <div className="inner-page-card">
                <h3 className="inner-page-card-title">WordPress vs Shopify</h3>
                <p className="inner-page-card-description">
                  WordPress with WooCommerce gives you e-commerce flexibility. Shopify locks you into their ecosystem with high fees and limited customization.
                </p>
                <ul className="inner-page-feature-list">
                  <li className="inner-page-feature-item">No transaction fees — keep 100% of your revenue vs Shopify's 2.9% + 30¢ per transaction</li>
                  <li className="inner-page-feature-item">Full design control — customize every pixel vs Shopify's restrictive theme limitations</li>
                  <li className="inner-page-feature-item">Better content marketing — powerful blog, SEO tools, and content workflows vs Shopify's basic blog</li>
                  <li className="inner-page-feature-item">More payment options — integrate any payment processor vs being limited to Shopify Payments</li>
                  <li className="inner-page-feature-item">Lower costs long-term — WordPress hosting + WooCommerce vs Shopify's $29+/month + transaction fees</li>
                </ul>
                <p className="inner-page-card-note">
                  <strong>Paying too much in fees?</strong> <Link href="/migrations#shopify" className="underline" style={{color: '#60a5fa', textDecoration: 'underline'}}>Our WordPress migrations from Shopify</Link> eliminate transaction fees while adding unlimited customization.
                </p>
              </div>
            </div>
            
            {/* Summary Section */}
            <div className="inner-page-summary-section">
              <h2 className="inner-page-section-title">Why WordPress Wins for Growing Businesses</h2>
              <p className="inner-page-summary-text">
                The choice between WordPress and other platforms comes down to one question: Do you want to own and control your website, or rent it from someone else? WordPress gives you:
              </p>
              <div className="inner-page-summary-grid">
                <div className="inner-page-summary-item">
                  <h4>Complete Ownership</h4>
                  <p>You own your content, code, and data. No platform lock-in, no vendor dependency.</p>
                </div>
                <div className="inner-page-summary-item">
                  <h4>Unlimited Growth</h4>
                  <p>60,000+ plugins and themes let you add any functionality as your business evolves.</p>
                </div>
                <div className="inner-page-summary-item">
                  <h4>Better SEO Performance</h4>
                  <p>Clean code structure and powerful SEO tools help you rank higher on Google.</p>
                </div>
                <div className="inner-page-summary-item">
                  <h4>Lower Long-term Costs</h4>
                  <p>No transaction fees, no premium plan upgrades, no vendor lock-in costs.</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="inner-page-cta-section">
              <h2 className="inner-page-cta-title">Ready to Make the Switch?</h2>
              <p className="inner-page-cta-description">
                If you're ready to move from Wix, Squarespace, Webflow, or Shopify, we specialize in seamless migrations that preserve your SEO, improve performance, and give you full site ownership. Join 100+ businesses who've made the switch and never looked back.
              </p>
              <div className="inner-page-cta-actions">
                <Link href="/site-audit" className="btn btn-primary btn-large">
                  Get Free Site Audit
                  <span className="btn-arrow">→</span>
                </Link>
                <Link href="/migrations" className="btn btn-secondary btn-large">
                  View Migration Services
                </Link>
                <Link href="/contact" className="btn btn-secondary btn-large">
                  Book Strategy Call
                </Link>
              </div>
              <p className="inner-page-cta-note">
                <strong>Free consultation:</strong> We'll analyze your current site and show you exactly how WordPress can improve your business.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
