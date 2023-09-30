// Required HtmlWebpackPlugin from html plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");
// Required WebPwaManifest from pwa manifest
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
// Required InjectManifest from workbox plugin
const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = (env, argv) => {
  const injectManifest = new InjectManifest({
    //reference custom service worker location
    swSrc: "./src-sw.js",
    swDest: "src-sw.js",
    ...(argv.mode !== "production" ? { exclude: [/./] } : {}),
  });

  if (argv.mode !== "production") {
    Object.defineProperty(injectManifest, "alreadyCalled", {
      get() {
        return false;
      },
      set() {},
    });
  }

  return {
    mode: "production",
    //Entry points for files
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },
    //Output for bundles
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },

    plugins: [
      //Webpack plugin to generate HTML file as well as injecting the budles
      new HtmlWebpackPlugin({
        template: "./index.html",
        title: "Text Editor",
      }),

      //Webpack plugin to inject custom service worker
      injectManifest,

      //Webpack plugin to create a manifest.json
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: "Text Editor",
        short_name: "Text",
        description: "Edit some Text here!",
        background_color: "#225ca3",
        theme_color: "#225ca3",
        start_url: "./",
        publicPath: "./",
        icons: [
          {
            src: path.resolve("src/images/logo.png"),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join("assets", "icons"),
          },
        ],
      }),
    ],

    module: {
      rules: [
        //CSS loader
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          //babel loder to allow for using ES6
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: [
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/transform-runtime",
              ],
            },
          },
        },
      ],
    },
  };
};
