const { DefinePlugin } = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'production',
  // devServer: {
  //   disableHostCheck: true,
  //   after(app, server) {
  //     app.use(require('./src/routes.dev'))
  //   }
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new DefinePlugin({
    }),
    new HtmlPlugin({
      title: require('./package').name,
      favicon: 'src/assets/favicon.ico'
    })
  ]
};
