import React, { useEffect } from 'react';
import './CurrentLocation.css'

const CurrentLocation = () => {
    const tg = window.Telegram.WebApp;
    const theme = tg.colorScheme;

    useEffect(() => {

    })




    return (
        <div className='CurrentLocation'>
            <svg   xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                <circle className='circle' cx="22.5" cy="22.5" r="22.5" fill="#D9D9D9" />
                <path className='arrow' d="M21.3709 23.9383L21.3333 23.514L20.9084 23.4837L10.9661 22.7747L31.9764 13.0261L22.2685 34.0845L21.3709 23.9383Z" fill="#1D2733" stroke="#292D32" />
            </svg>
        </div>
    );
};

export default CurrentLocation;