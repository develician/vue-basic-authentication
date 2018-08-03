module.exports = {
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "@/styles/utils.scss";`
      }
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/api/"
        }
      },
      "/foo": {
        target: "<other_url>"
      }
    }
  }
};
