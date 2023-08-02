import React from 'react';
import './SearchBlock.css'

const SearchBlock = () => {
    return (
        <div className={'SearchBlock'}>
            <div className='search'>
                <input className='search_input' placeholder="Введите адрес">
                   
                </input>
            </div>
            <div className='location_variants'>
                <div className='geolocation'>
                    Запросить гелокацию
                </div>
                <div className='on_map_select'>
                    Выбрать на карте
                </div>
            </div>
        </div>
    );
};

export default SearchBlock;