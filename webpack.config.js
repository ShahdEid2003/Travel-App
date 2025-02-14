const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: './src/client/index.js',  // Entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',  // Output bundled JavaScript file
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Transpile JavaScript with Babel
        },
      },
      {
        test: /\.scss$/,  // SCSS to CSS
        use: [
          MiniCssExtractPlugin.loader,  // Extract CSS to a file
          'css-loader',
          'sass-loader',  // Compile SCSS to CSS
        ],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],  // Handle HTML files
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),  // Clean dist folder before building
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'client', 'views', 'index.html'),  // Absolute path
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',  // Output extracted CSS
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,  // Enable Service Workers
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,  // Dev server port
    open: true,  // Open browser automatically
  },
  mode: 'development',  // Set Webpack mode
};
