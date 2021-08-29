import axios from 'axios';
import { cartData, cartTotal } from '@/components/cart'

export default async (firstname, lastname) => {
    var order = []
    var customerName = `${firstname} ${lastname}`

    for(const item of cartData.data) {
        order.push({_id: item._id, quantity: item.quantity})
    }

    await axios.post('http://127.0.0.1:3000/api/order', {
        "name": customerName,
        "order": order
    },
    {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }
    )
    .then(() => {
        cartData.data.splice(0, cartData.data.length)
        cartTotal()
    })
}