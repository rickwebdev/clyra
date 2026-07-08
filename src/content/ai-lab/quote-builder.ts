import type { AILabSolutionContent } from "@/lib/ai-lab/types";
import {
  DEFAULT_AI_LAB_INTEGRATIONS,
  DEFAULT_STRATEGY_CTA,
  demoAccessCta,
} from "@/lib/ai-lab/defaults";
import {
  faCalculator,
  faClipboardCheck,
  faFileLines,
  faPenToSquare,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

export const quoteBuilderContent: AILabSolutionContent = {
  slug: "quote-builder",
  serviceName: "AI Quote Builder",
  metadata: {
    title: "AI Quote Builder for Contractors and Service Businesses | AI Lab",
    description:
      "Generate guided project estimates with consistent line items, scope notes, and pricing structure for contractors and service businesses.",
    keywords:
      "AI quote builder, estimate generator, contractor quoting software, service business estimates, AI pricing assistant",
  },
  hero: {
    eyebrow: "AI Lab · Quoting and estimates",
    titleLine: "Build Accurate Quotes",
    titleHighlight: "Without Starting From Scratch",
    description:
      "Turn job details into structured estimates with line items, labor, materials, exclusions, and follow-up notes your team can review before sending. Built for businesses that quote by phone, email, and field visits.",
    primaryCta: demoAccessCta("quote-builder"),
    secondaryCta: DEFAULT_STRATEGY_CTA,
  },
  whatItDoes: {
    title: "What It Does",
    description:
      "The AI Quote Builder guides your team through project inputs, applies your pricing rules, and produces a draft estimate ready for review. It helps you respond faster while keeping scope language and pricing structure consistent across jobs.",
  },
  whoItsFor: {
    title: "Who It Is For",
    description:
      "Teams that create custom estimates regularly and lose time rebuilding similar quotes for comparable jobs.",
    audiences: [
      "General contractors and remodelers",
      "HVAC, plumbing, and electrical companies",
      "Landscaping and outdoor service providers",
      "Cleaning and maintenance businesses",
      "Professional services with project-based pricing",
    ],
  },
  useCases: [
    "Generate draft estimates from job site notes or customer intake forms",
    "Apply standard labor rates, material markups, and service packages",
    "Include exclusions and assumptions to reduce scope disputes later",
    "Reuse pricing patterns from similar past projects",
    "Export a client-ready quote after internal review",
  ],
  workflowSteps: [
    {
      icon: faClipboardCheck,
      label: "Capture job details",
      description:
        "Enter project type, location, measurements, materials, and any special conditions from the customer conversation.",
    },
    {
      icon: faCalculator,
      label: "Apply pricing rules",
      description:
        "The system uses your rate cards, packages, and markup rules to structure the estimate.",
    },
    {
      icon: faFileLines,
      label: "Draft line items",
      description:
        "Labor, materials, permits, and optional add-ons are organized into a readable quote format.",
    },
    {
      icon: faPenToSquare,
      label: "Review and adjust",
      description:
        "Your team edits pricing, scope language, and exclusions before anything goes to the client.",
    },
    {
      icon: faPaperPlane,
      label: "Send or log the quote",
      description:
        "Approved estimates can be sent to the customer and logged in your CRM or job system.",
    },
  ],
  benefits: [
    {
      title: "Save time",
      description:
        "Cut hours spent rebuilding estimates for jobs your team has quoted dozens of times before.",
    },
    {
      title: "Reduce repetitive work",
      description:
        "Reuse pricing templates and standard scope language instead of rewriting every quote manually.",
    },
    {
      title: "Improve response times",
      description:
        "Send draft estimates back to customers faster while the request is still warm.",
    },
    {
      title: "Increase qualified leads",
      description:
        "Respond quickly to estimate requests so serious buyers do not move on to the next contractor.",
    },
    {
      title: "Improve customer experience",
      description:
        "Deliver clearer, more professional quotes with consistent structure and fewer missing details.",
    },
  ],
  idealIndustries: [
    "General contracting",
    "Home renovation",
    "HVAC and plumbing",
    "Landscaping",
    "Cleaning services",
    "Property maintenance",
    "Professional services",
  ],
  integrations: DEFAULT_AI_LAB_INTEGRATIONS,
  exampleWorkflow: {
    title: "Example Workflow",
    intro:
      "A landscaping company receives a request for a backyard patio and planting package.",
    turns: [
      {
        speaker: "Office manager",
        message:
          "Customer wants a 220 sq ft paver patio, planting beds along the fence line, and removal of an old gravel path.",
      },
      {
        speaker: "AI Quote Builder",
        message:
          "Draft estimate created: demo and prep, base material, paver install, planting package, disposal, and optional lighting add-on.",
      },
      {
        speaker: "Estimator",
        message:
          "Adjusts paver tier, adds drainage note, and confirms labor hours based on site access constraints.",
      },
      {
        speaker: "AI Quote Builder",
        message:
          "Updated quote includes exclusions for irrigation repair and a note that final price depends on utility markout results.",
      },
      {
        speaker: "System",
        message:
          "Approved estimate exported to PDF and attached to the CRM opportunity for follow-up.",
      },
    ],
  },
  faqs: [
    {
      question: "Can it replace our estimator?",
      answer:
        "No. It accelerates draft creation and keeps structure consistent. Your team still reviews pricing, scope, and job-specific assumptions before sending.",
    },
    {
      question: "Can we use our own pricing sheets?",
      answer:
        "Yes. The system is customized around your rate cards, packages, markups, and standard line items.",
    },
    {
      question: "Does it remember past quotes?",
      answer:
        "It can reference pricing patterns and similar scopes when configured with your historical quote data and templates.",
    },
    {
      question: "Can quotes include exclusions?",
      answer:
        "Yes. Clear exclusions and assumptions are an important part of the workflow to reduce later disputes.",
    },
    {
      question: "Who is this best for?",
      answer:
        "Businesses that quote custom jobs regularly and need a faster, more consistent starting point for every estimate.",
    },
  ],
};
