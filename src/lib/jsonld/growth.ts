export function getGrowthPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Growth Website System - Websites That Bring You Clients",
    "description": "Our Growth Website System turns your site into your best salesperson. Done-for-you strategy, design, and tech—so you get leads while you sleep.",
    "url": "https://clyrastudios.com/growth-website-system",
    "mainEntity": {
      "@type": "Service",
      "name": "Growth Website System",
      "description": "We build custom WordPress sites that convert: fast, mobile-first, integrated with your CRM, and paired with a simple funnel that consistently generates new client inquiries.",
      "provider": {
        "@type": "Organization",
        "name": "Clyra Studios",
        "url": "https://clyrastudios.com",
        "logo": "https://clyrastudios.com/images/clyra_logo.png"
      },
      "serviceType": "Website Development",
      "areaServed": "US",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Growth Website System Components",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom WordPress Build"
            },
            "description": "Own your code, no platform lock-in"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Conversion Architecture"
            },
            "description": "Sticky CTAs, lead forms, booking"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Local SEO Setup"
            },
            "description": "Google Business, on-page SEO, schema"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "CRM & Integrations"
            },
            "description": "HubSpot, Salesforce, Zoho, custom"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Training & Handoff"
            },
            "description": "No black box"
          }
        ]
      },
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceRange": "$5,000–$12,500"
        },
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-01-01"
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://clyrastudios.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Growth Website System",
          "item": "https://clyrastudios.com/growth-website-system"
        }
      ]
    }
  };
}
