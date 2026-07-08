import type { AILabSolutionContent } from "@/lib/ai-lab/types";
import {
  DEFAULT_AI_LAB_INTEGRATIONS,
  DEFAULT_STRATEGY_CTA,
  demoAccessCta,
} from "@/lib/ai-lab/defaults";
import {
  faBook,
  faMagnifyingGlass,
  faBrain,
  faUserCheck,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

export const knowledgeAssistantContent: AILabSolutionContent = {
  slug: "knowledge-assistant",
  serviceName: "AI Knowledge Assistant",
  metadata: {
    title: "AI Knowledge Assistant for Teams | AI Lab | Clyra Studios",
    description:
      "Search company documents, policies, services, and internal knowledge through a guided AI assistant connected to your approved content sources.",
    keywords:
      "AI knowledge assistant, internal knowledge base search, company document search, RAG assistant, team knowledge management",
  },
  hero: {
    eyebrow: "AI Lab · Internal knowledge",
    titleLine: "Find Company Answers",
    titleHighlight: "Without Digging Through Files",
    description:
      "Give your team a guided assistant that searches approved documents, policies, service descriptions, and process docs. Useful for onboarding, client support, operations, and day-to-day decision making.",
    primaryCta: demoAccessCta("knowledge-assistant"),
    secondaryCta: DEFAULT_STRATEGY_CTA,
  },
  whatItDoes: {
    title: "What It Does",
    description:
      "The AI Knowledge Assistant connects to your internal content sources and answers questions with context from approved documents. It helps teams find the right policy, process, pricing note, or service detail without opening ten folders or pinging a senior team member.",
  },
  whoItsFor: {
    title: "Who It Is For",
    description:
      "Organizations with scattered documentation, repeated internal questions, and teams that need fast access to approved company knowledge.",
    audiences: [
      "Agencies with service and process documentation",
      "Operations and support teams",
      "Sales teams needing pricing and service details",
      "Growing companies onboarding new staff",
      "Professional services firms with policy-heavy workflows",
    ],
  },
  useCases: [
    "Answer internal questions about services, pricing rules, and delivery process",
    "Support client-facing teams with approved talking points and policy language",
    "Speed up onboarding for new hires and contractors",
    "Search SOPs, handbooks, and project documentation in one place",
    "Reduce repeated Slack or email questions to senior staff",
  ],
  workflowSteps: [
    {
      icon: faBook,
      label: "Connect approved sources",
      description:
        "Index policies, SOPs, service docs, FAQs, and other approved internal content.",
    },
    {
      icon: faMagnifyingGlass,
      label: "Ask a question",
      description:
        "Team members search in natural language for the process, policy, or service detail they need.",
    },
    {
      icon: faBrain,
      label: "Retrieve grounded answers",
      description:
        "The assistant returns answers based on connected documents, not generic guesses.",
    },
    {
      icon: faLink,
      label: "Show source references",
      description:
        "Responses can include links or references to the underlying document sections when configured.",
    },
    {
      icon: faUserCheck,
      label: "Escalate when needed",
      description:
        "Unclear or out-of-scope questions route to the right owner instead of producing unreliable answers.",
    },
  ],
  benefits: [
    {
      title: "Save time",
      description:
        "Stop wasting hours searching shared drives, old proposals, and chat history for the same answers.",
    },
    {
      title: "Reduce repetitive work",
      description:
        "Senior staff spend less time answering the same internal questions every week.",
    },
    {
      title: "Improve response times",
      description:
        "Support, sales, and operations teams get answers immediately during live client work.",
    },
    {
      title: "Increase qualified leads",
      description:
        "Sales and account teams respond with accurate service details and approved language faster.",
    },
    {
      title: "Improve customer experience",
      description:
        "Clients get consistent answers because frontline teams can access the same approved knowledge base.",
    },
  ],
  idealIndustries: [
    "Agencies and studios",
    "Professional services",
    "Healthcare administration",
    "Legal and compliance teams",
    "Operations-heavy businesses",
    "Remote and distributed teams",
    "Franchise and multi-location operators",
  ],
  integrations: DEFAULT_AI_LAB_INTEGRATIONS,
  exampleWorkflow: {
    title: "Example Workflow",
    intro:
      "A new account coordinator needs the approved process for rush website change requests.",
    turns: [
      {
        speaker: "Team member",
        message:
          "What is our rush request policy for existing website clients and who approves same-day changes?",
      },
      {
        speaker: "AI Knowledge Assistant",
        message:
          "Rush requests require account manager approval, a written scope confirmation, and a minimum 24-hour turnaround fee unless the client is on a priority support plan.",
      },
      {
        speaker: "Team member",
        message: "Where is the client-facing language for that fee?",
      },
      {
        speaker: "AI Knowledge Assistant",
        message:
          "Returns the approved support policy excerpt and links to the client communication template in the operations folder.",
      },
      {
        speaker: "System",
        message:
          "Question and answer logged for review so operations can improve documentation gaps over time.",
      },
    ],
  },
  faqs: [
    {
      question: "Will it search documents we have not approved?",
      answer:
        "No. The assistant is configured to use approved source content only, such as policies, SOPs, service docs, and internal knowledge bases.",
    },
    {
      question: "Can it cite where an answer came from?",
      answer:
        "Yes. Responses can include references to the source document or section when that workflow is enabled.",
    },
    {
      question: "Is this the same as Clyra Intelligence Client Memory?",
      answer:
        "They can work together. Knowledge Assistant focuses on company documents and process knowledge. Clyra Intelligence Client Memory focuses on relationship and client-specific context.",
    },
    {
      question: "Can access be limited by role?",
      answer:
        "Yes. Different teams can be given access to different document sets based on role and permissions.",
    },
    {
      question: "What content sources can it connect to?",
      answer:
        "Common sources include Google Drive, Microsoft 365, Notion, internal wikis, CRM notes, and selected website content depending on your setup.",
    },
  ],
};
