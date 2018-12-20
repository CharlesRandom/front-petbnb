import React, { Component } from 'react'
import {getUserPets} from '../../services/pets'
import { Button } from 'antd';
import PetCard from './PetCard';

class PetsPage extends Component {

  state={
    user:{}
  }

  componentWillMount(){
    const user = JSON.parse(localStorage.getItem('loggedUser'))
    if(!user) this.props.history.push('/login')
    else {
      getUserPets()
      .then(user=>{
        this.setState({user})
      }).catch(error=>{
        console.log(error)
      })
    }
  }

  render() {
    const {user} = this.state
    console.log(user)
    return (
      <div>
        <h2>Your pets</h2>
        <div>
          {user.pets ?
          user.pets.map(pet => <PetCard key={pet._id} pet={pet}/>)
          :
          <p>No hay mascotas</p>
          }
          <Button type="primary" size="large" icon="plus" href="/add-pet">Add pet</Button>
        </div>
      </div>
    )
  }
}

export default PetsPage