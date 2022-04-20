const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/js/movie.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/movie.bundle.js',
    assetModuleFilename: "images/[name][ext][query]"
  },
  mode: 'development',
  watchOptions: {
    poll: 10000 // Check for changes every 10 seconds, this is needed for WSL2
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/movie.css"
    }),
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
        type: 'asset/resource'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};