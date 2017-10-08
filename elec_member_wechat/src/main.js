// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import Mint from 'mint-ui'
import AMap from 'vue-amap'
import 'mint-ui/lib/style.css'

Vue.use(Mint);
Vue.use(AMap)
AMap.initAMapApiLoader({
   key: '639296d0ac073b20f28b281f1110fa8c',
   plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor','MarkerClusterer']


})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
