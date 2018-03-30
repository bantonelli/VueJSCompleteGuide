import Vue from 'vue'
import App from './App.vue'

export const quoteBus = new Vue({
// Purpose of bus / Service 
// emit event of adding quote 
// register event handlers in components where 
// quotes are added and deleted.
    data: function () {
        return {
            quotes: [],
            maxQuotes: 10,
            minQuotes: 0
        }
    },
    methods: {
        addQuote: function (quote) {
            if (this.quotes.length >= this.maxQuotes) {
                alert("Already have 10 quotes! Delete one or more to continue adding.");
            } else {
                this.quotes.push(quote);
                this.$emit('quoteAdded', quote); 
            }         
        },
        deleteQuote: function (quote) {
            if (this.quotes.length <= this.minQuotes) {
                alert("No quotes to delete!");
            } else {
                var index = this.quotes.indexOf(quote);
                if (index > -1) {
                    this.quotes.splice(index, 1);
                }                 
                this.$emit('quoteDeleted', quote);
            } 
        } 
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
