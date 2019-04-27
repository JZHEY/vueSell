import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import '@/common/stylus/index.styl'
//import VueResourse from 'vue-resource'
import router from './router'
import axios from 'axios'


Vue.config.productionTip = false
Vue.prototype.axios = axios
//Vue.use(VueResourse)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
