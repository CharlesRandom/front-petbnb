import React, { Component } from 'react';
import Routes from './Routes';
import { Link } from 'react-router-dom'
import './App.css';
import Navbar from './components/home/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        {/* <nav>
          <Link to='/login'>Login |</Link>
          <Link to='/signup'>Signup |</Link>
          <Link to='/profile'>Profile |</Link>
          <Link to='/host'>Become a Host |</Link>
          <Link to='/hosts'>Hosts</Link>
        </nav> */}
        <Routes/>
      </div>
    );
  }
}

export default App;
