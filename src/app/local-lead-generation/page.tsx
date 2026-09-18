import type { Metadata } from "next";
import ServiceOfferLanding from "@/components/ServiceOfferLanding";
import {
  faBullhorn,
  faBullseye,
  faChartLine,
  faClipboardCheck,
  faFilter,
  faHeadset,
  faMapLocationDot,
  faRocket,
  faSitemap,
  faTriangleExclamation,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Local Lead Generation Systems for Service Businesses | Clyra Studios",
  description:
    "Focused local lead generation for service businesses: value-based targeting, landing pages, local SEO, paid search, CRM follow-up, and attribution—not generic marketing retainers.",
  keywords:
    "local lead generation, lead generation for service businesses, local customer acquisition, lead gen systems, service business marketing",
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: { canonical: "/local-lead-generation" },
  openGraph: {
    title: "Local Lead Generation Systems | Clyra Studios",
    description:
      "Build and optimize customer acquisition around the services, customers, and geographies that create the most business value.",
    url: "https://clyrastudios.com/local-lead-generation",
    type: "website",
  },
};

export default function LocalLeadGenerationPage() {
  return (
    <ServiceOfferLanding
      schemaId="local-lead-generation"
      serviceName="Local Lead Generation"
      serviceDescription="Customer acquisition systems for local and service businesses combining opportunity research, landing pages, local SEO, paid search, CRM follow-up, and outcome-focused reporting."
      priceRange="$2000+"
      heroTitle={
        <>
          <span className="title-line">Local Lead Generation Built Around</span>
          <span className="title-line highlight">Business Value, Not Vanity Traffic</span>
        </>
      }
      heroDescription="Clyra designs acquisition systems for service businesses: identify high-value opportunities, concentrate SEO and paid search there, convert on focused landing pages, capture leads cleanly, follow up through CRM, and measure from spend to closed revenue."
      heroHook="Specific opportunities. Integrated systems. Measurable outcomes."
      primaryCta={{ href: "/growth-opportunity-audit", label: "Start with an Opportunity Audit" }}
      secondaryCta={{ href: "/strategy-call", label: "Book a Discovery Call" }}
      problemsTitle={
        <>
          Why Local Lead Gen <span className="transform-word">Usually Underperforms</span>
        </>
      }
      problems={[
        {
          icon: faBullhorn,
          title: "Broad Campaigns, Weak Fit",
          description:
            "Advertising “Painter + City” or generic service keywords fills the phone with low-fit inquiries and price shoppers.",
          impact: "Leads without profit",
        },
        {
          icon: faSitemap,
          title: "Website Can’t Convert Demand",
          description:
            "Traffic lands on a slow brochure site with unclear offers, weak CTAs, and no path matched to the search intent.",
          impact: "Paid clicks wasted",
        },
        {
          icon: faHeadset,
          title: "Leads Die After Capture",
          description:
            "Forms go to a shared inbox. No CRM stages, no follow-up cadence, no attribution from ad to closed job.",
          impact: "Acquisition without operations",
        },
        {
          icon: faTriangleExclamation,
          title: "Metrics That Don’t Matter",
          description:
            "Teams celebrate impressions, CTR, or rankings while qualified opportunities and closed revenue stay opaque.",
          impact: "Optimization theater",
        },
      ]}
      capabilitiesTitle="What the System Includes"
      capabilities={[
        {
          icon: faBullseye,
          title: "Opportunity-Based Targeting",
          description:
            "Service × geography × intent × customer type combinations prioritized by business value after research—not volume alone.",
        },
        {
          icon: faFilter,
          title: "Landing Pages & Conversion Paths",
          description:
            "Intent-matched pages, clear offers, forms, and call paths designed to qualify and convert the right inquiries.",
        },
        {
          icon: faMapLocationDot,
          title: "Local SEO + Paid Search Coordination",
          description:
            "Organic local visibility and Google Ads managed as one acquisition system, not disconnected vendors.",
        },
        {
          icon: faClipboardCheck,
          title: "Lead Capture & CRM Follow-Up",
          description:
            "Reliable capture, routing, and follow-up workflows so leads become estimates and jobs—not forgotten emails.",
        },
        {
          icon: faChartLine,
          title: "Attribution & Business Reporting",
          description:
            "Reporting oriented to ad spend → leads → qualified → opportunities → closed revenue, with diagnostic metrics in support.",
        },
        {
          icon: faUsers,
          title: "Ongoing Experimentation",
          description:
            "Monthly search-term review, negatives, geo and offer tests, landing-page improvements, and competitor monitoring.",
        },
      ]}
      processSteps={[
        {
          icon: faBullseye,
          title: "1. Opportunity Audit",
          description:
            "Confirm economics, demand, competition, and digital gaps—or start from an existing Growth Opportunity Audit.",
        },
        {
          icon: faSitemap,
          title: "2. Build the Acquisition Stack",
          description:
            "Pages, tracking, CRM paths, local SEO foundations, and paid structure aligned to prioritized opportunities.",
        },
        {
          icon: faRocket,
          title: "3. Launch & Learn",
          description:
            "Go live with clean conversion tracking and a scoreboard tied to qualified demand and pipeline.",
        },
        {
          icon: faChartLine,
          title: "4. Optimize Continuously",
          description:
            "Iterate on search terms, geos, creatives, landing pages, and follow-up based on business outcomes.",
        },
      ]}
      pricingNote={
        <>
          Implementation and ongoing management are scoped after opportunity fit is clear.
          Typical ongoing acquisition retainers start in the low thousands per month depending
          on channels and complexity. <strong>Media spend is billed separately</strong> and
          remains yours.
        </>
      }
      ctaTitle="Want a Lead System Aimed at Profitable Work?"
      relatedLinks={[
        { href: "/growth-opportunity-audit", label: "Growth Opportunity Audit" },
        { href: "/google-ads-management", label: "Google Ads Management" },
        { href: "/local-seo", label: "Local SEO" },
        { href: "/growth-website-system", label: "Growth Website System" },
        { href: "/ga4-implementation", label: "GA4 Implementation" },
      ]}
      faqs={[
        {
          question: "Is this a full-service digital marketing agency retainer?",
          answer:
            "No. Clyra is a technical studio focused on customer acquisition systems for service businesses—tied to websites, analytics, automation, and CRM—not a generic “we do everything” marketing shop.",
        },
        {
          question: "Do you guarantee a number of leads?",
          answer:
            "No. Markets, offers, close rates, and budgets differ. We concentrate on qualified demand and measurable pipeline, and we are direct about when an opportunity is weak.",
        },
        {
          question: "How is this different from Managed Websites?",
          answer:
            "Managed Websites is website ownership, hosting, and maintenance. Local Lead Generation is demand generation and ongoing acquisition optimization. Many clients need a solid site first; they are complementary, not the same offer.",
        },
        {
          question: "How is this different from the Growth Website System?",
          answer:
            "The Growth Website System builds a conversion-focused digital platform. Local Lead Generation generates and optimizes demand into that platform (or your existing site) on an ongoing basis.",
        },
        {
          question: "What do you report on?",
          answer:
            "Primary: spend, leads, qualified leads, estimates/opportunities, closed jobs, and revenue where data is available. Diagnostics like CTR, CPC, rankings, and Core Web Vitals support those outcomes—they do not replace them.",
        },
      ]}
    />
  );
}
