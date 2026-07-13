import { isMarketingConsentGranted, trackMetaEvent } from "@/lib/meta-pixel";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(
  event: string,
  params?: Record<string, unknown>,
): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, page: "managed-websites", ...params });

  if (event === "managed_website_form_submit" && isMarketingConsentGranted()) {
    trackMetaEvent("Lead", {
      content_name: "managed_website_form",
      ...params,
    });
  }
}
