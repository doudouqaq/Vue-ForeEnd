import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/table'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                // {
                //     path: '/dashboard',
                //     component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                //     meta: { title: '系统首页' }
                // },
                {
                    path: '/table',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/BaseTable.vue'),
                    meta: { title: '订单表格' }
                },
                {
                    path: '/currenttable',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/CurrentTable.vue'),
                    meta: { title: '库存表格' }
                },
                {
                    path: '/saletable',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/SaleTable.vue'),
                    meta: { title: '售卖表格' }
                },
                {
                    path: '/form',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/BaseForm.vue'),
                    meta: { title: '基本订单' }
                },
                {
                    path: '/currentform',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/CurrentForm.vue'),
                    meta: { title: '库存订单' }
                },
                {
                    path: '/saleform',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/SaleForm.vue'),
                    meta: { title: '售卖订单' }
                },
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: { title: '403' }
                }
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
