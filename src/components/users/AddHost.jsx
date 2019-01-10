import React, { Component } from 'react'
import {addBank} from '../../services/banks'
import {addAddress} from '../../services/addresses'
import {uploadFile, addHost} from '../../services/hosts'

import BankForm from './BankForm'
import AddressForm from './AddressForm'
import HostForm from './HostForm'


class AddHost extends Component {
  state={
    user:{},
    data:{},
    current:0
  }

  componentWillMount(){
    const user = JSON.parse(localStorage.getItem('loggedUser'))
    if(!user || !user.name) this.props.history.push('/login')
    else {
      this.setState({user})
    }
  }

  addHost = e => {
    e.preventDefault()
    const {data, user} = this.state
    data['user'] = user._id
    addHost(data)
    .then(user=>{
      if(!user.data){
        localStorage.setItem('loggedUser',JSON.stringify(user))
        this.setState({user})
        this.setState({current:1})
      }
    }).catch(e=>{
      console.log('Something went wrong D: try adding the data again')
      console.log(e)
    })
  }

  addBank = e => {
    e.preventDefault()
    const {data, user} = this.state
    data['user'] = user._id
    const bank = {
      user:data.user,
      name:data.name,
      clabe:data.clabe
    }
    addBank(bank)
      .then(user=>{
        localStorage.setItem('loggedUser',JSON.stringify(user))
        this.setState({user})
        this.props.history.push('/profile')
      }).catch(e=>{
        console.log('Something went wrong D: try adding the bank data again')
        console.log(e)
      })
  }

  addAddress = e => {
    e.preventDefault()
    const {data, user} = this.state
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
      .then(user=>{
        if(!user.data){
          localStorage.setItem('loggedUser',JSON.stringify(user))
          this.setState({user})
        }
        this.setState({current:2})
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
    this.setState({data})
  }

  handleImage=(e)=>{
    const image = e.target.name
    const {data} = this.state
    const file = e.target.files[0]
    uploadFile(file)
      .then(link=>{
        data[image] = link
        this.setState({data})
        console.log('done')
      }).catch(e=>{
        console.log('Something went wrong D: try adding the image again')
        console.log(e)
      })
  }

  onChange = (info,field) => {
    const {data} = this.state
    const file = info.file.originFileObj
    uploadFile(file)
      .then(link=>{
        info.file.status = "done"
        data[field] = link
        this.setState({data})
      }).catch(e=>{
        console.log('Something went wrong D: try adding the image again')
        console.log(e)
      })
  }

  goBack = () => {
    let {user, current} = this.state
    current--
    this.setState({user, current})
  }

  render() {
      const { addHost, addBank, addAddress, handleText, handleImage, onChange, goBack } = this
      const {current} = this.state
    return (
      <div className="account-container">
        {current === 0 ? 
        <HostForm addHost={addHost} handleText={handleText} handleImage={handleImage} onChange={onChange}/>
        :
        current === 1 ?
        <AddressForm addAddress={addAddress} handleText={handleText} goBack={goBack}/>
        :
        <BankForm addBank={addBank} handleText={handleText} goBack={goBack}/>
        }
      </div>
    )
  }
}

export default AddHost