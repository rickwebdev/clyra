import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
                Ready to upgrade your website? Let's discuss your project and how we can help you own your digital presence.
              </p>
            </div>
          </div>
        </div>
        
        <div className="inner-page-main-content">
          <div className="inner-page-content">
            <div className="max-w-2xl mx-auto">
              <div className="inner-page-card text-center">
                <h2 className="inner-page-card-title">Book a 15-minute strategy call</h2>
                <p className="inner-page-card-description">
                  We'll discuss your current setup, goals, and how WordPress can help you scale on your terms.
                </p>
                <a 
                  href="mailto:rickthewebdev@gmail.com" 
                  className="inner-page-cta"
                >
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
