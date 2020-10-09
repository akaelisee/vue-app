<template>
    <div>
        <h1>This is a shop page</h1>
        <div class="products__list">
            <div class="product__item" v-for="product in productsList" :key="product.id">
                <h2>{{product.title}}</h2>
            </div>
        </div>
    </div>
</template>

<script>
    import ApiProducts from "@/mixins/ApiProducts";
    export default {
        data: function() {
            return {
                productsList:[]
            }
        },
        methods: {
            // getProducts : function() {
            //     return   fetch('https://fakestoreapi.com/products/')
            //     .then(res => res.json())
            // }
        },
        created() {
            this.getProducts()
            .then(data => this.productsList = data)
            .catch(err => console.log(err));
        },
        mixins:[ApiProducts]
    }
</script>

<style lang="scss" scoped>

</style>