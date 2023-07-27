import React from 'react';
import './ChannelLink.css'

const ChannelLink = () => {

    const handleClick = () => {
        // Замените '/other-page' на путь к странице, на которую хотите перейти.
        window.open('https://t.me/twrussia');
      };

    return (
        <div className={'ChannelLink'} onClick={handleClick}>

                <div className='back'>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
<rect x="1" y="1" width="25" height="25" rx="12.5" fill="white" stroke="#787880" stroke-opacity="0.2"/>
<path d="M13.5 24.3871C19.5128 24.3871 24.3871 19.5128 24.3871 13.5C24.3871 7.48723 19.5128 2.61292 13.5 2.61292C7.48723 2.61292 2.61292 7.48723 2.61292 13.5C2.61292 19.5128 7.48723 24.3871 13.5 24.3871Z" fill="url(#paint0_linear_12_117)"/>
<path d="M6.43068 13.9637C7.70946 13.2649 9.13693 12.6816 10.4707 12.0954C12.7653 11.1352 15.069 10.1916 17.3959 9.31317C17.8486 9.1635 18.6621 9.01715 18.7419 9.68277C18.6982 10.625 18.5185 11.5617 18.3953 12.4984C18.0825 14.5583 17.7209 16.6111 17.3684 18.6642C17.2469 19.3481 16.3834 19.7021 15.8309 19.2644C14.503 18.3746 13.165 17.4934 11.8541 16.583C11.4247 16.1501 11.8229 15.5284 12.2064 15.2193C13.3001 14.15 14.4599 13.2415 15.4964 12.117C15.7759 11.4472 14.9498 12.0117 14.6774 12.1846C13.1802 13.2083 11.7196 14.2944 10.1411 15.194C9.33477 15.6343 8.395 15.258 7.58906 15.0123C6.86645 14.7155 5.80753 14.4164 6.4306 13.9638L6.43068 13.9637Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_12_117" x1="10.4485" y1="-7.46695" x2="-4.43201" y2="16.592" gradientUnits="userSpaceOnUse">
<stop stop-color="#34B0DF"/>
<stop offset="1" stop-color="#1E88D3"/>
</linearGradient>
</defs>
</svg>
                </div>
                
                <div className='text'>
                    <div className='text1' href="https://www.example.com">@twrussia</div>
                    <div className='text2'>наш Telegram-канал</div>
                </div>

                
        </div>
    );
};

export default ChannelLink;