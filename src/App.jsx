import * as React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { observer} from 'mobx-react-lite';

function App() {

  return (
    <BrowserRouter>
          <AppRouter/>
    </BrowserRouter>
  )
}

export default observer(App)
