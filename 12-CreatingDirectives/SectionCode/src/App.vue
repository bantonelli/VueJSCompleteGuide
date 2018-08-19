<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-6">
                <h1>Directives</h1>
                <button v-my-on:click="buttonFunction">CLICK TO ALERT</button>
            </div>
            <div v-my-highlight:background="'#FF0000'" style="height: 100px;" class="col-xs-6">
                Stuff
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
    var otherDirective = {
        bind(el, binding, vnode) {
            if (binding.arg == "background") {
                console.log("stuff");
                el.style.backgroundColor = binding.value;
            } else {
                el.style.color = binding.value;
            }
        }
    }
    export default {
        directives: {
            'my-on': directive,
            'my-highlight': otherDirective
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
