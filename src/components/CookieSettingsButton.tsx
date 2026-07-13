"use client";

import { openConsentBanner } from "@/lib/cookie-consent";

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="footer-legal-button"
      onClick={openConsentBanner}
      aria-label="Open cookie settings"
    >
      Cookie Settings
    </button>
  );
}
