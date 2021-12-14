import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// AJAX+Loading
// import axios from 'axios'
import axios from '@/axiosLoading/axios' // isLoading
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
Vue.prototype.$axios = axios
Vue.use(VueAxios, axios)
Vue.component('Loading', Loading);

//bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//簽名畫板
import VueSignaturePad from 'vue-signature-pad'
Vue.use(VueSignaturePad);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
