<template>
    <div class="container">
        <form v-if="!submitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <app-name-form v-model="fullName"></app-name-form>
                    <br>
                    <label for="email" style="width: 100%;">
                        Email:
                        <input id="email" class="form-control" type="email" v-model="email">
                    </label>
                    <br>
                    <label for="password" style="width: 100%;">
                        Password:
                        <input id="password" class="form-control" type="password" v-model="password">
                    </label>     
                    <hr>
                    <h6>Store Data:</h6> 
                    <label for="yes">Yes <input type="radio" id="yes" value="yes" v-model="storeData"></label>
                    <label for="no">No <input type="radio" id="no" value="no" v-model="storeData"></label>
                    <hr>
                    <button
                            class="btn btn-primary"
                            @click.prevent="submitForm">Submit!
                    </button>
                    
                </div>
            </div>
        </form>
        <hr>
        <div v-if="submitted" class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ email }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ storeData }}</p>
                    </div>
                </div>
            </div>
            <button class="btn btn-primary" @click.prevent="editForm">
                Edit Form Details
            </button>
        </div>
    </div>
</template>

<script>
    var template = `
    <div>
        <label for="firstname" style="width: 100%;">
            First Name:
            <input id="firstname" class="form-control" type="text" :value="firstName" @keyup="fullName">
        </label>
        <br>
        <label for="lastname" style="width: 100%;">
            Last Name:
            <input id="lastname" class="form-control" type="text" :value="lastName" @keyup="fullName">
        </label>  
    </div>
    `;
    var NameForm = {
        props: ['value'],
        template: template,
        data() {
            return {
                firstName: 'Billy',
                lastName: 'Bob'
            }
        },
        created: function () {            
            var names = this.value.split(' ');
            console.log(names);
            if (names.length > 1) {
                this.firstName = names[0];
                this.lastName = names[1];
            } else {
                this.$emit('input', this.firstName + ' ' + this.lastName);
            }            
        },
        methods: {
            fullName: function (event) {
                if (event.target.id == "firstname") {
                    this.firstName = event.target.value;
                } else {
                    this.lastName = event.target.value;
                }
                this.$emit('input', this.firstName + ' ' + this.lastName); 
            }
        }
    }

    export default {
        data() {
            return {
                email: 'billybob@gmail.com',
                password: '1234',
                storeData: 'yes',
                submitted: false,
                fullName: ''
            }
        },
        components: {
            'app-name-form': NameForm
        },
        methods: {
            submitForm: function () {
                this.submitted = true;
            },
            editForm: function () {
                this.submitted = false;
            }
        }
    }
</script>

<style>
</style>
