import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/',
  assetPrefix: '/', // 確保靜態資源也能正常加載
};

export default nextConfig;
