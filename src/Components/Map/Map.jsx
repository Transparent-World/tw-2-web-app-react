import React from 'react';
import './Map.css';
import { GoogleMap } from '@react-google-maps/api';
//import {defaultTheme} from "./Theme";

const containerStyle = {
    width: '450px',
    height: '200px'
};

const defaultOptions = {
    panControl: true,
    zoomControl: true,
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
    const center = {}


    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map;
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined;
    }, [])
    
    return (
        <div>
            <GoogleMap
            mapContainerStyle={containerStyle}
            center={{lat:43, lng: -80}}
            zoom={15}
            options={defaultOptions}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
        </GoogleMap>
        </div>
    );
};

export default Map;