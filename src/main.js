import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios
  }
})

const vue = new Vue({
  axios,
  render: function (h) { return h(App) }
})
vue.$mount('#resumeApp')