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
  webpack: (config, { isServer }) => {
    // Add jQuery support
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        jquery: require.resolve('jquery'),
      };
    }
    return config;
  },
};

module.exports = nextConfig;