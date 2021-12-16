import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login.vue'),
	},
	{
		path: '/',
		component: () => import('../views/TattooIndex.vue'),
		meta: {
			requireAuth: true
		},
		children: [
      {
				path: '/',
				name: 'Index',
				component: () => import('../views/Index.vue'),
			},
			{
				path: 'memberList',
				name: 'MemberList',
				component: () => import('../views/member/MemberList.vue'),
			},
			{
				path: 'memberCreate',
				name: 'MemberCreate',
				component: () => import('../views/member/MemberCreate.vue'),
			},
			{
				path: 'memberEdit/:id',
				name: 'MemberEdit',
				component: () => import('../views/member/MemberEdit.vue'),
			},
      // Shopping
			{
				path: 'shoppingCreate/:id',
				name: 'ShoppingCreate',
				component: () => import('../views/member/theShopping/ShoppingCreate.vue'),
			}
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
