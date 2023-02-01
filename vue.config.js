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
    add: {
      entry: "./src/pages/Add/main.js",
      template: "public/index.html",
      title: "Add",
      chunks: ["chunk-vendors", "chunk-common", "add"],
    },
    view: {
      entry: "./src/pages/View/main.js",
      template: "public/index.html",
      title: "View",
      chunks: ["chunk-vendors", "chunk-common", "view"],
    },
    update: {
      entry: "./src/pages/Update/main.js",
      template: "public/index.html",
      title: "Update",
      chunks: ["chunk-vendors", "chunk-common", "update"],
    },
    delete: {
      entry: "./src/pages/Delete/main.js",
      template: "public/index.html",
      title: "Delete",
      chunks: ["chunk-vendors", "chunk-common", "delete"],
    },
  },
};
