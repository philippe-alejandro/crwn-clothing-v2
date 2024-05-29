const webpack = require('webpack');

module.exports = {
  // your existing configuration
  resolve: {
    fallback: {
      crypto: false
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};