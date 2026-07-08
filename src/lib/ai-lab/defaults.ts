export const DEFAULT_AI_LAB_INTEGRATIONS = [
  "CRM",
  "Email",
  "Google Calendar",
  "Microsoft 365",
  "HubSpot",
  "Salesforce",
  "Zapier",
  "n8n",
  "Google Sheets",
  "Slack",
];

export const DEFAULT_STRATEGY_CTA = {
  label: "Book a Strategy Call",
  href: "/strategy-call",
};

export function demoAccessCta(slug: string) {
  return {
    label: "Request Demo Access",
    href: `/contact?demo=${slug}`,
  };
}
