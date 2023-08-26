import React, {useEffect,useState} from 'react';
import {useLocation} from 'react-router-dom';
import './OrderPage.css'
import { fetchOrder } from '../../http/orderApi';

const OrderPage = () => {
    const location = useLocation();
    const [order, setOrder] = useState({
        id: 1,
        userid: '736466798',
        lon: '23.45',
        lat: '23.45',
        address: 'Мытищи 1',
        radius: '200',
        status: 0,
    })


    useEffect(() => {
        fetchOrder(location.state.id).then(resp => setOrder(resp))//Нужно передавать id из    
        console.log(location.state.id)
       }, [])

    return (
        <div>
        {order.id}
        </div>
    );
};

export default OrderPage;