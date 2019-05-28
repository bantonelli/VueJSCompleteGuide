<template>
    <div class="container">
        <header-nav></header-nav>
        <div class="row">
            <div class="col-xs-12">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';

    export default {
        components: {
            'header-nav': Header
        },
        created() {
            this.$store.dispatch('initStocks');
        }
    }
</script>

<style>
    body {
        padding: 30px;
    }
</style>
