import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/pethouse.png'

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <Link to='/'><img src={logo} alt="logo pic"/></Link>
        <div>
          <Link to='/hosts'><p>Find a Host</p></Link>
          <Link to='/host'><p>Become a Host</p></Link>
          <Link to='/login'><p>Login</p></Link>
        </div>
      </div>
    )
  }
}
