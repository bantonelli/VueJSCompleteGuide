<template>
    <div class="container">
        <div class="row">
            <header-comp></header-comp>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <li
                            class="list-group-item"
                            v-for="index in 5">
                        Server #{{ index }}
                    </li>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6">
                <p>Server Details are currently not updated</p>
            </div>
        </div>
        <hr>
        <div class="row">
            <!-- Footer goes here -->
            <footer-comp></footer-comp>
        </div>
    </div>
</template>

<script>
    import Footer from './components/Footer.vue'
    import Header from './components/Header.vue'
    export default {
        components: {
            'footer-comp': Footer,
            'header-comp': Header
        }
    }
</script>

<style>

</style>
