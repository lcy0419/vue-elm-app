import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './untils/https'

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://elm.cangdu.org';
axios.defaults.withCredentials = true;

Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
