import type { Metadata } from "next";
import AILabSolutionPage from "@/components/AILabSolutionPage";
import { virtualAssistantContent } from "@/content/ai-lab/virtual-assistant";

export const metadata: Metadata = {
  title: virtualAssistantContent.metadata.title,
  description: virtualAssistantContent.metadata.description,
  keywords: virtualAssistantContent.metadata.keywords,
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: { canonical: "/ai-lab/virtual-assistant" },
  openGraph: {
    title: virtualAssistantContent.metadata.title,
    description: virtualAssistantContent.metadata.description,
    url: "https://clyrastudios.com/ai-lab/virtual-assistant",
    type: "website",
  },
};

export default function VirtualAssistantPage() {
  return <AILabSolutionPage content={virtualAssistantContent} />;
}
