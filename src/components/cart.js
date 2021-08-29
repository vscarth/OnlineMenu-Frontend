import {reactive} from 'vue'

const cartData = reactive({
    data: [
        // {
        //     _id: String,
        //     name: String,
        //     price: Number,
        //     quantity: Number
        // }
    ],
    totalCount: 0,
    totalPrice: 0,
    customerName: String
})

const addItem = (item) => {
    var itemFound = false

    for(const cartItem of cartData.data){
        if(item._id == cartItem._id){
            cartItem.quantity += 1;
            itemFound = true
            break;
        }
    }

    if(!itemFound) {
        cartData.data.push({
            _id: item._id,
            name: item.name,
            price: item.price,
            quantity: 1
        })
    }

    cartTotal();
}

const updateQuantity = (n, cartItem) => {
    if(n >= 1){
        cartItem.quantity = n
        cartTotal()
    } else if(n <= 0){
        deleteItem(cartItem)
    }
}

const deleteItem = (cartItem) => {
    for(var i = 0; i < cartData.data.length; i++){
        if(cartData.data[i]._id == cartItem._id){
            cartData.data.splice(i,1)
            break
        }
    }

    cartTotal()
}


const cartTotal = () => {
    cartData.totalPrice = 0;
    cartData.totalCount = 0;
    for(const item of cartData.data){
        cartData.totalPrice += item.price * item.quantity
        cartData.totalCount += item.quantity
    }
}

export {
    cartData,
    addItem,
    updateQuantity,
    deleteItem,
    cartTotal
}