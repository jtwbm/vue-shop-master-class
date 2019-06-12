import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/Main'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'iMain',
      component: Main,
    },
    {
      path: '/form',
      name: 'Form',
      component: () => import('./components/Form.vue')
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: () => import('./components/Product.vue'),
      children: [
      	{
      		path: 'edit',
      		name: 'Edit',
      		props: true,
      		component: () => import('./components/EditProduct')
      	}
      ]
    },
    {
    	path: '*',
    	redirect: '/'
    }
  ]
})
