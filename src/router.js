import Vue from 'vue'
import Router from 'vue-router'
import Form from './components/Form'
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
      props: true
    },
    {
      path: '/form',
      name: 'Form',
      props: true,
      component: () => import('./components/Form.vue')
    }
  ]
})
