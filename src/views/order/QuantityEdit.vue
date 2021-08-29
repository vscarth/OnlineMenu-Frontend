<template>
<div class="quantity-editor">
    <div class="quantity-holder__offclick" v-on:click="$emit('close-edit')"></div>
    <div class="quantity-holder">
        <div class="quantity-change">
            <button class="quantity-button" v-on:click="quantity == 0 ? none : quantity-=1">-</button>
            <input type="number" 
                    class="quantity-counter"
                    :value="quantity"
                    v-on:keyup="
                    quantity = $event.target.valueAsNumber;"
                    v-on:keyup.enter="
                        updateQuantity();">           
            <button class="quantity-button" v-on:click="quantity+=1">+</button>
        </div>
        <div class="quantity-edit__confirm" v-on:click="updateQuantity()">
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
        </div>
    </div>
</div>
</template>

<script>
import { updateQuantity as cartUpdateQuantity } from '@/components/cart';

export default {
    name: 'QuantityEdit',
    props: ['item'],
    data() {
        return {
            quantity: this.item.quantity,
            updated: false
        }
    },
    methods: {
        updateQuantity(){
            cartUpdateQuantity(this.quantity, this.item);
            this.$emit('change-quantity');
        }
    }
}
</script>

<style scoped>
.quantity-editor {
    z-index: 10;
}

.quantity-holder__offclick {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    margin: 0;
    padding: 0;
    cursor: pointer;
}

.quantity-holder {
    position: absolute;
    background-color: #fff;
    border: 1px solid #ccc;
    margin-top: 10px;
    padding: 10px;
    z-index: 100;
}

.quantity-holder::before {
    position: absolute;
    content: '';
    top: -12px;
    left: 3px;
    margin: 0;
    padding: 0;
    width: 20px;
    height: 20px;
    background-color: #fff;
    transform: rotate(45deg);
    border: 1px solid #ccc;
    z-index: -2;
}
.quantity-holder::after {
    position: absolute;
    content: '';
    top: 0px;
    left: 0px;
    width: 28px;
    height: 100%;
    background-color: #fff;
    z-index: -1
}

.quantity-change {
    display: inline-flex;
}

.quantity-change > * {
    margin: 0 1px 0 1px;
}

.quantity-button {
    cursor: pointer;
    width: 30%;
}

.quantity-counter {
    width: 20px;
    text-align: center;
}

.quantity-edit__confirm {
    width: 100;
    height: 20px;
    background-color: #42b983;
    border-radius: 3px;
}

.checkmark {
    display: block;
    margin: auto;
    height: 100%;
}

.checkmark__check {
    stroke: white;
    stroke-width: 3;
}
</style>