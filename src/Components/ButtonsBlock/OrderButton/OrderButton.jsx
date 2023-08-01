import React from 'react';
import './OrderButton.css'

const OrderButton = () => {
    return (
        <div className={'OrderButton'}>
            <a className='order_button_text'>Создать запрос на съемку</a>
            <div className='order_icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                <path d="M19.5 0C8.7555 0 0 8.7555 0 19.5C0 30.2445 8.7555 39 19.5 39C30.2445 39 39 30.2445 39 19.5C39 8.7555 30.2445 0 19.5 0ZM24.9405 20.5335L18.057 27.417C17.7645 27.7095 17.394 27.846 17.0235 27.846C16.653 27.846 16.2825 27.7095 15.99 27.417C15.4245 26.8515 15.4245 25.9155 15.99 25.35L21.84 19.5L15.99 13.65C15.4245 13.0845 15.4245 12.1485 15.99 11.583C16.5555 11.0175 17.4915 11.0175 18.057 11.583L24.9405 18.4665C25.5255 19.032 25.5255 19.968 24.9405 20.5335Z" fill="#292D32"/>
            </svg>
            </div>
        </div>
    );
};

export default OrderButton;