import { logConsentDiagnostics } from "@/lib/consent-diagnostics";
import {
  applyMetaPixelConsent,
  isMarketingConsentGranted,
  META_PIXEL_ID,
  trackMetaPageView,
} from "@/lib/meta-pixel";

export const COOKIE_CONSENT_KEY = "clyra_cookie_consent";
export const CONSENT_UPDATE_EVENT = "clyra:consent-update";
export const CONSENT_OPEN_EVENT = "clyra:consent-open";

export type CookieConsentChoice = {
  essential: true;
  analytics: boolean;
  updatedAt: string;
};

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "G-CC56KCXVC7";

let gaScriptLoaded = false;
let gaConfigured = false;
let analyticsConsentGranted = false;
let lastGaPageViewPath = "";
let googleConsentUpdated: "granted" | "denied" | null = null;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

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

export function isAnalyticsConsentGranted(): boolean {
  return analyticsConsentGranted;
}

function ensureGtagStub() {
  const dataLayer = (window.dataLayer =
    window.dataLayer || []) as unknown as Record<string, unknown>[];
  if (typeof window.gtag !== "function") {
    window.gtag = function gtag(...args: unknown[]) {
      dataLayer.push(args as unknown as Record<string, unknown>);
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

export async function ensureGoogleTagLoaded(): Promise<void> {
  if (!GA_MEASUREMENT_ID) return;

  await loadGoogleAnalyticsScript();

  if (!gaConfigured) {
    ensureGtagStub();
    window.gtag!("config", GA_MEASUREMENT_ID, {
      send_page_view: false,
    });
    gaConfigured = true;
  }
}

function trackGaPageView(path?: string): boolean {
  if (!analyticsConsentGranted || !window.gtag) return false;

  const pagePath =
    path ?? `${window.location.pathname}${window.location.search}`;
  if (lastGaPageViewPath === pagePath) return false;

  lastGaPageViewPath = pagePath;
  window.gtag("event", "page_view", {
    page_path: pagePath,
    page_location: window.location.href,
    page_title: document.title,
  });
  return true;
}

export function trackConsentPageView(path?: string): void {
  const pagePath =
    path ?? `${window.location.pathname}${window.location.search}`;
  const gaFired = trackGaPageView(pagePath);
  const metaFired = trackMetaPageView(pagePath);

  logConsentDiagnostics("page-view", {
    storedConsent: getStoredConsent(),
    googleConsentDefault: "denied",
    googleConsentUpdated,
    gaInitialized: gaConfigured,
    metaInitialized: Boolean(window.fbq),
    marketingConsentGranted: isMarketingConsentGranted(),
    gaPageViewFired: gaFired,
    metaPageViewFired: metaFired,
    path: pagePath,
  });
}

export async function applyConsentChoice(granted: boolean): Promise<void> {
  analyticsConsentGranted = granted;
  googleConsentUpdated = granted ? "granted" : "denied";

  await ensureGoogleTagLoaded();
  ensureGtagStub();

  if (!granted) {
    window.gtag!("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    await applyMetaPixelConsent(false);
    lastGaPageViewPath = "";
    logConsentDiagnostics("consent-denied", {
      storedConsent: getStoredConsent(),
      googleConsentDefault: "denied",
      googleConsentUpdated: "denied",
      gaInitialized: gaConfigured,
      metaInitialized: Boolean(window.fbq),
      marketingConsentGranted: false,
      gaPageViewFired: false,
      metaPageViewFired: false,
    });
    return;
  }

  window.gtag!("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
  });

  await applyMetaPixelConsent(true);
  trackConsentPageView();

  logConsentDiagnostics("consent-granted", {
    storedConsent: getStoredConsent(),
    googleConsentDefault: "denied",
    googleConsentUpdated: "granted",
    gaInitialized: gaConfigured,
    metaInitialized: Boolean(window.fbq),
    marketingConsentGranted: isMarketingConsentGranted(),
    gaPageViewFired: true,
    metaPageViewFired: true,
  });
}

export async function restoreStoredConsent(): Promise<CookieConsentChoice | null> {
  await ensureGoogleTagLoaded();

  const stored = getStoredConsent();
  if (stored) {
    await applyConsentChoice(stored.analytics);
    return stored;
  }

  ensureFbqStubForDeniedState();
  logConsentDiagnostics("no-stored-consent", {
    storedConsent: null,
    googleConsentDefault: "denied",
    googleConsentUpdated: null,
    gaInitialized: gaConfigured,
    metaInitialized: false,
    marketingConsentGranted: false,
    gaPageViewFired: false,
    metaPageViewFired: false,
  });
  return null;
}

async function ensureFbqStubForDeniedState() {
  if (!META_PIXEL_ID) return;
  await applyMetaPixelConsent(false);
}

export async function applyAnalyticsConsent(granted: boolean) {
  await applyConsentChoice(granted);
}
