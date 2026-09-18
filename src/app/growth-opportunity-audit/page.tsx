import type { Metadata } from "next";
import ServiceOfferLanding from "@/components/ServiceOfferLanding";
import {
  faBullseye,
  faChartLine,
  faClipboardList,
  faDollarSign,
  faMapLocationDot,
  faMagnifyingGlass,
  faRocket,
  faSitemap,
  faTriangleExclamation,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Growth Opportunity Audit for Service Businesses | Clyra Studios",
  description:
    "A business-value-led growth opportunity audit: highest-value services, search demand, competitor landscape, website conversion, tracking, and a prioritized acquisition plan. Not a generic traffic report.",
  keywords:
    "growth opportunity audit, marketing opportunity audit, lead generation audit, local business growth audit, customer acquisition strategy",
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: { canonical: "/growth-opportunity-audit" },
  openGraph: {
    title: "Growth Opportunity Audit | Clyra Studios",
    description:
      "Identify which services, customers, and markets create the most business value—then build acquisition around those opportunities.",
    url: "https://clyrastudios.com/growth-opportunity-audit",
    type: "website",
  },
};

export default function GrowthOpportunityAuditPage() {
  return (
    <ServiceOfferLanding
      schemaId="growth-opportunity-audit"
      serviceName="Growth Opportunity Audit"
      serviceDescription="Business-economics-led audit covering market demand, competitive landscape, website conversion, tracking, and a prioritized customer acquisition plan for service businesses."
      priceRange="$1500+"
      heroTitle={
        <>
          <span className="title-line">Growth Opportunity Audit:</span>
          <span className="title-line highlight">Prioritize Demand That Pays</span>
        </>
      }
      heroDescription="Most audits optimize for traffic, rankings, or generic leads. This engagement starts with your economics—highest-value services, profitable customers, close rates, and geography—then maps search demand, competition, and digital systems to a prioritized acquisition plan."
      heroHook="Business value first. Search demand second. Execution third."
      primaryCta={{ href: "/strategy-call", label: "Book a Discovery Call" }}
      secondaryCta={{ href: "/contact", label: "Ask About the Audit" }}
      problemsTitle={
        <>
          Why Generic Audits <span className="transform-word">Miss the Point</span>
        </>
      }
      problems={[
        {
          icon: faMagnifyingGlass,
          title: "Traffic Without Business Value",
          description:
            "Rankings and impressions look fine while low-margin jobs fill the calendar and high-value work stays invisible.",
          impact: "Busy marketing, weak profit",
        },
        {
          icon: faDollarSign,
          title: "No Economics in the Strategy",
          description:
            "Campaigns and SEO plans ignore average job value, close rate, unwanted work, and which customers actually renew or refer.",
          impact: "Tactics without priorities",
        },
        {
          icon: faTriangleExclamation,
          title: "Scattered Digital Foundations",
          description:
            "Website, Google Business Profile, ads, forms, CRM, and tracking each tell a different story—or no story at all.",
          impact: "Guesswork instead of learning",
        },
        {
          icon: faUsers,
          title: "Wrong Customer, Wrong Geography",
          description:
            "Broad keywords and wide geos attract tire-kickers and distant leads that never close cleanly.",
          impact: "Leads that waste sales time",
        },
      ]}
      capabilitiesTitle="What the Audit Examines"
      capabilities={[
        {
          icon: faClipboardList,
          title: "Business Economics",
          description:
            "Highest-value services, profitable job types, ideal customers, close rates, repeat/referral patterns, and work you want less of.",
        },
        {
          icon: faMapLocationDot,
          title: "Market & Search Demand",
          description:
            "Competitor landscape, keyword and long-tail opportunities, geographic openings, Local Pack competition, and paid search pressure.",
        },
        {
          icon: faSitemap,
          title: "Digital & Conversion Systems",
          description:
            "Website and landing pages, technical and local SEO, Google Business Profile, ads, conversion UX, GA4/GTM, CRM, and follow-up.",
        },
        {
          icon: faBullseye,
          title: "Prioritized Acquisition Plan",
          description:
            "A ranked set of opportunities by business value—not search volume alone—with recommended channels, pages, and next investments.",
        },
        {
          icon: faChartLine,
          title: "Measurement Blueprint",
          description:
            "How to track spend → leads → qualified opportunities → closed jobs → revenue, so optimization has a business scoreboard.",
        },
        {
          icon: faRocket,
          title: "Clear Next Engagement",
          description:
            "Whether the right follow-on is local SEO, Google Ads, landing pages, CRM automation, or a conversion-focused website build.",
        },
      ]}
      processSteps={[
        {
          icon: faClipboardList,
          title: "1. Business Intake",
          description:
            "Services, margins, ideal customers, geos, capacity, and unwanted work—grounded in how you actually make money.",
        },
        {
          icon: faMagnifyingGlass,
          title: "2. Market & Competitive Research",
          description:
            "Demand, SERPs, Local Pack, paid competition, and where specificity creates an advantage.",
        },
        {
          icon: faSitemap,
          title: "3. Digital Systems Review",
          description:
            "Site, tracking, ads (if any), GBP, forms, CRM, and follow-up gaps that block learning or conversion.",
        },
        {
          icon: faBullseye,
          title: "4. Opportunity Roadmap",
          description:
            "Prioritized recommendations with sequencing, effort, and how success should be measured in business terms.",
        },
      ]}
      pricingNote={
        <>
          Typical Growth Opportunity Audits start at <strong>$1,500</strong>. Scope depends
          on service catalog complexity, number of geos, and existing ad/SEO footprint. Media
          spend is never included. Implementation engagements are scoped separately.
        </>
      }
      ctaTitle="Ready to Find Where Acquisition Should Concentrate?"
      relatedLinks={[
        { href: "/local-lead-generation", label: "Local Lead Generation" },
        { href: "/google-ads-management", label: "Google Ads Management" },
        { href: "/local-seo", label: "Local SEO" },
        { href: "/site-audit", label: "Website Audit" },
        { href: "/growth-website-system", label: "Growth Website System" },
      ]}
      faqs={[
        {
          question: "How is this different from the free Website Audit?",
          answer:
            "The Website Audit focuses on site health: performance, technical SEO, security, and conversion UX. The Growth Opportunity Audit starts with business economics and market demand, then connects those priorities to acquisition channels, landing pages, tracking, and CRM follow-up. They can complement each other; they are not the same product.",
        },
        {
          question: "Do you guarantee leads or rankings from the audit?",
          answer:
            "No. The audit produces a prioritized plan and recommendations. Results depend on competition, offer quality, sales process, budget, and consistent execution after the audit.",
        },
        {
          question: "Who is this for?",
          answer:
            "Local and service businesses that want more qualified demand—and are willing to concentrate on high-value services, customers, and geographies rather than chasing every keyword.",
        },
        {
          question: "What happens after the audit?",
          answer:
            "Common next steps include local SEO, Google Ads management, landing-page and conversion work, analytics/CRM setup, or a Growth Website System build when the platform itself is the bottleneck. You choose what to implement with Clyra or elsewhere.",
        },
        {
          question: "Is media spend included?",
          answer:
            "No. Advertising spend stays with the client and is billed separately from Clyra's audit or management fees.",
        },
      ]}
    />
  );
}
