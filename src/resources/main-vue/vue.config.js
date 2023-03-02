// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

// https://github.com/webpack-contrib/webpack-bundle-analyzer
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
function resolve(dir) {
  console.log(__dirname);
  return path.join(__dirname, dir);
}
const isProduction = process.env.NODE_ENV === 'production';
const cdn = {
  // 忽略打包的第三方库,这种方式能更好的利用分包和缓存机制
  externals: {
    lodash: "_",
  },
  // 注意引入顺序
  js: [
    "lib/lodash/lodash.min.js",
  ],
  css: [
    "lib/driver/driver.min.css",
  ]
}
module.exports = {
  // 微前端子应用热更新问题
  publicPath: "./",
  outputDir: "../dist",

  productionSourceMap: false, // env.DEV_SOURCE_MAP,

  // 构建时开启多进程处理 babel 编译
  parallel: require('os').cpus().length > 1,

  devServer: {
    open: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "*",
    },
    port: "8100",
  },

  configureWebpack: {
    plugins: [
      new webpack.optimize.MinChunkSizePlugin({
        minChunkSize: 10000 // Minimum number of characters
      })
    ],
    optimization: {
      splitChunks: {
        chunks: "all",
        minSize: 30000, // 允许新拆出 chunk 的最小体积，也是异步 chunk 公共模块的强制拆分体积
        maxAsyncRequests: 5, // 每个异步加载模块最多能被拆分的数量
        maxInitialRequests: 3, // 每个入口和它的同步依赖最多能被拆分的数量
        enforceSizeThreshold: 50000, // 强制执行拆分的体积阈值并忽略其他限制
        cacheGroups: {
          styles: {
            priority: 100,
            name: 'styles',
            test: m => m.constructor.name === 'CssModule',
            chunks: 'all',
            enforce: true, //忽略splitChunks的其他配置，强制将匹配到的缓存组中的文件合并为一个styles.css文件
          },
          vue: {
            priority: 80,
            name: "vue",
            test: /[\\/]node_modules[\\/](vue|vue-router|vuex|axios||vuex-persistedstate)[\\/]/,
            chunks: 'all',
            reuseExistingChunk: true
          },
          elementUI: { // elementUI 单独拆包
            priority: 75,
            name: "element-ui",
            test: /[\\/]node_modules[\\/]element-ui[\\/]/,
            chunks: 'initial',
            reuseExistingChunk: true
          },
        },
      },
    },
    // 如果我们想引用一个库,但是又不想让webpack打包可在此配置 key: value
    externals: cdn.externals,
  },

  chainWebpack: config => {
    // 配置路径别名
    config.resolve.alias
      .set("@", resolve("src")) // key,value自行定义，比如.set("@@", resolve("src/components"))
      .set("@public", resolve("public"));

    config.plugin('html').tap(args => {
      args[0].cdn = cdn
      return args
    });
    config.module
      .rule('thejs')
      .test(/\.js$/)
      .include
      .add(path.resolve('src'))
      .add(path.resolve('node_modules/element-ui/packages'))
      .end()
      .use('babel-loader')
      .loader('babel-loader')
      .end()

    // 生产环境 进行压缩
    if (isProduction) {
      // 打包分析
      // config.plugin("bundleAnalyzerPlugin")
      //     .use(new BundleAnalyzerPlugin())
      config.plugin("compressionPlugin")
        .use(new CompressionPlugin({
          test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i, // 匹配文件名
          filename: "[path].gz[query]",
          algorithm: "gzip",
          threshold: 10240,
          minRatio: 0.8,
          deleteOriginalAssets: false // 不删除源文件
        }));

      // 修改uglifyOptions去除console来减少文件大小
      config.plugin("UglifyJsPlugin")
        .use(new UglifyJsPlugin({
          cache: true,
          parallel: true,
          uglifyOptions: {
            compress: {
              // warnings: false,
              drop_debugger: true,
              drop_console: true
            },
            warnings: false,
            ecma: 6,
            mangle: true
          },
          sourceMap: false
        }));
    }
  },
}
