import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TransactionView from '../views/TransactionView.vue'
import ReportView from '../views/ReportView.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'homeindex',
        component: HomeView
    },
    {
        path: '/transaction',
        name: 'transactionindex',
        component: TransactionView
    },
    {
        path: '/report',
        name: 'reportindex',
        component: ReportView
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router