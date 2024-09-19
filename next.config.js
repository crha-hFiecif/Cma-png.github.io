/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Disable the image optimization
  },
};

module.exports = nextConfig;