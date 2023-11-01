import React, {useContext} from 'react';
import { observer } from 'mobx-react-lite';
import Order from '../../Components/OrderHistory/Order/Order';
import { Context } from '../..';
import ChannelLink from '../../Components/ChannelLink/ChannelLink';

const HistoryPage = () => {
    const { order } = useContext(Context)
    return (
        <div>
            <ChannelLink/>
            <a className='OrderHistory_text' >История заказов</a>
            <div className='orders'>
            {order.orders.toReversed().map(order =>
                <Order id={order.id} order = {order}/>
            )}
            </div>
        </div>
    );
};

export default observer(HistoryPage);