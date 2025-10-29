import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ScrollEffects from "@/components/ScrollEffects";
import FloatingScrollEffects from "@/components/FloatingScrollEffects";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Clyra Studios — WordPress Rescue & Rebuild Specialists for SMBs",
  description: "Transform broken websites into lead-generating assets. WordPress rescue, migration, SEO optimization, and automation for restaurants, therapists, law firms, and SMBs. 24-hour emergency response.",
  keywords: "WordPress rescue, WordPress migration, WordPress SEO, WordPress security, Squarespace to WordPress, Wix to WordPress, WordPress agency, Core Web Vitals optimization, WordPress rebuild, WordPress automation, WordPress hosting, WordPress maintenance",
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
    canonical: '/',
  },
  openGraph: {
    title: "Clyra Studios — WordPress Rescue & Rebuild Specialists for SMBs",
    description: "Transform broken websites into lead-generating assets. WordPress rescue, migration, SEO optimization, and automation for restaurants, therapists, law firms, and SMBs. 24-hour emergency response.",
    url: 'https://clyrastudios.com',
    siteName: 'Clyra Studios',
    images: [
      {
        url: '/images/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Clyra Studios - WordPress Rescue & Rebuild Specialists',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clyra Studios — WordPress Rescue & Rebuild Specialists for SMBs',
    description: 'Transform broken websites into lead-generating assets. WordPress rescue, migration, SEO optimization, and automation for restaurants, therapists, law firms, and SMBs.',
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
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Clyra Studios",
  "alternateName": "Clyra",
  "description": "WordPress rescue and rebuild specialists for SMBs. Emergency response, migrations, SEO optimization, and automation services.",
  "url": "https://clyrastudios.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://clyrastudios.com/images/thumbnail.png",
    "width": 1200,
    "height": 630
  },
  "image": "https://clyrastudios.com/images/thumbnail.png",
  "foundingDate": "2024",
  "founder": {
    "@type": "Person",
    "name": "Clyra Studios Team"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-0123",
    "contactType": "customer service",
    "areaServed": "US",
    "availableLanguage": "English",
    "email": "rick@clyrastudios.com"
  },
  "sameAs": [
    "https://twitter.com/clyrastudios",
    "https://linkedin.com/company/clyrastudios",
    "https://github.com/clyrastudios"
  ],
  "service": [
    {
      "@type": "Service",
      "name": "WordPress Rescue",
      "description": "Emergency WordPress site recovery and security fixes with 24-hour response",
      "provider": {
        "@type": "Organization",
        "name": "Clyra Studios"
      },
      "areaServed": "US",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "WordPress Emergency Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "24-Hour Emergency Response"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Security Breach Recovery"
            }
          }
        ]
      }
    },
    {
      "@type": "Service", 
      "name": "WordPress Migration",
      "description": "Seamless platform migrations with SEO preservation and zero downtime",
      "provider": {
        "@type": "Organization",
        "name": "Clyra Studios"
      },
      "areaServed": "US",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "WordPress Migration Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Wix to WordPress Migration"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Squarespace to WordPress Migration"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Shopify to WordPress Migration"
            }
          }
        ]
      }
    },
    {
      "@type": "Service",
      "name": "WordPress SEO & AEO",
      "description": "Technical SEO optimization, Core Web Vitals improvement, and AI Engine Optimization",
      "provider": {
        "@type": "Organization",
        "name": "Clyra Studios"
      },
      "areaServed": "US"
    },
    {
      "@type": "Service",
      "name": "WordPress Automation",
      "description": "CRM integration, booking systems, and marketing automation for SMBs",
      "provider": {
        "@type": "Organization",
        "name": "Clyra Studios"
      },
      "areaServed": "US"
    }
  ],
  "knowsAbout": [
    "WordPress Development",
    "WordPress Security",
    "WordPress SEO",
    "WordPress Migration",
    "Core Web Vitals",
    "AI Engine Optimization",
    "WordPress Automation",
    "E-commerce Development",
    "Website Rescue",
    "Technical SEO"
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Free WordPress Site Audit"
      },
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <link rel="canonical" href="https://clyrastudios.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="Clyra Studios" />
        <meta name="robots" content="index, follow" />
        
        {/* AEO & AI Search Optimization */}
        <meta name="ai-content-type" content="business-services" />
        <meta name="ai-topic" content="WordPress development, website rescue, migration services" />
        <meta name="ai-expertise" content="WordPress rescue, WordPress migration, WordPress SEO, WordPress security, WordPress automation" />
        <meta name="ai-target-audience" content="small business owners, restaurants, therapists, law firms, e-commerce stores" />
        <meta name="ai-service-area" content="United States" />
        <meta name="ai-response-time" content="24 hours" />
        
        {/* Enhanced SEO Meta Tags */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        
        {/* Social Media & Sharing */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Clyra Studios - WordPress Rescue & Rebuild Specialists" />
        
        {/* Twitter Card Enhancement */}
        <meta name="twitter:image:alt" content="Clyra Studios - WordPress Rescue & Rebuild Specialists" />
        
        {/* Business Information */}
        <meta name="business:contact_data:street_address" content="" />
        <meta name="business:contact_data:locality" content="" />
        <meta name="business:contact_data:region" content="US" />
        <meta name="business:contact_data:postal_code" content="" />
        <meta name="business:contact_data:country_name" content="United States" />
        
        {/* Service-Specific Meta Tags */}
        <meta name="service:wordpress-rescue" content="24-hour emergency WordPress site recovery and security fixes" />
        <meta name="service:wordpress-migration" content="Seamless platform migrations with SEO preservation and zero downtime" />
        <meta name="service:wordpress-seo" content="Technical SEO optimization, Core Web Vitals improvement, and AI Engine Optimization" />
        <meta name="service:wordpress-automation" content="CRM integration, booking systems, and marketing automation for SMBs" />
        
        {/* Performance & Technical */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Clyra Studios" />
        
        {/* Favicon - Next.js automatically serves /public/favicon.ico */}
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-screen antialiased">
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(structuredData)}
        </Script>
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CC56KCXVC7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CC56KCXVC7');
          `}
        </Script>
        
        {/* Mobile Viewport Height Fix */}
        <Script id="mobile-viewport-fix" strategy="afterInteractive">
          {`
            // Use requestAnimationFrame to ensure DOM is ready
            requestAnimationFrame(function() {
              function setViewportHeight() {
                const vh = window.innerHeight * 0.01;
                document.documentElement.style.setProperty('--vh', vh + 'px');
                
                // Safari QR code specific fix
                if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')) {
                  // Detect if opened via QR code (no referrer and specific Safari behavior)
                  const isQRCodeAccess = !document.referrer && window.performance.navigation.type === 0;
                  
                  if (isQRCodeAccess || window.innerHeight < window.screen.height * 0.9) {
                    // Force Safari to recalculate viewport
                    document.documentElement.style.height = window.innerHeight + 'px';
                    document.body.style.height = window.innerHeight + 'px';
                    
                    // Add small delay and recalculate
                    setTimeout(() => {
                      const heroSection = document.querySelector('.hero-section');
                      if (heroSection) {
                        heroSection.style.minHeight = window.innerHeight + 'px';
                        heroSection.style.height = window.innerHeight + 'px';
                      }
                    }, 100);
                  }
                }
              }

              setViewportHeight();
              window.addEventListener('resize', setViewportHeight);
              window.addEventListener('orientationchange', setViewportHeight);
              
              // Additional Safari QR code detection
              if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')) {
                window.addEventListener('load', () => {
                  setTimeout(setViewportHeight, 200);
                });
              }
            });
          `}
        </Script>
        <ScrollEffects />
        <FloatingScrollEffects />
        {children}
      </body>
    </html>
  );
}