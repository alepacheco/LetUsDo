const path = require('path')
const withSass = require('@zeit/next-sass')

function HACK_removeMinimizeOptionFromCssLoaders(config) {
  config.module.rules.forEach(rule => {
    if (Array.isArray(rule.use)) {
      rule.use.forEach(u => {
        if (u.loader === 'css-loader' && u.options) {
          delete u.options.minimize;
        }
      });
    }
  });
}

module.exports = withSass({
  webpack(config) {
    HACK_removeMinimizeOptionFromCssLoaders(config);
    config.resolve.alias['components'] = path.join(__dirname, 'src/components')
    config.resolve.alias['pages'] = path.join(__dirname, 'pages')
    config.resolve.alias['src'] = path.join(__dirname, 'src')
    return config;
  },
});