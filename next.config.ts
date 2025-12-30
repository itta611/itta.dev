import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.sizu.me",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.st-note.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
