import React, { Component } from 'react'
import {addBank} from '../../services/banks'
import {addAddress} from '../../services/addresses'
import {uploadFile} from '../../services/pets'

import BankForm from './BankForm'
import AddressForm from './AddressForm'
import HostForm from './HostForm'


class AddHost extends Component {
  state={
    data:{}
  }

  addBank = e => {
    e.preventDefault()
    const user = JSON.parse(localStorage.getItem('loggedUser'))
    const {data} = this.state
    data['user'] = user._id
    const bank = {
      user:data.user,
      name:data.name,
      clabe:data.clabe
    }
    addBank(bank)
      .then(r=>{
        localStorage.setItem('loggedUser',JSON.stringify(r))
        this.props.history.push('/pets')
      }).catch(e=>{
        console.log('Something went wrong D: try adding the bank data again')
        console.log(e)
      })
  }

  addAddress = e => {
    e.preventDefault()
    const user = JSON.parse(localStorage.getItem('loggedUser'))
    const {data} = this.state
    data['user'] = user._id
    const address = {
      user:data.user,
      street:data.street,
      houseNumber:data.houseNumber,
      aptNumber:data.aptNumber,
      city:data.city,
      state:data.state,
      zipcode:data.zipcode
    }
    addAddress(address)
      .then(r=>{
        localStorage.setItem('loggedUser',JSON.stringify(r))
        this.props.history.push('/profile')
      }).catch(e=>{
        console.log('Something went wrong D: try adding the address again')
        console.log(e)
      })
  }

  handleText = e => {
    const {data} = this.state
    const field = e.target.name
    const value = e.target.value
    data[field] = value
    // console.log(data)
    this.setState({data})
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
      const { addBank, addAddress, handleText } = this
    return (
      <div>
        <AddressForm addAddress={addAddress} 
        handleText={handleText}/>
        <HostForm addHost={addAddress} 
        handleText={handleText}/>
        <BankForm addBank={addBank} 
        handleText={handleText}/>
      </div>
    )
  }
}

export default AddHost