/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  basePath: '/Cma-png.github.io',  // Replace with your actual repository name
  assetPrefix: '/Cma-png.github.io/',  // Replace with your actual repository name
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
