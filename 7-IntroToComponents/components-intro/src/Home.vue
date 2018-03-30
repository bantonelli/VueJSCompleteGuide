<template>
    <div>
        <app-server-status v-for="server in 5"></app-server-status>
    </div>
</template>

<script>
    import ServerStatus from './ServerStatus.vue'
    export default {
        // Want to loop through all the server statuses 
        components: {
            'app-server-status': ServerStatus
        }
    }
</script>