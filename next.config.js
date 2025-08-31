/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  output: 'export',
  images: { unoptimized: true },
  basePath: '/in-cloud-console-docs',
}

module.exports = nextConfig
