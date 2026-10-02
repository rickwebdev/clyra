type JsonLdProps = {
  data: unknown;
};

// Rendered as a plain <script> so structured data is present in the server HTML
// for crawlers that do not execute JavaScript. "<" is escaped to prevent
// content from closing the script tag early.
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
