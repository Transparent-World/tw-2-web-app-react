import React from 'react';
import './MainPage.css'
import './ChannelLink/ChannelLink'
import ChannelLink from './ChannelLink/ChannelLink';
import StoryBar from './StoryBar/StoryBar';
import ButtonsBlock from './ButtonsBlock/ButtonsBlock';
import OrderHistory from './OrderHistory/OrderHistory';

const MainPage = () => {
    return (
        <div className={'MainPage'}>
            <ChannelLink/>
            <StoryBar/>
            <ButtonsBlock/>
            <OrderHistory/>
        </div>
    );
};

export default MainPage;