<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <!--<p>Loaded ID: {{ id }}</p>-->
        <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
        <router-view></router-view>
    </div>    
</template>

<script>
    export default {
        // data() {
        //     return {
        //         id: this.$route.params.id
        //     }
        // },
        // props: {
        //     id: {
        //         type: String,
        //         default: 1
        //     }
        // },
        // watch: {
        //     '$route': function (to, from) {
        //         // to --> to which route are we going
        //             // This is the new route getting loaded
        //         // from --> from which route are we coming  
        //             // This is the old route we are coming from 
        //         this.id = to.params.id; 
        //     }
        // },
        methods: {
            navigateToHome() {
                // push the route onto the stack of existing history of routes                 
                // this.$router.push('/');
                this.$router.push({ name: 'home'});
            }
        }
    }
</script>
