import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/* Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios
  }
}) */

new Vue({
  render: h => h(App)
}).$mount('#resume')
