new Vue({
    el: '#exercise',
    data: {
        name: "Brandon",
        age: 27,
        image: "https://i.annihil.us/u/prod/marvel//universe3zx/images/b/bf/Acotilletta2--Iron_Fist_modern_green.jpg"
    },
    methods: {
        ageMultiply: function () {
            return this.age * 3;
        },
        randomFloat: function () {
            return Math.random();
        }        
    }
});