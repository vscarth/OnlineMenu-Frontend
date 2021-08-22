<template>
<div id="page-holder">
	<header>
		<div id="header-holder">
			<a href="/">
				<div id="header__logo">Online Menu</div>
			</a>
			<nav id="header__nav">
				<a href="/kitchen">Kitchen</a>
				<a href="/manage">Manage</a>
			</nav>
		</div>
	</header>
	<section id="body-section">
	<div id="menu-holder">
		<div id="sorted-menu" v-for="tag in headers" :key="tag">
			<h1 style="text-align: left;">{{tag[0]}}</h1>
			<Items
			:data="data.filter((n) => {return n.tags.includes(tag[0])})"
			v-on:item-click="cartClick"/>
		</div>
	</div>
	<Cart v-on:change-quantity="itemUpdate" :key="cartKey"/>
	</section>
</div>
</template>

<script>
import { cartData, addItem as cartAddItem} from '@/components/cart';
import getItems from '@/components/api/getItems'

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
        getItems()
		.then((result)=>{
			this.data = result;
			this.headers = cartData.headers;
		})
    },
    methods: {
		cartClick(item) {
			cartAddItem(item);
			this.itemUpdate()
		},
		itemUpdate() {
			this.cartKey+=1
		}
    }
}
</script>

<style>
#page-holder {
	width: 100%;
}

header {
	height: 70px;
	background: rgb(66,185,131);
	background: linear-gradient(135deg, rgba(66,185,131,1) 0%, rgba(62,175,125,1) 100%);
}

#header-holder {
	max-width: 1200px;
	min-width: 700px;
	padding: 0 10px;
	margin: 0 auto;
	line-height: 70px;
	font-weight: bold;
	color: white;
}

#header__logo {
	font-size: 30px;
	float: left;
	margin-left: 10px;
	color: white;
	letter-spacing: -2px;
	font-weight:bolder;
}

#header__nav {
	float: right;
	margin-right: 10px;
	font-size: 20px;
	letter-spacing: -1px;
}

#header__nav a {
	margin-left: 15px;
	text-decoration: none;
	padding: 5px;
}

#header__nav a:hover {
	text-decoration: underline;
}

#header__nav a:visited {
	color: white;
}

#body-section {
	display: flex;
	max-width: 1200px;
	min-width: 700px;
	padding: 0 10px;
	margin: 0 auto;
}

#body-section > div {
	margin: 0 10px;
}

#menu-holder {
	width: 65%;
}
</style>