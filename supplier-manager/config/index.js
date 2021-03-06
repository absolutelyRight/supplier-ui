// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/vue-admin/',
        productionSourceMap: true,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: require('./dev.env'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            '/gateway/': {
                target: 'http://localhost:8082/',
                changeOrigin: true,
                //路径重写
                pathRewrite: {
                    '^/gateway': ''
                }
            },
            '/manager/': {
                target: 'http://localhost:8084/',
                changeOrigin: true,
                //路径重写
                pathRewrite: {
                    '^/manager': ''
                }
            },
        },
        host: 'localhost', // can be overwritten by process.env.HOST
        port: 8084, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false,
        devtool: 'cheap-module-eval-source-map',
        cacheBusting: true,
        cssSourceMap: true
    },
}
