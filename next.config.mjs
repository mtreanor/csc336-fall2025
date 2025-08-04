/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/csc336-fall2025' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/csc336-fall2025' : ''
};

export default nextConfig;