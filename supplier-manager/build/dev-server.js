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
app.use('/login', function (req, res, next) {
    let {username, password} = req.body;
    let user = null;
    let hasUser = model.user.some(u => {
        if (u.uAccount === username && u.uPassword === password) {
            user = JSON.parse(JSON.stringify(u));
            delete user.password;
            return true;
        }
    });
    if (hasUser) {
        res.send({ code: 200, msg: '请求成功', user });
    } else {
        res.send({ code: 500, msg: '账号或密码错误' });
    }
});
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
    console.log(tender);
    tender.id=model.tenders.length+1+'';
    model.tenders.push(tender);
    res.send(true);
    return false;
});
app.use("/tender/select",function (req, res, next) {
    var purchaseId = req.body.purchaseId;
    var tenderId = req.body.tenderId;
    var list=model.notics.filter(function (e) {
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
            e.status = '已选中';
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
    var list=model.notics.filter(function (e) {
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
            t.status = '已确认';
            t.definedTime = definedTime;
            purchase.definedTime = definedTime;
            purchase.definedSupplierId= t.supplierId;

            var msg={
                id:model.message.length+1+'',
                supplierId:t.supplierId,
                title:'中标通知',
                content:`您已中标【${purchase.name}】采购项目，请等待平台与您联系`,
                createTime:Date.now(),
                createrId:'1'
            };
            model.message.push(msg);
            res.send(true);
        }
        else {
            res.send(false);
        }
    }
});
app.use("/tender/list",function (req, res, next) {
    var pageIndex=req.body.pageIndex|| 1,pageSize=10;
    var purchaseId = req.body.purchaseId;
    if(!purchaseId) {
        res.send(null);
        return;
    }
    var list = model.tenders.filter(function (e){
        return e.purchaseId== purchaseId
    });
    var total = list.length;
    list.slice((pageIndex-1)*pageSize,pageSize*pageIndex);
    list.forEach(function (e) {
        model.supplier.forEach(function (s) {
            if(s.sId== e.supplierId){
                e.name= s.sShortName;
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
function deepClone(e){
    return JSON.parse(JSON.stringify(e));
}
app.use("/tender/get", function (req, res, next) {
    var id=req.body.id,result=null;
    if(model.tenders.some(t=>{
        if(t.id==id){
            if(model.supplier.some(s=>{
                if(s.sId==t.supplierId){
                    result=deepClone(s);
                    var tenders=model.tenders.filter(tt=>tt.supplierId==s.sId);
                    result.tenderTime=tenders.length;
                    tenders=tenders.filter(tt=>tt.status==2);
                    result.winTime=tenders.length;
                    tenders=tenders.filter(tt=>!!tt.score);
                    var sum=tenders.map(ts=>ts.score).reduce((a,b)=>a+b,0);
                    result.score=tenders.length?sum/tenders.length:0;
                    result.time=t.time;
                    result.price=t.price;
                    return true
                }
            }))
            return true;
        }
    })){
        res.send(result);
    }else{
        res.send(null);
    }
})
app.use("/message/get",function (req, res, next) {
    var id = req.body.id;
    if(!id) {
        res.send(null);
        return;
    }
    model.message.forEach(function (e){
        if(e.id== id){
            res.send(e);
        }
    });
});
app.use("/message/list",function (req, res, next) {
    var pageIndex=req.body.pageIndex|| 1,pageSize=10,
        name=req.body.name,supplierId=req.body.supplierId;
    var list = model.message.filter(e=>(!name||e.title.indexOf(name)>-1)&&(supplierId&&supplierId==e.supplierId));
    var total = list.length;
    list=list.slice((pageIndex-1)*pageSize,pageSize*pageIndex);
    list.forEach(function (e) {
        model.user.forEach(function (u) {
            if(u.uId== e.createrId){
                e.createrName= u.uName;
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
//********************fang********************
app.use("/notice/get",function (req, res, next) {
    res.send(model.notics);
})
app.use("/notice/getid",function (req, res, next) {
    for (let i in model.notics){
        if(req.body.id == model.notics[i].id){
            res.send(model.notics[i]);
        }
    }
})
app.use("/notice/add",function (req, res, next) {
    req.body.id=model.notics.length+1;
    model.notics.push(req.body)
    console.log(req.body);
    res.send(model.notics);
})
app.use("/notice/updata",function (req, res, next) {
    for (let i in model.notics){
        if(req.body.id===model.notics[i].id){
            model.notics[i]=req.body;
        }
    }
    console.log(req.body);
    console.log(model.notics);
    res.send(true);
})
app.use("/notice/pass",function (req, res, next) {
    if(model.notics.some(n=>{
        if(n.id==req.body.id){
            n.reviewStatus="审核通过";
            return true;
        }
    }))
    res.send(true);
    else res.send(false);
})
app.use("/notice/reject",function (req, res, next) {
    if(model.notics.some(n=>{
        if(n.id==req.body.id){
            n.reviewStatus="审核未通过";
            return true;
        }
    }))
    res.send(true);
    else res.send(false);
})

app.use("/gateway_notice/add",function (req, res, next) {
    req.body.id=model.gateway_notices.length+1;
    model.gateway_notices.push(req.body)
    console.log(req.body);
})
app.use("/gateway_notices/get",function (req, res, next) {
    res.send(model.gateway_notices);
})
//********************fang********************
app.use("/supplier/add",function (req,res,next) {
    model.supplier.push({
        sId:model.supplier.length+1+'',
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

app.use("/supplier/review",function (req,res,next) {
    model.supplier[2].alreadyReview="1";
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
