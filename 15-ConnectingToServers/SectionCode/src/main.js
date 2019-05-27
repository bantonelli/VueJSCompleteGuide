import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

Vue.use(VueResource);

Vue.http.interceptors.push(function (request, next) {
    if (request.method == "POST") {
        request.method = "PUT";
    }
    next(response => {
        response.json = function () {
            return { responseData: response.body };
        };
    });
});

Vue.http.options.root = 'https://vuejs-http-ee4eb.firebaseio.com/';

new Vue({
  el: '#app',
  render: h => h(App)
});
