import React, {useCallback, useState} from 'react';
import './MapPage.css';
import Map from '../../Components/Map/Map';
import SearchBlock from '../../Components/SearchBlock/SearchBlock';
import {useJsApiLoader} from "@react-google-maps/api";
import ChannelLink from '../../Components/ChannelLink/ChannelLink';
import CurrentLocation from '../../Components/CurrentLocation/CurrentLocation';
import { usePosition } from '../../Components/SearchBlock/usePosition';



const MapPage = () => {
    const [lat,setLat] = useState(0.0);
    const [lon,setLon] = useState(0.0);
    const [center,setCenter] = useState({
        lat: 23.45,
        lng: 23.45,
    });
    //const location = usePosition();
    

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyD8jQRBkxYYsQb6FWMPNjgSQW1lVIEj1EA"
    })

    const onPlaceSelect = ( () => {
        console.log('click')
        if (location.loaded){
            console.log(JSON.stringify(location))
        }


    }, [lat,lon,center,location])

    return (
        <div className='MapPage'>
            {isLoaded ? <Map className={'map'} center={center}/> : <h2>Loading</h2>}
            <div className='link'>
            <ChannelLink />
            </div>
            <div className='current_location_icon' onClick={onPlaceSelect}>
                <CurrentLocation/>
            </div>
            <SearchBlock/>
        </div>
    );
};

export default MapPage;