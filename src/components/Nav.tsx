"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

type SubmenuItem = {
  href: string;
  label: string;
  group?: string;
};

type NavLink = {
  href: string;
  label: string;
  submenu?: SubmenuItem[];
  dropdownColumns?: string[][];
};

function groupSubmenuItems(
  submenu: SubmenuItem[],
): { group: string; items: SubmenuItem[] }[] {
  const groups: { group: string; items: SubmenuItem[] }[] = [];

  for (const item of submenu) {
    const groupName = item.group || "More";
    const existing = groups.find((g) => g.group === groupName);
    if (existing) {
      existing.items.push(item);
    } else {
      groups.push({ group: groupName, items: [item] });
    }
  }

  return groups;
}

function renderColumnSubmenu(
  submenu: SubmenuItem[],
  columns: string[][],
  pathname: string,
) {
  const grouped = groupSubmenuItems(submenu);

  return (
    <li className="dropdown-menu-columns-wrap">
      <div className="dropdown-menu-grid">
        {columns.map((columnGroups, columnIndex) => (
          <div key={columnIndex} className="dropdown-column">
            {columnGroups.map((groupName) => {
              const group = grouped.find((g) => g.group === groupName);
              if (!group) return null;

              return (
                <div key={groupName} className="dropdown-group">
                  <span className="dropdown-group-label">{groupName}</span>
                  <ul className="dropdown-group-links">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`dropdown-link ${pathname === item.href ? "active" : ""}`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </li>
  );
}

const links: NavLink[] = [
  {
    href: "/services",
    label: "Services",
    submenu: [
      {
        group: "Websites & Growth",
        href: "/wordpress-studio",
        label: "WordPress Studio",
      },
      {
        group: "Websites & Growth",
        href: "/growth-website-system",
        label: "Growth Website System",
      },
      {
        group: "Websites & Growth",
        href: "/managed-websites",
        label: "Managed Websites",
      },
      {
        group: "Websites & Growth",
        href: "/redesign-migration",
        label: "Redesign & Migration",
      },
      {
        group: "Websites & Growth",
        href: "/migrations",
        label: "Migration Services",
      },
      {
        group: "Websites & Growth",
        href: "/wordpress-mechanic",
        label: "Website Rescue",
      },
      {
        group: "Websites & Growth",
        href: "/shopify-development",
        label: "Shopify Development",
      },
      {
        group: "Websites & Growth",
        href: "/website-performance-optimization",
        label: "Website Performance",
      },
      {
        group: "Platforms & Engineering",
        href: "/headless-cms",
        label: "Headless CMS",
      },
      {
        group: "Platforms & Engineering",
        href: "/react-nextjs-development",
        label: "React & Next.js",
      },
      {
        group: "Platforms & Engineering",
        href: "/api-integrations",
        label: "API Integrations",
      },
      {
        group: "Platforms & Engineering",
        href: "/marketing-technology-consulting",
        label: "MarTech Consulting",
      },
      {
        group: "Analytics & Measurement",
        href: "/google-analytics-looker-studio-dashboards",
        label: "Analytics Dashboards",
      },
      {
        group: "Analytics & Measurement",
        href: "/ga4-implementation",
        label: "GA4 Implementation",
      },
      {
        group: "Analytics & Measurement",
        href: "/site-audit",
        label: "Website Audit",
      },
      {
        group: "SEO & Discovery",
        href: "/technical-seo",
        label: "Technical SEO",
      },
      {
        group: "SEO & Discovery",
        href: "/aeo-ai-search-optimization",
        label: "AEO & AI Search",
      },
      { group: "Proposals", href: "/rfp", label: "Request for Proposal" },
    ],
    dropdownColumns: [
      ["Websites & Growth", "Analytics & Measurement"],
      ["Platforms & Engineering", "SEO & Discovery", "Proposals"],
    ],
  },
  {
    href: "/ai-business-systems",
    label: "AI Systems",
    submenu: [
      {
        group: "AI Services",
        href: "/ai-business-systems",
        label: "AI Business Systems Overview",
      },
      {
        group: "AI Services",
        href: "/ai-content-automation",
        label: "AI Content Growth Systems",
      },
      {
        group: "AI Services",
        href: "/ai-creative-automation",
        label: "AI Creative Automation",
      },
      {
        group: "AI Services",
        href: "/ai-marketing-automation",
        label: "AI Marketing Automation",
      },
      {
        group: "AI Services",
        href: "/business-process-automation",
        label: "Business Process Automation",
      },
      {
        group: "AI Services",
        href: "/fractional-digital-systems-consultant",
        label: "Fractional Digital Systems Consultant",
      },
      {
        group: "Clyra Intelligence · Beta",
        href: "/ai-client-intelligence",
        label: "Overview",
      },
      {
        group: "Clyra Intelligence · Beta",
        href: "/ai-proposal-assistant",
        label: "AI Proposal Assistant",
      },
      {
        group: "Clyra Intelligence · Beta",
        href: "/ai-scope-guard",
        label: "AI Scope Guard",
      },
      {
        group: "Clyra Intelligence · Beta",
        href: "/ai-client-memory",
        label: "AI Client Memory",
      },
      {
        group: "Clyra Intelligence · Beta",
        href: "/ai-agency-operating-system",
        label: "Agency Operating System",
      },
      {
        group: "Clyra Intelligence · Beta",
        href: "/clyra-intelligence-features",
        label: "Features",
      },
      {
        group: "Clyra Intelligence · Beta",
        href: "/clyra-intelligence-use-cases",
        label: "Use Cases",
      },
      {
        group: "Clyra Intelligence · Beta",
        href: "/clyra-intelligence-comparison",
        label: "vs CRMs",
      },
    ],
    dropdownColumns: [["AI Services"], ["Clyra Intelligence · Beta"]],
  },
  {
    href: "/case-studies",
    label: "Resources",
    submenu: [
      { href: "/case-studies", label: "Selected Work" },
      { href: "/blog", label: "Blog" },
      { href: "/comparisons", label: "Platform Comparisons" },
    ],
  },
  { href: "/strategy-call", label: "Strategy Call" },
  { href: "/contact", label: "Contact" },
];

function renderSubmenuItems(
  submenu: SubmenuItem[],
  pathname: string,
  onNavigate?: () => void,
  linkClassName = "dropdown-link",
) {
  return submenu.map((subLink, index) => {
    const prev = submenu[index - 1];
    const showGroup =
      subLink.group && subLink.group !== prev?.group;

    return (
      <li key={subLink.href}>
        {showGroup && (
          <span className="dropdown-group-label">{subLink.group}</span>
        )}
        <Link
          href={subLink.href}
          className={`${linkClassName} ${pathname === subLink.href ? "active" : ""}`}
          onClick={onNavigate}
        >
          {subLink.label}
        </Link>
      </li>
    );
  });
}

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

  const isLinkActive = (link: NavLink) => {
    if (pathname === link.href) return true;
    if (link.submenu?.some((item) => pathname === item.href)) return true;
    if (link.href !== "/" && pathname.startsWith(link.href)) return true;
    return false;
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
                    className={`nav-link dropdown-trigger ${isLinkActive(link) ? "active" : ""}`}
                    onClick={() => toggleDropdown(link.label)}
                  >
                    {link.label}
                    <span className="dropdown-arrow">▼</span>
                  </button>
                  <ul
                    className={`dropdown-menu ${link.dropdownColumns ? "dropdown-menu--columns" : ""} ${activeDropdown === link.label ? "active" : ""}`}
                  >
                    {link.dropdownColumns
                      ? renderColumnSubmenu(
                          link.submenu,
                          link.dropdownColumns,
                          pathname,
                        )
                      : renderSubmenuItems(link.submenu, pathname)}
                  </ul>
                </div>
              ) : (
                <Link
                  href={link.href}
                  className={`nav-link ${pathname === link.href ? "active" : ""}`}
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
          className={`mobile-menu-btn ${mobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
        <ul className="mobile-menu-links">
          {links.map((link) => (
            <li key={link.href}>
              {link.submenu ? (
                <div className="mobile-dropdown">
                  <button
                    className="mobile-menu-link mobile-dropdown-trigger"
                    onClick={() => toggleDropdown(link.label)}
                  >
                    {link.label} {activeDropdown === link.label ? "▲" : "▼"}
                  </button>
                  <ul
                    className={`mobile-dropdown-menu ${activeDropdown === link.label ? "active" : ""}`}
                  >
                    {renderSubmenuItems(
                      link.submenu,
                      pathname,
                      () => setMobileMenuOpen(false),
                      "mobile-menu-link mobile-submenu-link",
                    )}
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
