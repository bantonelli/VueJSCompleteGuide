<template>
    <div class="row quotes-list">
        <app-quote v-for="quote in quotes" @click.native="deleteQuote(quote, $event)">
            {{ quote }}
        </app-quote>
    </div>
</template>

<script>
    import { quoteBus } from '../main.js';
    import Quote from './Quote.vue';

    export default {
        data: function () {
            return {
                quotes: quoteBus.quotes
            }
        },
        methods: {
            deleteQuote: function (quote, event) {
                quoteBus.deleteQuote(quote);
            }
        },
        components: {
            'app-quote': Quote
        }
    }
</script>

<style scoped>
    .quotes-list {
        margin-top: 40px;
    }
</style>