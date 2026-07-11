// Minimal polyfills for the modern browser baseline in package.json browserslist.
// Next.js ships a larger legacy polyfill module by default; we replace it to avoid
// sending unused Baseline feature shims to current browsers.

if (!("canParse" in URL)) {
  URL.canParse = function (url, base) {
    try {
      // eslint-disable-next-line no-new
      new URL(url, base);
      return true;
    } catch {
      return false;
    }
  };
}
