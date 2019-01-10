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
              <h1>Happy pets, happy owners</h1>
              <p>Find a loving pet sitter who will take care of your pet <br/>
                just like you would do it</p>
              <HomeSearch />
            </div>
           
          </div>
        </div>
      </div>
    )
  }
}
