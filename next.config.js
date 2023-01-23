/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const apiUrl = isDev
    ? "http://localhost:3000"
    : "https://your-production-url.com";
  return {
    ...nextConfig,
    publicRuntimeConfig: {
      apiUrl,
    },
    images: {
      domains: ["images.unsplash.com"],
    },

    webpack: (config) => {
      config.resolve = {
        ...config.resolve,
        fallback: {
          fs: false,
          path: false,
          os: false,
          child_process: false,
          dgram: false,
          awssdk: false,
        },
      };
      return config;
    },
  };
};
