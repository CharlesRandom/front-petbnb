import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/pethouse.png'

export default class ProfileNavbar extends Component {
  render() {
    return (
      <div className="nav" style={{color:"#595959", 
        borderBottom:"1px solid #ccc", 
        backgroundColor:"white", 
        zIndex:"999"}}>
        <img src={logo} alt="logo pic"/>
        <div>
          <Link style={{color:"black"}} to='/profile'><p>Home</p></Link>
          <Link style={{color:"black"}} to='/'><p>Logout</p></Link>
        </div>
      </div>
    )
  }
}
