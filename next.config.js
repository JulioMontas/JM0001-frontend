const withPWA = require('next-pwa')
const nextTranslate = require('next-translate');

module.exports = withPWA({
  pwa: {
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
 },
 ...nextTranslate(),
});
