import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Digital Growth, WordPress & Analytics | Clyra Studios",
  description:
    "Articles on WordPress, migrations, SEO, security, hosting, and digital growth systems from Clyra Studios.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
