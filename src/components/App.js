import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import RenderHooks from '../hooks/renderHooks';
import Navbar from './navbar';
import Home from './homepage';

function App() {

  return (
    <BrowserRouter>
    < Navbar />
      <Routes>
        <Route path='hooks' element={< RenderHooks/>} />
        <Route path='/' element={< Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
