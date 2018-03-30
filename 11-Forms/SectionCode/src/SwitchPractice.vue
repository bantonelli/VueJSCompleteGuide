<template>
    <div 
        class="switch"
        @click="handleChange"   
    >
    </div>
</template>

<script>
export default {
    props: {
        value: true
    },
    data: function () {
        return {
            isSwitched: true
        }
    },
    methods: {
        handleChange: function () {
            this.isSwitched = !this.isSwitched;
            this.$emit('input', this.isSwitched);
        }
    }
}
</script>

<style>
    .switch {
        height: 40px;
        width: 40px;
        background-color: #123456;
    }
</style>