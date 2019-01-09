import React, { Component } from 'react'
import logo from '../../images/pethouse.png'

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <img src={logo} alt="logo pic"/>
        <div>
          <p>Home</p>
          <p>Find a Host</p>
          <p>Become a Host</p>
          <p>Login</p>
        </div>
      </div>
    )
  }
}
