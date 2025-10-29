import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import ContactForm from "@/components/ContactForm";
import { 
  faWrench,
  faCheckCircle,
  faClock,
  faShieldAlt,
  faTools,
  faRocket,
  faUserFriends,
  faPhone,
  faExclamationTriangle,
  faCog,
  faChartLine,
  faLock,
  faQuestionCircle,
  faArrowRight,
  faStar,
  faSearch
} from '@fortawesome/free-solid-svg-icons';

const commonIssues = [
  {
    icon: faExclamationTriangle,
    title: "White Screen of Death",
    description: "Site shows blank white page"
  },
  {
    icon: faCog,
    title: "PHP / Plugin Errors",
    description: "Fatal errors breaking functionality"
  },
  {
    icon: faWrench,
    title: "Broken Layouts",
    description: "Design issues after updates"
  },
  {
    icon: faClock,
    title: "Slow or Unresponsive",
    description: "Site takes forever to load"
  },
  {
    icon: faShieldAlt,
    title: "Malware Clean-up",
    description: "Remove hacks and security threats"
  },
  {
    icon: faTools,
    title: "Theme Conflicts",
    description: "CSS and theme compatibility issues"
  },
  {
    icon: faRocket,
    title: "Hosting Issues",
    description: "DNS and server misconfigurations"
  },
  {
    icon: faExclamationTriangle,
    title: "Database Errors",
    description: "Connection and data corruption issues"
  },
  {
    icon: faCog,
    title: "Update Failures",
    description: "WordPress core and plugin update problems"
  }
];

const processSteps = [
  {
    icon: faSearch,
    title: "Quick Diagnosis",
    description: "We identify the root issue within an hour",
    time: "1 hour"
  },
  {
    icon: faWrench,
    title: "Immediate Repair",
    description: "Our devs fix the core problem quickly",
    time: "Same day"
  },
  {
    icon: faCheckCircle,
    title: "Performance Check-Up",
    description: "We update, back up, and optimize your site",
    time: "Ongoing"
  }
];

const addOnServices = [
  {
    icon: faCog,
    title: "WordPress Updates & Maintenance",
    description: "Keep your site secure and up-to-date"
  },
  {
    icon: faTools,
    title: "Plugin / Theme Customization",
    description: "Tailor your site to your exact needs"
  },
  {
    icon: faRocket,
    title: "Site Speed Optimization",
    description: "Make your site lightning fast"
  },
  {
    icon: faShieldAlt,
    title: "Hosting Migration",
    description: "Move to better, faster hosting"
  },
  {
    icon: faChartLine,
    title: "SEO & Security Hardening",
    description: "Protect and optimize for search engines"
  }
];

const testimonials = [
  {
    text: "They fixed my site in two hours after a hack took it down. Absolute lifesavers.",
    author: "Melissa G.",
    role: "Local Business Owner",
    rating: 5
  },
  {
    text: "My white screen of death was resolved in 30 minutes. Incredible service!",
    author: "David R.",
    role: "E-commerce Store Owner",
    rating: 5
  },
  {
    text: "Professional, fast, and affordable. They saved my business thousands in lost sales.",
    author: "Sarah M.",
    role: "Consulting Firm",
    rating: 5
  }
];

const faqs = [
  {
    question: "How fast can you fix my website?",
    answer: "Most issues are resolved within a few hours after diagnosis. We prioritize emergency repairs and work as quickly as possible."
  },
  {
    question: "Will I lose any data?",
    answer: "No — we always back up your site before making any changes. Your data is completely safe with us."
  },
  {
    question: "Do you handle hacked or infected sites?",
    answer: "Yes. We clean and secure compromised WordPress sites regularly. We also implement security measures to prevent future attacks."
  },
  {
    question: "What if it's not WordPress?",
    answer: "We can diagnose other platforms too, but WordPress is our specialty. We'll let you know if we can help or refer you to the right expert."
  },
  {
    question: "How much does a repair cost?",
    answer: "Most repairs range from $150-$500 depending on complexity. We provide free diagnostics and transparent pricing before any work begins."
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer: "Yes! We offer monthly maintenance plans starting at $99/month to keep your site secure, updated, and running smoothly."
  }
];

export const metadata: Metadata = {
  title: "Website Broken? WordPress Repair Experts — Clyra Studios",
  description: "Is your website down, hacked, or showing errors? Clyra Studios offers fast WordPress fixes, updates, and emergency recovery. Get your site back online fast.",
  keywords: "wordpress repair, website broken, wordpress emergency, white screen of death, wordpress hacked, website down, wordpress fix, wordpress maintenance, wordpress support, website recovery, wordpress mechanic, wordpress troubleshooting",
  authors: [{ name: "Clyra Studios" }],
  creator: "Clyra Studios",
  publisher: "Clyra Studios",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://clyrastudios.com'),
  alternates: {
    canonical: '/wordpress-mechanic',
  },
  openGraph: {
    title: "Website Broken? WordPress Repair Experts — Clyra Studios",
    description: "Is your website down, hacked, or showing errors? Clyra Studios offers fast WordPress fixes, updates, and emergency recovery. Get your site back online fast.",
    url: 'https://clyrastudios.com/wordpress-mechanic',
    siteName: 'Clyra Studios',
    images: [
      {
        url: '/images/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Clyra Studios - WordPress Repair Experts',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Broken? WordPress Repair Experts — Clyra Studios',
    description: 'Is your website down, hacked, or showing errors? Clyra Studios offers fast WordPress fixes, updates, and emergency recovery. Get your site back online fast.',
    images: ['/images/thumbnail.png'],
    creator: '@clyrastudios',
    site: '@clyrastudios',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yahoo-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "WordPress Repair and Emergency Recovery Services",
  "description": "Professional WordPress repair services for broken, hacked, or malfunctioning websites. Same-day fixes and emergency recovery available.",
  "provider": {
    "@type": "Organization",
    "name": "Clyra Studios",
    "url": "https://clyrastudios.com",
    "logo": "https://clyrastudios.com/images/clyra_logo.png"
  },
  "areaServed": "US",
  "serviceType": "WordPress Repair and Maintenance",
  "category": "Website Emergency Services",
  "offers": [
    {
      "@type": "Offer",
      "name": "Free WordPress Diagnosis",
      "description": "Free diagnosis of WordPress issues and problems",
      "price": "0",
      "priceCurrency": "USD"
    },
    {
      "@type": "Offer", 
      "name": "WordPress Emergency Repair",
      "description": "Same-day WordPress repair and recovery services",
      "priceRange": "$150-$500",
      "priceCurrency": "USD"
    },
    {
      "@type": "Offer",
      "name": "WordPress Maintenance",
      "description": "Ongoing WordPress maintenance and security services",
      "priceRange": "$99-$299", 
      "priceCurrency": "USD"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "WordPress Repair Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "White Screen of Death Fix"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "WordPress Hack Recovery"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "WordPress Speed Optimization"
        }
      }
    ]
  }
};

export default function WordPressMechanicPage() {
  return (
    <>
      <Script
        id="wordpress-mechanic-structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <Nav />
      
      <main className="wordpress-mechanic-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-background">
            <div className="hero-video-container">
              <video
                className="hero-video"
                muted
                playsInline
                autoPlay
                loop
                poster="/images/hero/hero-background.mp4"
              >
                <source src="/images/hero/hero-background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="hero-overlay"></div>
            </div>
            <div className="floating-elements">
              <div className="floating-element floating-element-1">
                <GradientIcon icon={faWrench} size="xl" className="primary" />
              </div>
              <div className="floating-element floating-element-2">
                <GradientIcon icon={faTools} size="xl" className="success" />
              </div>
              <div className="floating-element floating-element-3">
                <GradientIcon icon={faShieldAlt} size="xl" className="success" />
              </div>
              <div className="floating-element floating-element-4">
                <GradientIcon icon={faRocket} size="xl" className="warning" />
              </div>
              <div className="floating-element floating-element-5">
                <GradientIcon icon={faCog} size="xl" className="primary" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="hero-content">
              <div className="hero-badge" data-aos="fade-up" data-aos-delay="100">
                <GradientIcon icon={faWrench} size="sm" className="primary" />
                <span>Emergency WordPress Repair</span>
              </div>
              <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
                Website Broken? <span className="gradient-text">We Can Fix It Today.</span>
              </h1>
              <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="300">
                Whether your site crashed, got hacked, or just stopped working — we'll get it running again.
              </p>
                  <div className="hero-cta" data-aos="fade-up" data-aos-delay="400">
                    <Link href="#priority-form" className="btn btn-primary btn-lg">
                      <GradientIcon icon={faWrench} size="sm" className="white" />
                      Book Emergency Repair
                    </Link>
                    <Link href="#diagnosis" className="btn btn-outline btn-lg">
                      <GradientIcon icon={faSearch} size="sm" className="primary" />
                      Free Quick Diagnosis
                    </Link>
                  </div>
              <div className="hero-stats" data-aos="fade-up" data-aos-delay="500">
                <div className="stat">
                  <span className="stat-number">80+</span>
                  <span className="stat-label">Sites Fixed in 2024</span>
                </div>
                <div className="stat">
                  <span className="stat-number">2hrs</span>
                  <span className="stat-label">Average Fix Time</span>
                </div>
                <div className="stat">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Emergency Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Issues Section */}
        <section id="diagnosis" className="section">
          <div className="section-floating-elements">
            <div className="section-floating-ball issues-ball-1"></div>
            <div className="section-floating-ball issues-ball-2"></div>
            <div className="section-floating-ball issues-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">We're the WordPress Mechanics.</h2>
              <p className="section-subtitle">
                Think of us like your emergency tech pit crew — we diagnose, repair, and stabilize your website before bigger problems start.
              </p>
            </div>
            <div className="issues-grid">
              {commonIssues.map((issue, index) => (
                <div key={index} className="issue-card">
                  <div className="issue-icon">
                    <GradientIcon icon={issue.icon} size="lg" className="primary" />
                  </div>
                  <h3 className="issue-title">{issue.title}</h3>
                  <p className="issue-description">{issue.description}</p>
                </div>
              ))}
            </div>
            <div className="section-cta">
              <Link href="#priority-form" className="btn btn-outline">
                <GradientIcon icon={faQuestionCircle} size="sm" className="primary" />
                Not sure what's wrong? We'll find out for you.
              </Link>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section bg-dark">
          <div className="section-floating-elements">
            <div className="section-floating-ball process-ball-1"></div>
            <div className="section-floating-ball process-ball-2"></div>
            <div className="section-floating-ball process-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Fast, Simple, and Secure Fixes</h2>
              <p className="section-subtitle">
                Our proven 3-step process gets your site back online quickly and safely.
              </p>
            </div>
            <div className="process-timeline">
              {processSteps.map((step, index) => (
                <div key={index} className="process-step">
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">
                    <div className="step-icon">
                      <GradientIcon icon={step.icon} size="xl" className="primary" />
                    </div>
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                    <div className="step-time">
                      <GradientIcon icon={faClock} size="sm" className="accent" />
                      {step.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section">
          <div className="section-floating-elements">
            <div className="section-floating-ball credibility-ball-1"></div>
            <div className="section-floating-ball credibility-ball-2"></div>
            <div className="section-floating-ball credibility-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Real Experts. Real Results.</h2>
              <p className="section-subtitle">
                We've helped hundreds of businesses get back online quickly and securely.
              </p>
            </div>
            <div className="credibility-grid">
              <div className="credibility-item">
                <div className="credibility-icon">
                  <GradientIcon icon={faCheckCircle} size="lg" className="success" />
                </div>
                <h3 className="credibility-title">Fixed 80+ Urgent Issues</h3>
                <p className="credibility-description">In 2024 alone, we've resolved critical website problems for businesses across the country.</p>
              </div>
              <div className="credibility-item">
                <div className="credibility-icon">
                  <GradientIcon icon={faClock} size="lg" className="primary" />
                </div>
                <h3 className="credibility-title">Fast Turnaround</h3>
                <p className="credibility-description">Most repairs completed within hours, not days. We understand every minute counts.</p>
              </div>
              <div className="credibility-item">
                <div className="credibility-icon">
                  <GradientIcon icon={faUserFriends} size="lg" className="accent" />
                </div>
                <h3 className="credibility-title">10+ Years Experience</h3>
                <p className="credibility-description">Our team has been fixing WordPress sites since the platform's early days.</p>
              </div>
              <div className="credibility-item">
                <div className="credibility-icon">
                  <GradientIcon icon={faPhone} size="lg" className="warning" />
                </div>
                <h3 className="credibility-title">U.S.-Based Support</h3>
                <p className="credibility-description">Friendly, professional support from our team in the United States.</p>
              </div>
            </div>
            
            {/* Testimonials */}
            <div className="testimonials-section">
              <h3 className="testimonials-title">What Our Clients Say</h3>
              <div className="testimonials-grid">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="testimonial-card">
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <GradientIcon key={i} icon={faStar} size="sm" className="warning" />
                      ))}
                    </div>
                    <p className="testimonial-text">"{testimonial.text}"</p>
                    <div className="testimonial-author">
                      <strong>{testimonial.author}</strong>
                      <span>{testimonial.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Add-On Services Section */}
        <section className="section bg-dark">
          <div className="section-floating-elements">
            <div className="section-floating-ball services-ball-1"></div>
            <div className="section-floating-ball services-ball-2"></div>
            <div className="section-floating-ball services-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Beyond Repairs — Keep Your Site Running Smoothly</h2>
              <p className="section-subtitle">
                Once we fix your immediate problem, let us help you prevent future issues.
              </p>
            </div>
            <div className="services-grid">
              {addOnServices.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-icon">
                    <GradientIcon icon={service.icon} size="lg" className="primary" />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              ))}
            </div>
            <div className="section-cta">
              <Link href="/contact" className="btn btn-primary">
                <GradientIcon icon={faArrowRight} size="sm" className="white" />
                Upgrade to a Maintenance Plan
              </Link>
            </div>
          </div>
        </section>

        {/* Priority Form Section */}
        <section id="priority-form" className="section cta-section">
          <div className="section-floating-elements">
            <div className="section-floating-ball priority-ball-1"></div>
            <div className="section-floating-ball priority-ball-2"></div>
            <div className="section-floating-ball priority-ball-3"></div>
          </div>
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Get Back Online Before You Lose Another Sale</h2>
              <p className="cta-subtitle">
                Priority Queue — Request Immediate Help
              </p>
              <ContactForm formId="priority-form" />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="section-floating-elements">
            <div className="section-floating-ball faq-ball-1"></div>
            <div className="section-floating-ball faq-ball-2"></div>
            <div className="section-floating-ball faq-ball-3"></div>
          </div>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Quick Answers</h2>
              <p className="section-subtitle">
                Common questions about our WordPress repair services.
              </p>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button className="faq-question">
                    <span>{faq.question}</span>
                    <GradientIcon icon={faQuestionCircle} size="sm" className="primary" />
                  </button>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section cta-section bg-primary">
          <div className="section-floating-elements">
            <div className="section-floating-ball final-cta-ball-1"></div>
            <div className="section-floating-ball final-cta-ball-2"></div>
            <div className="section-floating-ball final-cta-ball-3"></div>
          </div>
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Your Site Could Be Fixed Today.</h2>
              <p className="cta-subtitle">
                Don't let a broken website cost you customers. Get professional help now.
              </p>
              <div className="cta-buttons">
                <Link href="#priority-form" className="btn btn-white btn-lg">
                  <GradientIcon icon={faWrench} size="sm" className="primary" />
                  Book Emergency Repair
                </Link>
                <Link href="tel:+16466322070" className="btn btn-outline-white btn-lg">
                  <GradientIcon icon={faPhone} size="sm" className="white" />
                  Call (646) 632-2070
                </Link>
              </div>
              <p className="cta-note">
                Free diagnostics. Pay only if we fix it.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
