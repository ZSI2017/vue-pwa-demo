import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false
console.log(33333)
new Vue({
  render: h => h(App),
}).$mount('#app')
