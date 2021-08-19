<template>
<div id="cart-holder">
    <div id="cart-header">
        <div style="float: left">Cart</div>
        <div style="float: right">{{ totalCount }} {{ totalCount == 1 ? "Item" : "Items"}}</div>
    </div>
    <div id="cart-body">
        <ul>
            <li>
                <div class="cart-item" style="font-weight: bold; text-decoration: underline;">
                    <span class="item-name">Name</span>
                    <span class="quantity-holder">Quantity</span>
                    <span class="item-price">Price</span>
                    <span class="item-price">Total</span>
                </div>
            </li>
            <li v-for="item in cartData" :key="item.id">
                <div class="cart-item">
                    <div class="item-name">{{ item.name }}</div>
                    <div class="quantity-holder">
                        <button class="quantity-button" v-on:click="changeQuantity(item.quantity-1, item)">-</button>
                        <input type="number" class="quantity-counter" :value="item.quantity" v-on:keyup.enter="changeQuantity($event.target.valueAsNumber, item)">
                        <button class="quantity-button" v-on:click="changeQuantity(item.quantity+1, item)">+</button>
                    </div>
                    <div class="item-price">${{ (item.price*0.01).toFixed(2) }}</div>
                    <div class="item-price">${{((item.price*0.01)*item.quantity).toFixed(2)}}</div>
                </div>
            </li>
        </ul>
        <div :style="[ cartData.length == 0 ? {'display': 'none'} : {} ]">Total: ${{ (price*0.01).toFixed(2) }}</div>
    </div>
    <div id="cart-checkout" :style="[ cartData.length == 0 ? {'display': 'none'} : {} ]">
        <button>Place Order</button>
    </div>
</div>
</template>

<script>
import { cartData } from '@/components/cart';

export default {
    name: 'Cart',
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
    },
    methods: {
        changeQuantity(n, item) {
            this.$emit("item-update", n, item);
        }
    }
}
</script>

<style>
#cart-holder {
    flex: 1;
    box-shadow: 0 0 3px #ccc;
    padding: 0 30px 0 30px;
}

#cart-header {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
}

#cart-header > div {
    height: 60px;
    line-height: 60px;
    font-size: 25px;
    font-weight: bold;
}

#cart-body {
    width: 100%;
    font-size: 18px;
    font-weight: normal;
    letter-spacing: -1px;
}

.cart-item {
    width: 100%;
    height: auto;
    display: inline-flex;
    align-items: center;
    line-height: 1em;
    text-align: center;
    margin-bottom: 10px;
}

.cart-item > * {
    flex: 1 1 0;
}

.item-name {
    flex: 0 0 30%;
    text-align: center;
}

.quantity-holder {
    height: 20px;
    display: inline-flex;
}

.quantity-holder > * {
    margin: 0 1px 0 1px;
}

.quantity-button {
    width: 30%;
}

.quantity-counter {
    width: 40%;
    text-align: center;
}

.item-price {

}

/* #cart-body > ul > li:first-child > div.cart-item {
    padding-top: 0;
} */
</style>