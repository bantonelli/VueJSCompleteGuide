/*
Vue instances are the core of each vue app. 

Each instance controls its own template of code. 

el --> reserved property 
    --> Tells Vue instance which html element it controls 
*/
new Vue({
    el: '#app',
    data: {
        title: 'Hello World!'
    },
    methods: {
        changeTitle: function (event) {
            // 'this' refers to the data object
            // vueJS does this in the background 

            // Event object from vanillaJS is passed into method by vueJS
            this.title = "changded";
        }
    }
});