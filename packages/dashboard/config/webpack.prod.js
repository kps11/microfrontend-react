const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");
const commonConfig = require("./webpack.common");

const prodConfig = {
  name: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/dashboard/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "dashboard",
      shared: packageJson.dependencies,
      filename: "remoteEntry.js",
      exposes: {
        "./DashboardApp": "./src/bootstrap.js",
      },
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
