import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Notice from './views/information/Notice.vue'
import NoticeInformation from './views/information/NoticeInformation.vue'
import ProcurementNotice from './views/procurement/ProcurementNotice.vue'
import BidingManage from './views/manage/BidingManage.vue'
import BidManage from './views/manage/BidManage.vue'
import SysIndex from './views/index/sysIndex.vue'
import NoticeInfo from './views/information/NoticeInfo.vue'
import UserInfo from './views/setting/UserInfo.vue'
import SettingInfo from './views/setting/SettingInfo.vue'
import Register from './views/register/Register.vue'
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
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
        name: '首页',
        role: ['admin'],
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/', component: SysIndex, name: '首页' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '消息',
        role: ['admin'],
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/notice', component: Notice, name: '消息通知' },
            { path: '/noticeInformation', component: NoticeInformation, name: '公告信息' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '采购公告',
        role: ['admin','user'],
        leaf: true,
        iconCls: 'iconfont el-icon-erp-createtask_fill',//图标样式class
        children: [
            { path: '/procurementNotice', component: ProcurementNotice, name: '采购公告' },
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
        name: '我的',
        role: ['admin','user'],
        iconCls: 'iconfont el-icon-erp-shenfenzheng',//图标样式class
        children: [
            { path: '/bidingManage', component: BidingManage, name: '投标管理' },
            { path: '/bidManage', component: BidManage, name: '中标管理' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '设置',
        role: ['admin','user'],
        iconCls: 'el-icon-setting',//图标样式class
        children: [
            { path: '/userInfo', component: UserInfo, name: '个人信息' },
            { path: '/settingInfo', component: SettingInfo, name: '信息修改' },
        ]
    },

    {
        path: '/',
        component: Home,
        name: '注册',
        role: ['admin','user'],
        leaf: true,
        hidden: true,
        iconCls: 'iconfont el-icon-erp-createtask_fill',//图标样式class
        children: [
            { path: '/register', component: Register, name: '注册' },
        ]
    },

    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;