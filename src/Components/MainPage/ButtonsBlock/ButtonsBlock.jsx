import React from 'react';
import './ButtonsBlock.css';
import OrderButton from './OrderButton/OrderButton';

const ButtonsBlock = () => {
    return (
        <div className={'ButtonsBlock'}> 
            <OrderButton/>
        </div>
    );
};

export default ButtonsBlock;