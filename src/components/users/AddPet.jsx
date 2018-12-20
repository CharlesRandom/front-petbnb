import React, { Component } from 'react'
import {addPet} from '../../services/pets'

import PetForm from './PetForm'


class AddPet extends Component {
  state={
    pet:{}
  }

  addPet = e => {
    const owner = JSON.parse(localStorage.getItem('loggedUser'))
    const {pet} = this.state
    pet['owner'] = owner._id
    e.preventDefault()
    addPet(pet)
      .then(r=>{
        this.props.history.push('/pets')
      }).catch(e=>{
        console.log('Something went wrong D: try again')
        console.log(e)
      })
  }

  handleText = e => {
    // const owner = JSON.parse(localStorage.getItem('loggedUser'))
    const {pet} = this.state
    const field = e.target.name
    const value = e.target.value
    pet[field] = value
    // pet['owner'] = owner._id
    console.log(pet)
    this.setState({pet})
  }

  handleSelectChange = value => {
    const {pet} = this.state
    pet["kind"] = value
    console.log(pet)
    this.setState({pet})
  }

  render() {
      const { addPet, handleText, handleSelectChange } = this
    return (
      <div>
        <PetForm addPet={addPet} handleText={handleText} handleSelectChange={handleSelectChange}/>
      </div>
    )
  }
}

export default AddPet