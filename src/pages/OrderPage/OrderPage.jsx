import React, {useEffect,useState} from 'react';
import {useLocation} from 'react-router-dom';
import ChannelLink from '../../Components/ChannelLink/ChannelLink';
import './OrderPage.css'
import { fetchOrder } from '../../http/orderApi';

const OrderPage = () => {
    const location = useLocation();
    const [imgUrl, setImgUrl] = useState('')
    const [zoom, setZoom] = useState(9);
    const [order, setOrder] = useState({})


    useEffect(() => {
        //fetchOrder(location.state.id).then(resp => setOrder(resp.data[0]))
        fetchOrder(location.state.id).then(resp => setOrder(resp.data[0]))
        /*if (map.current) return; // initialize map only once
        console.log(order)
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [order.lon, order.lat],
            zoom: zoom
       });
        */
       }, [])


    return (
        <div>
            <img className='mapimg' src='https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/-121.3447,38.5826,9,0/300x200?access_token=pk.eyJ1Ijoib3Rzb2Rpa292IiwiYSI6ImNsbDJzbGJ1eTA1cXgzaHF0amExd3RsbmcifQ.WVnp48kxoCMLuKjaCRD2hQ'/>
            <div className='link'>
            <ChannelLink />
            </div>
            <div className='order_text_block'>
                Описание заказа
                <div className='order_status_text'>{order.status}</div>
                <div className='order_address_text'>{order.address}</div>
                <div className='order_radius_text'>{order.radius}</div>
            </div>
            
        </div>
    );
};

export default OrderPage;