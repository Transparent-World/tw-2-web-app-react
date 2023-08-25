import React, {useEffect,useState} from 'react';
import './OrderPage.css'
import { fetchOrder } from '../../http/orderApi';

const OrderPage = () => {
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
        fetchOrder().then(resp => setOrder(resp))
        console.log(order)
       }, [])

    return (
        <div>
            <a>{order}</a>
 
        </div>
    );
};

export default OrderPage;