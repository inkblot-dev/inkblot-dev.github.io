const themeConfig = require('../../themes/blowfish/tailwind.config.js');
const path = require('path');

module.exports = {
  ...themeConfig,
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    path.resolve(__dirname, '../../themes/blowfish/layouts/**/*.html'),
    path.resolve(__dirname, '../../themes/blowfish/layouts/**/*.md'),
  ]
};
