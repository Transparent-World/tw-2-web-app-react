import React, {useCallback, useState} from 'react';
import './MapPage.css';
import Map from '../../Components/Map/Map';
import SearchBlock from '../../Components/SearchBlock/SearchBlock';
import {useJsApiLoader} from "@react-google-maps/api";
import ChannelLink from '../../Components/ChannelLink/ChannelLink';
import CurrentLocation from '../../Components/CurrentLocation/CurrentLocation';




const MapPage = () => {
    const [lat,setLat] = useState(0.0);
    const [lon,setLon] = useState(0.0);

    

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyD8jQRBkxYYsQb6FWMPNjgSQW1lVIEj1EA"
    })

    

    return (
        <div className='MapPage'>
            <Map className={'map'}/>
            <div className='link'>
            <ChannelLink />
            </div>
            
            <SearchBlock/>
        </div>
    );
};

export default MapPage;