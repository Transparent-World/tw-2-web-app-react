import React from 'react';
import './ChannelLink.css'

const ChannelLink = () => {
    return (
        <div className={'ChannelLink'}>
            <div className={'back'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <rect x="1" y="1" width="21" height="21" rx="10.5" fill="white" stroke="#787880" stroke-opacity="0.2" />
                    <path d="M11.5 20.6452C16.5508 20.6452 20.6452 16.5508 20.6452 11.5C20.6452 6.44929 16.5508 2.35486 11.5 2.35486C6.44929 2.35486 2.35486 6.44929 2.35486 11.5C2.35486 16.5508 6.44929 20.6452 11.5 20.6452Z" fill="url(#paint0_linear_12_117)" />
                    <path d="M5.56185 11.8895C6.63603 11.3025 7.8351 10.8126 8.95546 10.3201C10.8829 9.51355 12.818 8.72095 14.7726 7.98305C15.1529 7.85732 15.8363 7.73439 15.9033 8.29351C15.8666 9.08497 15.7156 9.87179 15.6121 10.6586C15.3494 12.3889 15.0457 14.1133 14.7495 15.8379C14.6475 16.4124 13.9221 16.7097 13.458 16.3421C12.3426 15.5947 11.2187 14.8545 10.1175 14.0897C9.75684 13.726 10.0913 13.2038 10.4135 12.9442C11.3321 12.046 12.3064 11.2829 13.177 10.3382C13.4119 9.7756 12.718 10.2498 12.4891 10.3951C11.2314 11.2549 10.0045 12.1672 8.67858 12.9229C8.00128 13.2928 7.21188 12.9767 6.53489 12.7703C5.92789 12.521 5.0384 12.2698 5.56178 11.8896L5.56185 11.8895Z" fill="white" />
                    <defs>
                        <linearGradient id="paint0_linear_12_117" x1="8.93677" y1="-6.11223" x2="-3.56288" y2="14.0973" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#34B0DF" />
                            <stop offset="1" stop-color="#1E88D3" />
                        </linearGradient>
                    </defs>
                </svg>
                <h className='text1'>@twrussia</h>
                <h className='text2'>наш телеграмм канал</h>
            </div>


        </div>
    );
};

export default ChannelLink;