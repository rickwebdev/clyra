"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

type ManagedWebsiteCtaProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  event?: "managed_website_cta_click" | "managed_website_view_plans";
  ctaLabel?: string;
};

export default function ManagedWebsiteCta({
  href,
  children,
  className = "",
  event = "managed_website_cta_click",
  ctaLabel,
}: ManagedWebsiteCtaProps) {
  const handleClick = () => {
    trackEvent(event, { cta_label: ctaLabel || undefined, cta_href: href });
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}

export function ManagedWebsitePhoneLink({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href="tel:+16466322070"
      className={className}
      onClick={() => trackEvent("managed_website_phone_click")}
    >
      {children}
    </a>
  );
}

export function ManagedWebsiteEmailLink({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href="mailto:rick@clyrastudios.com"
      className={className}
      onClick={() => trackEvent("managed_website_email_click")}
    >
      {children}
    </a>
  );
}
