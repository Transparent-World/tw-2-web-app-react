import React, { useCallback, useState, useEffect } from 'react';
import './MapPage.css';
import SearchBlock from '../../Components/SearchBlock/SearchBlock';
import ChannelLink from '../../Components/ChannelLink/ChannelLink';
import CurrentLocation from '../../Components/CurrentLocation/CurrentLocation';
import { usePosition } from '../../Components/SearchBlock/usePosition';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoib3Rzb2Rpa292IiwiYSI6ImNsbDJzbGJ1eTA1cXgzaHF0amExd3RsbmcifQ.WVnp48kxoCMLuKjaCRD2hQ';


const MapPage = () => {
    const mapContainer = React.useRef(null);
    const map = React.useRef(null);
    const [center, setCenter] = useState({
        lat: 55.45,
        lng: 37.36
    })
    const [zoom, setZoom] = useState(9);

    const location = usePosition();

    const onGeoLocationPlaceSelect = useCallback(() => {
        console.log('click')
        if (location.loaded) {
            console.log(JSON.stringify(location))
            map.current.flyTo({
                center: [location.coordinates.lng, location.coordinates.lat]
            });
        }


    }, [location])

    const onAutocompleteItemPlaceSelect = useCallback((coordinates) => {
        console.log('click')
        if (coordinates) {
            console.log(JSON.stringify(coordinates))
            map.current.flyTo({
                center: coordinates
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
        <div className='MapPage'>
            <div className='Map'>
                <div ref={mapContainer} className="map-container" />
                <div className='current_location_icon' onClick={onGeoLocationPlaceSelect}>
                    <CurrentLocation />
                </div>
            </div>
            <div className='link'>
                <ChannelLink />
            </div>

            <SearchBlock location={location} onSelect={onAutocompleteItemPlaceSelect} />
        </div>
    );
};

export default MapPage;