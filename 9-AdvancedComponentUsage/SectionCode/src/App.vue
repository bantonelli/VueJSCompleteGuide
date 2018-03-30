<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-quote>
                    <h1 slot="title">The Quote</h1>
                    <h3>Is A...</h3>
                    <p slot="content">{{quote}}</p>
                </app-quote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';

    export default {
        data: function () {
            return {
                quote: "A Wonderful Quote!"
            }
        },
        components: {
            'app-quote': Quote
        }
    }
</script>

<style>
</style>
