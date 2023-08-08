import {$host} from './index';

export const createOrder = async (userid, lon, lat, address, radius) => {
    const {data} = await $host.post('api/order/create', {userid, lon, lat, address, radius})
    return data
}