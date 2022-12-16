/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['user-images.githubusercontent.com', 'images.unsplash.com']
  }
}

// eslint-disable-next-line no-undef
module.exports = nextConfig
