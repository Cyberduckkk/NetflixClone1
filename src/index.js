import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import English from './English';
import Hindi from './Hindi';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
        <Navbar/>
          <Routes>
          <Route path='/' element={<English/>}/>
          <Route path='/english' element={<English/>}/>
          <Route path='/hindi' element={<Hindi/>}/>
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
