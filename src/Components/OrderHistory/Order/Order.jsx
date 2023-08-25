import React from 'react';
import './Order.css'
import { useNavigate } from 'react-router-dom';

const Order = ({id, address}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/orderPage',{state:{id: id}});
    }

    return (
        <div className={'Order'} onClick={handleClick}>
            <a className='order_id'>Заказ № {id}</a>
            <a className='order_address'>По адресу {address}</a>
        </div>
    );
};

export default Order;