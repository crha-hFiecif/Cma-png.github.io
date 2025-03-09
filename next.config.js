/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true, // Disable the image optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;