import React,{ createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './storeData/UserStore';
import StoryStore from './storeData/StoryStore';
import OrderStore from './storeData/OrderStore';

export const Context = createContext(null)
          
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      user: new UserStore(),
      stories: new StoryStore(),
      order: new OrderStore()
    }}>
    <App />
    </Context.Provider>
  </React.StrictMode>
);

