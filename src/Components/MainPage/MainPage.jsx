import React from 'react';
import './MainPage.css'
import './ChannelLink/ChannelLink'
import ChannelLink from './ChannelLink/ChannelLink';

const MainPage = () => {
    return (
        <div className={'MainPage'}>
            <ChannelLink/>
        </div>
    );
};

export default MainPage;