import React, { useState, useRef, useEffect, useCallback } from 'react';
import './SearchBlock.css'
import { useSwipeable, SwipeEventData } from 'react-swipeable';
import { useNavigate } from "react-router-dom";

const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
const token = "14ff958eb194fcb4809c2f0661a7c8a2549d4cd1";

const SearchBlock = () => {
    const navigate = useNavigate();
    const tg = window.Telegram.WebApp;
    const [flag, setFlag] = useState(false)
    const [status, setStatus] = useState(0)
    const inputRef = useRef(null);
    const [address, setAddress] = useState('');
    const [articles, setArticles] = useState([]);
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        tg.BackButton.show()
        tg.onEvent('backButtonClicked', onBack)
    }, [])

    const onBack = useCallback( () =>{
        if (status == 1){
            let resizable = document.getElementById('SearchBlock');
            let vars = document.getElementById('location_variants');


            resizable.style.height = '40vh';
            resizable.style.marginTop = '60vh';
            vars.style.display = 'flex';
            setStatus(0)
        } else if (status == 0){
            navigate("/mainpage");
            tg.BackButton.hide()
        } else if (status == 2){
            setFlag(false)
            setStatus(1)
            let resizable = document.getElementById('SearchBlock');
            let search = document.getElementById('search');
            resizable.style.height = '80vh';
            resizable.style.marginTop = '20vh';

            search.style.display = 'flex';

        }
    },[])

    const onChangeCity = (e, index) => {
        var address_text = '';
        //if Проверка на вызов функции из HTMl или из функции onClickAutoCompleteItem
        if (index === 1) {
            address_text = e.target.textContent;
        }
        else {
            address_text = e.target.value
        }
        //end if
        setAddress(address_text);

        const promise = suggest(address_text);
        promise
            .then(function (response) {
                return response.json();
            })
            .then(function (suggestions) {
                setArticles(suggestions['suggestions']);
                console.log(suggestions['suggestions']);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function suggest(query) {
        var params = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token " + token
            },
            body: JSON.stringify({ query: query })
        }

        return fetch(url, params);
    }

    const changeHeight = () => {
        let resizable = document.getElementById('SearchBlock');
        let vars = document.getElementById('location_variants');
        if (flag == false) {
            resizable.style.height = '80vh';
            resizable.style.marginTop = '20vh';

            vars.style.display = 'none';
            //resizable.style.transition = 'all 0s linear;'
        }
        setFlag(!flag)
        setStatus(1)
        setIsOpen(true);


        console.log('resized')
    }

    const SwipeHeight = () => {
        let resizable = document.getElementById('SearchBlock');
        let vars = document.getElementById('location_variants');
        if (!flag) {
            resizable.style.height = '80vh';
            resizable.style.marginTop = '20vh';
            vars.style.display = 'none';
        }
        else {
            resizable.style.height = '40vh';
            resizable.style.marginTop = '60vh';
            vars.style.display = 'block';
        }
        setFlag(!flag)

        console.log('resized')
    }


    const handlers = useSwipeable({
        onSwiped: SwipeHeight,
        onTouchStartOrOnMouseDown: (({ event }) => event.preventDefault()),
        touchEventOptions: { passive: false },
        preventScrollOnSwipe: true,
        trackMouse: true
    });

    const onClickAutoCompleteItem = (e,article) =>{
        let resizable = document.getElementById('SearchBlock');
        let input = document.getElementById('search');
        onChangeCity(e, 1);
        setIsOpen(!isOpen);
        setStatus(2)
        setFlag(true)
        resizable.style.height = '40vh';
        resizable.style.marginTop = '60vh';
        input.style.display = 'none';
    }

    return (
        <div active className={'SearchBlock'} id='SearchBlock'>
            <div className='search' id = 'search'>
                <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <path d="M15.775 2C23.3875 2 29.55 8.1625 29.55 15.775C29.55 23.3875 23.3875 29.55 15.775 29.55C8.1625 29.55 2 23.3875 2 15.775C2 10.41 5.0595 5.77 9.54 3.4935" stroke="#292D32" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M31 30.9999L28.1 28.0999" stroke="#292D32" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <input
                    onChange={(e) => onChangeCity(e, 0)}
                    value={address}
                    onClick={changeHeight}
                    autofocus
                    className='search_input'
                    id = 'search_input'
                    placeholder="Введите адрес" />
            </div>
            <div {...handlers} className='location_variants' id='location_variants'>
                <div className='geolocation' id='geolocation'>
                    Запросить гелокацию
                </div>
                <div className='on_map_select'>
                    Выбрать на карте
                </div>
            </div>
            <div className='suggestions'>
                <ul className={"autoComplete"}>
                    {isOpen
                        ? Object.keys(articles).slice(0, 6).map(article => {
                            return (
                                <li className={"autoCompleteItem"}
                                    onClick={(e) => onClickAutoCompleteItem(e, articles[article]['data'])}>
                                    <a className='value'>
                                        {
                                        articles[article]['value'].replace(articles[article]['data']['region_with_type']+',', '')
                                        }
                                    </a>
                                    <a className='city'>
                                        {articles[article]['data']['city']}, {articles[article]['data']['region_with_type']}
                                    </a>
                                </li>
                            );
                        })
                        : null
                    }
                </ul>
            </div>
        </div>
    );
};

export default SearchBlock;