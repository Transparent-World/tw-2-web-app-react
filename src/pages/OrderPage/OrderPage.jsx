import React, {useEffect, useState, useCallback} from 'react';
import {useLocation} from 'react-router-dom';
import ChannelLink from '../../Components/ChannelLink/ChannelLink';
import './OrderPage.css'
import { fetchOrder } from '../../http/orderApi';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoib3Rzb2Rpa292IiwiYSI6ImNsbDJzbGJ1eTA1cXgzaHF0amExd3RsbmcifQ.WVnp48kxoCMLuKjaCRD2hQ';

const OrderPage = () => {
    const mapContainer = React.useRef(null);
    const map = React.useRef(null);
    const location = useLocation();
    const [imgUrl, setImgUrl] = useState('')
    const [zoom, setZoom] = useState(9);
    const [order, setOrder] = useState({})


    useEffect(() => {
        //fetchOrder(location.state.id).then(resp => setOrder(resp.data[0]))
        fetchOrder(location.state.id).then(resp => onDataReceived(resp.data[0]))
        if (map.current) return; // initialize map only once
        console.log(order)
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [37.36, 55.45],
            zoom: zoom
       });
    }, [])

    const onDataReceived = useCallback((data) => {
        setOrder(data)
        console.log('order loaded')
        if (data) {
            console.log(JSON.stringify(data))
            map.current.flyTo({
                center: [data.lon, data.lat]
            });
        }


    }, [location])

       //<img className='mapimg' src={'https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/'+order.lon+','+order.lat+',9,0/300x200?access_token=pk.eyJ1Ijoib3Rzb2Rpa292IiwiYSI6ImNsbDJzbGJ1eTA1cXgzaHF0amExd3RsbmcifQ.WVnp48kxoCMLuKjaCRD2hQ'}/>
    return (
        <div>
            <div ref={mapContainer} className="map-container"/>
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