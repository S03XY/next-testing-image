/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    loader: "default",
    domains: ["localhost"],
    formats: ["image/webp"],
    minimumCacheTTL: 60,
  },
};

module.exports = nextConfig;
