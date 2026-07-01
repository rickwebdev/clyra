import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Clyra Studios</h3>
            <p className="text-muted">
              Digital growth systems for businesses that need to build, improve,
              automate, measure, and grow their digital platforms.
            </p>
          </div>

          <div className="footer-section">
            <h3>Websites &amp; Growth</h3>
            <ul>
              <li>
                <Link href="/wordpress-studio">WordPress Studio</Link>
              </li>
              <li>
                <Link href="/growth-website-system">Growth Website System</Link>
              </li>
              <li>
                <Link href="/redesign-migration">Redesign &amp; Migration</Link>
              </li>
              <li>
                <Link href="/migrations">Migration Services</Link>
              </li>
              <li>
                <Link href="/wordpress-mechanic">Website Rescue</Link>
              </li>
              <li>
                <Link href="/shopify-development">Shopify Development</Link>
              </li>
              <li>
                <Link href="/website-performance-optimization">
                  Website Performance
                </Link>
              </li>
              <li>
                <Link href="/headless-cms">Headless CMS</Link>
              </li>
              <li>
                <Link href="/react-nextjs-development">React &amp; Next.js</Link>
              </li>
              <li>
                <Link href="/api-integrations">API Integrations</Link>
              </li>
              <li>
                <Link href="/marketing-technology-consulting">
                  MarTech Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Analytics, SEO &amp; AI</h3>
            <ul>
              <li>
                <Link href="/google-analytics-looker-studio-dashboards">
                  Analytics Dashboards
                </Link>
              </li>
              <li>
                <Link href="/ga4-implementation">GA4 Implementation</Link>
              </li>
              <li>
                <Link href="/site-audit">Website Audit</Link>
              </li>
              <li>
                <Link href="/technical-seo">Technical SEO</Link>
              </li>
              <li>
                <Link href="/aeo-ai-search-optimization">
                  AEO &amp; AI Search
                </Link>
              </li>
              <li>
                <Link href="/ai-business-systems">AI Business Systems</Link>
              </li>
              <li>
                <Link href="/ai-content-automation">AI Content Growth</Link>
              </li>
              <li>
                <Link href="/business-process-automation">
                  Process Automation
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li>
                <Link href="/services">All Services</Link>
              </li>
              <li>
                <Link href="/case-studies">Selected Work</Link>
              </li>
              <li>
                <Link href="/comparisons">Platform Comparisons</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/strategy-call">Strategy Call</Link>
              </li>
              <li>
                <Link href="/rfp">Request for Proposal</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <a
                  href="https://rickthewebdev.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Founder Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Clyra Studios
        </div>
      </div>
    </footer>
  );
}
