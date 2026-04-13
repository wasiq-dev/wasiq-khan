import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Agar aap images use kar rahe hain to uska domain yahan add kar sakte hain
};
module.exports = {
  experimental: {
    turbo: false,
  },
}

export default nextConfig;