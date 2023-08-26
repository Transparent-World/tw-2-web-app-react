import React, {useEffect,useState} from 'react';
import {useLocation} from 'react-router-dom';
import './OrderPage.css'
import { fetchOrder } from '../../http/orderApi';

const OrderPage = () => {
    const location = useLocation();
    const [order, setOrder] = useState()


    useEffect(() => {
        fetchOrder(location.state.id).then(resp => console.log(resp.data))  
        console.log(location.state.id)
        console.log(order)
       }, [])

    return (
        <div>
            test
        </div>
    );
};

export default OrderPage;