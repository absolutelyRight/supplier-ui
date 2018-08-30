exports.user=[{
    uId:'1',
    "uAccount": "admin",
    "uPassword": "admin",
    "uName": "张三"
}]

exports.message=[{
    id:'1',
    supplierId:'1',
    title:'中标通知',
    content:'您已中标【xxx采购项目】，请等待平台与您联系',
    createTime:'2018/02/03',
    createrId:'1'
}];

exports.purchase=[{
    id:1,
    name:"RTX 2080 集体采购"
}];

exports.tenders=[{
    id:1,
    purchaseId:'1',
    supplierId:'1',
    supplier:{},
    purchase:{},
    price:100,
    score:1,
    status:0,
    time:'2018/02/03'
}];

exports.supplier = [
    {
        sId:'1',
        sShortName: "xxx公司",
        sSocialCreditCode: "W45614X",
        sUrl: "www.baidu.com",
        sProduct: "服务器",
        sFoundDate: "2017-03-20 12:34:07",
        alreadyReview: "1",
        sEmailUrl: "admin@163.com",
        confirmPassword: "123456",
    },
    {
        sId:'2',
        sShortName: "xxx公司",
        sSocialCreditCode: "W45614X",
        sUrl: "www.baidu.com",
        sProduct: "服务器",
        sFoundDate: "2017-03-20 12:34:07",
        alreadyReview: "0",
        sEmailUrl: "admin@163.com",
        confirmPassword: "admin",
    }
]