import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import ChannelLink from '../../Components/ChannelLink/ChannelLink';
import './OrderPage.css'
import { fetchOrder } from '../../http/orderApi';
import { useNavigate } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';
import { Link } from "react-router-dom"
import FileSaver from 'file-saver';

mapboxgl.accessToken = 'pk.eyJ1Ijoib3Rzb2Rpa292IiwiYSI6ImNsbDJzbGJ1eTA1cXgzaHF0amExd3RsbmcifQ.WVnp48kxoCMLuKjaCRD2hQ';

const OrderPage = () => {
    const tg = window.Telegram.WebApp;
    const navigate = useNavigate();

    const mapContainer = React.useRef(null);
    const map = React.useRef(null);
    const location = useLocation();
    const [zoom, setZoom] = useState(9);
    const [order, setOrder] = useState({})
    const [center, setCenter] = useState({})


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
        setCenter({
            lon: data.lon,
            lat: data.lat
        })
        if (data) {
            console.log(JSON.stringify(data))
            map.current.flyTo({
                center: [data.lon, data.lat]
            });
        }
    }, [location])

    const onBack = useCallback(() => {
        navigate("/mainpage");
        navigate(0);
        tg.BackButton.hide();
    }, [])

    const downloadFile = (fileName = 'circle.kml') => {
        fetch("https://kml4earth.appspot.com/circle.gsp?radius=1&units=m&fm=1&lat=53.63930&lon=47.23945&color=ff0000ff&width=2", {
            mode: 'no-cors',
            method: 'GET',
            headers: {
                'Content-Type': 'application/vnd.google-earth.kml+xml;charset=iso-8859-1',
                'Content-Disposition': 'attachment; filename=circle.kml'
            },
        })
            .then(response => console.log(response))
            .then(response => response.blob())
            .then(blob => {
                //var blob = new Blob([blob], {
                //    type: "application/vnd.google-earth.kml+xml;charset=iso-8859-1"
                //  });   
                const url = window.URL.createObjectURL(new Blob([blob]));
                console.log(url)
                const link = document.createElement('a');
                link.href = url;
                link.download = fileName;

                document.body.appendChild(link);

                link.click();

                link.parentNode.removeChild(link);
                //FileSaver.saveAs(blob, "test.kml");

            });
    }

    const link = "https://kml4earth.appspot.com/circle.gsp?radius=" + order.radius + "&units=m&fm=1&lat=" + center.lat + "&lon=" + center.lon + "&color=ff0000ff&width=2"

    //<img className='mapimg' src={'https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/'+order.lon+','+order.lat+',9,0/300x200?access_token=pk.eyJ1Ijoib3Rzb2Rpa292IiwiYSI6ImNsbDJzbGJ1eTA1cXgzaHF0amExd3RsbmcifQ.WVnp48kxoCMLuKjaCRD2hQ'}/>
    return (
        <div>
            <div ref={mapContainer} className="map-container_order" />
            <div className='link'>
                <ChannelLink />
            </div>
            <div className='order_text_block'>
                Описание заказа
                <div className='order_status'>Статус: <a className='order_status_text'>{order.status}</a></div>
                <div className='order_address'>Адрес: <a className='order_address_text'>{order.address}</a></div>
                <div className='order_radius'>Радиус: <a className='order_radius_text'>{order.radius} метров</a> </div>
                <Link className='order_radius_text' onClick={downloadFile}>Скачать kml файл</Link>
            </div>

        </div>
    );
};

export default OrderPage;