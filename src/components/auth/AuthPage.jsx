import React, { Component } from 'react'
import { Spin, message } from 'antd';
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import Navbar from '../home/Navbar';
import {signup, login, getProfile} from '../../services/auth'

class AuthPage extends Component {
  state={
    user:{},
    loading:false
  }
  
  authError = e => {
    message.error(e);
    this.setState({loading:false})
  };

  signup = e => {
    this.setState({loading:true})
    const {user} = this.state
    e.preventDefault()
    signup(user)
      .then(r=>{
        if(r._id){
          this.props.history.push('/login')
        }
        else {
          console.log('Something went wrong, try sign up again')
          this.authError('Something went wrong, try sign up again')
        }
      }).catch(e=>{
        console.log(e)
        this.authError('Something went wrong, try sign up again')
      })
  }

  login = e => {
    this.setState({loading:true})
    const {user} = this.state
    e.preventDefault()
    login(user)
      .then(r=>{
        if(r._id){
          console.log('logged')
          getProfile(r._id)
          .then(r=>{
            localStorage.setItem('loggedUser',JSON.stringify(r))
            this.props.history.push('/profile')
          })
        }
        else {
          console.log('Something went wrong, please check credentials')
          this.authError('Something went wrong, please check credentials')
        }
      }).catch(e=>{
        console.log(e)
        this.authError('Something went wrong, please check credentials')
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
      const {loading} = this.state
    return (
      <div className="home">
        <div>
          <Navbar />
          <div className="search-container">
            <div>
              {pathname==='/login'?
              <div>
                {!loading ? <LoginForm login={login} handleText={handleText}/> : <Spin tip="Loading...">
                <LoginForm login={login} handleText={handleText}/>
                </Spin>}
              </div>
              :
              <div>
                {!loading ? <SignupForm signup={signup} handleText={handleText}/> : <Spin tip="Loading...">
                <SignupForm signup={signup} handleText={handleText}/>
                </Spin>}
              </div>
              }
            </div>          
          </div>
        </div>
      </div>
    )
  }
}

export default AuthPage