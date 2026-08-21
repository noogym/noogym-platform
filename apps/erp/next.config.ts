import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.NEXT_OUTPUT_STANDALONE === "true" ? { output: "standalone" as const } : {}),
  experimental: {
    cpus: 1,
    staticGenerationMaxConcurrency: 1,
    staticGenerationMinPagesPerWorker: 1
  },
  transpilePackages: ["@noogym/admin", "@noogym/ui", "@noogym/core", "@noogym/types", "@noogym/data-access"]
};

export default nextConfig;
