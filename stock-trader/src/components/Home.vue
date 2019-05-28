<template>
    <div>
        <h1>Trade or View your Portfolio</h1>
        <h6>You may Save &amp; Load your Data</h6>
        <h6>Click on 'End Day' to begin New Day!</h6>
        <hr>
        <p>Your Funds: ${{funds}}</p>
    </div>
</template>

<script>
    import Header from './Header.vue';
    import {mapGetters} from 'vuex';

    export default {
        computed: {
            ...mapGetters([
                'funds'
            ])
        },
        components: {
            'navbar': Header
        }
    }
</script>
