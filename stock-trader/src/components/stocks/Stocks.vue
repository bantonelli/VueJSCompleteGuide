<template>
    <div>
        <stock             
            v-for="stock in stocks"
            :key="stock.id"
            :stock="stock"
        >
        </stock>
    </div>
</template>

<script>
import Stock from './Stock.vue';

export default {
    computed: {
        stocks() {
            return this.$store.getters.marketStocks;
        }
    },
    components: {
        stock: Stock
    }
}
</script>
