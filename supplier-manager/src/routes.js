import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Review from './views/review/Review.vue'
import InfoNotice from './views/information/InfoNotice.vue'
import NoticeManage from './views/manage/NoticeManage.vue'
import SupplierManage from './views/manage/SupplierManage.vue'
import DemandExamine from './views/purchase/DemandExamine.vue'
import DemandInit from './views/purchase/DemandInit.vue'
import DemandNotice from './views/purchase/DemandNotice.vue'
import EvaluateManager from './views/purchase/EvaluateManager.vue'
import NoticeReview from './views/manage/NoticeReview.vue'
import NoticeInfo from './views/manage/NoticeInfo.vue'
import TenderManager from './views/purchase/TenderManager.vue'
import TenderInfo from './views/purchase/TenderInfo.vue'
import SupplierTenderManage from './views/purchase/SupplierTenderManage.vue'
import AddSupplier from './views/manage/AddSupplier.vue'
import AddNotice from './views/manage/AddNotice.vue'
import AddDemand from './views/purchase/AddDemand.vue'
import AddDemandNotice from './views/purchase/AddDemandNotice.vue'
import AddAccount from  './views/account/AddAccount.vue'
import ReviewInfo from './views/review/ReviewInfo'


import Main from './views/Main.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '审核',
        iconCls: 'fa fa-id-card-o',
        leaf: true,//只有一个节点
        children: [
            { path: '/', component: Review, name: '供应商审核' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '消息通知',
        iconCls: 'fa fa-id-card-o',
        leaf: true,//只有一个节点
        children: [
            { path: '/infoNotice', component: InfoNotice, name: '消息通知' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '供应商管理',
        iconCls: 'fa fa-id-card-o',
        leaf: true,//只有一个节点
        hidden: true,
        children: [
            { path: '/addSupplier', component: AddSupplier, name: '添加供应商' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '需求发起',
        iconCls: 'fa fa-id-card-o',
        leaf: true,//只有一个节点
        hidden: true,
        children: [
            { path: '/addDemand', component: AddDemand, name: '添加需求' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '需求公告',
        iconCls: 'fa fa-id-card-o',
        leaf: true,//只有一个节点
        hidden: true,
        children: [
            { path: '/addDemandNotice', component: AddDemandNotice, name: '添加公告' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '公告管理',
        iconCls: 'fa fa-id-card-o',
        leaf: true,//只有一个节点
        hidden: true,
        children: [
            { path: '/addNotice', component: AddNotice, name: '添加公告' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/supplierManage', component: SupplierManage, name: '供应商管理' },
            { path: '/noticeManage', component: NoticeManage, name: '公告管理' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '公告审核',
        role: ['admin','user'],
        hidden: true,
        leaf:true,
        children:[
            {path: '/noticeReview/:id',component:NoticeReview, name: '公告详情'}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '公告详情',
        role: ['admin','user'],
        hidden: true,
        leaf:true,
        children:[
            {path: '/noticeInfo',component:NoticeInfo, name: '公告详情'}
        ]
    },

    {
        path: '/',
        component: Home,
        name: '供应商',
        role: ['admin','user'],
        hidden: true,
        leaf:true,
        children:[
            {path: '/reviewInfo',component:ReviewInfo, name: '审核供应商'}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '投标供应商列表',
        role: ['admin','user'],
        hidden: true,
        leaf:true,
        children:[
            {path: '/supplierTenderManage/:purchaseId',component:SupplierTenderManage, name: '投标供应商列表'}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '投标详情',
        role: ['admin','user'],
        hidden: true,
        leaf:true,
        children:[
            {path: '/tenderInfo/:id',component:TenderInfo, name: '投标详情'}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '采购',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/demandInit', component: DemandInit, name: '需求发起' },
            { path: '/demandExamine', component: DemandExamine, name: '需求审批' },
            { path: '/demandNotice', component: DemandNotice, name: '需求公告' },
            { path: '/tenderManager', component: TenderManager, name: '招标管理' },
            // { path: '/evaluateManager', component: EvaluateManager, name: '评价管理' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '账户',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/addAccount', component: AddAccount, name: '添加账户' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;