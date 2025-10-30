"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { 
    href: "/services", 
    label: "Services",
    submenu: [
      { href: "/wordpress-studio", label: "WordPress Studio" },
      { href: "/growth-website-system", label: "Growth Website System" },
      { href: "/redesign-migration", label: "Redesign & Migration" },
      { href: "/wordpress-mechanic", label: "WordPress Mechanic" },
    ]
  },
  { href: "/strategy-call", label: "Strategy Call" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
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
            <li key={link.href} className="nav-item">
              {link.submenu ? (
                <div 
                  className="dropdown-container"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`nav-link dropdown-trigger ${pathname.startsWith(link.href) ? 'active' : ''}`}
                    onClick={() => toggleDropdown(link.label)}
                  >
                    {link.label}
                    <span className="dropdown-arrow">▼</span>
                  </button>
                  <ul className={`dropdown-menu ${activeDropdown === link.label ? 'active' : ''}`}>
                    {link.submenu.map((subLink) => (
                      <li key={subLink.href}>
                        <Link 
                          href={subLink.href}
                          className={`dropdown-link ${pathname === subLink.href ? 'active' : ''}`}
                        >
                          {subLink.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link 
                  href={link.href}
                  className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              )}
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
              {link.submenu ? (
                <div className="mobile-dropdown">
                  <button
                    className="mobile-menu-link mobile-dropdown-trigger"
                    onClick={() => toggleDropdown(link.label)}
                  >
                    {link.label} {activeDropdown === link.label ? '▲' : '▼'}
                  </button>
                  <ul className={`mobile-dropdown-menu ${activeDropdown === link.label ? 'active' : ''}`}>
                    {link.submenu.map((subLink) => (
                      <li key={subLink.href}>
                        <Link 
                          href={subLink.href}
                          className="mobile-menu-link mobile-submenu-link"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subLink.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link 
                  href={link.href}
                  className="mobile-menu-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
          <li>
            <Link 
              href="/strategy-call" 
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