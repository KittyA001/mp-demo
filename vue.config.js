const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  // publicPath: "/", // 公共路径
  indexPath: "index.html", // 相对于打包路径index.html的路径
  outputDir: "dist", // 'dist', 生产环境构建文件的目录
  assetsDir: "static", // 相对于outputDir的静态资源(js、css、img、fonts)目录
  lintOnSave: "error", // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: false, //IS_PROD && process.env.ENV === "development" ? true : false, // 生产环境的 source map
  chainWebpack: (config) => {
    config.resolve.alias // 添加别名
      .set("vue$", "vue/dist/vue.esm.js")
      .set("@", resolve("src"))
      .set("@node", resolve("node_modules"));
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");
    config.module
      .rule("svg")
      .exclude.add(resolve("src/plugin/vue-aplayer/imgs"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/plugin/vue-aplayer/imgs"))
      .end()
      .use("svg-inline-loader")
      .loader("svg-inline-loader")
      .end();
    // set preserveWhitespace
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap((options) => {
        options.compilerOptions.preserveWhitespace = true;
        return options;
      })
      .end();
    config.module
      .rule("compile")
      .test(/\.js$/)
      .include.add(resolve("src"))
      .add(resolve("node_modules/ckjrweb-mp-ui"))
      .end()
      .use("babel")
      .loader("babel-loader")
      .options({
        presets: [["@babel/preset-env", { modules: false }]],
      });
    config
      // https://webpack.js.org/configuration/devtool/#development
      .when(process.env.NODE_ENV === "development", (config) =>
        config.devtool("cheap-source-map")
      );
  },
  css: {
    //requireModuleExtension: false, // 去掉文件名中的 .module
    loaderOptions: {
      // 给 less-loader 传递 Less.js 相关选项
      less: {
        // `globalVars` 定义全局对象，可加入全局变量
        globalVars: {
          primary: "#333",
        },
        javascriptEnabled: true, //less 配置
      },
    },
    sourceMap: false,
  },
};
