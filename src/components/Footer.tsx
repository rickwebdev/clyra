import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Clyra Studios</h3>
            <p className="text-muted">
              Premium WordPress builds, migrations, and growth systems.
            </p>
          </div>
          
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><Link href="/services#custom-builds">Custom Builds</Link></li>
              <li><Link href="/services#rescues">Rescues & Fixes</Link></li>
              <li><Link href="/migrations">Migrations</Link></li>
              <li><Link href="/services#seo">SEO & Core Web Vitals</Link></li>
              <li><Link href="/services#ux">UX & CRO</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><Link href="/comparisons">WordPress vs</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
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