// const withImages = require("next-images");
const withOptimizedImages = require("next-optimized-images");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    // Since MUI doesn't support IE11, use legacy
    config.resolve.alias = {
      ...config.resolve.alias,
      "@mui/base": "@mui/base/legacy",
      "@mui/lab": "@mui/lab/legacy",
      "@mui/material": "@mui/material/legacy",
      "@mui/styled-engine": "@mui/styled-engine/legacy",
      "@mui/system": "@mui/system/legacy",
      "@mui/utils": "@mui/utils/legacy",
    };
    return config;
  },
  images: {
    disableStaticImages: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withOptimizedImages({
  handleImages: ["jpeg", "png", "svg"],
  ...nextConfig,
});
