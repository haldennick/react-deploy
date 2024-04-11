import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Weather from './pages/Weather';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/react-deploy">
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </div>
    <Footer/>
   </BrowserRouter>
  );
}

export default App;
