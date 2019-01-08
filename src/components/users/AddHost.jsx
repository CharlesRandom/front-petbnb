import React, { Component } from 'react'
import { message } from 'antd';
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
    if(!user) this.props.history.push('/login')
    else {
      this.setState({user})
    }
  }

  addHost = e => {
    e.preventDefault()
    // const user = JSON.parse(localStorage.getItem('loggedUser'))
    const {data, user} = this.state
    data['user'] = user._id
    data['host'] = true
    addHost(data)
    .then(r=>{
      localStorage.setItem('loggedUser',JSON.stringify(r))
      this.setState({current:1})
    }).catch(e=>{
      console.log('Something went wrong D: try adding the data again')
      console.log(e)
    })
  }

  addBank = e => {
    e.preventDefault()
    // const user = JSON.parse(localStorage.getItem('loggedUser'))
    const {data, user} = this.state
    data['user'] = user._id
    const bank = {
      user:data.user,
      name:data.name,
      clabe:data.clabe
    }
    addBank(bank)
      .then(r=>{
        localStorage.setItem('loggedUser',JSON.stringify(r))
        this.props.history.push('/profile')
      }).catch(e=>{
        console.log('Something went wrong D: try adding the bank data again')
        console.log(e)
      })
  }

  addAddress = e => {
    e.preventDefault()
    // const user = JSON.parse(localStorage.getItem('loggedUser'))
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
      .then(r=>{
        localStorage.setItem('loggedUser',JSON.stringify(r))
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
    // console.log(data)
    this.setState({data})
  }

  handleImage=(e)=>{
    console.log(e.target.files)
    console.log(e.target.name)
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
    console.log("field", field)
    const {data} = this.state
    const file = info.file.originFileObj
    console.log(file)
    uploadFile(file)
      .then(link=>{
        info.file.status = "done"
        data["photoURL"] = link
        this.setState({data})
        console.log(data)
      }).catch(e=>{
        console.log('Something went wrong D: try adding the image again')
        console.log(e)
      })
    // if (info.file.status !== 'uploading') {
    //   console.log('not uploading')
    //   console.log(info.file, info.fileList);
    // }
    // if (info.file.status === 'done') {
    //   console.log('done')
    //   message.success(`${info.file.name} file uploaded successfully`);
    // } else if (info.file.status === 'error') {
    //   console.log('alv')
    //   message.error(`${info.file.name} file upload failed.`);
    // }
  }

  render() {
      const { addHost, addBank, addAddress, handleText, handleImage, onChange } = this
      const {current} = this.state
    return (
      <div>
        {current === 0 ? 
        <HostForm addHost={addHost} handleText={handleText} handleImage={handleImage} onChange={onChange}/>
        :
        current === 1 ?
        <AddressForm addAddress={addAddress} handleText={handleText}/>
        :
        <BankForm addBank={addBank} handleText={handleText}/>
        }
      </div>
    )
  }
}

export default AddHost