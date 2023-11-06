import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Order from '../../Components/OrderHistory/Order/Order';
import Order2 from '../../Components/Order2/Order2';
import { Context } from '../..';
import ChannelLink from '../../Components/ChannelLink/ChannelLink';
import './HistoryPage.css'


const HistoryPage = () => {
    const tg = window.Telegram.WebApp;

    const { order } = useContext(Context)

    const backButtonClicked = () => {
        navigate("/mainpage");
        tg.BackButton.hide();
        navigate(0);
    }

    useEffect(() => {
        tg.onEvent('backButtonClicked', backButtonClicked)
        return () => {
            tg.offEvent('backButtonClicked', backButtonClicked)
        }
    }, [])
    return (
        <div className='history_page'>
            <div className='header_history_page'>
                <ChannelLink />
                <div className='OrderHistory2_text' >История заказов</div>
            </div>
            <div className='orders2_block'>
                {order.orders.toReversed().map(order =>
                    <Order2 id={order.id} order={order}/>
                )}
            </div>
        </div>
    );
};

export default observer(HistoryPage);