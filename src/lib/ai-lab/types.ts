import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type AILabSolutionLink = {
  slug: string;
  title: string;
  href: string;
};

export type AILabSolutionContent = {
  slug: string;
  serviceName: string;
  metadata: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    eyebrow?: string;
    titleLine: string;
    titleHighlight: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  whatItDoes: {
    title: string;
    description: string;
  };
  whoItsFor: {
    title: string;
    description: string;
    audiences: string[];
  };
  useCases: string[];
  workflowSteps: {
    icon?: IconDefinition;
    label: string;
    description: string;
  }[];
  benefits: {
    title: string;
    description: string;
  }[];
  idealIndustries: string[];
  integrations: string[];
  exampleWorkflow: {
    title: string;
    intro?: string;
    turns: { speaker: string; message: string }[];
  };
  faqs: { question: string; answer: string }[];
};
