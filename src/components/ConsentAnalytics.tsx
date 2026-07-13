"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  CONSENT_UPDATE_EVENT,
  applyConsentChoice,
  restoreStoredConsent,
  trackConsentPageView,
  type CookieConsentChoice,
} from "@/lib/cookie-consent";

export default function ConsentAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    void restoreStoredConsent();
  }, []);

  useEffect(() => {
    const handleConsentUpdate = (event: Event) => {
      const detail = (event as CustomEvent<CookieConsentChoice>).detail;
      void applyConsentChoice(detail.analytics);
    };

    window.addEventListener(CONSENT_UPDATE_EVENT, handleConsentUpdate);
    return () => {
      window.removeEventListener(CONSENT_UPDATE_EVENT, handleConsentUpdate);
    };
  }, []);

  useEffect(() => {
    const query = searchParams.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;
    trackConsentPageView(pagePath);
  }, [pathname, searchParams]);

  return null;
}
