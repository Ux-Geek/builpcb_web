import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/app",
        destination: "https://app.buildpcbs.com",
        permanent: false,
      },
      {
        source: "/explorer",
        destination: "https://explorer.buildpcbs.com",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
