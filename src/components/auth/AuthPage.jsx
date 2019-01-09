import React, { Component } from 'react'
import LoginForm from './LoginForm'
// import HorizontalLogin from './HorizontalLogin'
// import NormalLogin from './NormalLogin'
import SignupForm from './SignupForm'
import {signup, login, getProfile} from '../../services/auth'

class AuthPage extends Component {
  state={
    user:{}
  }

  signup = e => {
    const {user} = this.state
    e.preventDefault()
    signup(user)
      .then(r=>{
        console.log(r)
        this.props.history.push('/login')
      }).catch(e=>{
        console.log('something went wrong, try sign up again')
        console.log(e)
      })
  }

  login = e => {
    const {user} = this.state
    e.preventDefault()
    login(user)
      .then(r=>{
        if(r._id){
          console.log('logueado', r)
          getProfile(r._id)
          .then(r=>{
            console.log('populated user', r)
            localStorage.setItem('loggedUser',JSON.stringify(r))
            this.props.history.push('/profile')
            console.log('Go to profile')
          })
        }
        else {
          console.log('something went wrong, try log in again')
        }
      }).catch(e=>{
        console.log(e)
      })
  }

  handleText = e => {
    const {user} = this.state
    const field = e.target.name
    const value = e.target.value
    user[field] = value
    this.setState({user})
  }

  render() {
      const {pathname} = this.props.location
      const { signup, login, handleText } = this
    return (
      <div className="auth">
        <div>
          {pathname==='/login'?
          <LoginForm login={login} handleText={handleText}/>
          :
          <SignupForm signup={signup} handleText={handleText}/>
          }
        </div>
      </div>
    )
  }
}

export default AuthPage