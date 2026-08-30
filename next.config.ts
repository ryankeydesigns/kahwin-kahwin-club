import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const usesCustomDomain = process.env.GITHUB_PAGES_CUSTOM_DOMAIN === "true";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export" as const,
        basePath: usesCustomDomain ? "" : "/kahwin-kahwin-club",
        assetPrefix: usesCustomDomain ? "" : "/kahwin-kahwin-club/",
        trailingSlash: true,
        images: { unoptimized: true },
        typescript: { ignoreBuildErrors: true },
      }
    : {}),
};

export default nextConfig;
