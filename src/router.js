import Vue from 'vue'
import Router from 'vue-router'
import Form from './components/Form'
import Main from './components/Main'
import Product from './components/Product'

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
      component: () => import('./components/Product.vue')
    }
  ]
})
