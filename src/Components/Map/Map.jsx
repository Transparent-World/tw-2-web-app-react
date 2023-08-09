import React, { useEffect, useState, useCallback} from 'react';
import './Map.css';
import CurrentLocation from '../CurrentLocation/CurrentLocation';
import mapboxgl from 'mapbox-gl';
import { usePosition } from '../../Components/SearchBlock/usePosition';

mapboxgl.accessToken = 'pk.eyJ1Ijoib3Rzb2Rpa292IiwiYSI6ImNsbDJzbGJ1eTA1cXgzaHF0amExd3RsbmcifQ.WVnp48kxoCMLuKjaCRD2hQ';


const Map = () => {
    const mapContainer = React.useRef(null);
    const [mapObject, setMap] = useState();
    const map = React.useRef(null);
    const [center, setCenter] = useState({
        lat: 55.45,
        lng: 37.36
    })
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    
    const location = usePosition();


    const onPlaceSelect = useCallback(() => {
        console.log('click')
        if (location.loaded){
            console.log(JSON.stringify(location))
            setCenter(location)
            map.current.flyTo({
                center: [location.coordinates.lng, location.coordinates.lat]
                });
        }
        

    }, [center,location])

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
    })


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
            <div className='current_location_icon' onClick={onPlaceSelect}>
                <CurrentLocation/>
            </div>
        </div>
    );
};

export default Map;