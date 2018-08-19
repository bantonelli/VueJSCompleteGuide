/*
Vue instances are the core of each vue app. 

Each instance controls its own template of code. 

el --> reserved property 
    --> Tells Vue instance which html element it controls 
*/
new Vue({
    el: '#app',
    data: {
        visible: true,
        ingredients: ['meat', 'fruit', 'cookies'],
        persons: [
            {name: "Max", age: "27", color: "white"},
            {name: "Anne", age: "unknown", color: "black"}
        ]
    },
    methods: {
        changeVisible: function (event) {
            this.visible = !this.visible;
        }
    }
});