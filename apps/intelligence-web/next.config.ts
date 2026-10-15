import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  ...(process.env.NEXT_OUTPUT_STANDALONE === "true" ? { output: "standalone" as const } : {}),
};

export default nextConfig;
