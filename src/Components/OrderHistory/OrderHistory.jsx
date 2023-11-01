import React, {useContext, useEffect} from 'react';
import './OrderHistory.css'
import Order from './Order/Order';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import { fetchOrders } from '../../http/orderApi';
import { useNavigate } from 'react-router-dom';


const OrderHistory = observer(() => {
    const {order} = useContext(Context)
    const tg = window.Telegram.WebApp;
    const navigate = useNavigate()

    useEffect(() => {
        fetchOrders(tg.initDataUnsafe.user.id).then(resp => order.setOrders(resp.data))
       }, [])

    const onHistoryButtonCLick = () => {
        navigate("/history")
    }

    return (
        <div className={'Orderhistory'}>
            <a className='OrderHistory_text' onClick={onHistoryButtonCLick}>История заказов</a>
            <div className='orders'>
            {order.orders.toReversed().map(order =>
                <Order id={order.id} order = {order}/>
            )}
            </div>
        </div>
    );
});

export default OrderHistory;