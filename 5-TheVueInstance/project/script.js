/*
Vue instances are the core of each vue app. 

Each instance controls its own template of code. 

el --> reserved property 
    --> Tells Vue instance which html element it controls 
*/


var vm = new Vue({
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

// Worked??
// setTimeout(function (){
//     vm._data.title = "Changed by timeout"
// }, 3000);

// console.log(vm.$el.attributes[0].value); // outputs 'app'

// Works too
// vm.changeTitle();

console.log(vm);