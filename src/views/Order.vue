<template>
<div id="page-holder">
	<div id="menu-holder">
		<div id="sorted-menu" v-for="tag in headers" :key="tag">
			<h1 style="text-align: left;">{{tag[0]}}</h1>
			<Items
			:data="data.filter((n) => {return n.tags.includes(tag[0])})"
			v-on:item-click="cartClick">
			</Items>
		</div>
	</div>
  <Cart v-on:item-update="itemUpdate"></Cart>
</div>
</template>

<script>
import axios from 'axios';
import getHeader from '@/views/order/getHeader';
import {addItem as cartAddItem,
		updateQuantity as cartUpdateQuantity} from '@/components/cart.js';

import Items from '@/views/order/Items.vue';
import Cart from '@/views/order/Cart.vue';


export default {
	name: 'Home',
	components: {
		Items,
		Cart
	},
	data() {
        return {
            data: {},
			headers: {}
        };
    },
    beforeMount(){
        this.getData();
    },
    methods: {
        async getData() {
			axios.get('http://127.0.0.1:3000/api/menu')
			.then(response => {
				this.data = response.data.data.filter((n) => {return n.publish == true});
			})
			.then(() => {
				this.headers = getHeader(this.data, 3);
			})
        },
		cartClick(item) {
			cartAddItem(item);
		},
		itemUpdate(n, item) {
			cartUpdateQuantity(n, item);
		}
    }
}
</script>

<style>
#page-holder {
	margin: 0 auto;
	display: flex;
	width: 100%;
	max-width: 1200px;
	min-width: 700px;
	padding: 0 10px 0 10px;
}

#page-holder > div {
	margin: 0 10px 0 10px;
}

#menu-holder {
	width: 65%;
}
</style>