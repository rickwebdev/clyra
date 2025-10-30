import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { 
  faClock,
  faCalendarAlt,
  faCheckCircle,
  faQuoteLeft,
  faUser,
  faMapPin,
  faPhone
} from '@fortawesome/free-solid-svg-icons';

export default function StrategyCallPage() {
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
                Book Your Free Strategy Call
              </h1>
              <p className="inner-page-subtitle">
                Get personalized recommendations for your website in a focused 15-minute conversation. 
                No sales pitch—just actionable insights to help your business grow.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section - Mobile First */}
        <section className="strategy-form-section">
          <div className="container">
            <div className="form-header">
          
              
              {/* Calendly Widget - Lazy with placeholder */}
              <div className="full-width-form-container">
                <CalendlyEmbed 
                  url="https://calendly.com/rickthewebdev/30-minute-meeting-clone?embed_domain=localhost&embed_type=Inline"
                  height={680}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="inner-page-main-content">
          <div className="container">
            {/* What to Expect */}
            <div className="strategy-info-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <GradientIcon icon={faClock} size="lg" className="text-white" />
                </div>
                <div>
                  <h2 className="strategy-card-title">What to Expect</h2>
                  <p className="strategy-card-description">
                    A focused 15-minute conversation about your website and business goals.
                  </p>
                </div>
              </div>
              
              <ul className="strategy-feature-list">
                <li className="strategy-feature-item">
                  Quick audit of your current website performance
                </li>
                <li className="strategy-feature-item">
                  Discussion of your business goals and challenges
                </li>
                <li className="strategy-feature-item">
                  Personalized recommendations for improvement
                </li>
                <li className="strategy-feature-item">
                  Clear next steps if we're a good fit
                </li>
              </ul>
              
              <div className="strategy-card-note">
                <strong>No obligation:</strong> This is a free consultation to help you understand your options. 
                We'll only recommend services that make sense for your business.
              </div>
            </div>

            {/* Why Choose This Call */}
            <div className="inner-page-summary-section">
              <h3 className="inner-page-section-title">Why Book This Call?</h3>
              <p className="inner-page-summary-text">
                Get expert insights without the commitment. We've helped 100+ businesses transform their web presence.
              </p>
              
              <div className="inner-page-summary-grid">
                <div className="inner-page-summary-item">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <GradientIcon icon={faUser} size="xl" className="text-white" />
                  </div>
                  <h4>Personalized Approach</h4>
                  <p>Every business is unique. We tailor our recommendations to your specific industry and goals.</p>
                </div>
                
                <div className="inner-page-summary-item">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <GradientIcon icon={faCheckCircle} size="xl" className="text-white" />
                  </div>
                  <h4>Proven Results</h4>
                  <p>We've helped businesses increase their online leads by 300%+ and improve site performance significantly.</p>
                </div>
                
                <div className="inner-page-summary-item">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <GradientIcon icon={faQuoteLeft} size="xl" className="text-white" />
                  </div>
                  <h4>No Pressure</h4>
                  <p>This is a consultation, not a sales call. We'll give you honest advice whether or not we work together.</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="inner-page-cta-section">
              <h3 className="inner-page-cta-title">Questions Before Booking?</h3>
              <p className="inner-page-cta-description">
                If you have any questions about the strategy call or our services, feel free to reach out directly.
              </p>
              
              <div className="inner-page-cta-actions">
                <a 
                  href="mailto:rick@clyrastudios.com" 
                  className="btn btn-secondary"
                >
                  <GradientIcon icon={faMapPin} size="sm" className="mr-2" />
                  Email Us
                </a>
                <a 
                  href="tel:+1-555-0123" 
                  className="btn btn-secondary"
                >
                  <GradientIcon icon={faPhone} size="sm" className="mr-2" />
                  Call Us
                </a>
              </div>
              
              <p className="inner-page-cta-note">
                Typical response time: Within 2 hours during business hours (9 AM - 6 PM EST)
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
    </>
  );
}
