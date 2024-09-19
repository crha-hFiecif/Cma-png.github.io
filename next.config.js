/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Disable the image optimization
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Cma-png.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Cma-png.github.io' : '',
};

module.exports = nextConfig;
