const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyser = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = () => {
  //console.log(process.env.BEFFE_URL, "beffe url");

  return {
    //entry: "./src/index.tsx",
    entry: "./src/index.tsx",
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },
    devtool : 'inline-source-map',
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "bundle.min.js",
      publicPath: "/"
    },
    devServer: {
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader"
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          loader: "file-loader"
        },
        {
          test: /\.(jpe?g|png|gif|svg)(\?[a-z0-9=.]+)?$/,
          loader: "url-loader?limit=100000"
        },
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        //template: "./public/index.html"
        template: "./public/template.html"
      }),
      //new webpack.EnvironmentPlugin(["BEFFE_URL"]),

      // new BundleAnalyser(),
      new CompressionPlugin()
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          node_vendors: {
            test: /[\\/]node_modules[\\/]/,
            chunks: "async",
            priority: 1
          }
        }
      },
      namedModules : true,
      namedChunks : true,
      minimizer: [
        new UglifyJsPlugin({
          test: /\.js(\?.*)?$/i
        })
      ]
    }
  };
};
