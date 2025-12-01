import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
        remotePatterns: [
          {
            protocol: 'https', 
            hostname: 'www.boundtree.com'
          },
          {
            protocol: 'https',
            hostname: 'www.tri-anim.com'
          },
          {
            protocol: 'https',
            hostname: 'www.cardiopartners.com'
          },
          {
            protocol: 'https',
            hostname: 'digitechcomputer.com'
          },
        ],
      },
};

export default nextConfig;
