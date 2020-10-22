<template>
    <header>
        <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/shop">Shop</router-link> |
        <router-link to="/contact">Contact</router-link> |
        <router-link to="/account">Account</router-link> |
        <router-link to="/cart">Panier {{cartCount}}</router-link>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        computed: {
            cartCount() {
                return this.$store.getters.calcTotalQtyCart
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>