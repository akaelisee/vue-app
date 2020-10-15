<template>
    <div class="product__detail">
        <TitlePage :title="product.title"/>
        <p>{{product.price}}</p>
        <p>{{product.description}}</p>
        <Button btnTitle="Ajouter au panier" classList="btn btn-red" :btnFunction="addToCart"/>
    </div>
</template>

<script>
    import TitlePage from "../components/TitlePage";
    import Button from "../components/Button";
    import ApiProducts from "../mixins/ApiProducts";

    export default {
        components: {
            TitlePage,
            Button
        },
        data: function () {
            return {
                product:{}
            }
        },
        mixins:[ApiProducts],
        methods: {
            addToCart: function() {
                
                //récupération du localStorage
                let card = JSON.parse(localStorage.getItem('shopCart')) || [];

                let productObject = {
                    id: this.product.id,
                    title: this.product.title,
                    price: this.product.price,
                    qty: 1
                }

                // Eventuellement le même id dans le localStorage
                let indexOfExistingProduct = card.findIndex(
                    (el) => el.id === productObject.id
                );
                
                //check si id du produit à ajouter est présent dans le panier
                //Si déjà présent, j'incrémente la prop qté
                if(indexOfExistingProduct !== -1) {
                    card[indexOfExistingProduct].qty += 1
                }
                //Si il n'est pas présent, j'ajoute le nouveau produit au tableau Card
                else {
                    card.push(productObject)
                }

                //Je réinsère le nouveau tableau dans le localStorage 
                localStorage.setItem('shopCart', JSON.stringify(card));

            }
        },
        created() {
            console.log(this.$route.params.id);
            this.getProduct(this.$route.params.id)
            .then(data=> this.product=data)
            .catch(err=> console.log(err))
        }
    }
</script>

<style lang="scss" scoped>

</style>