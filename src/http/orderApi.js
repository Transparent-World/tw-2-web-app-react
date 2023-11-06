import { $host } from './index';
import axios from "axios";
const Buffer = require('buffer').Buffer;


export const createOrder = async (userid, lon, lat, address, radius) => {
    const { data } = await $host.post('api/order/create', { userid, lon, lat, address, radius })
    return data
}


export const getImageFromMapboxStaticAPI = async(longitude, latitude, width, height) => {
    const accessToken = 'pk.eyJ1Ijoib3Rzb2Rpa292IiwiYSI6ImNsbDJzbGJ1eTA1cXgzaHF0amExd3RsbmcifQ.WVnp48kxoCMLuKjaCRD2hQ';
    const url = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${longitude},${latitude},13/${width}x${height}?access_token=${accessToken}`;
    
    return axios.get(url, {responseType: 'arraybuffer'})
      .then((response) => {
        const image = Buffer.from(response.data, 'binary').toString('base64');
        const src = `data:image/png;base64,${image}`;
        console.log(src)
        return src;
      })
      .catch((error) => {
        console.log(error);
      });
  }

export const postMessagw = async (kml, address, center) => {
    
    const formData = new FormData();

    const filename = address + ' ' + center.lat + ' ' + center.lon + '.kml'

    formData.append("chat_id", -1001919128416);
    formData.append("document", new Blob([kml], { type: 'application/vnd.google-earth.kml+xml' }), filename);
    formData.append("caption", `Адрес: ${address} \nКоординаты: ${center.lat}, ${center.lng}`);

    var params = {
        method: "POST",
        body: formData,
    }

    const { data } = await axios.post('https://api.telegram.org/bot6569140117:AAEpsZrhnE-1LjXRn04bkVqVUzSs_SSEAPs/sendDocument', {params: params})
    console.log(data)
    return data

}

export const fetchOrders = async (userid) => {
    const { data } = await $host.get('api/order/getAll', { params: { userid: userid } })
    return data
}

export const fetchOrder = async (id) => {
    const { data } = await $host.get('api/order/getOne', { params: { id: id } })
    return data
}