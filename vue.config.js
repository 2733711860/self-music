const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");
const path = require('path');
const themePath = path.resolve(__dirname,'src/assets/style/theme.less');

module.exports = {
  // 关闭eslint检查
  lintOnSave: false,
  devServer: {
  	open: true,
  	port: 8080,
  	proxy: '',
    // 代理
//  proxy: {
      // 只要请求地址有'api'都会匹配上
//   "/api": {
//      target: "http://132.232.94.151:3005",
//      ws: true,
//      // 允许跨域
//      changeOrigin: true,
//      pathRewrite: {
//        "^/api": "" //通过pathRewrite重写地址，将前缀/api转为/
//      }
//    }
//  }
  },
  // 配置css前缀,px转rem
  css: {
    loaderOptions: {
      less: {
        // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
        // `primary` is global variables fields name
        // modifyVars: {
        //   // 直接覆盖变量
        //   "text-color": "#111",
        //   "border-color": "#eee",
        //   "nav-bar-text-color": "#c03131",
        //   "van-nav-bar__text": "#c03131",
        //   "nav-bar-title-text-color": "#c03131",

        //   // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
        //   // hack: `true; @import "@/assets/style/my-theme.less";`
        // }
        modifyVars: {
          hack: `true; @import "${themePath}";`
        }
      },
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ["*"]
          })
        ]
      }
    }
  },

  configureWebpack: {
    externals: {
      axios: "axios" // 配置使用CDN
    }
  }

  // css: {
  //   loaderOptions: {
  //     // 给 less-loader 传递 Less.js 相关选项
  //     less: {
  //       // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
  //       // `primary` is global variables fields name
  //       // modifyVars: {
  //       //   // 直接覆盖变量
  //       //   "text-color": "#111",
  //       //   "border-color": "#eee",
  //       //   "nav-bar-text-color": "#c03131",
  //       //   "van-nav-bar__text": "#c03131",
  //       //   "nav-bar-title-text-color": "#c03131",

  //       //   // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
  //       //   // hack: `true; @import "@/assets/style/my-theme.less";`
  //       // }
  //       modifyVars: {
  //         red: "#03a9f4",
  //         blue: "#3eaf7c",
  //         orange: "#f08d49",
  //         "text-color": "#111"
  //       }
  //     }
  //   }
  // }

  // chainWebpack: config => {
  //   const lessRule = config.module.rule("less");
  //   lessRule.uses.clear();
  //   lessRule
  //     .test(/\.less$/)
  //     .use("style-loader")
  //     .loader("css-loader")
  //     .loader("less-loader")
  //     .options({
  //       modifyVars: {
  //         // 直接覆盖变量
  //         "text-color": "#111",
  //         "border-color": "#eee",
  //         // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
  //         hack: `true; @import "@/assets/style/my-theme.less";`
  //       }
  //     });
  // }

  // // 自定义主题样式
  // rules: [
  //   {
  //     test: /\.less$/,
  //     use: [
  //       // ...其他 loader 配置
  //       {
  //         loader: "less-loader",
  //         options: {
  //           modifyVars: {
  //             // 直接覆盖变量
  //             "text-color": "#111",
  //             "border-color": "#eee",
  //             // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
  //             hack: `true; @import "@/assets/style/my-theme.less";`
  //           }
  //         }
  //       }
  //     ]
  //   }
  // ]
  // devServer: {
  //     // 代理
  //     proxy: {
  //         // 只要请求地址有'api'都会匹配上
  //         "/api": {
  //             target: "http://132.232.94.151:3005",
  //             ws: true,
  //             // 允许跨域
  //             changeOrigin: true,
  //             pathRewrite: {
  //                 "^/api": "" //通过pathRewrite重写地址，将前缀/api转为/
  //             }
  //         }
  //     }
  // }
};
