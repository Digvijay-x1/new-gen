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
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: '2k21.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'www.bluebookservices.com',
      },
      {
        protocol: 'https',
        hostname: 'github.githubassets.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'www.townscript.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.freebiesupply.com',
      },
    ],
  },
};

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    const { EventEmitter } = require("events");
    if (EventEmitter?.defaultMaxListeners && EventEmitter.defaultMaxListeners < 30) {
      EventEmitter.defaultMaxListeners = 30;
    }

    return nextConfig;
  }

  return nextConfig;
};
