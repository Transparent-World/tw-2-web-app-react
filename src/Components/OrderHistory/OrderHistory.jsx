import React from 'react';
import './OrderHistory.css'
import Order from './Order/Order';

const OrderHistory = () => {
    return (
        <div className={'Orderhistory'}>
            <a className='OrderHistory_text'>История заказов</a>
            <div className='orders'>
                <Order/>
                <Order/>
                <Order/>
                <Order/>
                <Order/>
                <Order/>
                <Order/>
                <Order/>
                <Order/>
                <Order/>
                <Order/>
                <Order/>
            </div>
        </div>
    );
};

export default OrderHistory;