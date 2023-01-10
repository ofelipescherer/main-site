/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['user-images.githubusercontent.com', 'images.unsplash.com']
  },

  i18n: {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'en-US'
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })

    return config
  }
}

// eslint-disable-next-line no-undef
module.exports = nextConfig
