import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue')
  },{
    path: '/projects/icebreakerquiz',
    name: 'IceBreakerQuiz',
    component: () => import('../views/IceBreakerQuiz.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
