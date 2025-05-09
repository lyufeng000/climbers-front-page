import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/guest/HomeView.vue'

Vue.use(VueRouter)

const routes = [
    {
        //游客主页面
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        //游客成员信息
        path: '/guest/member',
        name: 'guestMember',
        component: () => import('../views/guest/MemberView.vue')
    },
    {
        //游客联系我们
        path: '/contact',
        name: 'contact',
        component: () => import('../views/ContactView.vue')
    },
    {
        //关于我们
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
    },
    {
        //登陆页面
        path: '/logIn',
        name: 'logIn',
        component: () => import('../views/guest/LogInView.vue')
    },
    {
        //管理员主页面
        path: '/admin/home',
        name: 'adminHome',
        component: () => import('../views/admin/HomeView.vue')
    },
    {
        //管理员成员管理页面
        path: '/admin/member',
        name: 'generateMembers',
        component: () => import('../views/admin/ManageView.vue')
    },
    {
        //成员主页面
        path: '/member/home',
        name: 'memberHome',
        component: () => import('../views/member/HomeView.vue')
    },
    {
        //队员所见成员页面
        path: '/member/member',
        name: 'members',
        component: () => import('../views/member/MemberView.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
