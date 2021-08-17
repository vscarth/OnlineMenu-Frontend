<template>
    <ul>
        <li v-for="item in data" :key="item._id">
            <div class="item" v-on:click="itemClick(item._id)">
                <span class="name"> {{ item.name }} </span>
                <span class="description"> {{ item.description }} </span>
                <span class="price"> ${{ item.price * 0.01 }} </span>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Items',
    props: ['data'],
    methods: {
        itemClick (id) {
            this.$emit("item-click", id);
        }
    }
}
</script>

<style scoped>
    ul {
        flex-wrap: wrap;
        display: flex;
        list-style-type: none;
        padding: 0;
        margin: 0;
        width: 100%;
    }

    li {
        /* display: inline-block; */
        flex: 0 0 50%;
    }

    div.item {
        margin: 0px;
        border: 1px solid #ccc;
        margin: 0 5px 12px 5px;
        box-shadow: 0px 0px 3px #ddd;
        border-radius: 3px;
        padding: 10px;
        text-align: left;
        cursor: pointer;
    }

    div.item:hover {
        border-color: #42b983;
        box-shadow: 0px 0px 3px #73e4b1;
    }

    div.item span {
        display: block;
    }

    span.name {
        font-size: 15px;
        padding-bottom: 5px;
    }

    span.description {
        font-size: 12px;
        font-weight: 400;
        padding-bottom: 5px;
    }

    span.price {
        font-size: 12px;
        font-weight: 400;
    }
</style>