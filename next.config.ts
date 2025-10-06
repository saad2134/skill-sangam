import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  output: 'export', // enables static HTML export
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
