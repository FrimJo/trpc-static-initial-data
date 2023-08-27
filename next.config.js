/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // SWC minifier is 7x faster than Terser with comparable output
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'standalone',
}

module.exports = nextConfig
