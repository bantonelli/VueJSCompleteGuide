<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">{{stock.name}} <span style="font-size: 1rem;">(Price: {{stock.price}})</span> <span class="small" :class="{'danger-text': insufficientFunds}">{{ insufficientFunds ? "Insufficient Funds" : "" }}</span></h3> 
            </div>
            <div class="panel-body">
                <div class="pull-left" style="width: 40%;">
                    <!-- <label for="inputPassword2" class="sr-only">Password</label> -->
                    <input 
                        type="number" 
                        min="0"
                        class="form-control" 
                        id="inputPassword2" 
                        v-model="quantity"
                        :class="{danger: insufficientFunds}"
                    >
                </div>                    
                <button  
                    class="btn btn-success pull-right mb-1"
                    :disabled="quantity <= 0 || insufficientFunds"
                    @click="purchaseOrder"
                >
                    Buy
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
        color: red; 
    }
</style>


<script>
import {mapGetters} from 'vuex';

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
            this.quantity = 0;
        }
    }, 
    computed: {
        ...mapGetters([
            'funds'
        ]),
        insufficientFunds() {
            return this.quantity * this.stock.price > this.funds;
        }
    }
}
</script>
