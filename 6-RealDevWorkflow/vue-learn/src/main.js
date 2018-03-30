import Vue from 'vue'
import App from './App.vue'
import Stuff from './other.js'

console.log(Stuff.stuff);  

new Vue({
  el: '#app',
  render: h => h(App)
})
