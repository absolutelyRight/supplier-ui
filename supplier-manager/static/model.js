exports.user=[{
    "uAccount": "admin",
    "uPassword": "admin",
    "uName": "张三"
}];
exports.messages=[{
    id:'1',
    supplierId:'1',
    title:'中标通知',
    content:'您已中标【xxx采购项目】，请等待平台与您联系',
    createTime:'2018/02/03'
}];
exports.suppliers=[{
    id:'1',
    name:'华为'
}];
exports.purchase=[{
    id:1
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