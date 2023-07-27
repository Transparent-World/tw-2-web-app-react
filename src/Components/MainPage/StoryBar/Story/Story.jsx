import React from 'react';
import './Story.css'

const Story = () => {

    const handleClick = () => {
        window.open('https://t.me/twrussia');
    };

    return (
        <div className={'Story'} onClick={handleClick}>
            
        </div>
    );
};

export default Story;