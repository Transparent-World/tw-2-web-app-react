import React from 'react';
import './Order.css'

const Order = ({id, address}) => {
    return (
        <div className={'Order'} >
            <a className='order_id'>Заказ № {id}</a>
            <a className='order_address'>По адресу {address}</a>
        </div>
    );
};

export default Order;