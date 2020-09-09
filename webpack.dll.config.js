const path = require('path');
const webpack = require('webpack');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    modules: ['react', 'react-dom', 'react-router-dom'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].dll.js',
    library: '[name]',
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin({}),
      new TerserWebpackPlugin({}),
    ],
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '[name]-manifest.json'),
      context: path.resolve(__dirname, 'src'),
    }),
  ],
};
