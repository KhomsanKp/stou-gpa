import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/auth',
        name: 'Auth',
        component: () => import('@/views/AuthView.vue')
    },
    {
        path: '/admin',
        name: 'Admin',
        component: () => import('@/views/AdminView.vue'),
    },
    {
        path: '/gpa',
        name: 'Gpa',
        component: () => import('@/views/GpaView.vue')
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFound.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router