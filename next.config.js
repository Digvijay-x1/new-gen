// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'slelguoygbfzlpylpxfs.supabase.co',
      },
      {
        protocol: 'https',
        hostname: '2k21.s3.amazonaws.com',
      },
    ],
  },
};

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return nextConfig;
  }

  return nextConfig;
};
