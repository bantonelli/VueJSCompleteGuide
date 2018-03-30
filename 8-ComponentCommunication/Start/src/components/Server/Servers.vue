<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server v-for="server in servers" :server="server"></app-server>
        </ul>
    </div>
</template>

<script>
import Server from './Server.vue';

var servers = [
    { id: 1, status: "Unknown" },
    { id: 2, status: "Unknown" },
    { id: 3, status: "Unknown" },
    { id: 4, status: "Unknown" }
];

export default {
    data: function () {
        return {
            servers: servers
        }
    },
    components: {
        'app-server': Server
    }
}
</script>

<style>

</style>
