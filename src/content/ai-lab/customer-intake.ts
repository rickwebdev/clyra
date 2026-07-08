import type { AILabSolutionContent } from "@/lib/ai-lab/types";
import {
  DEFAULT_AI_LAB_INTEGRATIONS,
  DEFAULT_STRATEGY_CTA,
  demoAccessCta,
} from "@/lib/ai-lab/defaults";
import {
  faClipboardList,
  faFilter,
  faRoute,
  faUserCheck,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

export const customerIntakeContent: AILabSolutionContent = {
  slug: "customer-intake",
  serviceName: "AI Customer Intake",
  metadata: {
    title: "AI Customer Intake and Lead Qualification | AI Lab | Clyra Studios",
    description:
      "Collect project details, qualify inbound leads, and route inquiries to the right team member before your staff spends time on unqualified calls.",
    keywords:
      "AI customer intake, lead qualification form, intake automation, service business lead routing, AI lead capture",
  },
  hero: {
    eyebrow: "AI Lab · Lead qualification",
    titleLine: "Qualify Leads Before",
    titleHighlight: "Your Team Picks Up the Phone",
    description:
      "Capture the project details, budget signals, timeline, and service fit you need up front. Route qualified inquiries to the right owner and filter out requests that do not match your services or service area.",
    primaryCta: demoAccessCta("customer-intake"),
    secondaryCta: DEFAULT_STRATEGY_CTA,
  },
  whatItDoes: {
    title: "What It Does",
    description:
      "AI Customer Intake replaces scattered email threads and incomplete contact forms with a guided intake flow. It asks the right follow-up questions, validates service fit, and sends structured lead records to your CRM or inbox.",
  },
  whoItsFor: {
    title: "Who It Is For",
    description:
      "Businesses that receive inbound inquiries across web forms, email, text, and phone messages but struggle to collect complete information before scheduling a call.",
    audiences: [
      "Agencies and consultancies",
      "Contractors and home service companies",
      "Healthcare and professional practices",
      "Legal and financial service firms",
      "B2B service providers with custom scopes",
    ],
  },
  useCases: [
    "Collect project scope, location, budget range, and timeline before a sales call",
    "Filter requests outside your service area or specialty",
    "Route leads to the correct department or account owner",
    "Standardize intake across website forms, landing pages, and campaigns",
    "Attach intake answers to CRM records for faster follow-up",
  ],
  workflowSteps: [
    {
      icon: faClipboardList,
      label: "Lead starts intake",
      description:
        "A prospect submits a form, clicks a campaign link, or begins a guided intake conversation.",
    },
    {
      icon: faFilter,
      label: "Qualify the request",
      description:
        "The system asks follow-up questions based on service type, location, urgency, and budget signals.",
    },
    {
      icon: faRoute,
      label: "Route to the right owner",
      description:
        "Qualified leads are assigned by territory, service line, or team availability rules.",
    },
    {
      icon: faBell,
      label: "Notify your team",
      description:
        "Sales or operations receives a structured summary with the details needed for the first call.",
    },
    {
      icon: faUserCheck,
      label: "Human follow-up",
      description:
        "Your team reviews edge cases and contacts the lead with context already captured.",
    },
  ],
  benefits: [
    {
      title: "Save time",
      description:
        "Spend less time on discovery calls that should have been filtered earlier in the process.",
    },
    {
      title: "Reduce repetitive work",
      description:
        "Stop asking the same intake questions manually across email, text, and phone channels.",
    },
    {
      title: "Improve response times",
      description:
        "Give qualified leads a faster path to the right person with the information already collected.",
    },
    {
      title: "Increase qualified leads",
      description:
        "Focus sales effort on inquiries that match your services, geography, and capacity.",
    },
    {
      title: "Improve customer experience",
      description:
        "Prospects get a clear, professional intake experience instead of a generic contact form black hole.",
    },
  ],
  idealIndustries: [
    "Marketing agencies",
    "Web and creative studios",
    "Contractors and trades",
    "Healthcare practices",
    "Legal and accounting",
    "Consulting firms",
    "B2B professional services",
  ],
  integrations: DEFAULT_AI_LAB_INTEGRATIONS,
  exampleWorkflow: {
    title: "Example Workflow",
    intro:
      "A marketing agency receives a website redesign inquiry through a campaign landing page.",
    turns: [
      {
        speaker: "Prospect",
        message:
          "We need a website redesign for a 12-person law firm. Budget is flexible. Need to launch in Q3.",
      },
      {
        speaker: "AI Customer Intake",
        message:
          "Asks for current platform, page count, content readiness, compliance needs, and decision timeline.",
      },
      {
        speaker: "Prospect",
        message:
          "WordPress site, about 35 pages, content mostly ready, compliance review required, decision by May.",
      },
      {
        speaker: "AI Customer Intake",
        message:
          "Marks lead as qualified, tags practice area marketing, and routes to the senior account lead.",
      },
      {
        speaker: "System",
        message:
          "CRM record created with intake summary, budget range, timeline, and recommended next step: strategy call.",
      },
    ],
  },
  faqs: [
    {
      question: "Can intake questions change by service type?",
      answer:
        "Yes. Different service lines can trigger different question paths, required fields, and routing rules.",
    },
    {
      question: "Will it reject leads automatically?",
      answer:
        "It can flag poor-fit requests based on your rules, such as geography, budget floor, or unsupported services. Your team can still review edge cases.",
    },
    {
      question: "Does it connect to our CRM?",
      answer:
        "Yes. Qualified leads can create or update CRM records with intake answers and conversation notes attached.",
    },
    {
      question: "Can we use it on multiple landing pages?",
      answer:
        "Yes. Each campaign or service page can use a tailored intake flow while sharing the same routing and CRM logic.",
    },
    {
      question: "What if a lead needs a human immediately?",
      answer:
        "Urgent requests can bypass standard routing and notify a designated owner with full context.",
    },
  ],
};
