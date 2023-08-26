import React, {useEffect,useState} from 'react';
import {useLocation} from 'react-router-dom';
import ChannelLink from '../../Components/ChannelLink/ChannelLink';
import './OrderPage.css'
import { fetchOrder } from '../../http/orderApi';
import {mapboxgl, mapboxSdk} from 'mapbox-gl';

const OrderPage = () => {
    const location = useLocation();
    const [imgUrl, setImgUrl] = useState('')
    const [zoom, setZoom] = useState(9);
    const [order, setOrder] = useState({})
    const mapboxClient = mapboxSdk({ accessToken: 'pk.eyJ1Ijoib3Rzb2Rpa292IiwiYSI6ImNsbDJzbGJ1eTA1cXgzaHF0amExd3RsbmcifQ.WVnp48kxoCMLuKjaCRD2hQ' });


    useEffect(() => {
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

    const onOrderReceived = useCallback((lon, lat) => {
        const request = mapboxClient.static.getStaticImage({
            ownerId: 'mapbox',
            styleId: 'light-v10',
            width: 500,
            height: 350,
            position: {
            coordinates: [lon, lat],
            zoom: 12
            },
            });
        setImgUrl(request.url());
        
    }, [location])

    return (
        <div>
            <div className='mapimg'>
                {imgUrl}
            </div>
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