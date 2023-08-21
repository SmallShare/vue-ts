const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);

module.exports = {
    // 默认'/'，部署应用包时的基本 URL
    publicPath: "./",

    // 'dist', 生产环境构建文件的目录
    outputDir: 'dist',

    // 相对于outputDir的静态资源(ts、css、img、fonts)目录
    assetsDir: "static",

    //是否在保存的时候检查
    lintOnSave: false,

    // 是否使用包含运行时编译器的 Vue 构建版本
    runtimeCompiler: false,

    // 生产环境的 source map,不需要生产环境的设置false可以减小dist文件大小，加速构建
    productionSourceMap: true,

    devServer: {
        open: true,  // npm run serve后自动打开页面
        host: 'localhost',  // 匹配本机IP地址(默认是0.0.0.0)
        port: 8083, // 开发服务器运行端口号
        hotOnly: true, //热更新
        proxy: {
            "/api": {
                target: "http://osptest.newchinalife.com", // 目标代理接口地址
                secure: false,
                changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
                // ws: true, // 是否启用websockets
                pathRewrite: {
                    "^/api": "/"
                }
            }
        }
    },

    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'scss',
        patterns: []
      }
    },
    configureWebpack: {
      module:{
        rules:[{
          test:/\.mjs$/,
          include:/node_modules/,
          type:'javascript/auto'
        }]
      }
    }
};
