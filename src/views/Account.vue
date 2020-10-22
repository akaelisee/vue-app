<template>
    <div>
        <h1>Account page</h1>
        <LoginForm v-on:login="getLoginPayload"/>
        <p v-if="isLogged">
            Bonjour {{userName}}
        </p>
    </div>
</template>

<script>
import LoginForm from "../components/LoginForm";

    export default {
        components:{
            LoginForm
        },
        data: function() {
            return {
                userName:"",
                password:"",
                isLogged:false
            }
        },
        methods: {
            getLoginPayload: function(userName, password, isLogged) {
                this.userName=userName;
                this.password=password;
                this.isLogged=isLogged;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>