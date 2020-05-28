const webpack = require("webpack");
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const dev = !["production"].includes(process.env.NODE_ENV);
// https://github.com/pmmmwh/react-refresh-webpack-plugin/blob/master/examples/webpack-hot-middleware/server.js
// https://github.com/calesce/react-hot-loader-examples/blob/master/server.js
module.exports = {
  mode: dev ? "development" : "production",
  // devServer: {
  //   disableHostCheck: true,
  //   after(app, server) {
  //     app.use(require('./src/routes.dev'))
  //   }
  // },
  entry: {
    main: ["webpack-hot-middleware/client", "./src/index.js"],
  },
  output: {
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, "src"),
        use: "babel-loader",
      },

      // module.exports = (api) => {
      //   // This caches the Babel config
      //   api.cache.using(() => process.env.NODE_ENV);
      //   return {
      //     presets: ["@babel/preset-env", "@babel/preset-react"],
      //     // Applies the react-refresh Babel plugin on non-production modes only
      //     ...(!api.env("production") && { plugins: ["react-refresh/babel"] }),
      //   };
      // };
      

      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader",
      //   },
      // },
    ],
  },
  plugins: [
    dev && new webpack.HotModuleReplacementPlugin(),
    dev &&
      new ReactRefreshPlugin({
        overlay: {
          sockIntegration: "whm",
        },
      }),
    new webpack.DefinePlugin({}),
    new HtmlPlugin({
      title: require("./package").name,
      favicon: "src/assets/favicon.ico",
    }),
  ].filter(Boolean),
};
