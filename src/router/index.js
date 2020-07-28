import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'hash',
    routes: [{
            path: '/',
            redirect: '/system/manager'
        },
        {
            path: '/',
            component: () => import( /* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: {
                title: '自述文件'
            },
            name: 'home',
            children: [
                {
                    path: '/system',
                    component: () => import( /* webpackChunkName: "dashboard" */ '../components/common/empty.vue'),
                    meta: {
                        title: '系统设置',
                        icon: 'el-icon-lx-copy'
                    },
                    children: [{
                            path: 'manager',
                            component: () => import( /* webpackChunkName: "dashboard" */ '../components/page/manager/ManagerList.vue'),
                            meta: {
                                title: '设置管理员',
                                icon: 'el-icon-lx-copy'
                            }
                        },
                        {
                            path: 'role',
                            component: () => import( /* webpackChunkName: "dashboard" */ '../components/page/auth/role.vue'),
                            meta: {
                                title: '角色设置',
                                icon: 'el-icon-lx-copy'
                            }
                        }
                    ]
                },

                
              
               

                {
                    path: '/chart',
                    component: () => import( /* webpackChunkName: "dashboard" */ '../components/common/empty.vue'),
                    meta: {
                        title: '数据统计',
                        icon: 'el-icon-lx-copy'
                    },
                    children: [{
                        path: 'reserve',
                        component: () => import('../components/page/chart/chart.vue'),
                        meta: {
                            title: '预约会见统计'
                        }
                    }]
                },

                {
                    path: '/404',
                    hide: true,
                    component: () => import( /* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: {
                        title: '404'
                    }
                },
                {
                    path: '/403',
                    hide: true,
                    component: () => import( /* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: {
                        title: '403'
                    }
                }

            ]
        },
        {
            path: '/login',
            component: () => import( /* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: {
                title: '登录'
            }
        },
        {
            path: '/register',
            component: () => import( /* webpackChunkName: "register" */ '../components/page/Register.vue'),
            meta: {
                title: '注册'
            }
        }

    ]
});