import React, { Component } from 'react'
import logo from '../../images/pethouse.png'

export default class ProfileNavbar extends Component {
  render() {
    return (
      <div className="nav" style={{color:"#595959", borderBottom:"1px solid #ccc", backgroundColor:"white", zIndex:"999"}}>
        <img src={logo} alt="logo pic"/>
        <div>
          <p>Home</p>
          <p>Find a Host</p>
          <p>Become a Host</p>
          <p>Logout</p>
        </div>
      </div>
    )
  }
}
