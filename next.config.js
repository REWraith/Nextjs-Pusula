/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.imgur.com', 'imgur.com'],
    unoptimized: true, // Disable Image Optimization for static exports
  },
  output: 'export', // Enable static export
};

module.exports = nextConfig;