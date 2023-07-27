import React from 'react';
import './MainPage.css'
import './ChannelLink/ChannelLink'
import ChannelLink from './ChannelLink/ChannelLink';
import StoryBar from './StoryBar/StoryBar';

const MainPage = () => {
    return (
        <div className={'MainPage'}>
            <ChannelLink/>
            <StoryBar/>
        </div>
    );
};

export default MainPage;