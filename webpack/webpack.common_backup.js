// const webpack = require("webpack");
const convert = require("koa-connect");
const history = require("connect-history-api-fallback");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonPaths = require("./paths");

module.exports = {
  entry: commonPaths.entryPath,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        // exclude: /(node_modules)/,
        options: {
          configFile: "tsconfig.json"
        }
      },
      // {
      //   test: /\.(js|jsx)$/,
      //   loader: "babel-loader",
      //   exclude: /(node_modules)/
      // },
      {
        test: /\.(t|j)sx?$/,
        use: { loader: 'awesome-typescript-loader' } 
      },
      // {
      //   enforce: 'pre',
      //   test: /\.js$/,
      //   loader: 'source-map-loader' 
      // },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: commonPaths.imagesFolder
            }
          }
        ]
      },
      {
        test: /\.(woff2|ttf|woff|eot)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: commonPaths.fontsFolder
            }
          }
        ]
      }
    ]
  },
  serve: {
    add: app => {
      app.use(convert(history()));
    },
    content: commonPaths.entryPath,
    dev: {
      publicPath: commonPaths.outputPath
    },
    open: true
  },
  resolve: {
    // modules: ["src", "node_modules"],
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [
    // new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath
    }),

    // new ScriptExtHtmlWebpackPlugin({
    //   defaultAttribute: "async"
    // })
  ]
};
