const webpack = require("webpack");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyser = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = () => {
  return merge(common,{
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
      port: 8080,
      historyApiFallback: true,
      overlay: true,
      open: true,
      stats: 'errors-only'
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
      new BundleAnalyser(),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env)
      })
    ]
  });
  
};
