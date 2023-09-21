import { createRouter, createWebHistory,createWebHashHistory, RouteRecordRaw } from 'vue-router'
import index from '../views/index.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path:"/",
		redirect:"/index"
	},
	{
		path: '/Index',
		name: 'index',
		component: () => import('@/views/index.vue'),
	},
	{
		path: '/Home',
		name: 'Home',
		component: () => import('@/views/Home.vue'),
		meta: {
			isShow: true,
			"title": "首页",
			"icon": "usericon",
			"noCache": false,
			"link": null
		}
	},
	{
		path: '/detail',
		name: 'detail',
		component: () => import('@/views/detail.vue')
	},
	{
		path: '/About',
		name: 'About',
		component: () => import('@/views/About.vue'),
		meta: {
			isShow: true,
			"title": "关于我们",
			"icon": "usericon",
			"noCache": false,
			"link": null
		}
	},
	{
		"name": "System",
		"path": "/system",
		// "redirect": "/system/user",
		component: () => import('@/views/index.vue'),
		"meta": {
			isShow: true,
			"title": "用户管理",
			"icon": "usericon",
			"noCache": false,
			"link": null
		},
		"children": [
			{
				"name": "User",
				"path": "/system/user",
				component: () => import('@/views/system/user/index.vue'),
				"meta": {
					isShow: true,
					"title": "用户信息",
					"icon": "",
					"noCache": false,
					"link": null
				}
			},
			{
				"name": "Dept",
				"path": "/system/dept",
				component: () => import('@/views/system/dept/index.vue'),
				"meta": {
					isShow: true,
					"title": "组织机构",
					"icon": "",
					"noCache": false,
					"link": null
				}
			}
		]
	},
	{
		"name": "Message",
		"path": "/message",
		component: () => import('@/views/index.vue'),
		"meta": {
			isShow: true,
			"title": "系统通知",
			"icon": "usericon",
			"noCache": false,
			"link": null
		},
		"children": [
			{
				"name": "Aboutus",
				"path": "/message/aboutus",
				component: () => import('@/views/About.vue'),
				"meta": {
					isShow: true,
					"title": "关于我们",
					"icon": "",
					"noCache": false,
					"link": null
				}
			},
			{
				"name": "Tip",
				"path": "/message/tip",
				component: () => import('@/views/detail.vue'),
				"meta": {
					isShow: true,
					"title": "消息通知",
					"icon": "",
					"noCache": false,
					"link": null
				}
			}
		]
	},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
