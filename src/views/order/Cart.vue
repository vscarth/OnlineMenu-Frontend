<template>
<div id="cart-holder">
    <div id="cart-header">
        <div style="float: left">Cart</div>
        <div style="float: right">{{ totalCount }} {{ totalCount == 1 ? "Item" : "Items"}}</div>
    </div>
    <div id="cart-body">
        <table id="cart">
                <CartItem v-for="item in cartData" :key="item.id" :item="item" v-on:change-quantity="$emit('change-quantity')"/>
        </table>
    </div>
    <div id="cart-checkout" v-if="cartData.length != 0">
        <div id="cart-checkout__total">Total: ${{ (price*0.01).toFixed(2) }}</div>
        <button id="cart-checkout__button" v-on:click="$emit('place-order')">Place Order</button>
    </div>
</div>
</template>

<script>
import { cartData } from '@/components/cart';

import CartItem from '@/views/order/CartItem.vue';

export default {
    name: 'Cart',
    components: {
        CartItem
    },
    data () {
        return {
            cartData: cartData.data,
            price: cartData.totalPrice,
            totalCount: cartData.totalCount
        }
    },
    beforeMount(){
        // console.log(cartData);
    },
    beforeUpdate(){
        this.totalCount = cartData.totalCount
        this.price = cartData.totalPrice
    }
}
</script>

<style>
#cart-holder {
    flex: 1;
    box-shadow: 0 0 3px #ccc;
}

#cart-header {
    width: 100%-40px;
    height: 60px;
    margin-bottom: 10px;
    margin: 0 20px;
    /* border-bottom: 1px solid #ccc; */
}

#cart-header > div {
    height: 60px;
    line-height: 60px;
    font-size: 25px;
    font-weight: bold;
}

#cart-body {
    margin-top: 0px;
    width: 100%;
    text-align: left;
    font-size: 18px;
}

#cart {
    width: 100%;
    border-collapse: collapse;
}

#cart-checkout {
    margin-top: 10px;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: -1px;
}

#cart-checkout__total {
    width: auto;
}

#cart-checkout__button {
    margin-top: 10px;
    border-radius: 30px;
    border: 0px;
    padding: 5px 30px;
    background-color: #42b983;
    cursor: pointer;
    color: white;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: -1px;
}

#cart-checkout__button:hover {
    padding: 5px 40px;
    transform: scale(1.05);
    transition: 0.25s;
}
</style>