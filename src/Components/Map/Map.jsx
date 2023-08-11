import React, { useEffect, useState, useCallback } from 'react';
import './Map.css';
import CurrentLocation from '../CurrentLocation/CurrentLocation';
import mapboxgl from 'mapbox-gl';
import { usePosition } from '../../Components/SearchBlock/usePosition';




const Map = () => {
    const mapContainer = React.useRef(null);
    const map = React.useRef(null);
    const [center, setCenter] = useState({
        lat: 55.45,
        lng: 37.36
    })
    const [zoom, setZoom] = useState(9);

    const location = usePosition();


    const onPlaceSelect = useCallback(() => {
        console.log('click')
        if (location.loaded) {
            console.log(JSON.stringify(location))
            setCenter(location)
            map.current.flyTo({
                center: [location.coordinates.lng, location.coordinates.lat]
            });
        }


    }, [location])

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [center.lng, center.lat],
            zoom: zoom
        });
    })


    return (
        <div className='Map'>
            <div ref={mapContainer} className="map-container" />
            <div className='current_location_icon' onClick={onPlaceSelect}>
                <CurrentLocation />
            </div>
        </div>
    );
};

export default Map;