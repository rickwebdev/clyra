import type { Metadata } from "next";

export const growthPageMetadata: Metadata = {
  title:
    "Growth Website System | Custom Website Strategy, SEO & Analytics | Clyra Studios",
  description:
    "Custom growth websites for businesses that need more leads, better SEO, analytics, automation, and conversion-focused design. Built by Clyra Studios.",
  keywords:
    "growth website system, custom website strategy, conversion-focused website, WordPress development, Next.js websites, SEO analytics automation, lead generation website",
  authors: [{ name: "Clyra Studios" }],
  creator: "Clyra Studios",
  publisher: "Clyra Studios",
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: {
    canonical: "/growth-website-system",
  },
  openGraph: {
    title:
      "Growth Website System | Custom Website Strategy, SEO & Analytics | Clyra Studios",
    description:
      "Custom growth websites for businesses that need more leads, better SEO, analytics, automation, and conversion-focused design.",
    url: "https://clyrastudios.com/growth-website-system",
    siteName: "Clyra Studios",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Growth Website System - Clyra Studios",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Growth Website System | Custom Website Strategy, SEO & Analytics | Clyra Studios",
    description:
      "Custom growth websites for businesses that need more leads, better SEO, analytics, automation, and conversion-focused design.",
    images: ["/images/thumbnail.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
