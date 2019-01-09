import React, { Component } from 'react'
import {getHosts} from '../../services/hosts'
import HostCard from './HostCard';
import SearchBox from '../reservations/SearchBox'
import MapContainer from '../reservations/MapContainer';


class HostsPage extends Component {

  state={
    user:{},
    hosts:[]
  }

  componentWillMount(){
    console.log("Hosts Page will mount")
    const user = JSON.parse(localStorage.getItem('loggedUser'))
    if(!user) this.props.history.push('/login')
    else {
      getHosts()
      .then(hosts=>{
        console.log(hosts)
        this.setState({hosts})
      }).catch(error=>{
        console.log(error)
      })
    }
  }

  render() {
    const {hosts} = this.state
    return (
      <div className="hosts-page-container">
        <div className="d-flex jcc aic"><h2>Hosts</h2></div>
        <div className="d-flex jcc aic"><SearchBox /></div>
        <div className="map-hosts-container">
          <div className="hosts-container">
            {hosts.length > 0 ?
            hosts.map(host => <HostCard key={host._id} host={host}/>)
            :
            <p>No hay hosts</p>
            }
          </div>
          <div className="map-container">
            <MapContainer hosts={hosts}/>
          </div>
        </div>
      </div>
    )
  }
}

export default HostsPage