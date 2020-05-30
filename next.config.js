const withPWA = require('next-pwa')

const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  devIndicators: {
    autoPrerender: false,
  },
  webpack: config => {
    config.node = { fs: 'empty' }
    return config
  },
  pwa: {
    disable: !isProd,
    dest: 'public',
  },
})
