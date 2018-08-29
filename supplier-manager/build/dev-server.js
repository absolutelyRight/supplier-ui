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
app.use("/tender/add",function (req, res, next) {
    var tender = req.body;
    tender.id=model.tenders[model.tenders.length-1]+1;
    model.tenders.push(tender);
    res.send(true);
    return false;
});
app.use("/tender/select",function (req, res, next) {
    var purchaseId = req.body.purchaseId;
    var tenderId = req.body.tenderId;
    var list=model.purchase.filter(function (e) {
        return e.id==purchaseId;
    });
    if(list.length==0)
        res.send(null);
    else
    {
        list=model.tenders.filter(function (e) {
            return e.id==tenderId&& e.purchaseId==purchaseId;
        });
        if(list.length>0) {
            var e=list[0];
            e.status = 1;
            res.send(true);
        }
        else {
            res.send(false);
        }
    }
});
app.use("/tender/define",function (req, res, next) {
    var purchaseId = req.body.purchaseId;
    var tenderId = req.body.tenderId;
    var list=model.purchase.filter(function (e) {
        return e.id==purchaseId;
    });
    if(list.length==0)
        res.send(null);
    else
    {
        var purchase = list[0];
        var definedTime = Date.now();
        list=model.tenders.filter(function (e) {
            return e.id==tenderId&& e.purchaseId==purchaseId;
        });
        if(list.length>0) {
            var t=list[0];
            t.status = 2;
            t.definedTime = definedTime;
            purchase.definedTime = definedTime;
            purchase.definedSupplierId= t.supplierId;

            var msg={
                id:model.messages.length,
                supplierId:t.supplierId,
                title:'中标通知',
                content:`您已中标【${purchase.name}】采购项目，请等待平台与您联系`,
                createTime:Date.now()
            };
            model.messages.push(msg);
            res.send(true);
        }
        else {
            res.send(false);
        }
    }
});
app.use("/tender",function (req, res, next) {
    var pageIndex=req.body.pageIndex|| 1,pageSize=10;
    var total = model.tenders.length;
    var purchaseId = req.body.purchaseId;
    if(!purchaseId) {
        res.send(null);
        return;
    }
    var list = model.tenders.filter(function (e){
        return e.purchaseId== purchaseId
    }).slice((pageIndex-1)*pageSize,pageSize*pageIndex);
    list.forEach(function (e) {
        model.suppliers.forEach(function (s) {
            if(s.id== e.supplierId){
                e.name= s.name;
            }
        })
    });
    var page={
        list: list,
        total: total,
        totalPage:Math.ceil(total/pageSize)
    };
    res.send(page);
});

app.use("/message/get",function (req, res, next) {
    var id = req.body.id;
    if(!id) {
        res.send(null);
        return;
    }
    model.messages.forEach(function (e){
        if(e.id== id){
            res.send(e);
        }
    });
});

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
