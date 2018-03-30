<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!currentServer">Server Details are currently not updated</p>
        <p v-else>Server # {{ currentServer.id }}, Status: {{ currentServer.status }}</p>
        <hr>
        <button @click="resetStatus">Change to normal</button>
    </div>

</template>

<script>
import { serverBus } from '../../main';
export default {
    data: function () {
        return {
            currentServer: null
        }
    },
    methods: {
        resetStatus: function () {
            this.currentServer.status = 'Normal';
        }
    },
    beforeCreate() {
        // console.log(this);
        /* 
        At time of creation the $on method 
        is called an it adds the callback to the array 
        of handlers for the 'serverLoaded' event. 
        Therefore this $on is only called one time. 
        The callback is the only thing called when 
        the event is emitted. No event is actually attached 
        to the component. 
        */  
        serverBus.$on('serverLoaded', (server) => {
            // console.log(this);
            this.currentServer = server;
        });
    }
}
</script>

<style>

</style>
