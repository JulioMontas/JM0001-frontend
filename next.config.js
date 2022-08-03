const nextTranslate = require('next-translate');

module.exports = {
  ...nextTranslate(),
  exportPathMap: async function (
     defaultPathMap,
     { dev, dir, outDir, distDir, buildId }
   ) {
     return {
       '/': { page: '/' },
       '/about-me': { page: '/about-me' },
       '/blog': { page: '/blog' },
       '/case-study': { page: '/case-study' },
       '/side-project': { page: '/side-project' },
       '/shop': { page: '/shop' },
     }
   },
   eslint: {
     // Warning: This allows production builds to successfully complete even if
     // your project has ESLint errors.
     ignoreDuringBuilds: true,
   },
};
