import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Page404 from './pages/404/404';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import Portfolio from './pages/portfolio/Portfolio';
import Header from './components/general/header/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
