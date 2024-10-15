const path = require("path");

module.exports = {
  entry: "./libs/xeokit/xeokit-sdk.min.es5.js", // Убедитесь, что этот путь корректен
  output: {
    filename: "xeokit-sdk.umd.js",
    path: path.resolve(__dirname, "dist"),
    library: "xeokit",
    libraryTarget: "umd",
  },
  mode: "production",
};
