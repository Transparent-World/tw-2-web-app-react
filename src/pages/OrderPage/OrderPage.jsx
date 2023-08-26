import React, {useEffect,useState} from 'react';
import {useLocation} from 'react-router-dom';
import ChannelLink from '../../Components/ChannelLink/ChannelLink';
import './OrderPage.css'
import { fetchOrder } from '../../http/orderApi';
import mapboxgl from 'mapbox-gl';

const OrderPage = () => {
    const location = useLocation();
    const [zoom, setZoom] = useState(9);
    const [order, setOrder] = useState({})
    const mapContainer = React.useRef(null);
    const map = React.useRef(null);


    useEffect(() => {
        fetchOrder(location.state.id).then(resp => setOrder(resp.data[0]))
        if (map.current || order == {}) return; // initialize map only once
        console.log(order)
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [order.lon, order.lat],
            zoom: zoom
        });
       }, [])

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