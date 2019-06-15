import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
require('./assets/css/app.css')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#shop-app')
