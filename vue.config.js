module.exports = {
  pages: {
    index: {
      entry: "./src/pages/Home/main.js",
      template: "public/index.html",
      title: "Home",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
    videoplayer: {
      entry: "./src/pages/VideoPlayer/main.js",
      template: "public/index.html",
      title: "Video Player",
      chunks: ["chunk-vendors", "chunk-common", "videoplayer"],
    },
  },
};
