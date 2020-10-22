<template>
    <div class="cart__page">
        <TitlePage title="Mon panier"/>
        <Button classList="btn btn-red" btnTitle="Vider le panier" :btnFunction="clearCartAndRefresh"/>
        <div class="card__content">
            <table v-if="cardArray">
                <thead>
                    <tr>
                        <td>id</td>
                        <td>Product name</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Total</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in cardArray" :key="product.id">
                        <td>
                            {{product.id}}
                        </td>
                        <td>
                            {{product.title}}
                        </td>
                        <td>
                            {{product.price}}
                        </td>
                        <td>
                            <button @click="()=>removeQty(product)">-</button>
                            {{product.qty}}
                            <button @click="()=>addQty(product)">+</button>
                        </td>
                        <td>
                            {{ product.price * product.qty | formatNumber | currency}}
                        </td>
                        <td>
                            <button @click="() => deleteItem(product)">delete</button>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total</th>
                        <th></th>
                        <th></th>
                        <th>{{calcQty}}</th>
                        <th>{{calcTotal | formatNumber | currency}}</th>
                    </tr>
                </tfoot>
            </table>
            <p v-else> 
                Votre panier est vide
            </p>
        </div>
    </div>
</template>

<script>
    
    import Card from "../mixins/Card";
    import TitlePage from "../components/TitlePage";
    import Button from "../components/Button";

    export default {
        name:"ShoppingCart",
        mixins:[Card],
        components:{
            TitlePage,
            Button
        },
        data: function () {
            return {
                cardArray:[],
            }
        },
        created() {
            this.cardArray = this.getCart();
        },
        // updated() {
        //     this.cartTotal = this.getCartTotal(this.cardArray)
        // },
        computed: {
            calcTotal: function() {
                return this.getCartTotal(this.cardArray)
            },
            calcQty: function() {
                return this.getCartCount(this.cardArray);
            }
        },
        filters: {
            formatNumber: function(value) {
                return value.toFixed(2);
            }
        },
        methods: {
            clearCartAndRefresh: function() {
                this.clearCart();
                this.cardArray=this.getCart();
            },
            removeQty: function(product) {
                this.removeOneQty(product);
                this.cardArray=this.getCart();
            },
            addQty: function(product) {
                this.addOneQty(product);
                this.cardArray=this.getCart();
            },
            deleteItem: function(product) {
                this.removeItemCart(product);
                this.cardArray=this.getCart();
            }
        },
    }

</script>

<style lang="scss" scoped>
table {
    margin: 30px auto;
}
</style>