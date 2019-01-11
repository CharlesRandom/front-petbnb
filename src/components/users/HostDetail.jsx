import React, { Component } from 'react'
import ProfileNavbar from './ProfileNavbar';
import { MapHost } from '../reservations/MapHost';
import {getProfile} from '../../services/auth'


class HostDetail extends Component {

  state={
    host:{},
    images:[]
  }

  componentWillMount(){
    console.log("Host Detail will mount")
    const user = JSON.parse(localStorage.getItem('loggedUser'))
    if(!user) this.props.history.push('/login')
    else {
      const id = this.props.match.params.id
      getProfile(id)
      .then(host=>{
        //No active session
        if(host.data) this.props.history.push('/login')
        else {
          this.setState({host})
          const {images} = this.state
          images.push(host.photoURL)
          images.push(host.cover)
          this.setState({images})
        }
      }).catch(error=>{
        console.log(error)
      })
    }
  }

  render() {
    const {host} = this.state
    console.log(host)
    return (
      <div  className="box_profile" style={{height:"100vh",
      overflowY:"scroll",
      backgroundColor:"#F6FBF9"}}>
        <ProfileNavbar />
        <div className="d-flex jcc">
          {host ? 
          <div>
            <div>
              <h1 style={{marginTop:"80px"}}>Hi, I'm {host.name}!</h1>
              <h2>About me</h2>
              <h3>{host.title}</h3>
              <p style={{fontStyle:"italic"}}>{host.description}</p>
              <img style={{width:"400px"}} src={host.photoURL ? host.photoURL : "https://thesocietypages.org/socimages/files/2009/05/nopic_192.gif"} alt="profile pic"/>
            </div>
            <div className="map-container">
              {host.name && <MapHost host={{host}}/>}
              {/* <MapHost host={{host}}/> */}
            </div>
          </div>
          :
            <p>No hay host</p>
          }
        </div>
      </div>
    )
  }
}

export default HostDetail