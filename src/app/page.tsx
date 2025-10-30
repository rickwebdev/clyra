import Link from "next/link";
import Image from "next/image";
import HeroDeviceVideo from "@/components/HeroDeviceVideo";
import Nav from "@/components/Nav";
import InlineRotatingText from "@/components/InlineRotatingText";
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
  faCogs,
  faLeaf,
  faHeart,
  faStore,
  faUtensils,
  faGavel,
  faShoppingCart,
  faPalette
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
        <section className="hero-section home-hero">
          <div className="hero-background">
            <CrossfadeVideo />
            <div className="hero-overlay"></div>
            {/* Extra overlay to improve readability of hero image without changing global CSS */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)',
                zIndex: 2
              }}
            />
            <div className="floating-elements">
              <div className="floating-element element-1"></div>
              <div className="floating-element element-2"></div>
              <div className="floating-element element-3"></div>
            </div>
          </div>
          <div className="hero-container hero-full-bleed">
            <div className="hero-content" style={{ width: '100%' }}>
              {/* Hero Content - Grid Layout (25% / 75%) */}
              <div
                className="hero-layout"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(220px, 340px) 1fr',
                  columnGap: '8rem',
                  rowGap: '1.25rem',
                  alignItems: 'center',
                  minHeight: '75vh',
                  width: '100%'
                }}
              >
                {/* Left Media Pane */}
                <div className="hero-media-pane slide-in-left" style={{ justifySelf: 'start', marginRight: '1rem' }}>
                  <div className="device-frame" style={{
                    width: 'clamp(220px, 18vw, 320px)',
                    aspectRatio: '1 / 2',
                    background: 'linear-gradient(145deg, #1a1a1a, #2a2a2a)',
                    borderRadius: '24px',
                    padding: '8px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)',
                    position: 'relative'
                  }}>
                    {/* Device Screen */}
                    <div className="device-screen" style={{
                      width: '100%',
                      height: '100%',
                      background: '#000',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      position: 'relative'
                    }}>
                      <HeroDeviceVideo
                        sources={["/videos/hero-video.mp4","/videos/hero-phone-2.mp4"]}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Content Pane */}
                <div className="hero-content-pane slide-in-right" style={{ alignSelf: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '75vh' }}>
                  <div className="hero-headlines text-left">
                    <h1 className="hero-title" style={{ maxWidth: 'none' }}>
                      <span className="title-line bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">Build. Scale. Create.</span>
                      <span className="title-line highlight">Full-Service Web & AI Studio for Modern&nbsp;Businesses.</span>
                    </h1>
                    {/* Rotating line below H1 */}
                    <div className="rotate-wrap hero-rotating-text" style={{ marginTop: '0.5rem' }}>
                      <span className="rotate-label text-gray-400 mr-2 text-xl sm:text-2xl">Build with</span>
                      <InlineRotatingText
                        phrases={["WordPress","Next.js","Shopify","Sanity","Contentful","WooCommerce","OpenAI","Grok","Claude"]}
                        className="text-xl sm:text-2xl"
                      />
                    </div>
                    {/* Subhead */}
                    <p className="hero-description" style={{ marginTop: '0.75rem' }}>
                      We design, develop, and automate high-performance websites with SEO, AI systems, and creative content built to <br/>grow your business.
                    </p>
                  </div>
                  {/* CTA Buttons */}
                  <div className="hero-actions" style={{ justifyContent: 'flex-start', gap: '0.75rem' }}>
                    <Link href="/strategy-call" className="btn btn-primary btn-compact">
                      Book a Free Strategy Call
                      <span className="btn-arrow">→</span>
                    </Link>
                    <Link href="/growth-website-system" className="btn btn-secondary btn-compact">
                      View Growth Website System
                    </Link>
                  </div>
                  {/* Link Strip removed per design refinement */}
                </div>
              </div>
               {/* Trust pills and metrics removed for a cleaner, more compact hero */}
            </div>
          </div>
        </section>

        {/* Core Services: What We Build & Create */}
        <section className="services-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball services-ball-1"></div>
            <div className="section-floating-ball services-ball-2"></div>
            <div className="section-floating-ball services-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">What We Build & Create</h2>
              <p className="section-description">Three pillars that match how we deliver outcomes.</p>
            </div>
            
            <div className="services-grid">
              <div className="service-card slide-in-top-left">
                <div className="service-image">
                  <div className="service-icon">
                    <GradientIcon icon={faLaptopCode} size="xl" className="primary" />
                  </div>
                </div>
                <div className="service-content">
                  <h3 className="service-title">Web Development</h3>
                  <ul className="service-features">
                    <li className="feature-item"><GradientIcon icon={faCheck} size="sm" className="success" /> WordPress, Next.js, Headless CMS (Contentful, Sanity, Strapi)</li>
                    <li className="feature-item"><GradientIcon icon={faCheck} size="sm" className="success" /> Shopify & WooCommerce</li>
                    <li className="feature-item"><GradientIcon icon={faCheck} size="sm" className="success" /> Hosting, performance, automation integration</li>
                    <li className="feature-item"><GradientIcon icon={faCheck} size="sm" className="success" /> Rescue, redesigns, migrations</li>
                  </ul>
                </div>
              </div>
              <div className="service-card slide-in-top-right">
                <div className="service-image">
                  <div className="service-icon">
                    <GradientIcon icon={faSearchPlus} size="xl" className="primary" />
                  </div>
                </div>
                <div className="service-content">
                  <h3 className="service-title">Marketing Systems</h3>
                  <ul className="service-features">
                    <li className="feature-item"><GradientIcon icon={faCheck} size="sm" className="success" /> SEO & content optimization</li>
                    <li className="feature-item"><GradientIcon icon={faCheck} size="sm" className="success" /> Analytics dashboards & funnel tracking</li>
                    <li className="feature-item"><GradientIcon icon={faCheck} size="sm" className="success" /> AI automation, chatbots, CRM integration</li>
                    <li className="feature-item"><GradientIcon icon={faCheck} size="sm" className="success" /> Google Ads, retargeting & funnels</li>
                  </ul>
                </div>
              </div>
              <div className="service-card slide-in-bottom-left">
                <div className="service-image">
                  <div className="service-icon">
                    <GradientIcon icon={faPaintBrush} size="xl" className="primary" />
                  </div>
                </div>
                <div className="service-content">
                  <h3 className="service-title">Creative Production</h3>
                  <ul className="service-features">
                    <li className="feature-item"><GradientIcon icon={faCheck} size="sm" className="success" /> Video, motion graphics, 3D product animation</li>
                    <li className="feature-item"><GradientIcon icon={faCheck} size="sm" className="success" /> Brand identity and UX</li>
                    <li className="feature-item"><GradientIcon icon={faCheck} size="sm" className="success" /> Audio & post-production</li>
                    <li className="feature-item"><GradientIcon icon={faCheck} size="sm" className="success" /> Content strategy & storytelling</li>
                  </ul>
                </div>
              </div>
              {/* New: AI Automation pillar to fill the fourth grid slot */}
              <div className="service-card slide-in-bottom-right">
                <div className="service-image">
                  <div className="service-icon">
                    <GradientIcon icon={faBolt} size="xl" className="primary" />
                  </div>
                </div>
                <div className="service-content">
                  <h3 className="service-title">AI Automation</h3>
                  <ul className="service-features">
                    <li className="feature-item"><GradientIcon icon={faCheck} size="sm" className="success" /> Lead routing, booking flows, and follow-ups</li>
                    <li className="feature-item"><GradientIcon icon={faCheck} size="sm" className="success" /> Chatbots, assistants, and FAQ deflection</li>
                    <li className="feature-item"><GradientIcon icon={faCheck} size="sm" className="success" /> CRM + email + ads automations</li>
                    <li className="feature-item"><GradientIcon icon={faCheck} size="sm" className="success" /> Zapier/Make, webhooks, and custom scripts</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="service-cta" style={{marginTop:'1rem'}}>
              <Link href="/services" className="service-cta">Explore All Services <span className="link-arrow">→</span></Link>
            </div> */}
          </div>
        </section>

        {/* Featured Offer — Growth Website System (landing-style) */}
        <section className="case-studies-section growth-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball growth-ball-1"></div>
            <div className="section-floating-ball growth-ball-2"></div>
            <div className="section-floating-ball growth-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">The Growth Website System</h2>
              <p className="section-description">Our signature all-in-one program combining design, SEO, and automation into a single, scalable system.</p>
              <div className="service-cta">
                <Link href="/growth-website-system" className="btn btn-primary btn-compact">
                  <span className="cta-icon"><GradientIcon icon={faLeaf} size="sm" className="primary" /></span>
                  <span>Learn More</span>
                  <span className="btn-arrow">→</span>
                </Link>
              </div>
            </div>
            
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="case-studies-section industries-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball industries-ball-1"></div>
            <div className="section-floating-ball industries-ball-2"></div>
            <div className="section-floating-ball industries-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Industries We Serve</h2>
              <p className="section-description">Focused expertise for small and mid-size businesses.</p>
            </div>
            <div className="case-studies-grid">
              {[
                { name: "Therapists & Coaches", icon: faHeart },
                { name: "Local Service Businesses", icon: faStore },
                { name: "Restaurants & Hospitality", icon: faUtensils },
                { name: "Law Firms & Agencies", icon: faGavel },
                { name: "eCommerce & Product Brands", icon: faShoppingCart },
                { name: "Creative Professionals", icon: faPalette },
              ].map((item, idx) => (
                <div key={item.name} className={`case-study-card ${idx % 2 === 0 ? 'float-in-left' : 'float-in-right'}`}>
                  <div className="case-study-content">
                    <div className="case-study-header">
                      <div className="industry-icon">
                        <GradientIcon icon={item.icon} size="xl" className="primary" />
                      </div>
                      <h3 className="case-study-title">{item.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Strip - Commented out until content is ready */}
        {/* <section className="case-studies-section">
          <div className="container">
            <div className="section-header slide-in-right">
              <h2 className="section-title">Recent Projects & Studio Highlights</h2>
              <p className="section-description">Web, Motion, Branding — selected work and in-progress explorations.</p>
            </div>
            <div className="case-studies-grid">
              {["Web", "Motion", "Branding"].map((cat, idx) => (
                <div key={cat} className={`case-study-card ${idx % 2 === 0 ? 'float-in-left' : 'float-in-right'}`}>
                  <div className="case-study-content">
                    <div className="case-study-header">
                      <h3 className="case-study-title">{cat}</h3>
                      <div className="case-study-meta">
                        <span className="timeframe">Highlight</span>
                      </div>
                    </div>
                    <div className="case-study-story">
                      <div className="problem-solution">
                        <div className="solution">
                          <div className="solution-label">
                            <span>Overview:</span>
                          </div>
                          <span className="solution-text">Coming soon</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

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

        {/* CTA Strip */}
        <section className="cta-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball cta-ball-1"></div>
            <div className="section-floating-ball cta-ball-2"></div>
            <div className="section-floating-ball cta-ball-3"></div>
          </div>
          <div className="container">
            <div className="cta-content" data-aos="fade-up">
              <h2 className="cta-title">Ready to grow your business online? Let’s build something powerful together.</h2>
              <p className="cta-description"></p>
              <div className="cta-actions">
                <Link href="/strategy-call" className="btn btn-primary btn-large">
                  Book a Free Strategy Call
                  <span className="btn-arrow">→</span>
                </Link>
                <Link href="/growth-website-system" className="btn btn-secondary btn-large">
                  View Growth System
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