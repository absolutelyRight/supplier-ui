import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import Notice from './views/information/Notice.vue'
import SysIndex from './views/index/sysIndex.vue'
import echarts from './views/charts/echarts.vue'
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
            { path: '/form', component: Form, name: '公告信息' },
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
            { path: '/user', component: user, name: '采购公告' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '我的',
        role: ['admin','user'],
        iconCls: 'iconfont el-icon-erp-shenfenzheng',//图标样式class
        children: [
            { path: '/table', component: Table, name: '投标管理' },
            { path: '/form', component: Form, name: '中标管理' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '设置',
        role: ['admin','user'],
        iconCls: 'el-icon-setting',//图标样式class
        children: [
            { path: '/table', component: Table, name: '个人信息' },
            { path: '/form', component: Form, name: '信息修改' },
        ]
    },
    // {
    //     path: '/',
    //     component: Home,
    //     name: '导航一',
    //     iconCls: 'el-icon-message',//图标样式class
    //     children: [
    //         { path: '/main', component: Main, name: '主页', hidden: true },
    //         { path: '/table', component: Table, name: 'Table' },
    //         { path: '/form', component: Form, name: 'Form' },
    //         { path: '/user', component: user, name: '列表' },
    //     ]
    // },
    // {
    //     path: '/',
    //     component: Home,
    //     name: '导航二',
    //     iconCls: 'fa fa-id-card-o',
    //     children: [
    //         { path: '/page4', component: Page4, name: '页面4' },
    //         { path: '/page5', component: Page5, name: '页面5' }
    //     ]
    // },
    // {
    //     path: '/',
    //     component: Home,
    //     name: '',
    //     iconCls: 'fa fa-address-card',
    //     leaf: true,//只有一个节点
    //     children: [
    //         { path: '/page6', component: Page6, name: '导航三' }
    //     ]
    // },
    // {
    //     path: '/',
    //     component: Home,
    //     name: 'Charts',
    //     iconCls: 'fa fa-bar-chart',
    //     children: [
    //         { path: '/echarts', component: echarts, name: 'echarts' }
    //     ]
    // },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;