import React from 'react';
import './Story.css'

const Story = () => {

    const handleClick = () => {
        window.open('https://t.me/twrussia');
    };

    return (
        <div className={'Story'} onClick={handleClick}>
            <h6>St</h6>
        </div>
    );
};

export default Story;