import type { Metadata } from "next";

export const growthPageMetadata: Metadata = {
  title: "Growth Website System | Clyra Studios",
  description: "Custom WordPress, conversion-optimized, CRM-integrated websites designed to generate 15–20+ qualified inquiries/month.",
  keywords: "growth website system, WordPress development, conversion optimization, lead generation, custom WordPress, CRM integration, local SEO, website strategy",
  authors: [{ name: "Clyra Studios" }],
  creator: "Clyra Studios",
  publisher: "Clyra Studios",
  metadataBase: new URL('https://clyrastudios.com'),
  alternates: {
    canonical: '/growth-website-system',
  },
  openGraph: {
    title: "Growth Website System | Clyra Studios",
    description: "Custom WordPress, conversion-optimized, CRM-integrated websites designed to generate 15–20+ qualified inquiries/month.",
    url: 'https://clyrastudios.com/growth-website-system',
    siteName: 'Clyra Studios',
    images: [
      {
        url: '/images/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Growth Website System - Clyra Studios',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Growth Website System | Clyra Studios',
    description: 'Custom WordPress, conversion-optimized, CRM-integrated websites designed to generate 15–20+ qualified inquiries/month.',
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
};
