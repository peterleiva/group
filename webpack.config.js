const path = require("path");
const { merge } = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");
const ESLintPlugin = require("eslint-webpack-plugin");

/**
 * Webpack configuration file
 * @param {object} env environment options
 * @param {"production" | "development"} env.mode webpack mode
 * @return {import('webpack').Configuration}
 */
module.exports = ({ mode }) =>
  merge({
    target: "node",
    mode,
    externals: [nodeExternals()],

    plugins: [
      new ESLintPlugin(),
      new webpack.BannerPlugin({
        banner: "#!/usr/bin/env node",
        entryOnly: true,
        raw: true,
      }),
    ],
    output: {
      filename: "index.bundled.js",
      path: path.resolve(__dirname, "dist"),
    },
  });
