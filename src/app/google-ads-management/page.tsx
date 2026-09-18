import type { Metadata } from "next";
import ServiceOfferLanding from "@/components/ServiceOfferLanding";
import {
  faBan,
  faBullseye,
  faChartLine,
  faFilter,
  faGear,
  faMagnifyingGlass,
  faMapLocationDot,
  faRocket,
  faSitemap,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Google Ads Management for Service Businesses | Clyra Studios",
  description:
    "Google Ads management focused on qualified demand: search-term analysis, negatives, geo targeting, campaign structure, landing-page alignment, and reporting from spend to opportunities—not vanity metrics alone.",
  keywords:
    "Google Ads management, paid search management, PPC for service businesses, Google Ads agency, local PPC management",
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: { canonical: "/google-ads-management" },
  openGraph: {
    title: "Google Ads Management | Clyra Studios",
    description:
      "Paid search managed around high-value services and geographies, with conversion tracking and business-outcome reporting.",
    url: "https://clyrastudios.com/google-ads-management",
    type: "website",
  },
};

export default function GoogleAdsManagementPage() {
  return (
    <ServiceOfferLanding
      schemaId="google-ads-management"
      serviceName="Google Ads Management"
      serviceDescription="Google Ads and paid search management for service businesses: opportunity-based structure, search-term hygiene, geo optimization, landing-page alignment, and reporting from ad spend to qualified opportunities."
      priceRange="$1500+"
      heroTitle={
        <>
          <span className="title-line">Google Ads Management That Targets</span>
          <span className="title-line highlight">Profitable Demand</span>
        </>
      }
      heroDescription="Clyra manages paid search for service businesses with strategic specificity: the right services, geos, and intents—backed by clean conversion tracking, landing-page fit, negative keyword discipline, and reporting that connects spend to leads and opportunities."
      heroHook="Media spend stays yours. Management focuses on qualified outcomes."
      primaryCta={{ href: "/growth-opportunity-audit", label: "Start with an Opportunity Audit" }}
      secondaryCta={{ href: "/strategy-call", label: "Book a Discovery Call" }}
      problemsTitle={
        <>
          Why Paid Search <span className="transform-word">Burns Budget</span>
        </>
      }
      problems={[
        {
          icon: faMagnifyingGlass,
          title: "Search Terms Nobody Reviews",
          description:
            "Broad match and neglected search-term reports fund irrelevant queries while high-intent terms stay underfunded.",
          impact: "Waste compounds monthly",
        },
        {
          icon: faMapLocationDot,
          title: "Geos and Offers Too Wide",
          description:
            "Campaigns cover every service and every zip code instead of concentrating on work and areas that close profitably.",
          impact: "Expensive, low-fit calls",
        },
        {
          icon: faSitemap,
          title: "Ads Point at Weak Pages",
          description:
            "Clicks land on homepage or generic service pages that don’t match the query or capture the lead cleanly.",
          impact: "High CPC, low conversion",
        },
        {
          icon: faTriangleExclamation,
          title: "Tracking You Can’t Trust",
          description:
            "Forms, calls, and CRM stages aren’t measured consistently, so optimization reacts to incomplete data.",
          impact: "Blind optimization",
        },
      ]}
      capabilitiesTitle="What We Manage"
      capabilities={[
        {
          icon: faGear,
          title: "Account Structure & Segmentation",
          description:
            "Campaigns and ad groups organized around services, intents, and geos that match your highest-value work.",
        },
        {
          icon: faBan,
          title: "Search-Term & Negative Hygiene",
          description:
            "Ongoing search-term analysis and negative keyword management to cut waste and protect margin.",
        },
        {
          icon: faMapLocationDot,
          title: "Geographic Optimization",
          description:
            "Bid and presence decisions informed by service area economics—not blanket radius targeting.",
        },
        {
          icon: faFilter,
          title: "Landing Page Alignment",
          description:
            "Ad copy and destinations matched to intent; recommendations or builds when pages are the bottleneck.",
        },
        {
          icon: faBullseye,
          title: "Conversion Tracking",
          description:
            "GA4/GTM and call/form tracking so paid performance connects to real inquiries—and ideally CRM stages.",
        },
        {
          icon: faChartLine,
          title: "Business-Outcome Reporting",
          description:
            "Spend, CPL, qualified leads, and opportunity metrics where available—CTR and CPC as diagnostics, not the scoreboard.",
        },
      ]}
      processSteps={[
        {
          icon: faMagnifyingGlass,
          title: "1. Audit & Opportunity Fit",
          description:
            "Review account (or greenfield needs), economics, tracking, and whether paid search is the right lever now.",
        },
        {
          icon: faGear,
          title: "2. Restructure & Instrument",
          description:
            "Rebuild structure, tracking, and landing destinations around prioritized opportunities.",
        },
        {
          icon: faRocket,
          title: "3. Launch Controlled Spend",
          description:
            "Start with focused campaigns and clear learning goals. Media spend remains separate from management fees.",
        },
        {
          icon: faChartLine,
          title: "4. Monthly Optimization",
          description:
            "Search terms, negatives, geos, creatives, landing pages, and budget allocation based on qualified demand.",
        },
      ]}
      pricingNote={
        <>
          Management fees are scoped to account complexity and goals; typical engagements start
          around <strong>$1,500+/month</strong>. <strong>Ad spend is separate</strong> and billed
          by Google to you. We recommend a Growth Opportunity Audit when priorities are unclear.
        </>
      }
      ctaTitle="Ready for Paid Search Tied to Real Pipeline?"
      relatedLinks={[
        { href: "/growth-opportunity-audit", label: "Growth Opportunity Audit" },
        { href: "/local-lead-generation", label: "Local Lead Generation" },
        { href: "/local-seo", label: "Local SEO" },
        { href: "/ga4-implementation", label: "GA4 Implementation" },
        { href: "/growth-website-system", label: "Growth Website System" },
      ]}
      faqs={[
        {
          question: "Do you guarantee leads or ROAS?",
          answer:
            "No. Competitive auctions, offer strength, landing pages, and sales follow-up all affect results. We manage for qualified demand and continuous improvement, without guaranteed lead counts or revenue promises.",
        },
        {
          question: "Is ad spend included in your fee?",
          answer:
            "No. Media spend stays with you and is billed by Google. Clyra’s fee covers strategy, setup, management, and optimization.",
        },
        {
          question: "Can you set up conversion tracking and Google Ads together?",
          answer:
            "Yes. Reliable GA4/GTM and conversion tracking is often part of launch. Deeper dashboard work can pair with our Looker Studio and GA4 services.",
        },
        {
          question: "Do you only manage Google Ads?",
          answer:
            "Google Search (and related Google Ads inventory as appropriate) is the core paid offer. Retargeting or other channels are considered when they support the same acquisition system—not as a generic “full-service ads” package.",
        },
        {
          question: "What if our website can’t convert?",
          answer:
            "We say so. Sometimes the right move is landing-page work or a Growth Website System build before scaling spend. Paid search without conversion infrastructure is expensive noise.",
        },
      ]}
    />
  );
}
