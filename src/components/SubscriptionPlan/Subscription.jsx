import React, {useContext} from 'react';
import { Context } from '../../main';
import { observer} from 'mobx-react-lite';
import './Subscription.scss'

const Subscription = ({price, period ,sale}) => {
    const { store } = useContext(Context)
    return (
        <button className='subscription_card'>
            <a className='month_text' >{period} месяц</a>
            <div className='line'></div>
            <a className='price_text'>{price} $</a>
            <a className='sale_text'>{sale} %</a>

        </button>
    );
};

export default observer(Subscription);