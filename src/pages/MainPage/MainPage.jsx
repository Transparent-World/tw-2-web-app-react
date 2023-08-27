import React from 'react';
import './MainPage.css'
import { useLocation } from 'react-router-dom';

import ChannelLink from '../../Components/ChannelLink/ChannelLink';
import StoryBar from '../../Components/StoryBar/StoryBar'
import ButtonsBlock from '../../Components/ButtonsBlock/ButtonsBlock';
import OrderHistory from '../../Components/OrderHistory/OrderHistory';

const MainPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state.update){
            window.location.reload(false);
        }
    }, [])


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
