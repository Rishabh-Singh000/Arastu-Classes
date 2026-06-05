import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    formats: ["image/webp"],
    qualities: [75, 80, 85],
  },
};

export default nextConfig;