// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "slelguoygbfzlpylpxfs.supabase.co",
      "2k21.s3.amazonaws.com",
    ],
  },
  experimental: {
    esmExternals: false,
  },
};

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return nextConfig;
  }

  return nextConfig;
};
