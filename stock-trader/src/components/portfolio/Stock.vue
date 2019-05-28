<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">{{stock.name}} <span style="font-size: 1rem;">(Price: {{stock.price}})</span> <span class="small" :class="{'danger-text': insufficientQuantity}">{{ insufficientQuantity ? "insufficient quantity" : "" }}</span></h3> 
            </div>
            <div class="panel-body">
                    <div class="pull-left">
                        <!-- <label for="inputPassword2" class="sr-only">Password</label> -->
                        <input 
                            type="number" 
                            min="0"
                            class="form-control" 
                            id="inputPassword2" 
                            v-model="quantity"
                            :class="{danger: insufficientQuantity}"
                        >
                    </div>
                    <button  
                        class="btn btn-primary pull-right mb-1"
                        :disabled="quantity <= 0 || insufficientQuantity"
                        @click="sellStock"
                    >
                        Sell 
                    </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .danger {
        border: 1px solid red;
    }
    .danger-text {
        color: darkred; 
    }
</style>

<script>
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        sellStock () {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity 
            };
            this.$store.dispatch('sellStock', order);
            this.quantity = 0;
        }
    },
    computed: {
        insufficientQuantity () {
            return this.quantity > this.stock.quantity;   
        }
    }
}
</script>
