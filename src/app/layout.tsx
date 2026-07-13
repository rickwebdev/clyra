import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Inter, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ScrollEffects from "@/components/ScrollEffects";
import FloatingScrollEffects from "@/components/FloatingScrollEffects";
import CookieConsent from "@/components/CookieConsent";
import ConsentAnalytics from "@/components/ConsentAnalytics";
import { getSiteJsonLd } from "@/lib/jsonld/site";

const siteJsonLd = getSiteJsonLd();

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Clyra Studios | Digital Growth Systems: Websites, Analytics & AI",
  description: "Clyra Studios helps businesses build, improve, automate, measure, and grow digital platforms. Websites, analytics dashboards, AI systems, and automation for small and mid-size businesses.",
  keywords: "digital growth systems, website development, WordPress, analytics dashboards, AI automation, business process automation, SEO, Looker Studio, GA4, marketing automation",
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
    title: "Clyra Studios | Digital Growth Systems: Websites, Analytics & AI",
    description: "Build, improve, automate, measure, and grow digital platforms. Websites, analytics, AI systems, and automation for modern businesses.",
    url: 'https://clyrastudios.com',
    siteName: 'Clyra Studios',
    images: [
      {
        url: '/images/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Clyra Studios - Digital Growth Systems',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clyra Studios | Digital Growth Systems',
    description: 'Build, improve, automate, measure, and grow digital platforms for modern businesses.',
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/images/favicon.png',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        {/* AEO & AI Search Optimization */}
        <meta name="ai-content-type" content="business-services" />
        <meta name="ai-topic" content="digital growth systems, managed websites, website development, analytics, migration services" />
        <meta name="ai-expertise" content="managed websites, website design, WordPress development, analytics dashboards, SEO, AI automation" />
        <meta name="ai-target-audience" content="small business owners, restaurants, therapists, law firms, e-commerce stores" />
        <meta name="ai-service-area" content="United States" />
        <meta name="ai-response-time" content="24 hours" />
        
        {/* Enhanced SEO Meta Tags */}
        <meta name="geo.region" content="US-NY" />
        <meta name="geo.placename" content="New York" />
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
        <meta name="business:contact_data:locality" content="New York" />
        <meta name="business:contact_data:region" content="NY" />
        <meta name="business:contact_data:postal_code" content="" />
        <meta name="business:contact_data:country_name" content="United States" />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        
        {/* Service-Specific Meta Tags */}
        <meta name="service:wordpress-rescue" content="24-hour emergency WordPress site recovery and security fixes" />
        <meta name="service:wordpress-migration" content="Platform migrations with SEO preservation and minimal downtime" />
        <meta name="service:wordpress-seo" content="Technical SEO optimization, Core Web Vitals improvement, and AI Engine Optimization" />
        <meta name="service:wordpress-automation" content="CRM integration, booking systems, and marketing automation for SMBs" />
        
        {/* Performance & Technical */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Clyra Studios" />
        
        <meta name="msapplication-TileColor" content="#000000" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-screen antialiased">
        <Script id="gtag-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500,
              security_storage: 'granted',
              functionality_storage: 'granted'
            });
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
        <Suspense fallback={null}>
          <ConsentAnalytics />
        </Suspense>
        <CookieConsent />
        {children}
      </body>
    </html>
  );
}