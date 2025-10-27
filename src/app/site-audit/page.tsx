"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import { 
  faSearch, 
  faClock, 
  faCheckCircle,
  faChartLine,
  faShieldAlt,
  faRocket
} from '@fortawesome/free-solid-svg-icons';

export default function SiteAuditPage() {
  const router = useRouter();

  useEffect(() => {
    // Listen for Tally form completion
    const handleTallyComplete = (event: MessageEvent) => {
      if (event.data && event.data.type === 'tally-form-completed') {
        // Redirect to strategy call page after form completion
        router.push('/strategy-call');
      }
    };

    window.addEventListener('message', handleTallyComplete);

    return () => {
      window.removeEventListener('message', handleTallyComplete);
    };
  }, [router]);

  return (
    <>
      <Nav />
      
      <main className="inner-page">
        {/* Hero Section */}
        <section className="inner-page-hero-section">
          <div className="inner-page-floating-elements">
            <div className="inner-page-floating-ball inner-page-ball-1"></div>
            <div className="inner-page-floating-ball inner-page-ball-2"></div>
            <div className="inner-page-floating-ball inner-page-ball-3"></div>
          </div>
          
          <div className="container">
            <div className="inner-page-header">
              <h1 className="inner-page-title">
                Get Your Free Website Analysis
              </h1>
              <p className="inner-page-subtitle">
                Whether you have a website that needs improvement or you're looking to build one from scratch, 
                get expert insights on your digital presence—completely free.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section - Mobile First */}
        <section className="audit-form-section">
          <div className="container">
            <div className="form-header">
              
              {/* Tally Form Embed - Full Width */}
              <div className="full-width-form-container">
                <iframe 
                  data-tally-src="https://tally.so/r/wkMgMM" 
                  width="100%" 
                  height="1500" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0} 
                  title="Free Website Analysis"
                  className="full-width-iframe"
                  scrolling="no"
                  suppressHydrationWarning={true}
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Get Section */}
        <section className="inner-page-main-content">
          <div className="container">
            <div className="inner-page-section-title">What's Included in Your Analysis</div>
            <div className="inner-page-section-description">
              Our comprehensive analysis covers everything that impacts your digital presence and business growth
            </div>
            
            <div className="audit-features-grid">
              {/* Speed Analysis */}
              <div className="audit-feature-card">
                <div className="audit-feature-icon">
                  <GradientIcon icon={faRocket} size="lg" className="text-white" />
                </div>
                <h3 className="audit-feature-title">Speed Analysis</h3>
                <p className="audit-feature-description">
                  Core Web Vitals, loading times, and performance bottlenecks
                </p>
                <ul className="audit-feature-list">
                  <li>Page load speed measurement</li>
                  <li>Mobile performance score</li>
                  <li>Optimization recommendations</li>
                </ul>
              </div>

              {/* SEO Assessment */}
              <div className="audit-feature-card">
                <div className="audit-feature-icon">
                  <GradientIcon icon={faSearch} size="lg" className="text-white" />
                </div>
                <h3 className="audit-feature-title">SEO Assessment</h3>
                <p className="audit-feature-description">
                  Technical SEO, content optimization, and ranking potential
                </p>
                <ul className="audit-feature-list">
                  <li>Technical SEO audit</li>
                  <li>Content optimization opportunities</li>
                  <li>Local search visibility</li>
                </ul>
              </div>

              {/* Security Check */}
              <div className="audit-feature-card">
                <div className="audit-feature-icon">
                  <GradientIcon icon={faShieldAlt} size="lg" className="text-white" />
                </div>
                <h3 className="audit-feature-title">Security Review</h3>
                <p className="audit-feature-description">
                  Vulnerability assessment and security recommendations
                </p>
                <ul className="audit-feature-list">
                  <li>Security vulnerability scan</li>
                  <li>SSL certificate status</li>
                  <li>Backup and protection recommendations</li>
                </ul>
              </div>

              {/* Conversion Analysis */}
              <div className="audit-feature-card">
                <div className="audit-feature-icon">
                  <GradientIcon icon={faChartLine} size="lg" className="text-white" />
                </div>
                <h3 className="audit-feature-title">Conversion Analysis</h3>
                <p className="audit-feature-description">
                  User experience, lead generation, and conversion optimization
                </p>
                <ul className="audit-feature-list">
                  <li>User experience evaluation</li>
                  <li>Lead generation assessment</li>
                  <li>Conversion optimization opportunities</li>
                </ul>
              </div>
            </div>

            {/* What Happens Next */}
            <div className="inner-page-summary-section">
              <h3 className="inner-page-section-title">What Happens Next?</h3>
              <p className="inner-page-summary-text">
                After you submit your information, here's exactly what you can expect:
              </p>
              
              <div className="inner-page-summary-grid">
                <div className="inner-page-summary-item">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h4>Instant Confirmation</h4>
                  <p>You'll receive an email confirmation that we've received your analysis request.</p>
                </div>
                
                <div className="inner-page-summary-item">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h4>Comprehensive Analysis</h4>
                  <p>Our team will thoroughly analyze your digital presence across all key performance areas.</p>
                </div>
                
                <div className="inner-page-summary-item">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <h4>Detailed Report</h4>
                  <p>Within 24 hours, you'll receive a comprehensive analysis report with specific recommendations.</p>
                </div>
                
                <div className="inner-page-summary-item">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <h4>Strategy Call</h4>
                  <p>Schedule a free 15-minute call to discuss your results and next steps.</p>
                </div>
              </div>
            </div>

            {/* Guarantee */}
            <div className="inner-page-cta-section">
              <h3 className="inner-page-cta-title">100% Free, No Obligation</h3>
              <p className="inner-page-cta-description">
                This is a genuine free analysis with no hidden costs or sales pressure. 
                We'll provide valuable insights whether or not you choose to work with us.
              </p>
              
              <div className="flex justify-center">
                <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-full px-6 py-3">
                  <GradientIcon icon={faCheckCircle} size="lg" className="text-green-400" />
                  <span className="font-semibold text-green-400">Completely Free Analysis</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Tally Script */}
      <script async src="https://tally.so/widgets/embed.js"></script>
    </>
  );
}