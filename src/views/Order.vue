<template>
<div id="page-holder">
  <Items></Items>
</div>
</template>

<script>
import Items from '@/views/order/Items.vue'

export default {
	name: 'Home',
	components: {
		Items
	}
}
</script>

<style>
#page-holder {
	width: 100%;
	max-width: 1200px;
	padding: 0px 10px 0px 10px;
}

#page-holder > div {
	padding: 0px 10px 0px 10px;
}
</style>