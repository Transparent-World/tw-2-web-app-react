import React from 'react';
import './Order.css'
import { useNavigate } from 'react-router-dom';

const Order = ({ id, order }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/order', { state: { id: id } });
    }

    return (
        <div className={'Order'} onClick={handleClick}>
            <a className='order_id'>Заказ № {id}</a>
            {
                order.address ?
                    <div className='order_address_preview'>По адресу {order.address}</div>
                    :
                    <div className='order_text_filling'>
                        <div className='order_address_preview'>Долгота {order.lon}</div>
                        <div className='order_address_preview'>Широта {order.lat}</div>
                    </div>
            }

        </div>
    );
};

export default Order;