import React, { useEffect, useContext} from 'react';
import './StoryBar.css'
import Story from './Story/Story';
import { fetchStories } from '../../http/storyAPI';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

const StoryBar = observer(  () => {
    const {stories} = useContext(Context)
    /*
    useEffect( () => {
        console.log(fetchStories())
    })
    */
    
    return (
        <div className={'StoryBar'}>
            {stories.stories.map(story =>
                <Story link={story.link} img={story.img}/>
            )}
          
        </div>
    );
});

export default StoryBar;