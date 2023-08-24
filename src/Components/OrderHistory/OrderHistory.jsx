import React, {useContext, useEffect} from 'react';
import './OrderHistory.css'
import Order from './Order/Order';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import { fetchOrders } from '../../http/orderApi';


const OrderHistory = observer(() => {
    const {order} = useContext(Context)
    const tg = window.Telegram.WebApp;

    useEffect(() => {
        console.log(tg.initDataUnsafe.user.id)
        fetchOrders(tg.initDataUnsafe.user.id).then(resp => order.setOrders(resp.data))
       }, [])

    return (
        <div className={'Orderhistory'}>
            <a className='OrderHistory_text'>История заказов</a>
            <div className='orders'>
            {order.orders.reverse().map(order =>
                <Order id={order.id} address={order.address}/>
            )}
            </div>
        </div>
    );
});

export default OrderHistory;