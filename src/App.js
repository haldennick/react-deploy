import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
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
   </Router>
  );
}

export default App;
