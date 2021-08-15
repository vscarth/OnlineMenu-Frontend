import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Order',
    component: () => import('../views/Order.vue')
  },
  {
    path: '/kitchen',
    name: 'Kitchen',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Kitchen.vue')
  },
  {
    path: '/manage',
    name: 'Manage',
    component: () => import('../views/Manage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
