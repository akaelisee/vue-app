import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let cart = window.localStorage.getItem('shopCart');

export const store = new Vuex.Store({
    state: {
        cart: cart ? JSON.parse(cart) : [],
        myVar:"test"
    },
    mutations: {
        saveCart(state) {
            localStorage.setItem('shopCart', JSON.stringify(state.cart))
        },
        addToCart(state, item) {
            let productObject = {
                id: item.id,
                title: item.title,
                price: item.price,
                qty:1
            }

        let indexOfExistingProduct = state.cart.findIndex(
            (el) => el.id === productObject.id
        );
        
        if(indexOfExistingProduct !== -1) {
            state.cart[indexOfExistingProduct].qty += 1
        }
        else {
            state.cart.push(productObject);
        }
            this.commit('saveCart');
            console.log(state.cart);
        }
    },
    getters: {
        calcTotalQtyCart: (state) => {
            return state.cart.reduce((total, product) => total + product.qty,0);
        }
    }
})