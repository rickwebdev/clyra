import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Audit & Technical Review | Clyra Studios",
  description:
    "Request a website audit covering performance, SEO, security, and conversion opportunities. Practical recommendations for businesses ready to improve their digital platform.",
  alternates: {
    canonical: "/site-audit",
  },
  openGraph: {
    title: "Website Audit & Technical Review | Clyra Studios",
    description:
      "Request a website audit covering performance, SEO, security, and conversion opportunities.",
    url: "https://clyrastudios.com/site-audit",
    type: "website",
  },
};

export default function SiteAuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
