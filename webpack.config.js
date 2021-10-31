const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

const isProd = process.env.ENV === "production";
module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name].[chunkhash:8].js",
    path: path.join(__dirname, "dist"),
  },
  mode: isProd ? "production" : "development", // development production
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [miniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js|jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          cacheDirectory: true, // 开启缓存，只有在服务器中才生效
        },
      },
      {
        test: /\.jsx$/,
        loader: "./loader/test-loader",
      },
      {
        test: /\.less$/,
        use: [
          miniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                modifyVars: {
                  // 'primary-color': 'red',
                },
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
      title: "WebPack App",
      jquery: "http://libs.baidu.com/jquery/2.0.0/jquery.min.js",
    }),
    new miniCssExtractPlugin(),
  ],
  devtool: isProd ? "nosources-source-map" : "source-map",
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //     cacheGroups: {
  //       vendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //         priority: -10
  //       }
  //     }
  //   }
  // },
  resolve: {
    extensions: ["", ".js", ".jsx"], // 引入模块可以不加扩展名
    alias: {
      "@api": path.resolve(__dirname, "./api.js"),
    },
  },
  externals: {
    jquery: "jQuery",
  },
  devServer: {
    port: 3000,
    hot: true,
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        pathRewrite: { "^/api": "" },
      },
    },
  },
};
