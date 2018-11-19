import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import axios from 'axios'

import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/base.css'
import '@/assets/css/common.css'

Vue.use(ElementUI, { size: 'small', zIndex: 3000 })
Vue.config.productionTip = false
Vue.prototype.$axios = axios
// Vue.prototype.$axios = axios
// Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
