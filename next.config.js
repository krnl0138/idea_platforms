const withImages = require("next-images");
/** @type {import('next').NextConfig} */
const nextConfig = {
  // fileExtensions: ["svg", "webp", "jpg", "jpeg", "png", "gif"],
  // disableStaticImages: true,
  images: {
    disableStaticImages: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withImages(nextConfig);
