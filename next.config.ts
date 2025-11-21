/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/probya-coming-soon' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/probya-coming-soon/' : '',
}

module.exports = nextConfig