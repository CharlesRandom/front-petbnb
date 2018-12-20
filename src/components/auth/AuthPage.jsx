import React, { Component } from 'react'
import LoginForm from './LoginForm'
// import HorizontalLogin from './HorizontalLogin'
// import NormalLogin from './NormalLogin'
import SignupForm from './SignupForm'
import {signup, login} from '../../services/auth'

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
        console.log('User created, Go to profile')
      }).catch(e=>{
        console.log('algo salió mal, volver a intentar')
        console.log(e)
      })
  }

  login = e => {
    const {user} = this.state
    e.preventDefault()
    login(user)
      .then(r=>{
        if(r.name){
          console.log('logueado', r)
          localStorage.setItem('loggedUser',JSON.stringify(r))
          this.props.history.push('/profile')
          console.log('Go to profile')
        }
        else {
          console.log('algo salió mal, revisar credenciales')
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
      <div>
        {pathname==='/login'?
        <LoginForm login={login} handleText={handleText}/>
        :
        <SignupForm signup={signup} handleText={handleText}/>
        }
      </div>
    )
  }
}

export default AuthPage