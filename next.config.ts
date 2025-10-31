import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  allowedDevOrigins: ["10.0.2.120", "localhost", "127.0.0.1"],

  // Server-side functionality enabled for API routes
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
