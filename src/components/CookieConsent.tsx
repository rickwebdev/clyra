"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import {
  CONSENT_OPEN_EVENT,
  CONSENT_UPDATE_EVENT,
  getStoredConsent,
  storeConsent,
} from "@/lib/cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const descriptionId = useId();

  useEffect(() => {
    const stored = getStoredConsent();
    setVisible(!stored);

    const handleOpen = () => setVisible(true);
    const handleUpdate = () => setVisible(false);

    window.addEventListener(CONSENT_OPEN_EVENT, handleOpen);
    window.addEventListener(CONSENT_UPDATE_EVENT, handleUpdate);

    return () => {
      window.removeEventListener(CONSENT_OPEN_EVENT, handleOpen);
      window.removeEventListener(CONSENT_UPDATE_EVENT, handleUpdate);
    };
  }, []);

  const acceptAnalytics = () => {
    storeConsent(true);
    setVisible(false);
  };

  const essentialOnly = () => {
    storeConsent(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      id="cookie-consent-banner"
      className="cookie-consent"
      role="dialog"
      aria-modal="true"
      aria-label="Cookie consent"
      aria-describedby={descriptionId}
      data-cookieconsent="banner"
    >
      <div className="cookie-consent-content">
        <p id={descriptionId} className="cookie-consent-text">
          We use essential cookies for site functionality and optional analytics
          and marketing cookies to understand site usage and measure ad
          performance. You can accept these cookies or continue with essential
          cookies only. See our <Link href="/privacy">Privacy Policy</Link> for
          details.
        </p>
        <div className="cookie-consent-actions">
          <button
            type="button"
            className="btn btn-primary"
            onClick={acceptAnalytics}
            aria-label="Accept analytics and marketing cookies"
          >
            Accept Analytics & Marketing
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={essentialOnly}
            aria-label="Use essential cookies only"
          >
            Essential Only
          </button>
        </div>
      </div>
    </div>
  );
}
