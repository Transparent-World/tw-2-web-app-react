import React from 'react';
import './Story.css'



const Story = ({img, link}) => {

    const styles = {
        paperContainer: {
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover'
        }
    };

    const handleClick = () => {
        window.open(link);
    };

    return (
        <div className={'Story'} style={styles.paperContainer} onClick={handleClick} >
            <h6>St</h6>
        </div>
    );
};

export default Story;