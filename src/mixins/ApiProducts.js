export default {
    methods: {
        getProducts() {
            return   fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
        },
        getProduct(id) {
            return fetch(`https://fakestoreapi.com/products/${id}`)
            // return fetch("https://fakestoreapi.com/products/"+ id)
            .then(res=>res.json())
        }
    }
}