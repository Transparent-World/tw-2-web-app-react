import React from 'react';
import './MapPage.css';
import Map from '../../Components/Map/Map';
import SearchBlock from '../../Components/SearchBlock/SearchBlock';
import {useJsApiLoader} from "@react-google-maps/api";
import ChannelLink from '../../Components/ChannelLink/ChannelLink'



const MapPage = () => {

    const center = {
        lat: 23.45,
        lng: 23.45,
    }
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyD8jQRBkxYYsQb6FWMPNjgSQW1lVIEj1EA"
    })

    return (
        <div className='MapPage'>
            {isLoaded ? <Map className={'map'} center={center}/> : <h2>Loading</h2>}
            <div className='link'>
            <ChannelLink />
            </div>
            <SearchBlock/>
        </div>
    );
};

export default MapPage;