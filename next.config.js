/** @type {import('next').NextConfig} */
// const path = require("path");
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
    // module: {
    //   loaders: [
    //     {
    //       test: /.jsx?$/,
    //       loader: "babel-loader",
    //       exclude: /node_modules/,
    //     },
    //     {
    //       test: /\.css$/,
    //       loader: "style-loader!css-loader",
    //     },
    //     {
    //       test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
    //       loader: "url-loader?limit=100000",
    //     },
    //   ],
    // },

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
