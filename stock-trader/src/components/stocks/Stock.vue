<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">{{stock.name}} <span style="font-size: 1rem;">(Price: {{stock.price}})</span></h3> 
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
                        >
                    </div>
                    <button  
                        class="btn btn-success pull-right mb-1"
                        :disabled="quantity <= 0"
                        @click="purchaseOrder"
                    >
                        Buy
                    </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        purchaseOrder () {
            var order = {
                quantity: this.quantity,
                stockPrice: this.stock.price,
                stockName: this.stock.name,
                stockId: this.stock.id
            }
            this.$store.dispatch('buyStock', order);
        }
    }
}
</script>
