/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  output: 'export',
  images: { unoptimized: true },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
}

module.exports = nextConfig
