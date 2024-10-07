/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Disable the image optimization
  },
  basePath: '/Cma-png.github.io', 
  assetPrefix: '/Cma-png.github.io', 
};

module.exports = nextConfig;
