type ConsentDiagnostics = {
  storedConsent: unknown;
  googleConsentDefault: string;
  googleConsentUpdated: string | null;
  gaInitialized: boolean;
  metaInitialized: boolean;
  marketingConsentGranted: boolean;
  gaPageViewFired: boolean;
  metaPageViewFired: boolean;
  path?: string;
};

export function logConsentDiagnostics(
  context: string,
  state: ConsentDiagnostics,
): void {
  if (process.env.NODE_ENV === "production") return;
  console.info(`[consent:${context}]`, state);
}
