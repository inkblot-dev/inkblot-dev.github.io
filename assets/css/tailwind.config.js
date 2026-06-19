const themeConfig = require('../../themes/blowfish/tailwind.config.js');

module.exports = {
  ...themeConfig,
  theme: {
    ...themeConfig.theme,
    extend: {
      ...(themeConfig.theme?.extend || {}),
      typography: {
        ...(themeConfig.theme?.extend?.typography || {}),
        wide: {
          css: {
            maxWidth: '85ch'
          }
        }
      }
    }
  }
};
