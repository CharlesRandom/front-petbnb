import React, { Component } from 'react'
import {getUserPets} from '../../services/pets'
import { Button } from 'antd';
import PetCard from './PetCard';

class PetsPage extends Component {

  state={
    user:{}
  }

  componentWillMount(){
    console.log("Pets page will mount")
    const user = JSON.parse(localStorage.getItem('loggedUser'))
    if(!user) this.props.history.push('/login')
    else {
      getUserPets(user)
      .then(user=>{
        // console.log(user.pets)
        this.setState({user})
      }).catch(error=>{
        console.log(error)
      })
    }
  }

  render() {
    const {user} = this.state
    return (
      <div>
        <h2>Your pets</h2>
        <div className="pets-container">
          {user.pets ?
          user.pets.map(pet => <PetCard key={pet._id} pet={pet}/>)
          :
          <p>No hay mascotas</p>
          }
        </div>
        <Button type="primary" size="large" icon="plus" href="/add-pet">Add pet</Button>
      </div>
    )
  }
}

export default PetsPage