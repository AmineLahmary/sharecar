import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Book from './pages/Book.vue'
import Cars from './pages/Cars.vue'
import CarDetails from './pages/CarDetails.vue'
import Login from './pages/Auth/Login.vue'
import Dashboard from './pages/Admin/Dashboard.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/book',
        name: 'Book',
        component: Book
    },
    {
        path: '/cars',
        name: 'Cars',
        component: Cars
    },
    {
        path: '/car/:slug',
        name: 'CarDetails',
        component: CarDetails
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/admin/dashboard',
        name: 'AdminDashboard',
        component: Dashboard,
        meta: {
            requiresAuth: true,
            layout: 'AdminLayout'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


router.beforeEach(async (to) => {
    const auth = useAuthStore()
    if(!auth.user) await auth.checkUser()
    
    if(to.meta.requiresAuth && !auth.user) {
        return '/login'
    }

    if(to.path === '/login' && auth.user) {
        return '/admin'
    }
})


export default router
