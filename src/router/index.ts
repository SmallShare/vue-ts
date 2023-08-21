import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import index from '../views/index.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'index',
		component: index
	},
	{
    path: '/Home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/detail.vue')
  },
	{
		path: '/About',
		name: 'About',
		component: () => import('../views/About.vue')
	}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
