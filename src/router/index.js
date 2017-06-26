
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/home',
            component: resolve => require(['../components/common/Home.vue'], resolve), //路由懒加载 https://router.vuejs.org/zh-cn/advanced/lazy-loading.html
            children:[
            {
                path: '/',
                component: resolve => require(['../components/page/Main.vue'], resolve)
            }
            // ,
            // {
            //     path: '/neworder',
            //     component: resolve => require(['../components/page/NewOrder.vue'], resolve)
            // }
        ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '/index',
            component: resolve => require(['../components/page/index.vue'], resolve)
        },
    ]
})
