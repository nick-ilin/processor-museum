const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCss = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index-bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    static: [
      {
        directory: path.join(__dirname),
      },
    ],
    historyApiFallback: true, //{

      //rewrites: [
      //  { from: /^\/videocards/, to: '/index.html' },
      //  { from: /^\/processors/, to: '/index.html' },
      //  { from: /^\/mainboards/, to: '/index.html' },
      //],
    //},
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCss({
      filename: 'style.css',
    }),
  ],
};
