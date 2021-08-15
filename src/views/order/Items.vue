<template>
    <div id="menu-holder">
        <ul>
            <li v-for="item in data.data" :key="item._id">
                <div class="item">
                    <span class="name"> {{ item.name }} </span>
                    <span class="description"> {{ item.description }} </span>
                    <span class="price"> ${{ item.price * 0.01 }} </span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Items',
    data() {
        return {
            data: {}
        };
    },
    beforeMount(){
        this.getData();
    },
    methods: {
        async getData() {
            await fetch('http://127.0.0.1:3000/api/menu')
            .then(response => response.json())
            .then(data => this.data = data);
        }
    }
}
</script>

<style scoped>
    #menu-holder {
        width: 60%;
        border-right: 1px solid #000;
    }

    ul {
        columns: 2;
        padding: 0px;
    }

    li {
        display: inline-block;
        list-style: none;
        width: 100%;
    }

    div.item {
        display: block;
        margin: 0px;
        border: 1px solid #ccc;
        margin-bottom: 10px;
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