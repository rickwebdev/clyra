"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/comparisons", label: "WordPress vs" },
  { href: "/migrations", label: "Migrations" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="nav">
      <div className="nav-content">
        <Link href="/" className="logo">
          <Image
            src="/images/clyra_logo.png"
            alt="Clyra Studios"
            width={120}
            height={40}
            className="logo-image"
          />
        </Link>
        
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href}
                className={`nav-link ${pathname === link.href ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="nav-phone">
            <a href="tel:+16466322070" className="phone-number">
              +1 (646) 632-2070
            </a>
          </li>
        </ul>
        
        <button 
          className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-menu-links">
          {links.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href}
                className="mobile-menu-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link 
              href="/contact" 
              className="btn btn-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a call
            </Link>
          </li>
          <li className="mobile-phone">
            <a href="tel:+16466322070" className="mobile-phone-number">
              +1 (646) 632-2070
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}