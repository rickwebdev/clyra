import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GradientIcon from "@/components/GradientIcon";
import { 
  faCheckCircle, 
  faTimesCircle, 
  faRocket, 
  faShieldAlt, 
  faHeadset, 
  faLock,
  faChartLine,
  faCog
} from '@fortawesome/free-solid-svg-icons';

export default function HostingPage() {
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
              <h1 className="inner-page-title">Why Choose DreamHost Managed WordPress Over GoDaddy</h1>
              <p className="inner-page-subtitle">
                If you're shopping for reliable, high-performance WordPress hosting, you'll hear a lot of names — DreamHost and GoDaddy often come up. But if your goal is scalability, security, performance, and peace of mind (with minimal maintenance), DreamHost's managed WordPress offerings deliver more long-term value.
              </p>
            </div>
          </div>
        </div>
        
        <div className="inner-page-main-content">
          <div className="inner-page-content">
            <div className="max-w-4xl mx-auto">
              
              {/* WordPress-First Architecture */}
              <div className="inner-page-card mb-8" data-aos="fade-up">
                <div className="flex items-start gap-4 mb-6">
                  <div className="service-icon">
                    <GradientIcon icon={faRocket} size="xl" className="primary" />
                  </div>
                  <div>
                    <h2 className="inner-page-card-title">1. WordPress-First Architecture & Optimization</h2>
                    <p className="inner-page-card-description">DreamPress / Managed WordPress by DreamHost is built specifically for WordPress, rather than adapting a generic hosting package.</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="dreamhost-pro">
                    <h3 className="text-white font-semibold mb-3">DreamHost Advantages</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <GradientIcon icon={faCheckCircle} size="sm" className="success" />
                        <span>Built-in caching & optimization at server level</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <GradientIcon icon={faCheckCircle} size="sm" className="success" />
                        <span>Automatic updates & managed maintenance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <GradientIcon icon={faCheckCircle} size="sm" className="success" />
                        <span>Free site migration (worth $199)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <GradientIcon icon={faCheckCircle} size="sm" className="success" />
                        <span>Staging environments for safe testing</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="godaddy-con">
                    <h3 className="text-white font-semibold mb-3">GoDaddy Limitations</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <GradientIcon icon={faTimesCircle} size="sm" className="danger" />
                        <span>More like basic shared hosting with WordPress features bolted on</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <GradientIcon icon={faTimesCircle} size="sm" className="danger" />
                        <span>Limited to single website in many plans</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <GradientIcon icon={faTimesCircle} size="sm" className="danger" />
                        <span>Lacks flexibility in plugin choices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <GradientIcon icon={faTimesCircle} size="sm" className="danger" />
                        <span>Limited advanced performance tuning</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pricing Comparison */}
              <div className="inner-page-card mb-8" data-aos="fade-up" data-aos-delay="100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="service-icon">
                    <GradientIcon icon={faChartLine} size="xl" className="primary" />
                  </div>
                  <div>
                    <h2 className="inner-page-card-title">2. Transparent Pricing & Better Value</h2>
                    <p className="inner-page-card-description">Cost comparisons often favor DreamHost when you factor in included features.</p>
                  </div>
                </div>
                
                <div className="cost-comparison">
                  <div className="cost-item">
                    <h3 className="text-white font-semibold mb-4">DreamHost DreamPress</h3>
                    <div className="cost-breakdown">
                      <div className="cost-line">Basic Plan: $16.95/month</div>
                      <div className="cost-line">✅ Free SSL included</div>
                      <div className="cost-line">✅ Free migrations included</div>
                      <div className="cost-line">✅ Caching included</div>
                      <div className="cost-line">✅ Daily backups included</div>
                      <div className="cost-line">✅ Domain privacy included</div>
                      <div className="cost-total">Total Value: $16.95/month</div>
                    </div>
                  </div>
                  
                  <div className="cost-item">
                    <h3 className="text-white font-semibold mb-4">GoDaddy Economy</h3>
                    <div className="cost-breakdown">
                      <div className="cost-line">Basic Plan: $6.99/month</div>
                      <div className="cost-line">❌ SSL: +$5.99/month</div>
                      <div className="cost-line">❌ Backups: +$2.99/month</div>
                      <div className="cost-line">❌ Security: +$3.99/month</div>
                      <div className="cost-line">❌ Domain privacy: +$9.99/year</div>
                      <div className="cost-line">❌ Migration: $199 one-time</div>
                      <div className="cost-total">Real Cost: ~$20+/month</div>
                    </div>
                  </div>
                </div>
                
                <div className="cost-note">
                  <p><strong>Bottom Line:</strong> While GoDaddy might appear cheaper upfront, DreamHost's included value often gives you more for your money over time.</p>
                </div>
              </div>

              {/* Reliability & Performance */}
              <div className="inner-page-card mb-8" data-aos="fade-up" data-aos-delay="200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="service-icon">
                    <GradientIcon icon={faShieldAlt} size="xl" className="primary" />
                  </div>
                  <div>
                    <h2 className="inner-page-card-title">3. Reliability, Uptime & Performance</h2>
                    <p className="inner-page-card-description">DreamHost tends to offer more consistent performance under real-world conditions for WordPress sites.</p>
                  </div>
                </div>
                
                <div className="performance-stats">
                  <div className="stat-item">
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Uptime Guarantee</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">1996</div>
                    <div className="stat-label">Founded (28+ years)</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">1M+</div>
                    <div className="stat-label">Domains Powered</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">WordPress.org</div>
                    <div className="stat-label">Officially Recommended</div>
                  </div>
                </div>
                
                <div className="performance-note">
                  <p><strong>Industry Credibility:</strong> DreamHost is one of only three hosting providers officially recommended by WordPress.org (alongside Bluehost and SiteGround). That's a strong endorsement.</p>
                </div>
              </div>

              {/* Support Comparison */}
              <div className="inner-page-card mb-8" data-aos="fade-up" data-aos-delay="300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="service-icon">
                    <GradientIcon icon={faHeadset} size="xl" className="primary" />
                  </div>
                  <div>
                    <h2 className="inner-page-card-title">4. Superior Support & Expertise for WordPress</h2>
                    <p className="inner-page-card-description">When your site is a critical business tool, having support that "gets WordPress" is a major differentiator.</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="dreamhost-pro">
                    <h3 className="text-white font-semibold mb-3">DreamHost Support</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <GradientIcon icon={faCheckCircle} size="sm" className="success" />
                        <span>24/7 support via live chat and tickets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <GradientIcon icon={faCheckCircle} size="sm" className="success" />
                        <span>WordPress-tuned support team</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <GradientIcon icon={faCheckCircle} size="sm" className="success" />
                        <span>Handles WP-specific issues (plugins, themes)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <GradientIcon icon={faCheckCircle} size="sm" className="success" />
                        <span>Fewer upsells, more transparent policies</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="godaddy-con">
                    <h3 className="text-white font-semibold mb-3">GoDaddy Support</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <GradientIcon icon={faTimesCircle} size="sm" className="danger" />
                        <span>Broad support across many hosting types</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <GradientIcon icon={faTimesCircle} size="sm" className="danger" />
                        <span>Reports of longer response times</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <GradientIcon icon={faTimesCircle} size="sm" className="danger" />
                        <span>Multiple tiers to get WP-specific help</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <GradientIcon icon={faTimesCircle} size="sm" className="danger" />
                        <span>History of aggressive upsells</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Freedom & Control */}
              <div className="inner-page-card mb-8" data-aos="fade-up" data-aos-delay="400">
                <div className="flex items-start gap-4 mb-6">
                  <div className="service-icon">
                    <GradientIcon icon={faLock} size="xl" className="primary" />
                  </div>
                  <div>
                    <h2 className="inner-page-card-title">5. Freedom, Ownership & Control</h2>
                    <p className="inner-page-card-description">DreamHost's architecture gives you more flexibility and control over your WordPress environment.</p>
                  </div>
                </div>
                
                <div className="migration-benefits">
                  <div className="flex items-start gap-3 mb-4">
                    <GradientIcon icon={faCheckCircle} size="sm" className="success" />
                    <div>
                      <strong>Full Access:</strong> You get complete access to WP files, can migrate, switch, configure as needed
                    </div>
                  </div>
                  <div className="flex items-start gap-3 mb-4">
                    <GradientIcon icon={faCheckCircle} size="sm" className="success" />
                    <div>
                      <strong>Plugin Freedom:</strong> Install any plugins you need without restrictions
                    </div>
                  </div>
                  <div className="flex items-start gap-3 mb-4">
                    <GradientIcon icon={faCheckCircle} size="sm" className="success" />
                    <div>
                      <strong>Configuration Control:</strong> Make advanced configuration changes as needed
                    </div>
                  </div>
                  <div className="flex items-start gap-3 mb-4">
                    <GradientIcon icon={faCheckCircle} size="sm" className="success" />
                    <div>
                      <strong>Migration Ready:</strong> Easy to change hosts or use advanced plugins
                    </div>
                  </div>
                </div>
              </div>

              {/* Potential Objections */}
              <div className="inner-page-card mb-8" data-aos="fade-up" data-aos-delay="500">
                <div className="flex items-start gap-4 mb-6">
                  <div className="service-icon">
                    <GradientIcon icon={faCog} size="xl" className="primary" />
                  </div>
                  <div>
                    <h2 className="inner-page-card-title">Potential Objections & Caveats</h2>
                    <p className="inner-page-card-description">We believe in transparency. Here are some considerations to keep in mind.</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <h4 className="text-yellow-400 font-semibold mb-2">Cost Consideration</h4>
                    <p className="text-muted">DreamPress is pricier than basic shared hosting. For small personal blogs, a lower-cost plan might suffice.</p>
                  </div>
                  
                  <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <h4 className="text-blue-400 font-semibold mb-2">Control Trade-offs</h4>
                    <p className="text-muted">In managed environments, you won't always control every server setting, but you get reliability and performance in return.</p>
                  </div>
                  
                  <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                    <h4 className="text-purple-400 font-semibold mb-2">Geographic Limitations</h4>
                    <p className="text-muted">DreamHost currently uses U.S.-based data centers, which might add latency for audiences far outside North America.</p>
                  </div>
                </div>
              </div>

              {/* Conclusion & CTA */}
              <div className="inner-page-card text-center" data-aos="fade-up" data-aos-delay="600">
                <h2 className="inner-page-card-title mb-4">Ready to Make the Switch?</h2>
                <p className="inner-page-card-description mb-6 text-lg">
                  If you're building a serious WordPress site — one that needs to scale, stay secure, and perform under load — DreamHost's managed WordPress (DreamPress) is a smarter long-term choice than GoDaddy's more generic or constrained options.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="https://click.dreamhost.com/aff_c?offer_id=8&aff_id=20354&aff_sub=&aff_sub5=/wordpress/managed-wp-hosting/?offer_id={offer_id}&transaction_id={transaction_id}&aff_sub5=/wordpress/managed-wp-hosting/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-large inline-block"
                  >
                    Start Your DreamPress Plan Here
                    <span className="btn-arrow">→</span>
                  </a>
                  
                    <p className="text-sm inner-page-card-description">
                    <strong>Exclusive Benefits:</strong> Free migration, 97-day money-back guarantee, and WordPress.org recommended hosting
                  </p>
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
