import React, { useEffect } from 'react';
import './CurrentLocation.css'

const CurrentLocation = () => {
    const tg = window.Telegram.WebApp;
    const theme = tg.colorScheme;

    useEffect(() => {

    })




    return (
        <div className='CurrentLocation'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <circle cx="15" cy="15" r="15" fill="#D9D9D9" />
                <path d="M14.4133 15.9442L14.3757 15.5199L13.9508 15.4895L7.96613 15.0628L20.9764 9.02615L14.9565 22.0845L14.4133 15.9442Z" fill="#1D2733" stroke="#292D32" />
            </svg>
        </div>
    );
};

export default CurrentLocation;