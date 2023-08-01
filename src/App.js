import * as React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Components/AppRouter';



function App() {
  return (
    <BrowserRouter>
          <AppRouter/>
    </BrowserRouter>
  );
}

export default App; 
