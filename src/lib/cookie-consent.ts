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

export const GA_MEASUREMENT_ID = "G-CC56KCXVC7";

let gaScriptLoaded = false;

function ensureGtagStub() {
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    };
  }
}

function loadGoogleAnalyticsScript(): Promise<void> {
  if (gaScriptLoaded) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    ensureGtagStub();
    window.gtag!("js", new Date());

    const existing = document.querySelector<HTMLScriptElement>(
      `script[data-ga-id="${GA_MEASUREMENT_ID}"]`,
    );
    if (existing) {
      gaScriptLoaded = true;
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    script.dataset.gaId = GA_MEASUREMENT_ID;
    script.onload = () => {
      gaScriptLoaded = true;
      resolve();
    };
    script.onerror = () => reject(new Error("Failed to load Google Analytics"));
    document.head.appendChild(script);
  });
}

export async function applyAnalyticsConsent(granted: boolean) {
  ensureGtagStub();

  if (!granted) {
    window.gtag!("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    return;
  }

  await loadGoogleAnalyticsScript();
  window.gtag!("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag!("config", GA_MEASUREMENT_ID);
}
