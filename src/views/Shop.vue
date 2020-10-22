<template>
    <div>
        <h1>This is a shop page</h1>
        <div class="search__form">
            <input type="text" name="searchValue" v-model="searchValue"/>
        </div>
        
        <div class="search__result">
            <p>Résult de votre recherche pour {{searchValue}}</p>
            <p>Ancienne recherche effectuée: {{this.searchLabel}}</p>
            <ProductsGrid :productsArray="filteredShop"/>
        </div>
        <!-- <ProductsGrid :productsArray="productsList"/> -->
        <!-- <div class="products__list">
            <div class="product__item" v-for="product in productsList" :key="product.id">
                <h2>{{product.title}}</h2>
            </div>
        </div> !-->
    </div>
</template>

<script>
    import ApiProducts from "@/mixins/ApiProducts";
    import ProductsGrid from "../components/ProductsGrid"
    export default {
        data: function() {
            return {
                productsList:[],
                searchValue:"",
                searchLabel:""
            }
        },
        components: {
            ProductsGrid
        },
        methods: {
            // getProducts : function() {
            //     return   fetch('https://fakestoreapi.com/products/')
            //     .then(res => res.json())
            // }
        },
        computed: {
            filteredShop: function() {
                let filter = new RegExp(this.searchValue,'i');
                return this.productsList.filter(item=>item.title.match(filter));
            }
        },
        watch: {
            searchValue: function(newValue, oldValue) {
                console.log("newValue",newValue);
                console.log("oldValue",oldValue);
                this.searchLabel=oldValue
            }
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