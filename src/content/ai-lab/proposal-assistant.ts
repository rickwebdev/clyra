import type { AILabSolutionContent } from "@/lib/ai-lab/types";
import {
  DEFAULT_AI_LAB_INTEGRATIONS,
  DEFAULT_STRATEGY_CTA,
  demoAccessCta,
} from "@/lib/ai-lab/defaults";
import {
  faFileLines,
  faPenToSquare,
  faScaleBalanced,
  faUserCheck,
  faFileContract,
} from "@fortawesome/free-solid-svg-icons";

export const proposalAssistantContent: AILabSolutionContent = {
  slug: "proposal-assistant",
  serviceName: "AI Proposal Assistant",
  metadata: {
    title: "AI Proposal Assistant for Agencies and Consultants | AI Lab",
    description:
      "Turn discovery notes into structured scopes, timelines, recommendations, and proposal-ready language for agencies and consultants.",
    keywords:
      "AI proposal assistant, proposal generator, SOW builder, agency proposals, scope of work automation, discovery to proposal",
  },
  hero: {
    eyebrow: "AI Lab · Proposals and scope",
    titleLine: "Turn Discovery Notes Into",
    titleHighlight: "Proposal-Ready Scope",
    description:
      "Convert call notes, intake answers, and project requirements into structured deliverables, timelines, assumptions, and client-facing language your team can review before sending.",
    primaryCta: demoAccessCta("proposal-assistant"),
    secondaryCta: DEFAULT_STRATEGY_CTA,
  },
  whatItDoes: {
    title: "What It Does",
    description:
      "The AI Proposal Assistant organizes messy discovery input into a draft scope of work with deliverables, phases, recommendations, and pricing sections. It helps agencies and consultants respond faster without losing consistency across projects.",
  },
  whoItsFor: {
    title: "Who It Is For",
    description:
      "Teams that write custom proposals, SOWs, and statements of work and need a faster path from discovery to a client-ready document.",
    audiences: [
      "Digital and marketing agencies",
      "Web development studios",
      "SEO and growth consultants",
      "Fractional operators and advisors",
      "Creative and branding teams",
    ],
  },
  useCases: [
    "Draft proposals from discovery call notes and intake forms",
    "Structure deliverables, milestones, and assumptions clearly",
    "Maintain consistent scope language across similar projects",
    "Generate optional add-ons based on project context",
    "Prepare internal review before client delivery",
  ],
  workflowSteps: [
    {
      icon: faFileLines,
      label: "Import discovery input",
      description:
        "Add call notes, intake answers, client goals, and known constraints from the sales process.",
    },
    {
      icon: faPenToSquare,
      label: "Draft scope sections",
      description:
        "The system organizes deliverables, timeline, responsibilities, and recommended approach.",
    },
    {
      icon: faScaleBalanced,
      label: "Check consistency",
      description:
        "Compare language and pricing structure against templates and similar past proposals.",
    },
    {
      icon: faUserCheck,
      label: "Team review",
      description:
        "Account and delivery leads adjust scope, pricing, and exclusions before client delivery.",
    },
    {
      icon: faFileContract,
      label: "Send proposal",
      description:
        "Approved documents move to PDF, CRM, or your proposal delivery workflow.",
    },
  ],
  benefits: [
    {
      title: "Save time",
      description:
        "Reduce the hours spent rebuilding proposal structure for every new opportunity.",
    },
    {
      title: "Reduce repetitive work",
      description:
        "Reuse proven scope language and section templates instead of copying old docs manually.",
    },
    {
      title: "Improve response times",
      description:
        "Send proposal drafts to clients sooner while the discovery conversation is still fresh.",
    },
    {
      title: "Increase qualified leads",
      description:
        "Follow up faster on strong opportunities with a clearer, more complete proposal.",
    },
    {
      title: "Improve customer experience",
      description:
        "Clients receive clearer scopes with fewer missing assumptions and better-defined deliverables.",
    },
  ],
  idealIndustries: [
    "Digital agencies",
    "Web development firms",
    "SEO consultancies",
    "Marketing studios",
    "Fractional executives",
    "Creative agencies",
    "B2B professional services",
  ],
  integrations: DEFAULT_AI_LAB_INTEGRATIONS,
  exampleWorkflow: {
    title: "Example Workflow",
    intro:
      "An agency finishes a discovery call with a SaaS company that needs a website migration and analytics cleanup.",
    turns: [
      {
        speaker: "Account lead",
        message:
          "Notes include current Webflow site, 40 pages, HubSpot forms, GA4 issues, and a Q2 relaunch target.",
      },
      {
        speaker: "AI Proposal Assistant",
        message:
          "Drafts scope with migration plan, redirect map, form rebuild, analytics implementation, QA, and launch support.",
      },
      {
        speaker: "Delivery lead",
        message:
          "Adds exclusions for net-new copywriting and confirms analytics audit assumptions.",
      },
      {
        speaker: "AI Proposal Assistant",
        message:
          "Updates proposal with phased timeline, client responsibilities, and optional CRO retainer add-on.",
      },
      {
        speaker: "System",
        message:
          "Final proposal exported for client review and attached to the CRM opportunity record.",
      },
    ],
  },
  faqs: [
    {
      question: "Will it send proposals without review?",
      answer:
        "No. The workflow is built for internal draft creation and human approval before anything client-facing is sent.",
    },
    {
      question: "Can it use our proposal templates?",
      answer:
        "Yes. The system is customized around your templates, pricing models, and standard scope language.",
    },
    {
      question: "Does it connect to Clyra Intelligence?",
      answer:
        "It can complement Clyra Intelligence modules for client memory, pricing history, and scope guard when deployed together.",
    },
    {
      question: "Can it suggest optional services?",
      answer:
        "Yes. Based on project context, it can recommend relevant add-ons your team can approve or remove.",
    },
    {
      question: "Who benefits most?",
      answer:
        "Agencies and consultants that write custom proposals often and need faster, more consistent first drafts.",
    },
  ],
};
