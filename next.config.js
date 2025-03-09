/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;