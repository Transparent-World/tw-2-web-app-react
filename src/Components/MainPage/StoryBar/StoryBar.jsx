import React from 'react';
import './StoryBar.css'
import Story from './Story/Story';

const StoryBar = () => {

    const handleClick = () => {
        window.open('https://t.me/twrussia');
    };
    return (
        <div className={'StoryBar'}>
            <Story onClick={handleClick}/>
            <Story onClick={handleClick}/>
            <Story onClick={handleClick}/>
            <Story onClick={handleClick}/>
        </div>
    );
};

export default StoryBar;