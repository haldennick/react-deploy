import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import MainContent from './components/MainContent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
    <div>
      <MainContent/>
    </div>
    <Footer/>
   </Router>
  );
}

export default App;
