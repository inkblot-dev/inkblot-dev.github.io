const themeConfig = require('../../themes/blowfish/tailwind.config.js');

module.exports = {
  ...themeConfig,
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./themes/blowfish/layouts/**/*.html",
    "./themes/blowfish/layouts/**/*.svg",
    "./themes/blowfish/layouts/**/*.md",
    "./themes/blowfish/layouts/shortcodes/**/*.html"
  ]
};
