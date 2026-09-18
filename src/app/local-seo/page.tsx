import type { Metadata } from "next";
import Link from "next/link";
import ServiceOfferLanding from "@/components/ServiceOfferLanding";
import {
  faBuilding,
  faChartLine,
  faFileLines,
  faLink,
  faMapLocationDot,
  faMagnifyingGlass,
  faRocket,
  faSitemap,
  faStar,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Local SEO for Service Businesses | Clyra Studios",
  description:
    "Local SEO focused on Google Business Profile, Local Pack visibility, service-area relevance, on-page local foundations, and measurement—distinct from technical SEO and from full acquisition retainers.",
  keywords:
    "local SEO, Google Business Profile SEO, Local Pack SEO, local search optimization, SEO for service businesses",
  metadataBase: new URL("https://clyrastudios.com"),
  alternates: { canonical: "/local-seo" },
  openGraph: {
    title: "Local SEO for Service Businesses | Clyra Studios",
    description:
      "Improve local visibility around high-value services and geographies—with Google Business Profile, Local Pack, and on-page local foundations.",
    url: "https://clyrastudios.com/local-seo",
    type: "website",
  },
};

export default function LocalSeoPage() {
  return (
    <ServiceOfferLanding
      schemaId="local-seo"
      serviceName="Local SEO"
      serviceDescription="Local SEO for service businesses: Google Business Profile optimization, Local Pack competitiveness, service-area page strategy, on-page local foundations, and measurement—prioritized by business value."
      priceRange="$1000+"
      heroTitle={
        <>
          <span className="title-line">Local SEO for the Services and</span>
          <span className="title-line highlight">Areas Worth Winning</span>
        </>
      }
      heroDescription="Clyra helps service businesses compete in local search where it matters: Google Business Profile, Local Pack, and on-page local relevance—concentrated on high-value services and geographies, not generic city-page spam."
      heroHook="Local visibility tied to profitable demand—not rankings for their own sake."
      primaryCta={{ href: "/growth-opportunity-audit", label: "Start with an Opportunity Audit" }}
      secondaryCta={{ href: "/strategy-call", label: "Book a Discovery Call" }}
      problemsTitle={
        <>
          Why Local SEO <span className="transform-word">Often Stalls</span>
        </>
      }
      problems={[
        {
          icon: faBuilding,
          title: "Neglected Google Business Profile",
          description:
            "Incomplete categories, weak photos, inconsistent NAP, and no review or posting cadence leave Local Pack competitors ahead.",
          impact: "Invisible where locals look first",
        },
        {
          icon: faFileLines,
          title: "Thin Service-Area Pages",
          description:
            "Near-identical city pages without real service detail or usefulness don’t earn trust—from users or search engines.",
          impact: "Doorway risk, weak results",
        },
        {
          icon: faMagnifyingGlass,
          title: "Technical SEO Alone Isn’t Enough",
          description:
            "Crawlability and speed matter, but Local Pack competition also needs GBP, relevance, proximity signals, and local content depth.",
          impact: "Foundations without local wins",
        },
        {
          icon: faTriangleExclamation,
          title: "Optimizing the Wrong Keywords",
          description:
            "Effort goes to high-volume phrases that attract low-value jobs instead of profitable service × geo combinations.",
          impact: "Visibility without profit",
        },
      ]}
      capabilitiesTitle="What Local SEO Covers"
      capabilities={[
        {
          icon: faStar,
          title: "Google Business Profile",
          description:
            "Categories, services, descriptions, photos, Q&A, posting, and review response practices that support Local Pack competitiveness.",
        },
        {
          icon: faMapLocationDot,
          title: "Service & Geo Prioritization",
          description:
            "Focus on high-value services and service areas validated by demand and business economics—not every city nearby.",
        },
        {
          icon: faSitemap,
          title: "On-Page Local Foundations",
          description:
            "Clear service pages, useful local content, entity clarity, and internal links that support local queries.",
        },
        {
          icon: faLink,
          title: "Citations & Consistency Guidance",
          description:
            "NAP consistency and directory priorities where they matter—without selling junk citation packages.",
        },
        {
          icon: faChartLine,
          title: "Local Performance Measurement",
          description:
            "Search Console, GBP insights, and conversion tracking so local visibility ties back to calls and form leads.",
        },
        {
          icon: faRocket,
          title: "Coordination with Ads & Site Work",
          description:
            "Local SEO alongside Google Ads and conversion pages when you need a full acquisition system—not SEO in a silo.",
        },
      ]}
      processSteps={[
        {
          icon: faMagnifyingGlass,
          title: "1. Local Opportunity Review",
          description:
            "Map profitable services and geos, Local Pack competitors, and current GBP/site gaps.",
        },
        {
          icon: faBuilding,
          title: "2. Profile & On-Page Foundations",
          description:
            "Strengthen GBP and priority service pages with accurate, useful local relevance.",
        },
        {
          icon: faFileLines,
          title: "3. Targeted Local Content",
          description:
            "Add substantive pages or updates only where uniqueness and business value justify them—no doorway farms.",
        },
        {
          icon: faChartLine,
          title: "4. Measure & Iterate",
          description:
            "Track local visibility and inquiry quality; refine based on what produces qualified demand.",
        },
      ]}
      pricingNote={
        <>
          Focused local SEO engagements often start around <strong>$1,000+</strong> for
          foundation work, with ongoing retainers scoped to competitive intensity and number of
          locations. Pair with a{" "}
          <Link href="/growth-opportunity-audit">Growth Opportunity Audit</Link> when priorities are
          unclear. Guaranteed rankings are never part of the offer.
        </>
      }
      ctaTitle="Ready to Compete Locally Where It Pays?"
      relatedLinks={[
        { href: "/growth-opportunity-audit", label: "Growth Opportunity Audit" },
        { href: "/local-lead-generation", label: "Local Lead Generation" },
        { href: "/google-ads-management", label: "Google Ads Management" },
        { href: "/technical-seo", label: "Technical SEO" },
        { href: "/managed-websites", label: "Managed Websites" },
      ]}
      faqs={[
        {
          question: "How is Local SEO different from Technical SEO?",
          answer:
            "Technical SEO fixes crawlability, indexation, structure, speed, and on-page foundations sitewide. Local SEO focuses on local pack competitiveness, Google Business Profile, service-area relevance, and local inquiry quality. Most businesses need both at different times; they are separate engagements.",
        },
        {
          question: "Do you build dozens of city pages?",
          answer:
            "No. We only recommend geographic pages when there is legitimate market and business justification and enough unique, useful content. Doorway-style city farms are avoided.",
        },
        {
          question: "Do you guarantee Local Pack rankings?",
          answer:
            "No. Local rankings depend on competition, relevance, proximity, reviews, and consistency over time. We improve foundations and focus—not promise positions.",
        },
        {
          question: "Is this included in Managed Websites?",
          answer:
            "Managed Websites includes basic search setup and light local foundations or guidance depending on plan. Ongoing strategic Local SEO, competitive Local Pack work, and acquisition optimization are separate Growth & Acquisition services.",
        },
        {
          question: "Can Local SEO work with Google Ads?",
          answer:
            "Yes. Many service businesses use organic local presence and paid search together. Our Local Lead Generation offering coordinates both when that is the right model.",
        },
      ]}
    />
  );
}
