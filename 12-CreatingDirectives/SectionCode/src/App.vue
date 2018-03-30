<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <button v-my-on:click="buttonFunction">CLICK TO ALERT</button>
            </div>
        </div>
    </div>
</template>

<script>
    var directive = {
        bind(el, binding, vnode) {    
            if (binding.arg && binding.value) {
                el.addEventListener(binding.arg, binding.value, false);
            }
        }   
    }
    export default {
        directives: {
            'my-on': directive
        },
        methods: {
            buttonFunction: function () {
                alert('Button was clicked!');
            }
        }
    }
</script>

<style>

</style>
