const withImages = require('next-images');
/** @type {import('next').NextConfig} */

const appURL = "api.earis.ir"

module.exports = withImages(({
  env: {
    REACT_APP_API_URL: `https://${appURL}`,
    appAPI:appURL
  },
  experimental: {
    scrollRestoration: true,
  },
  images: {
    domains: [appURL],
    disableStaticImages: true
  },
  reactStrictMode: false,
  async rewrites() {
    return [
      // {
      //   source: '/dashboard/:any*',
      //   destination: '/dashboard/',
      // },
    ];
  },
}))
