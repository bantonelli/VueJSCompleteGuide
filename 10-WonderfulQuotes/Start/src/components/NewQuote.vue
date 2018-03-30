<template>
    <div class="row">
        <div class="col-xs-12 col-md-6 col-md-push-3 formatter">
            <div class="form-group">
                <label for="comment">Quote</label>
                <textarea class="form-control" rows="5" id="comment" v-model="quote"></textarea>         
            </div>
            <button type="button" class="btn btn-primary" @click="addNewQuote">Add Quote</button>
        </div>
    </div> 
</template>

<script>
    import { quoteBus } from '../main.js';

    export default {
        data: function () {
            return {
                quote: ""
            }
        },
        beforeCreate: function () {
            quoteBus.$on('quoteAdded', (quote) => {
                this.quote = "";
            });
        },
        methods: {
            addNewQuote: function () {
                if (this.quote == "") {
                    alert("Quote must have some text!");
                } else {
                    quoteBus.addQuote(this.quote);
                }                
            }
        }
    };
</script>

<style scoped>
    div.formatter {
        text-align: center;        
    }
    div.form-group {
        text-align: left;
    }
</style>