<template>
<tr>
    <td class="cart__quantity"><span>{{ item.quantity }}</span></td>
    <td class="cart-center">
        <span>{{ item.name }}</span>
        <div>
            <button class="cart-center__button hover--darker-green hover--underline"
                    v-on:click="edit = true">Edit</button>
            <button class="cart-center__button hover--darker-green hover--underline"
                    v-on:click="deleteCartItem()">Remove</button>
        </div>
        <QuantityEdit v-if="edit"
                      :item="item"
                      v-on:change-quantity="changeQuantity"
                      v-on:close-edit="edit = false"/>
    </td>
    <td class="cart__total"><div>${{((item.price*0.01)*item.quantity).toFixed(2)}}</div></td>
</tr>
</template>

<script>
import QuantityEdit from '@/views/order/QuantityEdit.vue';

import { deleteItem as cartDeleteItem } from '@/components/cart';

export default {
    name: 'CartItem',
    props: ['item'],
    components: {
        QuantityEdit
    },
    data() {
        return {
            edit: false
        }
    },
    methods: {
        changeQuantity() {
            this.edit = false;
            this.$emit('change-quantity')
        },
        deleteCartItem(){
            cartDeleteItem(this.item);
        }
    }
}
</script>

<style>
#cart tr {
    cursor: pointer;
}

#cart tr:hover {
    background-color: #dfdfdf;
}

#cart td {
    padding: 15px 0px 15px;
    vertical-align: top;
}

.cart__quantity {
    width: 10%;
    font-weight: bold;
}

.cart__quantity span {
    padding-left: 20px;
}

.cart-center {
    font-weight: bold;
}
.cart-center__button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 1px 0;
    margin-right: 10px;
    font-size: 14px;
    font-weight: bolder;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #42b983;
}

.cart__total {
    width: 20%;
}
</style>