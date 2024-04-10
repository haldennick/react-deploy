import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Weather from './pages/Weather';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/weather" element={<Weather/>}/>
      </Routes>
    </div>
    <Footer/>
   </Router>
  );
}

export default App;
