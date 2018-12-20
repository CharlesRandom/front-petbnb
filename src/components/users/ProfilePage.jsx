import React, { Component } from 'react'
import {getProfile} from '../../services/auth'

class ProfilePage extends Component {

  state={
    user:{}
  }

  componentWillMount(){
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
    if(!loggedUser) this.props.history.push('/login')
    else {
      getProfile()
      .then(user=>{
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
        <h1>{user.name}</h1>
        <h2>{user.email}</h2>
      </div>
    )
  }
}

export default ProfilePage