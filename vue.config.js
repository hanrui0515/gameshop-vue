const webpack = require('webpack');

module.exports = {
  assetsDir: 'static',
  publicPath: 'http://192.168.1.10:8081',
  devServer: {
    host: '192.168.1.10',
    proxy: {
      '/api': {
        target: 'http://192.168.1.10:62180'
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
