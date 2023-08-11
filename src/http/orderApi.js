import {$host} from './index';


export const createOrder = async (userid, lon, lat, address, radius) => {
    const {data} = await $host.post('api/order/create', {userid, lon, lat, address, radius})
    return data
}

export const fetchOrders = async (userid) => {
    const {data} = await $host.get('api/order/get', { params: { userid: userid } })
    return data
}