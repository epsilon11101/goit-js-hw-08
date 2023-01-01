const path = require("path");

module.exports = {
  entry: {
    gallery: "./js/01-gallery.js",
    video: "./js/02-video.js",
    feedback: "./js/03-feedback.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
};
