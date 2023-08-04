import React, {useState, useRef,useEffect} from 'react';
import './SearchBlock.css'
import { useSwipeable, SwipeEventData} from 'react-swipeable';

const SearchBlock = () => {
    const [flag, setFlag] = useState(false)

    const changeHeight = () => {
        let resizable = document.getElementById('SearchBlock');
        if (!flag){
            resizable.style.height = '80vh';
            resizable.style.marginTop = '20vh';
        } 
        else{
            resizable.style.height = '40vh';
            resizable.style.marginTop = '60vh';
        }
        setFlag(!flag)
        
        console.log('resized')
    }

    const handleSwiped = (eventData) => {
        if (eventData.dir === pattern[pIdx]) {
          // user successfully got to the end of the pattern!
          if (pIdx + 1 === pattern.length) {
            setPIdx(pattern.length);
            slide(NEXT);
            setTimeout(() => {
              setPIdx(0);
            }, 50);
          } else {
            // user is cont. with the pattern
            setPIdx((i) => (i += 1));
          }
        } else {
          // user got the next pattern step wrong, reset pattern
          setPIdx(0);
        }
      };

    const handlers = useSwipeable({
        onSwiped: changeHeight,
        onTouchStartOrOnMouseDown: (({ event }) => event.preventDefault()),
        touchEventOptions: { passive: false },
        preventScrollOnSwipe: true,
        trackMouse: true
      });



    return (
        <div {...handlers} className={'SearchBlock'} id = 'SearchBlock'>
            <div  className='search'>
                <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <path d="M15.775 2C23.3875 2 29.55 8.1625 29.55 15.775C29.55 23.3875 23.3875 29.55 15.775 29.55C8.1625 29.55 2 23.3875 2 15.775C2 10.41 5.0595 5.77 9.54 3.4935" stroke="#292D32" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M31 30.9999L28.1 28.0999" stroke="#292D32" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <input onClick={changeHeight}className='search_input' placeholder="Введите адрес" />
            </div>
            <div className='location_variants'>
                <div className='geolocation' id='geolocation'>
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