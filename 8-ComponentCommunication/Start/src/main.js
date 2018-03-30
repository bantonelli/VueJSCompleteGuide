import Vue from 'vue'
import App from './App.vue'

export const serverBus = new Vue({
    methods: {
        loadServer: function (server) {
            this.$emit("serverLoaded", server);
        }        
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
