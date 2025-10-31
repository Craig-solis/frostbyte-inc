import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  allowedDevOrigins: ["10.0.2.120", "localhost", "127.0.0.1"],

  // Server-side functionality enabled for API routes
  images: {
    unoptimized: true,
  },

  // Path-based routing for client websites
  async rewrites() {
    return [
      {
        source: "/poling/:path*",
        destination: "https://poling-wedding-site.vercel.app/:path*",
      },
      {
        source: "/client2/:path*",
        destination: "https://client2-portfolio.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
