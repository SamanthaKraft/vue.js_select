// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import AppTwo from './AppTwo'

Vue.config.productionTip = false

// var pmfSelector = Vue.extend({
//   template:'<span>this is the selector</span>'
// })
//   Vue.component('pfm-selector', pmfSelector)

/* eslint-disable no-new */
//already has template imported and components importd through ./App 
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
//using component on main.js
new Vue({
  el:'#app2',
  template:'<AppTwo/>'
})
