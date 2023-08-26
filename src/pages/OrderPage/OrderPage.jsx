import React, {useEffect,useState} from 'react';
import {useLocation} from 'react-router-dom';
import './OrderPage.css'
import { fetchOrder } from '../../http/orderApi';

const OrderPage = () => {
    const location = useLocation();
    const [order, setOrder] = useState({})
    const mapContainer = React.useRef(null);
    const map = React.useRef(null);


    useEffect(() => {
        fetchOrder(location.state.id).then(resp => setOrder(resp.data[0]))
        if (map.current) return; // initialize map only once
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
            {order.id}
        </div>
    );
};

export default OrderPage;