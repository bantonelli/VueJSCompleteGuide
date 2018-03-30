<template>
    <div class="col-sm-6 col-md-4 col-lg 3">
        <div class="panel panel-default">
            <div class="panel-body quote">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .quote {
        font-family: 'Arizonia';
        font-size: 2em;
        white-space: initial;
        overflow-wrap: break-word;
        cursor: pointer;
    }
    .quote:hover {
        background-color: #FADDDD;
    }
</style>