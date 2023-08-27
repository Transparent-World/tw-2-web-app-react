import React, {useEffect, useState, useCallback} from 'react';
import {useLocation} from 'react-router-dom';
import ChannelLink from '../../Components/ChannelLink/ChannelLink';
import './OrderPage.css'
import { fetchOrder } from '../../http/orderApi';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoib3Rzb2Rpa292IiwiYSI6ImNsbDJzbGJ1eTA1cXgzaHF0amExd3RsbmcifQ.WVnp48kxoCMLuKjaCRD2hQ';

const OrderPage = () => {
    const tg = window.Telegram.WebApp;

    const mapContainer = React.useRef(null);
    const map = React.useRef(null);
    const location = useLocation();
    const [imgUrl, setImgUrl] = useState('')
    const [zoom, setZoom] = useState(9);
    const [order, setOrder] = useState({})


    useEffect(() => {
        tg.BackButton.show()
        tg.onEvent('backButtonClicked', onBack)
        fetchOrder(location.state.id).then(resp => onDataReceived(resp.data[0]))
        if (map.current) return;
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

    const onBack = useCallback(() => {
        navigate("/mainpage");
        tg.BackButton.hide();
    }, [])

       //<img className='mapimg' src={'https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/'+order.lon+','+order.lat+',9,0/300x200?access_token=pk.eyJ1Ijoib3Rzb2Rpa292IiwiYSI6ImNsbDJzbGJ1eTA1cXgzaHF0amExd3RsbmcifQ.WVnp48kxoCMLuKjaCRD2hQ'}/>
    return (
        <div>
            <div ref={mapContainer} className="map-container"/>
            <div className='link'>
            <ChannelLink />
            </div>
            <div className='order_text_block'>
                Описание заказа
                <div className='order_status'>Статус: <a className='order_status_text'>{order.status}</a></div>
                <div className='order_address'>Адрес: <a className='order_address_text'>{order.address}</a></div>
                <div className='order_radius'>Радиус: <a className='order_radius_text'>{order.radius} метров</a> </div>
            </div>
            
        </div>
    );
};

export default OrderPage;