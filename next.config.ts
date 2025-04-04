import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/day01',
  assetPrefix: '/', // 確保靜態資源也能正常加載
};

export default nextConfig;
