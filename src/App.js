import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
   <Router>
    <div>
      <Header/>
      <Switch>
        <Route path="/" exact component ={Home} />
        <Route path="/about" component ={About}/>
      </Switch>
    </div>
   </Router>
  );
}

export default App;
