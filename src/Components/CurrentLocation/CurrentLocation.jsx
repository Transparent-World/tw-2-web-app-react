import React, { useEffect } from 'react';
import './CurrentLocation.css'

const CurrentLocation = () => {
    const tg = window.Telegram.WebApp;
    const theme = tg.colorScheme;

    useEffect(() => {

    })




    return (
        <div className='CurrentLocation'>
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                <circle cx="19" cy="19" r="19" fill="#D9D9D9" />
                <path d="M18.124 20.2078L18.0864 19.7834L17.6615 19.7531L9.56612 19.1758L26.843 11.1595L18.8562 28.4845L18.124 20.2078Z" fill="#1D2733" stroke="#292D32" />
            </svg>
        </div>
    );
};

export default CurrentLocation;