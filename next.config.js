const nextTranslate = require('next-translate');

module.exports = {
  ...nextTranslate(),
  // Webpack 5 is enabled by default
  // You can still use webpack 4 while upgrading to the latest version of Next.js by adding the "webpack5: false" flag
  webpack5: false,

  exportPathMap: async function() {
    return {
      "/": { page: "/" },
      "/menu-me": { page: "/menu-me" }
    };
  }
};
