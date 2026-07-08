const SITE_URL = "https://clyrastudios.com";

export function getSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Clyra Studios",
        alternateName: "Clyra",
        description:
          "Digital growth systems consultancy helping businesses build, improve, automate, measure, and grow websites, analytics, AI systems, and marketing operations.",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/images/clyra_logo.png`,
        },
        image: `${SITE_URL}/images/thumbnail.png`,
        foundingDate: "2024",
        email: "rick@clyrastudios.com",
        telephone: "+1-646-632-2070",
        address: {
          "@type": "PostalAddress",
          addressLocality: "New York",
          addressRegion: "NY",
          addressCountry: "US",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-646-632-2070",
          contactType: "customer service",
          email: "rick@clyrastudios.com",
          areaServed: "US",
          availableLanguage: "English",
        },
        sameAs: [
          "https://twitter.com/clyrastudios",
          "https://linkedin.com/company/clyrastudios",
          "https://github.com/clyrastudios",
        ],
        knowsAbout: [
          "Website Development",
          "WordPress",
          "Analytics Dashboards",
          "GA4",
          "AI Business Systems",
          "Marketing Automation",
          "Technical SEO",
          "AEO",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness`,
        name: "Clyra Studios",
        description:
          "New York-based digital growth studio for website development, analytics, SEO, and AI automation.",
        url: SITE_URL,
        image: `${SITE_URL}/images/thumbnail.png`,
        telephone: "+1-646-632-2070",
        email: "rick@clyrastudios.com",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "New York",
          addressRegion: "NY",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 40.7128,
          longitude: -74.006,
        },
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
        parentOrganization: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Clyra Studios",
        description:
          "Websites, analytics dashboards, AI systems, and automation for modern businesses.",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        inLanguage: "en-US",
      },
    ],
  };
}
