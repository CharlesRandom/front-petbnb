import React, { Component } from 'react'
import Navbar from './Navbar';
import HomeSearch from './HomeSearch';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div>
          <Navbar />
          <div className="search-container">
            <div>
              <h1>Dueños felices, mascotas felices</h1>
              <p>Hospeda tu mascota como lo cuidarías tu</p>
              <HomeSearch />
            </div>
           
          </div>
        </div>
      </div>
    )
  }
}
