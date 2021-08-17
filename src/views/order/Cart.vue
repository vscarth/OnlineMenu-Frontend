<template>
<div id="cart-holder">
    <div id="cart-header">
        <h1>Cart</h1>
    </div>
    <div id="cart-body">
        <div v-for="item in cart" :key="item._id">{{item}}</div>
    </div>
    <div id="cart-checkout"></div>
</div>
</template>

<script>
import cart from '@/components/cart.js';

export default {
    name: 'Cart',
    data() {
        return {
            cart: cart
        }
    },
    beforeMount(){
        console.log(cart);
    }
}
</script>

<style>
#cart-holder {
    flex: 1;
    box-shadow: 0px 0px 3px #ccc;
}
</style>