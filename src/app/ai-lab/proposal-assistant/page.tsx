import type { Metadata } from "next";
import AILabSolutionPage from "@/components/AILabSolutionPage";
import { proposalAssistantContent } from "@/content/ai-lab/proposal-assistant";

export const metadata: Metadata = {
  title: proposalAssistantContent.metadata.title,
  description: proposalAssistantContent.metadata.description,
  keywords: proposalAssistantContent.metadata.keywords,
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: { canonical: "/ai-lab/proposal-assistant" },
  openGraph: {
    title: proposalAssistantContent.metadata.title,
    description: proposalAssistantContent.metadata.description,
    url: "https://clyrastudios.com/ai-lab/proposal-assistant",
    type: "website",
  },
};

export default function ProposalAssistantPage() {
  return <AILabSolutionPage content={proposalAssistantContent} />;
}
