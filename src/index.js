import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './global.css';
import Home from './pages/Home';
import Detalis from './pages/Detalis';




ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/detalis/:id" element={<Detalis/>}/>

  </Routes>
  
  </BrowserRouter>,
  document.getElementById('root')
);

