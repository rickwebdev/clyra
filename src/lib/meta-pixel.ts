export const META_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() ?? "";

let pixelScriptLoaded = false;
let pixelInitialized = false;

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

function ensureFbqStub() {
  if (typeof window.fbq === "function") return;

  const queue: unknown[] = [];
  const fbq = function fbq(...args: unknown[]) {
    if (typeof fbq.callMethod === "function") {
      fbq.callMethod.apply(fbq, args);
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

  if (!granted) {
    return;
  }

  await loadMetaPixelScript();

  if (!pixelInitialized) {
    window.fbq!("init", META_PIXEL_ID);
    pixelInitialized = true;
  }

  window.fbq!("track", "PageView");
}

export function trackMetaEvent(
  event: string,
  params?: Record<string, unknown>,
) {
  if (typeof window === "undefined" || !META_PIXEL_ID || !window.fbq) return;
  window.fbq("track", event, params);
}
