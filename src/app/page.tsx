import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import CrossfadeVideo from "@/components/CrossfadeVideo";
import { 
  faBolt, 
  faShieldAlt, 
  faCheckCircle,
  faTimesCircle,
  faCheck,
  faSearch,
  faQuoteLeft,
  faLaptopCode,
  faAmbulance,
  faSearchPlus,
  faPaintBrush,
  faCogs
} from '@fortawesome/free-solid-svg-icons';

const services = [
  { 
    id: "websites-platforms", 
    title: "Websites & Platforms", 
    description: "From emergency rescues to custom builds, we transform broken or outdated websites into fast, secure, lead-generating assets that scale with your business.",
    pain: "Site holding back your growth?",
    solution: "WordPress that actually converts",
    features: ["Emergency Rescues", "Platform Migrations", "Custom Development", "Performance Optimization"],
    cta: "Rescue My Site",
    ctaLink: "/contact?service=rescue",
    icon: faAmbulance
  },
  { 
    id: "seo-ai-discovery", 
    title: "SEO & AI Discovery", 
    description: "Get found on Google and AI search engines. We optimize your WordPress site for traditional SEO plus next-gen AEO (AI Engine Optimization) for ChatGPT and Perplexity.",
    pain: "Invisible on search engines?",
    solution: "SEO that works in 2024+",
    features: ["Technical SEO", "Core Web Vitals", "AEO Optimization", "Local Search"],
    cta: "Get SEO Audit",
    ctaLink: "/site-audit",
    icon: faSearchPlus
  },
  { 
    id: "automation-marketing", 
    title: "Automation & Marketing Systems", 
    description: "Stop manual work. We connect your WordPress site to the tools that power your business - CRMs, booking systems, email marketing, and more.",
    pain: "Manual processes eating your time?",
    solution: "Automation that saves hours",
    features: ["CRM Integration", "Booking Systems", "Email Marketing", "Lead Generation"],
    cta: "Automate My Workflow",
    ctaLink: "/services#automation",
    icon: faCogs
  },
  { 
    id: "creative-content", 
    title: "Creative & Content", 
    description: "Turn visitors into customers. We design conversion-focused experiences and content strategies that speak to your audience and drive results.",
    pain: "Visitors not converting?",
    solution: "Design that drives business",
    features: ["UX/UI Design", "Conversion Optimization", "Content Strategy", "Brand Development"],
    cta: "Improve Conversions",
    ctaLink: "/services#creative",
    icon: faPaintBrush
  },
];

const servicePillars = [
  {
    title: "Website Rescue & Recovery",
    problem: "Site hacked, broken, or holding back your business?",
    solution: "Emergency response, security fixes, and complete rebuilds",
    expectedResult: "24-hour rescue response, bulletproof security, 300% faster performance",
    timeframe: "1-3 weeks",
    image: "/images/cards/E-commerce Migration Success.png"
  },
  {
    title: "Platform Migration Services",
    problem: "Stuck on Wix, Squarespace, or outdated platform?",
    solution: "Seamless WordPress migration with SEO preservation",
    expectedResult: "Zero downtime, improved rankings, full site ownership",
    timeframe: "2-4 weeks",
    image: "/images/cards/Security Breach Recovery.png"
  },
  {
    title: "SEO & Growth Optimization",
    problem: "Invisible on Google or losing to competitors?",
    solution: "Technical SEO + AEO optimization for modern search",
    expectedResult: "Page 4 to page 1 rankings, 250% traffic increase, AI search visibility",
    timeframe: "4-8 weeks",
    image: "/images/cards/SEO Performance Boost.png"
  },
  {
    title: "Startup Launch Sites",
    problem: "Need a professional website live fast to validate an idea or pitch investors?",
    solution: "Launch-ready WordPress builds with tracking, SEO, and upgrade paths",
    expectedResult: "Professional site in 1-2 weeks, investor-ready presentation, growth foundation",
    timeframe: "1-2 weeks",
    image: "/images/cards/startup website.png"
  }
];

const testimonials = [
  {
    quote: "It's so much easier to manage than what I had before. The site works beautifully, and I feel in control of it for the first time. It's been a total upgrade for my business.",
    author: "Restaurant Owner",
    company: "",
    role: "",
    industry: "Hospitality"
  },
  {
    quote: "The process was seamless. The video presentations made everything simple to understand, and the final site completely elevated our professional image online.",
    author: "Small Business Owner",
    company: "",
    role: "",
    industry: "Professional Services"
  },
  {
    quote: "This felt like agency-level service without the agency price tag. Everything was so well thought out — I finally feel like my website reflects the quality of my work.",
    author: "Healthcare Professional",
    company: "",
    role: "",
    industry: "Healthcare"
  },
  {
    quote: "I was impressed by how quickly they turned things around. The whole process was clear, collaborative, and actually enjoyable — which is not how I usually feel about tech projects.",
    author: "Entrepreneur",
    company: "",
    role: "",
    industry: "Startups"
  },
  {
    quote: "The ROI was immediate. They didn't just build us a website — they transformed our entire client onboarding process. The automation systems they set up have saved us 15 hours per week and increased our close rate by 40%.",
    author: "Marketing Agency Owner",
    company: "",
    role: "",
    industry: "Digital Services"
  },
  {
    quote: "Finally, a developer who gets e-commerce. They didn't just migrate my store — they optimized the entire customer journey. My conversion rate doubled and cart abandonment dropped by 35% in the first month.",
    author: "E-commerce Store Owner",
    company: "",
    role: "",
    industry: "Retail"
  }
];

export default function HomePage() {
  return (
    <>
      <Nav />
      
      <main>
        {/* Hero Section with Video Background */}
        <section className="hero-section">
          <div className="hero-background">
            <CrossfadeVideo />
            <div className="hero-overlay"></div>
            <div className="floating-elements">
              <div className="floating-element element-1"></div>
              <div className="floating-element element-2"></div>
              <div className="floating-element element-3"></div>
            </div>
          </div>
          <div className="container">
            <div className="hero-content">
              {/* Hero Headlines - Order 1 */}
              <div className="hero-headlines">
                <h1 className="hero-title">
                  <span className="title-line">Own your website.</span>
                  <span className="title-line highlight">Scale your business.</span>
                </h1>
                <p className="hero-description">
             We transform websites into lead-generating assets. <br/>Our studio specializes in custom WordPress development, seamless <br />migrations from Wix and Squarespace, and SEO-focused rebuilds <br />that deliver performance, security, and growth.</p>
                
                {/* Hook Line */}
                <p className="hero-hook">
                From urgent fixes to full rebuilds, we turn websites into lead-generating assets.                </p>
              </div>

              {/* CTA Buttons - Order 2 on mobile */}
              <div className="hero-actions">
                <Link href="/site-audit" className="btn btn-primary btn-large">
                  Get Free Site Audit
                  <span className="btn-arrow">→</span>
                </Link>
                <Link href="/strategy-call" className="btn btn-secondary btn-large">
                  Book Strategy Call
                </Link>
              </div>

              {/* Trust Stats - Order 3 on mobile */}
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">SMBs Rescued</span>
                </div>
                <div className="stat">
                  <span className="stat-number">24hr</span>
                  <span className="stat-label">Emergency Response</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Site Ownership</span>
                </div>
              </div>
              
              {/* Trust Signals - Order 4 on mobile */}
              <div className="trust-signals">
                <div className="trust-item">
                  <GradientIcon icon={faBolt} size="sm" className="primary" />
                  <span className="trust-text">3x Faster</span>
                </div>
                <div className="trust-item">
                  <GradientIcon icon={faShieldAlt} size="sm" className="warning" />
                  <span className="trust-text">24hr Fix</span>
                </div>
                <div className="trust-item">
                  <GradientIcon icon={faSearch} size="sm" className="primary" />
                  <span className="trust-text">Local SEO</span>
                </div>
                <div className="trust-item">
                  <GradientIcon icon={faLaptopCode} size="sm" className="success" />
                  <span className="trust-text">Mobile-First</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section with Advanced Grid */}
        <section className="services-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball services-ball-1"></div>
            <div className="section-floating-ball services-ball-2"></div>
            <div className="section-floating-ball services-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">WordPress Solutions That <span className="transform-word">Transform</span> Your Business</h2>
              <p className="section-description">
                We don't just build websites - we rescue broken sites, migrate platforms seamlessly, 
                and optimize for growth. Here's how we help SMBs turn their web presence into a competitive advantage.
              </p>
            </div>
            
                    <div className="services-grid">
                      {services.map((service, index) => {
                        // Bottom 2 cards come from bottom corners, top 2 from left/center
                        const animationClass = index === 0 ? 'float-in-left' : 
                                             index === 1 ? 'float-in-center' : 
                                             index === 2 ? 'float-in-bottom-left' : 'float-in-bottom-right';
                        return (
                        <div key={service.id} className={`service-card ${animationClass}`}>
                  <div className="service-image">
                    <div className="service-icon">
                      <GradientIcon icon={service.icon} size="xl" className="primary" />
                    </div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{service.title}</h3>
                    <div className="pain-solution">
                      <div className="pain-point">
                        <GradientIcon icon={faTimesCircle} size="sm" className="danger" />
                        <span className="pain-text">{service.pain}</span>
                      </div>
                      <div className="solution-point">
                        <GradientIcon icon={faCheckCircle} size="sm" className="success" />
                        <span className="solution-text">{service.solution}</span>
                      </div>
                    </div>
                    <p className="service-description">{service.description}</p>
                    <ul className="service-features">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="feature-item">
                          <GradientIcon icon={faCheck} size="sm" className="success" />
                          {feature}
          </li>
                      ))}
                    </ul>
                    <Link href={service.ctaLink as string} className="service-cta">
                      {service.cta}
                      <span className="link-arrow">→</span>
                    </Link>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="case-studies-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball case-studies-ball-1"></div>
            <div className="section-floating-ball case-studies-ball-2"></div>
            <div className="section-floating-ball case-studies-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">How We Transform Your Web Presence</h2>
              <p className="section-description">
                From emergency rescues to strategic rebuilds, here are the core ways we help SMBs 
                turn their web presence into a competitive advantage that drives real business results.
              </p>
            </div>
            
            <div className="case-studies-grid">
              {servicePillars.map((pillar, index) => {
                // Alternate between left and right floating animations for 2x2 grid
                const animationClass = index % 2 === 0 ? 'float-in-left' : 'float-in-right';
                return (
                        <div key={index} className={`case-study-card ${animationClass}`}>
                          <div className="case-study-image">
                            <Image 
                              src={pillar.image} 
                              alt={`${pillar.title} service`}
                              className="case-study-img"
                              width={400}
                              height={300}
                              priority={index < 2}
                              placeholder="blur"
                              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                            />
                          </div>
                  <div className="case-study-content">
                    <div className="case-study-header">
                      <h3 className="case-study-title">{pillar.title}</h3>
                      <div className="case-study-meta">
                        <span className="timeframe">{pillar.timeframe}</span>
                      </div>
                    </div>
                    <div className="case-study-story">
                      <div className="problem-solution">
                        <div className="problem">
                          <div className="problem-label">
                            <GradientIcon icon={faTimesCircle} size="sm" className="danger" />
                            <span>Problem:</span>
                          </div>
                          <span className="problem-text">{pillar.problem}</span>
                        </div>
                        <div className="solution">
                          <div className="solution-label">
                            <GradientIcon icon={faCheckCircle} size="sm" className="success" />
                            <span>Our Approach:</span>
                          </div>
                          <span className="solution-text">{pillar.solution}</span>
                        </div>
                      </div>
                    </div>
                    <Link href="/contact" className="case-study-link">
                      Discuss Your Project
                    </Link>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball testimonials-ball-1"></div>
            <div className="section-floating-ball testimonials-ball-2"></div>
            <div className="section-floating-ball testimonials-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">What SMB Owners Say About Working With Us</h2>
              <p className="section-description">
                From restaurant owners to therapists to law firms - here's how we've helped real businesses 
                transform their web presence and grow their revenue.
              </p>
            </div>
            
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => {
                // Alternate between left, center, and right floating animations
                const animationClass = index % 3 === 0 ? 'float-in-left' : 
                                     index % 3 === 1 ? 'float-in-center' : 'float-in-right';
                return (
                        <div key={index} className={`testimonial-card ${animationClass}`}>
                  <div className="testimonial-content">
                    <GradientIcon icon={faQuoteLeft} size="lg" className="primary" />
                    <p className="testimonial-quote">{testimonial.quote}</p>
                    <div className="testimonial-author">
                      <div className="author-info">
                        <span className="author-name">{testimonial.author}</span>
                        <span className="author-role">{testimonial.role}</span>
                        <span className="company-name">{testimonial.company}</span>
                        <span className="industry">{testimonial.industry}</span>
                      </div>
                    </div>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* DreamHost Integration */}
        <section className="hosting-section">
          <div className="container">
            <div className="hosting-content bounce-up">
              <div className="hosting-text">
                <h3>Ready to get started but need hosting?</h3>
                <p>Launch quickly with DreamHost's AI builder and fast hosting. When you're ready to scale beyond templates, we'll migrate and upgrade you to a custom WordPress solution.</p>
              </div>
              <div className="hosting-actions">
                <a href="https://click.dreamhost.com/aff_c?offer_id=8&aff_id=20354&aff_sub=&aff_sub5=/wordpress/managed-wp-hosting/?offer_id={offer_id}&transaction_id={transaction_id}&aff_sub5=/wordpress/managed-wp-hosting/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  Start with DreamHost
                </a>
                <Link href="/hosting" className="hosting-link">
                  Compare hosting options →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball cta-ball-1"></div>
            <div className="section-floating-ball cta-ball-2"></div>
            <div className="section-floating-ball cta-ball-3"></div>
          </div>
          <div className="container">
            <div className="cta-content" data-aos="fade-up">
              <h2 className="cta-title">Stop letting your website hold back your business.</h2>
              <p className="cta-description">
                Get a free site audit to see exactly what's broken and how we can fix it. 
                Join 100+ SMBs who've transformed their web presence with our WordPress rescue and rebuild services.
              </p>
              <div className="cta-actions">
                <Link href="/site-audit" className="btn btn-primary btn-large">
                  Get Free Site Audit
                  <span className="btn-arrow">→</span>
                </Link>
                <Link href="/strategy-call" className="btn btn-secondary btn-large">
                  Book Strategy Call
                </Link>
                <Link href="/case-studies" className="btn btn-secondary btn-large">
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball faq-ball-1"></div>
            <div className="section-floating-ball faq-ball-2"></div>
            <div className="section-floating-ball faq-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-description">
                Common questions from restaurant owners, therapists, law firms, and SMBs about WordPress rescue, 
                migration, and optimization services.
              </p>
            </div>
            
            <div className="faq-grid">
              <div className="faq-item" data-aos="fade-up" data-aos-delay="0">
                <h3 className="faq-question">How much does a WordPress site rebuild cost?</h3>
                <p className="faq-answer">
                  WordPress rebuilds typically range from $3,000-$15,000 depending on complexity. Restaurant sites with online ordering start around $5,000, while therapist practices with booking systems average $4,000-$7,000. We provide detailed quotes after our free site audit. Most clients see ROI within 3-6 months through improved conversions and reduced maintenance costs.
                </p>
              </div>
              
              <div className="faq-item" data-aos="fade-up" data-aos-delay="100">
                <h3 className="faq-question">Will I lose my SEO rankings during migration?</h3>
                <p className="faq-answer">
                  No - we preserve all your SEO value during migration. We maintain your URLs, meta data, and implement proper redirects. In fact, most clients see improved rankings within 30-60 days due to better site structure, Core Web Vitals, and technical SEO optimization. We've moved clients from page 4 to page 1 rankings.
                </p>
              </div>
              
              <div className="faq-item" data-aos="fade-up" data-aos-delay="200">
                <h3 className="faq-question">Why choose WordPress vs Wix or Squarespace?</h3>
                <p className="faq-answer">
                  WordPress gives you complete ownership and control. Unlike Wix or Squarespace, you own your content, can customize everything, and aren't locked into their platform. WordPress is also superior for SEO, integrates with any business tool, and scales with your growth. It powers 43% of all websites for good reason.
                </p>
              </div>
              
              <div className="faq-item" data-aos="fade-up" data-aos-delay="300">
                <h3 className="faq-question">How quickly can you rescue a hacked website?</h3>
                <p className="faq-answer">
                  We provide 24-hour emergency response for hacked sites. Most security recoveries are completed within 24-48 hours with zero data loss. We also implement security hardening, regular backups, and monitoring to prevent future issues. Unlike generic developers, we specialize in WordPress security and have a proven track record.
                </p>
              </div>
              
              <div className="faq-item" data-aos="fade-up" data-aos-delay="400">
                <h3 className="faq-question">Is WordPress HIPAA compliant for healthcare practices?</h3>
                <p className="faq-answer">
                  WordPress itself isn't automatically HIPAA compliant, but we can build HIPAA-compliant WordPress sites for healthcare practices. We implement proper security measures, encryption, secure hosting, and compliance-focused features. We've successfully built sites for therapists, dental practices, and healthcare providers.
                </p>
              </div>
              
              <div className="faq-item" data-aos="fade-up" data-aos-delay="500">
                <h3 className="faq-question">Do you handle ongoing maintenance and updates?</h3>
                <p className="faq-answer">
                  Yes - our ongoing support includes security monitoring, regular backups, plugin updates, performance optimization, and 24/7 emergency response. We also provide monthly reports on your site's performance and security status. Many clients choose our maintenance plans to ensure their site stays fast, secure, and optimized.
                </p>
              </div>
            </div>
        </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}