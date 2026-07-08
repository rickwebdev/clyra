import type { AILabSolutionLink } from "./types";

export const AI_LAB_SOLUTION_LINKS: AILabSolutionLink[] = [
  {
    slug: "virtual-assistant",
    title: "AI Virtual Assistant",
    href: "/ai-lab/virtual-assistant",
  },
  {
    slug: "quote-builder",
    title: "AI Quote Builder",
    href: "/ai-lab/quote-builder",
  },
  {
    slug: "customer-intake",
    title: "AI Customer Intake",
    href: "/ai-lab/customer-intake",
  },
  {
    slug: "proposal-assistant",
    title: "AI Proposal Assistant",
    href: "/ai-lab/proposal-assistant",
  },
  {
    slug: "knowledge-assistant",
    title: "AI Knowledge Assistant",
    href: "/ai-lab/knowledge-assistant",
  },
  {
    slug: "website-audit",
    title: "AI Website Audit",
    href: "/site-audit",
  },
];

export function getOtherAILabLinks(currentSlug: string): AILabSolutionLink[] {
  return AI_LAB_SOLUTION_LINKS.filter((link) => link.slug !== currentSlug);
}
