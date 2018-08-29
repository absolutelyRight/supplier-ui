require('./check-versions')()
var bodyParser = require('body-parser');//引入body-parser

var model = require("../static/model")
var config = require('../config')
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
    var options = proxyTable[context]
    if (typeof options === 'string') {
        options = { target: options }
    }
    app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)

app.use(bodyParser.json());//使用bodyparser并配置其参数
app.use(bodyParser.urlencoded({ extended: false }));//使用bodyparser并配置其参数

app.use(staticPath, express.static('./static'))

app.use("/fang/add",function (req, res, next) {
    console.log(req.body);
    model.user.push(req.body);
    res.send(req.body);
})
app.use("/fang/get",function (req, res, next) {
    res.send(model.user);
})

app.use("/supplier/add",function (req,res,next) {
    model.supplier.push({
        "sFullName": "完全正确科技有限公司",
        "sFax": "",
        "sShortName": '完全正确',
        "sSocialCreditCode": "91371624MA3DLD696N",
        "sUrl": "https://github.com/absolutelyRight",
        "sPassword": "admin",
        "sPhone": "13060369239",
        "sAddress": "西班牙马德里伯纳乌大街10号",
        "sDeputy": "RAUL",
        "confirmPassword": "admin",
        "sEmailUrl": "123456@163.com",
        "sContact": "RAUL",
        "sMoney": 1000,
        "sRealMoney": 1000,
        "sFoundDate": "2016-8-6 10:20:16",
        "sAvgIncome": 500000,
        "sBankName": '中国建设银行',
        "sBankCredit": "优秀",
        "sBankAccount": '610849845106548545',
        "sBankAccountName": "RAUL",
        "sProduct": "服务器",
        "sClient": "百度、阿里、腾讯",
        "sAbility": '国家一级服务器供应商',
        "alreadyAssess": "0",
        "alreadyReview": "0"
    });
    res.send(req.body);
})

app.use("/supplier/get",function (req,res,next) {
    res.send(model.supplier);
})

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
    _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
    console.log('> Listening at ' + uri + '\n')
    // when env is testing, don't need open it
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
        opn(uri)
    }
    _resolve()
})

var server = app.listen(port)

module.exports = {
    ready: readyPromise,
    close: () => {
        server.close()
    }
}
