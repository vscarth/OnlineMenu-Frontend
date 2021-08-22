import axios from 'axios';
import { cartData } from '@/components/cart';
import getHeader from '@/views/order/getHeader';

export default async () => {
    // Call axios
    let res = await axios.get('http://127.0.0.1:3000/api/menu')

    // Filter result for published items only
    res = res.data.data.filter((n) => {return n.publish == true});

    // Get most common tags from result items
    cartData.headers = getHeader(res, 3);

    return res
}