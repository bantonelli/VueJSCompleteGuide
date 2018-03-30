<template>
    <div class="col-xs-12">
        <footer>
            <p>{{ footerMessage }}</p>
        </footer>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                footerMessage: 'All Servers are managed here' 
            }
        }
    }
</script>