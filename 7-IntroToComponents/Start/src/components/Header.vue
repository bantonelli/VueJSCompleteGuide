<template>
    <div class="col-xs-12">
        <header>
            <h1>{{ headerMessage }}</h1>
        </header>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                headerMessage: 'Server Status'
            }
        }
    }
</script>