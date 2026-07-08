"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  applyAnalyticsConsent,
  CONSENT_OPEN_EVENT,
  CONSENT_UPDATE_EVENT,
  getStoredConsent,
  storeConsent,
  type CookieConsentChoice,
} from "@/lib/cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      setVisible(false);
      void applyAnalyticsConsent(stored.analytics);
    }

    const handleOpen = () => setVisible(true);
    const handleUpdate = (event: Event) => {
      const detail = (event as CustomEvent<CookieConsentChoice>).detail;
      void applyAnalyticsConsent(detail.analytics);
      setVisible(false);
    };

    window.addEventListener(CONSENT_OPEN_EVENT, handleOpen);
    window.addEventListener(CONSENT_UPDATE_EVENT, handleUpdate);

    return () => {
      window.removeEventListener(CONSENT_OPEN_EVENT, handleOpen);
      window.removeEventListener(CONSENT_UPDATE_EVENT, handleUpdate);
    };
  }, []);

  const acceptAnalytics = () => {
    storeConsent(true);
    void applyAnalyticsConsent(true);
    setVisible(false);
  };

  const essentialOnly = () => {
    storeConsent(false);
    void applyAnalyticsConsent(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      id="cookie-consent-banner"
      className="cookie-consent"
      role="dialog"
      aria-label="Cookie consent"
      data-cookieconsent="banner"
    >
      <div className="cookie-consent-content">
        <p className="cookie-consent-text">
          We use essential cookies for site functionality and optional analytics
          cookies to understand how visitors use our site. You can accept
          analytics cookies or continue with essential cookies only. See our{" "}
          <Link href="/privacy">Privacy Policy</Link> for details.
        </p>
        <div className="cookie-consent-actions">
          <button type="button" className="btn btn-primary" onClick={acceptAnalytics}>
            Accept Analytics
          </button>
          <button type="button" className="btn btn-secondary" onClick={essentialOnly}>
            Essential Only
          </button>
        </div>
      </div>
    </div>
  );
}
