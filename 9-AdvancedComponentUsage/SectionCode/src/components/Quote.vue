<template>
    <div>
        <div class="title">
            <slot name="title"></slot>
        </div>
        <hr>
        <div>
            <slot></slot>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>

    export default {
        props: ['quote']
    }

</script>

<style scoped>  
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
    }
    h1, h2, h3, h4, h5, h6, p {
        text-align: center;
    }
    .title {
        font-style: italic;
    }    
</style>