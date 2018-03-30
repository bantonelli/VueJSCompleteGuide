<template>
    <li class="list-group-item" @click="loadServerDetails(server)">
        Server #{{ server.id }}
    </li>
</template>

<script>
import { serverBus } from '../../main';

export default {
    props: ['server'],
    methods: {
        loadServerDetails: function (server) {
            serverBus.loadServer(server);
        }
    }
}
</script>

<style>

</style>
