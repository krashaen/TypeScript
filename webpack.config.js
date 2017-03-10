const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  watch: true,
  entry: {
    app: './src/index.tsx'
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "bundle.js",
    publicPath: '/',
  },

  resolve: {
    modules: ['src', 'node_modules'],
    extensions: [".js", ".json", ".jsx", ".ts", ".tsx", ".css"],
  },

  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.(ts|tsx)$/, use: 'ts-loader' },
      { test: /\.styl$/, 
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'stylus-loader',
          }
        ]
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
  ],

  devServer: {
    contentBase: path.resolve('build'),
    host: '0.0.0.0',
    port: 8080,
  }
};