<template>
  <div class="product__item">
    <router-link :to="{name:'ProductDetail', params:{id:productObject.id}}">
        <h2>{{ productObject.title }}</h2>
        <p class="product__price">{{ productObject.price }}</p>
    </router-link>
    <button @click="()=>addToCart(productObject)">Ajouter au panier</button>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    productObject: Object,
  },
  methods: {
      addToCart: function(productObject) {
        this.$store.commit('addToCart',productObject)
      }
  }
};
</script>

<style lang="scss" scoped></style>
