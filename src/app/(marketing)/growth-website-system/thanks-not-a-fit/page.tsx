"use client";
import Link from "next/link";
import MinimalLandingLayout from "../_components/MinimalLandingLayout";
import GradientIcon from "@/components/GradientIcon";
import { faTimesCircle, faArrowLeft, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ThanksNotAFitPage() {
  const lowerTierUrl = process.env.NEXT_PUBLIC_LOWER_TIER_URL;

  return (
    <MinimalLandingLayout>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content text-center">
            <div className="hero-headlines">
              <div className="mb-6">
                <GradientIcon icon={faTimesCircle} size="xl" className="danger mx-auto" />
              </div>
              <h1 className="hero-title">
                Thanks for applying — here's your best next step
              </h1>
              <p className="hero-description">
                Our Growth Website System is reserved for teams ready to invest $3,000 or more. 
                If your budget grows, we'd love to talk.
              </p>
            </div>

            <div className="hero-actions">
              {lowerTierUrl && (
                <Link 
                  href={lowerTierUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-large mr-4"
                >
                  See smaller packages
                  <span className="btn-arrow">→</span>
                </Link>
              )}
              
              <Link 
                href="/"
                className="btn btn-secondary btn-large"
              >
                <GradientIcon icon={faArrowLeft} size="sm" className="mr-2" />
                Back to main site
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Options */}
      <section className="services-section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="service-card">
              <div className="service-content text-center">
                <h2 className="service-title">While you're here...</h2>
                <p className="text-gray-300 mb-6">
                  Here are some resources that might help you get started:
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-800 rounded-lg">
                    <h3 className="text-white font-semibold mb-2">Free Website Audit</h3>
                    <p className="text-gray-300 text-sm mb-3">
                      Get a detailed report on your current site's performance and conversion opportunities.
                    </p>
                    <Link 
                      href="/site-audit" 
                      className="text-blue-400 hover:text-blue-300 underline text-sm"
                    >
                      Request your free audit →
                    </Link>
                  </div>
                  
                  <div className="p-4 bg-gray-800 rounded-lg">
                    <h3 className="text-white font-semibold mb-2">WordPress Hosting</h3>
                    <p className="text-gray-300 text-sm mb-3">
                      Fast, secure hosting optimized for WordPress sites.
                    </p>
                    <Link 
                      href="/hosting" 
                      className="text-blue-400 hover:text-blue-300 underline text-sm"
                    >
                      View hosting options →
                    </Link>
                  </div>
                  
                  <div className="p-4 bg-gray-800 rounded-lg">
                    <h3 className="text-white font-semibold mb-2">Stay in Touch</h3>
                    <p className="text-gray-300 text-sm mb-3">
                      Follow our blog for WordPress tips and business growth strategies.
                    </p>
                    <Link 
                      href="/blog" 
                      className="text-blue-400 hover:text-blue-300 underline text-sm"
                    >
                      Read our blog →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-title">Questions?</h2>
            <p className="text-gray-300 mb-6">
              If you have questions about our services or want to discuss your project, 
              we're here to help.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-blue-400">
              <GradientIcon icon={faEnvelope} size="sm" />
              <a 
                href="mailto:hello@clyrastudios.com" 
                className="hover:text-blue-300 transition-colors"
              >
                hello@clyrastudios.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </MinimalLandingLayout>
  );
}
