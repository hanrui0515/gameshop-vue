const webpack = require('webpack');

module.exports = {
  assetsDir: 'static',
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:62180'
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': 'development',
      }),
    ]
  },
  css: {
    sourceMap: true
  }
};
