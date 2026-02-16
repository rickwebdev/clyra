import createMDX from '@next/mdx';
const withMDX = createMDX({ extension: /\.mdx?$/ });

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts','tsx','mdx'],
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
export default withMDX(nextConfig);
