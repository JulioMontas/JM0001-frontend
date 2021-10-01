const withPWA = require('next-pwa')
const nextTranslate = require('next-translate');

module.exports = withPWA({
  pwa: {
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
 },
 ...nextTranslate(),
 exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about-me': { page: '/about-me' },
    }
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },
});
