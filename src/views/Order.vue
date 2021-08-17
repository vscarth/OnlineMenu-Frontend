<template>
<div id="page-holder">
	<div id="menu-holder">
		<div id="sorted-menu" v-for="tag in headers" :key="tag">
			<h1 style="text-align: left;">{{tag[0]}}</h1>
			<Items :data="data.filter((n) => {return n.tags.includes(tag[0])})" v-on:item-click="cartClick"></Items>
		</div>
	</div>
  <Cart :key="cartKey"></Cart>
</div>
</template>

<script>
import axios from 'axios';
import getHeader from '@/views/order/getHeader';
import cart from '@/components/cart.js';

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
			headers: {},
			cartKey: 0
        };
    },
    beforeMount(){
        this.getData();
    },
	provide() {
		return {
			data: this.data
		};
	},
    methods: {
        async getData() {
			axios.get('http://127.0.0.1:3000/api/menu')
			.then(response => {
				this.data = response.data.data;
			})
			.then(() => {
				this.headers = getHeader(this.data, 3);
			})
        },
		cartClick(data) {
			var len = cart.length;

			for(var i = 0; i < len; i++){
				if(data == cart[i].id){ cart[i].quantity++; break;}
				if(i == len-1) cart.push({id: data, quantity: 1});
			}

			if(cart.length == 0) cart.push({id: data, quantity: 1});

			this.cartKey += 1;
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
	padding: 0px 10px 0px 10px;
}

#page-holder > div {
	padding: 0px 10px 0px 10px;
}

#menu-holder {
	width: 65%;
}
</style>