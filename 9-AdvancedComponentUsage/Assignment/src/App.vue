<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedComponent = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedComponent = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedComponent = 'appRed'">Load Red Template</button>
                <hr>
                <div v-if="!selectedComponent">
                    <h1>No Component Selected!!</h1>
                </div>
                <component :is="selectedComponent">                  
                    <h1>Congratulations</h1>
                    <h4>You've Chosen the "{{ selectedComponent }}" Component</h4> 
                </component>
                <!--<app-blue></app-blue>-->
                <!--<app-green></app-green>-->
                <!--<app-red></app-red>-->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function () {
            return {
                selectedComponent: null
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
