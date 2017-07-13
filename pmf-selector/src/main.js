//regurlar js already in a view
var _ListofNames = ['Sam', 'Mike', 'Julie', 'Robyn', 'Heath', 'Chris', 'Bryan','Ron']
var _PmfItems =[
        {name:'Spock', ID:1},
        {name: 'Kirk', ID:2},
        {name:'Bones', ID:3}
      ]

function getList(){
  $('#showListDiv').html(_ListofNames.join(', '))
}

import Vue from 'vue'
import pmfselector from './pmfselector.vue'

Vue.config.productionTip = false
Vue.component('pmf-selector', pmfselector);

new Vue({
  el: '#vueapp',
  methods: {
    getList: function(){
      $('#showListDiv').html(_ListofNames.join(', '))
    }
  }
})
