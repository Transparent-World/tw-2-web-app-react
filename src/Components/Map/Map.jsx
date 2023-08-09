import React, {useEffect, useState} from 'react';
import './Map.css';
import { GoogleMap } from '@react-google-maps/api';
import mapboxgl from 'mapbox-gl';
//import {defaultTheme} from "./Theme";

mapboxgl.accessToken = 'pk.eyJ1Ijoib3Rzb2Rpa292IiwiYSI6ImNsbDJzbGJ1eTA1cXgzaHF0amExd3RsbmcifQ.WVnp48kxoCMLuKjaCRD2hQ';

const containerStyle = {
    width: '100%',
    height: '65vh',
};


const defaultOptions = {
    panControl: false,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    scrollwheel: false,
    disableDoubleClickZoom: false,
    fullscreenControl: false,
    //styles: defaultTheme,

}

const Map = () => {
    const mapRef = React.useRef(undefined)
    const mapContainer = React.useRef(null);
    const map = React.useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);


    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map;
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined;
    }, [])

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
    });

    return (
        <div className='Map'>
            {/*
            <GoogleMap
            mapContainerStyle={containerStyle}
            center={{lat:43, lng: -80}}
            zoom={15}
            options={defaultOptions}
            onLoad={onLoad}
            onUnmount={onUnmount}>
            </GoogleMap>
        */}
            <div ref={mapContainer} className="map-container" />
        </div>
    );
};

export default Map;