import React, { Component } from 'react'
import {addBank} from '../../services/banks'
import {addAddress} from '../../services/addresses'

import BankForm from './BankForm'
import AddressForm from './AddressForm'


class AddHost extends Component {
  state={
    bank:{},
    address:{}
  }

  addBank = e => {
    e.preventDefault()
    const user = JSON.parse(localStorage.getItem('loggedUser'))
    const {bank} = this.state
    bank['user'] = user._id
    console.log(bank)
    addBank(bank)
      .then(r=>{
        console.log(r)
        localStorage.setItem('loggedUser',JSON.stringify(r))
        this.props.history.push('/profile')
      }).catch(e=>{
        console.log('Something went wrong D: try again')
        console.log(e)
      })
  }

  addAddress = e => {
    e.preventDefault()
    const user = JSON.parse(localStorage.getItem('loggedUser'))
    const {address} = this.state
    address['user'] = user._id
    console.log(address)
    addAddress(address)
      .then(r=>{
        console.log(r)
        localStorage.setItem('loggedUser',JSON.stringify(r))
        this.props.history.push('/profile')
      }).catch(e=>{
        console.log('Something went wrong D: try again')
        console.log(e)
      })
  }

  handleText = e => {
    const {bank, address} = this.state
    const field = e.target.name
    const value = e.target.value
    bank[field] = value
    address[field] = value
    console.log(bank)
    console.log(address)
    this.setState({bank,address})
  }


  render() {
      const { addBank, addAddress, handleText } = this
    return (
      <div>
        <AddressForm addAddress={addAddress} 
        handleText={handleText}/>
        <BankForm addBank={addBank} 
        handleText={handleText}/>
      </div>
    )
  }
}

export default AddHost