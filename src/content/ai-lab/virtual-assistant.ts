import type { AILabSolutionContent } from "@/lib/ai-lab/types";
import {
  DEFAULT_AI_LAB_INTEGRATIONS,
  DEFAULT_STRATEGY_CTA,
  demoAccessCta,
} from "@/lib/ai-lab/defaults";
import {
  faCalendarCheck,
  faComments,
  faRoute,
  faUserCheck,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";

export const virtualAssistantContent: AILabSolutionContent = {
  slug: "virtual-assistant",
  serviceName: "AI Virtual Assistant",
  metadata: {
    title: "AI Virtual Assistant for Small Business | AI Lab | Clyra Studios",
    description:
      "Answer customer questions, capture qualified leads, and route booking requests with an AI virtual assistant built around your services, hours, and policies.",
    keywords:
      "AI virtual assistant, AI virtual receptionist, small business chat assistant, lead capture chatbot, appointment booking AI, customer support automation",
  },
  hero: {
    eyebrow: "AI Lab · Customer-facing assistant",
    titleLine: "Respond Faster Without",
    titleHighlight: "Adding Front Desk Headcount",
    description:
      "An AI virtual assistant handles common questions, qualifies incoming requests, and routes booking or sales inquiries to the right next step. Built from your approved service pages, FAQs, policies, and scheduling rules.",
    primaryCta: demoAccessCta("virtual-assistant"),
    secondaryCta: DEFAULT_STRATEGY_CTA,
  },
  whatItDoes: {
    title: "What It Does",
    description:
      "The assistant answers repetitive customer questions, collects the details your team needs before a call, and escalates edge cases to a human with full conversation context. It is designed for businesses that miss inquiries when the team is busy, closed, or in the field.",
  },
  whoItsFor: {
    title: "Who It Is For",
    description:
      "Service businesses, practices, and local operators that rely on phone calls, website inquiries, and repeat customer questions.",
    audiences: [
      "Home services and contractors",
      "Healthcare and wellness practices",
      "Restaurants and hospitality teams",
      "Professional services firms",
      "Agencies with inbound lead volume",
    ],
  },
  useCases: [
    "Answer service area, hours, and pricing range questions from approved content",
    "Capture lead details before your team returns a call",
    "Route booking requests to your calendar or scheduling tool",
    "Handle FAQ volume after hours without losing the inquiry",
    "Summarize conversation intent for human follow-up",
  ],
  workflowSteps: [
    {
      icon: faComments,
      label: "Customer asks a question",
      description:
        "A visitor asks about services, availability, pricing ranges, or policies through chat or your website.",
    },
    {
      icon: faClipboardList,
      label: "Assistant clarifies intent",
      description:
        "The system asks follow-up questions when details are missing and stays within approved source content.",
    },
    {
      icon: faRoute,
      label: "Route or qualify",
      description:
        "Qualified leads, booking requests, and support issues are routed based on rules you define.",
    },
    {
      icon: faCalendarCheck,
      label: "Book or hand off",
      description:
        "Booking intent connects to your scheduler. Complex cases escalate with a summary for your team.",
    },
    {
      icon: faUserCheck,
      label: "Human review when needed",
      description:
        "Your team stays in control of sensitive responses, exceptions, and final commitments.",
    },
  ],
  benefits: [
    {
      title: "Save time",
      description:
        "Stop answering the same service, hours, and policy questions manually throughout the day.",
    },
    {
      title: "Reduce repetitive work",
      description:
        "Let the assistant handle first-touch qualification before your team gets involved.",
    },
    {
      title: "Improve response times",
      description:
        "Reply instantly when customers reach out after hours or while your staff is on jobs.",
    },
    {
      title: "Increase qualified leads",
      description:
        "Collect project type, location, timeline, and contact details before the sales conversation starts.",
    },
    {
      title: "Improve customer experience",
      description:
        "Give customers clear answers and next steps instead of voicemail or delayed email replies.",
    },
  ],
  idealIndustries: [
    "Home services",
    "Healthcare practices",
    "Dental and wellness",
    "Legal and accounting",
    "Restaurants and catering",
    "Real estate services",
    "Agencies and consultancies",
  ],
  integrations: DEFAULT_AI_LAB_INTEGRATIONS,
  exampleWorkflow: {
    title: "Example Conversation",
    intro:
      "A homeowner submits a website chat request on a Saturday evening while the office is closed.",
    turns: [
      {
        speaker: "Customer",
        message: "Do you install tankless water heaters in Westchester? What is the typical timeline?",
      },
      {
        speaker: "AI Virtual Assistant",
        message:
          "Yes, we install tankless water heaters in Westchester. Most standard replacements are scheduled within 5 to 7 business days after an on-site evaluation. Would you like to request an estimate?",
      },
      {
        speaker: "Customer",
        message: "Yes. It is for a single-family home in White Plains.",
      },
      {
        speaker: "AI Virtual Assistant",
        message:
          "Got it. I can collect a few details for the team: property type, preferred contact method, and whether this is an emergency or planned upgrade. Once submitted, your request will be routed for follow-up on Monday morning.",
      },
      {
        speaker: "System",
        message:
          "Lead created in CRM with conversation summary, service type, location, and follow-up owner assigned.",
      },
    ],
  },
  faqs: [
    {
      question: "Will the assistant make up answers about my business?",
      answer:
        "No. The system is built to answer from approved source content such as service pages, FAQs, policies, and scheduling rules. When it cannot answer confidently, it asks clarifying questions or escalates to your team.",
    },
    {
      question: "Can it book appointments automatically?",
      answer:
        "Yes, when connected to your scheduling tool and booking rules. Many businesses start with lead capture and FAQ support, then expand into booking once the knowledge boundaries and handoffs are stable.",
    },
    {
      question: "What happens when a customer needs a human?",
      answer:
        "The assistant can escalate with conversation context, intent summary, and collected contact details so your team does not start from zero.",
    },
    {
      question: "Is this just a generic chatbot widget?",
      answer:
        "No. This is a workflow-connected assistant customized around your services, qualification fields, routing rules, and integrations.",
    },
    {
      question: "Can we start with a narrow scope?",
      answer:
        "Yes. Most teams launch with FAQ support or lead capture first, then add booking, CRM routing, and additional channels after the first workflow is stable.",
    },
  ],
};
