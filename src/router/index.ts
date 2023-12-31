import { createRouter, createWebHistory } from 'vue-router'
import Explore from '@/view/ExploreView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Explore,
      children:[
        {
          path: '/',
          component: () => import('@/view/FaxianView.vue')
        },
        {
          path: '/yonghu',
          component: () => import('@/view/gerenView.vue')
        },
      ]
    },
    {
      path: '/fabu',
      name: 'fabu',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/view/FabuView.vue')
    }
  ]
})

export default router
