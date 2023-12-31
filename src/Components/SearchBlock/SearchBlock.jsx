import React, { useState, useRef, useEffect, useCallback, useContext } from 'react';
import './SearchBlock.css'
import { useSwipeable, SwipeEventData } from 'react-swipeable';
import { useNavigate } from "react-router-dom";
import { usePosition } from './usePosition';
import { createOrder } from '../../http/orderApi';
import Map from '../Map/Map';
import { postMessagw } from '../../http/orderApi';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';

const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
const token = "14ff958eb194fcb4809c2f0661a7c8a2549d4cd1";

const radius_table = {
    '1000': "14.2"
}

const SearchBlock = ({ location, onRadiusSelect, onSelect }) => {
    const { store } = useContext(Context)
    const navigate = useNavigate();
    const tg = window.Telegram.WebApp;
    const [flag, setFlag] = useState(false)
    const [status, setStatus] = useState('main')
    let stat = 0
    const [center, setCenter] = useState({
        lat: 23.45,
        lng: 23.45
    })
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [value, setValue] = useState('');
    const [radius, setRadius] = useState("")
    const [articles, setArticles] = useState([]);
    const [isOpen, setIsOpen] = useState(true);

    const onClickMapContinueButton = () => {

        let before = document.getElementById('result_map');
        let after = document.getElementById('result_end_map');
        let button = document.getElementById('geolocation');
        if (location.loaded) {
            setCenter({
                lat: store.lat,
                lng: store.lng
            })
            before.style.display = 'none';
            after.style.display = 'flex'

        }
        else {
            button.style.background = 'green'
        }
    }


    const sendOrder = () => {
        try {
            if (radius != null && center.lat != 23.45 && center.lng != 23.45) {
                const formData = new FormData();
                // Добавляем параметры в объект FormData
                formData.append("userid", tg.initDataUnsafe.user.id);
                formData.append("lon", center.lng);
                formData.append("lat", center.lat);
                formData.append("address", address);
                formData.append("radius", radius);

                var params = {
                    method: "POST",
                    body: formData,
                }
                //createOrder(tg.initDataUnsafe.user.id, center.lng, center.lat,  address, radius)
                fetch("https://vercel-tw-test.vercel.app/api/order/create", params)

                //сообщение в канал с заказами

            }
            navigate("/mainpage");
            navigate(0);
            tg.MainButton.hide();
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        tg.BackButton.show()
        if (radius != "") {
            tg.MainButton.show()
            tg.MainButton.setParams({ text: 'Отправить запрос', is_visible: true })
        } else {
            tg.MainButton.hide()
        }


        tg.onEvent('mainButtonClicked', sendOrder)
        tg.onEvent('backButtonClicked', onBack)
        // return () => {
        //     tg.offEvent('mainButtonClicked', sendOrder)
        // }
    }, [radius])





    const onBack = useCallback(() => {
        console.log(stat)
        tg.MainButton.hide()
        if (stat == 1) {
            let resizable = document.getElementById('SearchBlock');
            let vars = document.getElementById('location_variants');


            resizable.style.height = '40vh';
            resizable.style.marginTop = '60vh';
            vars.style.display = 'flex';
            setStatus('main')
            stat = 0
        } else if (stat == 0) {
            setStatus('zero')
            stat = -1
            navigate("/mainpage");
            tg.BackButton.hide()
        } else if (stat == 2) {
            setFlag(false)
            setStatus('search')
            stat = 1
            let resizable = document.getElementById('SearchBlock');
            let search = document.getElementById('search');
            resizable.style.height = '80vh';
            resizable.style.marginTop = '20vh';

            search.style.display = 'flex';

        }
    }, [stat, status, flag])

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
        setStatus('search')
        stat = 1
        setIsOpen(true);

        console.log(status)
        console.log(stat)
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

    const showRadius = (radius) => {
        try {
            if (radius != 0) {
                onRadiusSelect()
                console.log(radius_table[radius])
                let circle = document.getElementById('radius_circle');
                circle.style.display = 'block'
            } else {
                let circle = document.getElementById('radius_circle');
                circle.style.display = 'none'
            }

        } catch (e) {
            console.log(e)
        }
    }


    /*const handlers = useSwipeable({
        onSwiped: SwipeHeight,
        onTouchStartOrOnMouseDown: (({ event }) => event.preventDefault()),
        touchEventOptions: { passive: false },
        preventScrollOnSwipe: true,
        trackMouse: true
    });*/

    const onClickAutoCompleteItem = (e, article) => {
        //let circle = document.getElementById('circle');

        let resizable = document.getElementById('SearchBlock');
        let input = document.getElementById('search');
        let result = document.getElementById('result');
        onSelect([parseFloat(article['data']['geo_lon']), parseFloat(article['data']['geo_lat'])])
        setCity(article['data']['city'] + ", " + article['data']['region_with_type'])
        setAddress(article['value']);
        setValue(article['value'].replace(article['data']['region_with_type'] + ',', ''))
        setCenter({
            lat: parseFloat(article['data']['geo_lat']),
            lng: parseFloat(article['data']['geo_lon'])
        })
        onChangeCity(e, 1);
        setIsOpen(!isOpen);
        setStatus(2)
        stat = 2
        setFlag(true)
        resizable.style.height = '40vh';
        resizable.style.marginTop = '60vh';
        input.style.display = 'none';
        //circle.style.display = 'block'
        result.style.display = 'flex'
        console.log(status)
        console.log(stat)

    }

    const onClickGeoButton = () => {
        let resizable = document.getElementById('SearchBlock');
        let location_variants = document.getElementById('location_variants');
        let input = document.getElementById('search');
        let result = document.getElementById('result_geo');
        let button = document.getElementById('geolocation');
        if (location.loaded) {
            onSelect([location.coordinates.lng, location.coordinates.lat])
            setCenter({
                lat: location.coordinates.lat,
                lng: location.coordinates.lng
            })
            setFlag(true)
            stat = 2 //влияет на location_variants
            resizable.style.height = '40vh';
            location_variants.style.display = 'none';
            resizable.style.marginTop = '60vh';
            input.style.display = 'none';
            result.style.display = 'flex'

        }
        else {
            button.style.background = 'green'
        }
    }

    const onClickMapButton = () => {
        store.setMode(2)
        let resizable = document.getElementById('SearchBlock');
        let location_variants = document.getElementById('location_variants');
        let input = document.getElementById('search');
        let result = document.getElementById('result_map');
        let button = document.getElementById('geolocation');
        if (location.loaded) {
            setCenter({
                lat: location.coordinates.lat,
                lng: location.coordinates.lng
            })
            setFlag(true)
            stat = 2 //влияет на location_variants
            resizable.style.height = '40vh';
            location_variants.style.display = 'none';
            resizable.style.marginTop = '60vh';
            input.style.display = 'none';
            result.style.display = 'flex'

        }
        else {
            button.style.background = 'green'
        }
    }


    return (
        <div active className={'SearchBlock'} id='SearchBlock'>
            <div className='search' id='search'>
                <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <path d="M15.775 2C23.3875 2 29.55 8.1625 29.55 15.775C29.55 23.3875 23.3875 29.55 15.775 29.55C8.1625 29.55 2 23.3875 2 15.775C2 10.41 5.0595 5.77 9.54 3.4935" stroke="#292D32" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M31 30.9999L28.1 28.0999" stroke="#292D32" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <input
                    onChange={(e) => onChangeCity(e, 0)}
                    value={address}
                    onClick={changeHeight}
                    className='search_input'
                    id='search_input'
                    placeholder="Введите адрес" />
            </div>
            <div /*{...handlers}*/ className='location_variants' id='location_variants'>
                <div className='geolocation' id='geolocation' onClick={onClickGeoButton}>
                    Запросить гелокацию
                </div>
                <div className='on_map_select' onClick={onClickMapButton}>
                    Выбрать на карте
                </div>
            </div>
            <div className='suggestions'>
                <ul className={"autoComplete"}>
                    {isOpen
                        ? Object.keys(articles).slice(0, 6).map(article => {
                            if (articles[article]['data']['geo_lat'])
                                //test
                                return (
                                    <li className={"autoCompleteItem"}
                                        onClick={(e) => onClickAutoCompleteItem(e, articles[article])}>
                                        <a className='value'>
                                            {
                                                articles[article]['value'].replace(articles[article]['data']['region_with_type'] + ',', '')
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
            <div className='result' id='result'>
                <div className='locate'>
                    <a className='locate_text'>Место на карте</a>
                    <div className='autoCompleteItem place'>
                        <a className='value'>
                            {value}
                        </a>
                        <a className='city'>
                            {city}
                        </a>
                    </div>
                </div>
                <div className='radius'>
                    <a className='locate_text'>Радиус области снимка</a>
                    <select value={radius}
                        onChange={e => setRadius(e.target.value) || showRadius(e.target.value)}
                        className='choice'>
                        <option value="0" selected>Укажите радиус снимка</option>
                        <option value="1000">1000 метров</option>
                    </select>
                </div>
            </div>
            <div className='result_geo' id='result_geo'>
                <div className='locate'>
                    <a className='locate_text'>Место на карте</a>
                    <div className='autoCompleteItem place'>
                        <a className='value'>
                            {center.lat} {center.lng}
                        </a>
                    </div>
                </div>
                <div className='radius'>
                    <a className='locate_text'>Радиус области снимка</a>
                    <select value={radius}
                        onChange={e => setRadius(e.target.value) || showRadius(e.target.value)}
                        className='choice'>
                        <option value="0" selected>Укажите радиус снимка</option>
                        <option value="1000">1000 метров</option>
                    </select>
                </div>
            </div>
            <div className='result_map' id='result_map'>
                <div className='locate'>
                    <a className='locate_text'>Место на карте</a>
                    <div className='autoCompleteItem place'>
                        <a className='value'>
                            {store.lat} {store.lng}
                        </a>
                    </div>
                </div>
                <div className='radius'>
                    <a className='locate_text'>Радиус области снимка</a>
                    <select value={radius}
                        onChange={e => setRadius(e.target.value) || showRadius(e.target.value)}
                        className='choice'>
                        <option value="0" selected>Укажите радиус снимка</option>
                        <option value="1000">1000 метров</option>
                    </select>
                </div>
            </div>
            <div className='result_end_map' id='result_map'>
                <div className='locate'>
                    <a className='locate_text'>Место на карте</a>
                    <div className='autoCompleteItem place'>
                        <a className='value'>
                            {center.lat} {center.lng}
                        </a>
                    </div>
                </div>
                <div className='radius'>
                    <a className='locate_text'>Радиус области снимка</a>
                    <select value={radius}
                        onChange={e => setRadius(e.target.value) || showRadius(e.target.value)}
                        className='choice'>
                        <option value="0" selected>Укажите радиус снимка</option>
                        <option value="1000">1000 метров</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default observer(SearchBlock);