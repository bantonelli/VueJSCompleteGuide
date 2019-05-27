<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr>

                <input type="text" class="form-control" v-model="node">
                
                <button class="btn btn-primary" @click="fetchData">Get Data</button>
                <br><br>    
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in users">
                        {{u.username}} - {{u.email}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    username: '',
                    email: ''
                },
                users: [],
                resource: {

                }, 
                node: 'data'
            };
        },
        methods: {
            submit() {
                // https://vuejs-http-ee4eb.firebaseio.com/
                // console.log(this.user);
                // Goal is to send user object to firebase
                // this.$http.post("data.json", this.user)
                // .then(response => {
                //     console.log(response);
                // }, error => {
                //     console.log(error);
                // }); 
                this.resource.saveAlt(this.user);
            },
            fetchData() {
                // this.$http.get("data.json")
                // .then(response => {
                //     const data = response.json();
                //     // console.log(data); // Logs the promise object
                //     return data;
                // }).then(function (responseData){
                //     var resultArray = [];
                //     for (let key in responseData) {
                //         resultArray.push(responseData[key]);
                //     }
                //     this.users = resultArray;
                // });
                this.resource.getData({node: this.node})    
                .then(response => {
                    const data = response.json();
                    // console.log(data); // Logs the promise object
                    return data;
                }).then(function (responseData){
                    var resultArray = [];
                    for (let key in responseData) {
                        resultArray.push(responseData[key]);
                    }
                    this.users = resultArray;
                });
            }
        },
        created: function () {
            const customActions = {
                saveAlt: {method: 'POST', url: 'alternative.json'},
                getData: {method: 'GET'}
            };
            this.resource = this.$resource('{node}.json', {}, customActions);
        }
    }
</script>

<style>
</style>
