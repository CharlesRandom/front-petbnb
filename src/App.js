import React, { Component } from 'react';
import Routes from './Routes';
import { Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to='/login'>Login |</Link>
          <Link to='/signup'>Signup |</Link>
          <Link to='/profile'>Profile</Link>
        </nav>
        <Routes/>
      </div>
    );
  }
}

export default App;
