import type { Metadata } from "next";
import AILabSolutionPage from "@/components/AILabSolutionPage";
import { quoteBuilderContent } from "@/content/ai-lab/quote-builder";

export const metadata: Metadata = {
  title: quoteBuilderContent.metadata.title,
  description: quoteBuilderContent.metadata.description,
  keywords: quoteBuilderContent.metadata.keywords,
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: { canonical: "/ai-lab/quote-builder" },
  openGraph: {
    title: quoteBuilderContent.metadata.title,
    description: quoteBuilderContent.metadata.description,
    url: "https://clyrastudios.com/ai-lab/quote-builder",
    type: "website",
  },
};

export default function QuoteBuilderPage() {
  return <AILabSolutionPage content={quoteBuilderContent} />;
}
