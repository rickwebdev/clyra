import createMDX from '@next/mdx';
const withMDX = createMDX({ extension: /\.mdx?$/ });

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts','tsx','mdx'],
  typescript: {
    ignoreBuildErrors: true,
  },
  // Avoid bundling issues with the Resend SDK in serverless output (Vercel)
  serverExternalPackages: ['resend'],
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
export default withMDX(nextConfig);
