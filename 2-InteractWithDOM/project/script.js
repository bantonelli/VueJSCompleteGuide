/*
Vue instances are the core of each vue app. 

Each instance controls its own template of code. 

el --> reserved property 
    --> Tells Vue instance which html element it controls 
*/
new Vue({
    el: '#app',
    data: {
        // title: 'Hello World!',
        // link: 'http://google.com'
        counter: 0,
        x: 0,
        y: 0,
        value: "value",
        name: "Brandon",
        isRed: false
    },
    methods: {
        // changeTitle: function (event) {
        //     // 'this' refers to the data object
        //     // vueJS does this in the background 

        //     // Event object from vanillaJS is passed into method by vueJS
        //     this.title = event.target.value;
        // },
        // sayHello: function () {
        //     return 'Hello!';
        // }
        increase: function (number, event) {
            this.counter += number;
            this.value = event.target.toString();
        },
        updateCoordinates: function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
        }
    }
});