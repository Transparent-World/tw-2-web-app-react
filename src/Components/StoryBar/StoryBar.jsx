import React, { useEffect } from 'react';
import './StoryBar.css'
import Story from './Story/Story';
import { fetchStories } from '../../http/storyAPI';

const StoryBar = () => {
    useEffect( () => {
        console.log(fetchStories())
    })
    
    return (
        <div className={'StoryBar'}>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>

            
        </div>
    );
};

export default StoryBar;