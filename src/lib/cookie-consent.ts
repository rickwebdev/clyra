export const COOKIE_CONSENT_KEY = "clyra_cookie_consent";
export const CONSENT_UPDATE_EVENT = "clyra:consent-update";
export const CONSENT_OPEN_EVENT = "clyra:consent-open";

export type CookieConsentChoice = {
  essential: true;
  analytics: boolean;
  updatedAt: string;
};

export function getStoredConsent(): CookieConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CookieConsentChoice;
  } catch {
    return null;
  }
}

export function storeConsent(analytics: boolean): CookieConsentChoice {
  const choice: CookieConsentChoice = {
    essential: true,
    analytics,
    updatedAt: new Date().toISOString(),
  };
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(choice));
  window.dispatchEvent(
    new CustomEvent(CONSENT_UPDATE_EVENT, { detail: choice }),
  );
  return choice;
}

export function openConsentBanner() {
  window.dispatchEvent(new CustomEvent(CONSENT_OPEN_EVENT));
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function applyAnalyticsConsent(granted: boolean) {
  if (typeof window.gtag !== "function") return;
  window.gtag("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  if (granted) {
    window.gtag("config", "G-CC56KCXVC7");
  }
}

export const GA_MEASUREMENT_ID = "G-CC56KCXVC7";
