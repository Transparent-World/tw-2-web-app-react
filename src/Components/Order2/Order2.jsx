import React, {useEffect, useState} from 'react';
import './Order2.css'
import { getImageFromMapboxStaticAPI } from '../../http/orderApi';
import { useNavigate } from 'react-router-dom';

const Order2 = ({id, order}) => {
    const navigate = useNavigate();
    const [imgSrc, setImgSrc] = useState('');

    useEffect(() => {
        const getImage = async () => {
            const elem = document.getElementsByClassName('order2_block_img')
            const src = await getImageFromMapboxStaticAPI(order.lon, order.lat, 150, 70);
            setImgSrc(src);
          };
          getImage();
    }, [])

    const handleClick = () => {
        navigate('/order', { state: { id: id } });
    }

    return (
        <div className='order2_block'>
            <img className='order2_block_img' src={imgSrc}/>
            { order.address != '' ? 
            <div className='order2_block_text'>{order.address}</div>
            :
            <div className='order2_block_text'>{order.lat}<br/>{order.lon} </div>
            }
            
            <button className='order2_block_button' onClick={handleClick}>Открыть</button>
        </div>
    );
};

export default Order2;