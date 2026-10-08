import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  reactStrictMode: true,
  ...(process.env.NEXT_OUTPUT_STANDALONE === "true" ? { output: "standalone" as const } : {}),
};

export default nextConfig;
