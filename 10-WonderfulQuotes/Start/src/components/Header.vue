<template>
    <div class="row">
        <h1>Quotes Added</h1>
        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="70"
            aria-valuemin="0" aria-valuemax="100" :style="{width:quoteProgress}">
                 {{ progressCounter }}
            </div>
        </div>
    </div>
</template>

<script>
    import { quoteBus } from '../main.js';

    export default {
        data: function () {
            return {
                quotes: quoteBus.quotes,
                max: quoteBus.maxQuotes
            }
        },
        computed: {
            quoteProgress: function () {
                return (this.quotes.length * 10) + '%';
            },
            progressCounter: function () {
                var length = this.quotes.length;
                var shown = length + " / " + this.max;
                return length > 0 ? shown : null;
            }
        }
    }

</script>

<style></style>