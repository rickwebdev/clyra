import type { Metadata } from "next";
import AILabSolutionPage from "@/components/AILabSolutionPage";
import { knowledgeAssistantContent } from "@/content/ai-lab/knowledge-assistant";

export const metadata: Metadata = {
  title: knowledgeAssistantContent.metadata.title,
  description: knowledgeAssistantContent.metadata.description,
  keywords: knowledgeAssistantContent.metadata.keywords,
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: { canonical: "/ai-lab/knowledge-assistant" },
  openGraph: {
    title: knowledgeAssistantContent.metadata.title,
    description: knowledgeAssistantContent.metadata.description,
    url: "https://clyrastudios.com/ai-lab/knowledge-assistant",
    type: "website",
  },
};

export default function KnowledgeAssistantPage() {
  return <AILabSolutionPage content={knowledgeAssistantContent} />;
}
