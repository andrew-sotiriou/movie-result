const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/js/movie.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/movie.bundle.js'
  },
  mode: 'development',
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'movie result',
      template: './src/html/index.html',
      filename: 'index.html' //output file
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [ MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        loader: 'url-loader',
        // options: {
        //   name: '/src/images/[name].[ext]'
        // },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};