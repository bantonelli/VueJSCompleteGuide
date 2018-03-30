<template>
    <div class="container">
        <app-header></app-header>
        <app-new-quote></app-new-quote>
        <app-quotes ></app-quotes>        
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import NewQuote from './components/NewQuote.vue';
    import Quotes from './components/Quotes.vue';

    export default {
        components: {
            'app-header': Header,
            'app-new-quote': NewQuote,
            'app-quotes': Quotes
        }   
    }
</script>

<style>
</style>
