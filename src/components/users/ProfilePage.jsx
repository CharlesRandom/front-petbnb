import React, { Component } from 'react'
// import {getProfile} from '../../services/auth'

class ProfilePage extends Component {

  state={
    user:{}
  }

  componentWillMount(){
    const user = JSON.parse(localStorage.getItem('loggedUser'))
    if(!user) this.props.history.push('/login')
    // else {
    //   getProfile()
    //   .then(user=>{
    //     this.setState({user})
    //   }).catch(error=>{
    //     console.log(error)
    //   })
    // }
    else {
      this.setState({user})
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