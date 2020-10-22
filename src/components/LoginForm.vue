<template>
    <form @submit.prevent="submitForm">
        <div class="form-group">
            <label for="userName">Username</label>
            <input type="text" v-model="userName" name="userName"/>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" v-model="password" name="password"/>
        </div>
        <input type="submit" value= "se connecter"/>
    </form>
</template>

<script>
    export default {
        name:"LoginForm",
         data: function() {
            return {
                password:"",
                userName:"",
                isLogged:false
            }
          
        },
        methods: {
            submitForm: function() {
                this.$emit('login', this.userName, this.password, this.isLogged=true);
                // this.isLogged= true;
                // console.log({"login":this.username,"password": this.password})
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>