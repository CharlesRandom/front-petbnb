import React, { Component } from 'react'
import {addPet, uploadFile} from '../../services/pets'

import PetForm from './PetForm'


class AddPet extends Component {
  state={
    pet:{}
  }

  addPet = e => {
    e.preventDefault()
    const owner = JSON.parse(localStorage.getItem('loggedUser'))
    const {pet} = this.state
    pet['owner'] = owner._id
    console.log(pet)
    addPet(pet)
      .then(r=>{
        this.props.history.push('/pets')
      }).catch(e=>{
        console.log('Something went wrong D: try again')
        console.log(e)
      })
  }

  handleText = e => {
    const {pet} = this.state
    const field = e.target.name
    const value = e.target.value
    pet[field] = value
    // console.log(pet)
    this.setState({pet})
  }

  handleSelectChange = value => {
    const {pet} = this.state
    pet["kind"] = value
    console.log(pet)
    this.setState({pet})
  }

  handleImage=(e)=>{
    console.log(e.target.files)
    const {pet} = this.state
    const file = e.target.files[0]
    uploadFile(file)
      .then(link=>{
        pet['photoURL'] = link
        this.setState({pet})
        console.log('done')
      })
  }

  render() {
      const { addPet, handleText, handleSelectChange, handleImage } = this
    return (
      <div>
        <PetForm addPet={addPet} 
        handleText={handleText}
        handleSelectChange={handleSelectChange}
        handleImage={handleImage}/>
      </div>
    )
  }
}

export default AddPet