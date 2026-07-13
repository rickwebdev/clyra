import { logConsentDiagnostics } from "@/lib/consent-diagnostics";

export const META_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() ?? "";

let pixelScriptLoaded = false;
let pixelInitialized = false;
let marketingConsentGranted = false;
let lastMetaPageViewPath = "";

declare global {
  interface Window {
    fbq?: {
      (...args: unknown[]): void;
      callMethod?: (...args: unknown[]) => void;
      queue?: unknown[];
      loaded?: boolean;
      version?: string;
      push?: (...args: unknown[]) => void;
    };
    _fbq?: Window["fbq"];
  }
}

export function isMarketingConsentGranted(): boolean {
  return marketingConsentGranted;
}

function ensureFbqStub() {
  if (typeof window.fbq === "function") return;

  const queue: unknown[] = [];
  const fbq = function fbq(...args: unknown[]) {
    const fn = fbq as NonNullable<Window["fbq"]>;
    if (typeof fn.callMethod === "function") {
      fn.callMethod(...args);
      return;
    }
    queue.push(args);
  } as NonNullable<Window["fbq"]>;

  fbq.queue = queue;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.push = fbq;
  window.fbq = fbq;
  if (!window._fbq) window._fbq = fbq;
}

function loadMetaPixelScript(): Promise<void> {
  if (pixelScriptLoaded) return Promise.resolve();

  return new Promise((resolve, reject) => {
    ensureFbqStub();

    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-meta-pixel="true"]',
    );
    if (existing) {
      pixelScriptLoaded = true;
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    script.dataset.metaPixel = "true";
    script.onload = () => {
      pixelScriptLoaded = true;
      resolve();
    };
    script.onerror = () => reject(new Error("Failed to load Meta Pixel"));
    document.head.appendChild(script);
  });
}

export async function applyMetaPixelConsent(granted: boolean) {
  if (!META_PIXEL_ID) return;

  ensureFbqStub();

  if (!granted) {
    marketingConsentGranted = false;
    window.fbq!("consent", "revoke");
    logConsentDiagnostics("meta-consent-revoked", {
      storedConsent: null,
      googleConsentDefault: "denied",
      googleConsentUpdated: "denied",
      gaInitialized: false,
      metaInitialized: pixelInitialized,
      marketingConsentGranted: false,
      gaPageViewFired: false,
      metaPageViewFired: false,
    });
    return;
  }

  marketingConsentGranted = true;

  await loadMetaPixelScript();

  if (!pixelInitialized) {
    window.fbq!("init", META_PIXEL_ID);
    pixelInitialized = true;
  }

  window.fbq!("consent", "grant");

  logConsentDiagnostics("meta-consent-granted", {
    storedConsent: null,
    googleConsentDefault: "denied",
    googleConsentUpdated: "granted",
    gaInitialized: false,
    metaInitialized: pixelInitialized,
    marketingConsentGranted: true,
    gaPageViewFired: false,
    metaPageViewFired: false,
  });
}

export function trackMetaPageView(path?: string): boolean {
  if (!META_PIXEL_ID || !marketingConsentGranted || !window.fbq) {
    return false;
  }

  const pagePath =
    path ?? `${window.location.pathname}${window.location.search}`;
  if (lastMetaPageViewPath === pagePath) return false;

  lastMetaPageViewPath = pagePath;
  window.fbq("track", "PageView");
  return true;
}

export function trackMetaEvent(
  event: string,
  params?: Record<string, unknown>,
) {
  if (
    typeof window === "undefined" ||
    !META_PIXEL_ID ||
    !marketingConsentGranted ||
    !window.fbq
  ) {
    return;
  }

  const safeParams = params
    ? Object.fromEntries(
        Object.entries(params).filter(
          ([key]) =>
            !["email", "phone", "name", "message", "website"].includes(key),
        ),
      )
    : undefined;

  window.fbq("track", event, safeParams);
}
