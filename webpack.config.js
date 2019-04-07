const path = require("path");

const webClient = {
  target: "web",
  entry: ["./src/webviews/index.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  stats: {
    all: false,
    assets: true,
    builtAt: true,
    env: true,
    errors: true,
    timings: true,
    warnings: true
  }
};

const nodeJs = {
  target: "node",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "extension.js",
    libraryTarget: "commonjs2",
    devtoolModuleFilenameTemplate: "../[resource-path]"
  },
  devtool: "source-map",
  externals: {
    vscode: "commonjs vscode",
    "node-fetch": "commonjs node-fetch"
  },
  resolve: {
    extensions: [".js"]
  },
  module: {
    noParse: content => {
      return content.includes("load-plugins");
    },
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  stats: {
    all: false,
    assets: true,
    builtAt: true,
    env: true,
    errors: true,
    timings: true,
    warnings: true
  }
};

module.exports = [webClient, nodeJs];
