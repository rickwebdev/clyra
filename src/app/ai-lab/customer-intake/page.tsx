import type { Metadata } from "next";
import AILabSolutionPage from "@/components/AILabSolutionPage";
import { customerIntakeContent } from "@/content/ai-lab/customer-intake";

export const metadata: Metadata = {
  title: customerIntakeContent.metadata.title,
  description: customerIntakeContent.metadata.description,
  keywords: customerIntakeContent.metadata.keywords,
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: { canonical: "/ai-lab/customer-intake" },
  openGraph: {
    title: customerIntakeContent.metadata.title,
    description: customerIntakeContent.metadata.description,
    url: "https://clyrastudios.com/ai-lab/customer-intake",
    type: "website",
  },
};

export default function CustomerIntakePage() {
  return <AILabSolutionPage content={customerIntakeContent} />;
}
