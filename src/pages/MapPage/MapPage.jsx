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
        lat: 43.214673,
        lng: 49.690732
    })
    const [zoom, setZoom] = useState(1);

    const location = usePosition();

    const onGeoLocationPlaceSelect = useCallback(() => {
        if (location.loaded) {
            map.current.flyTo({
                center: [location.coordinates.lng, location.coordinates.lat],
                zoom: 14.2
            });
        }


    }, [location])

    const onAutocompleteItemPlaceSelect = useCallback((coordinates) => {
        if (coordinates) {
            map.current.flyTo({
                center: coordinates,
                zoom: 14.2
            });
        }


    }, [location])

    const onRadiusSelect = useCallback((radius) => {
        if (radius) {
            map.current.flyTo({
                center: coordinates,
                zoom: 14.2
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
                <div className='radius_circle' id='radius_circle'></div>
            </div>
            <div className='link'>
                <ChannelLink />
            </div>
            

            <SearchBlock location={location} onSelect={onAutocompleteItemPlaceSelect} />
        </div>
    );
};

export default MapPage;