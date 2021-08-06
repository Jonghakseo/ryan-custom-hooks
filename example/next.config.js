const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  },
  plugins:[new CleanWebpackPlugin],
};