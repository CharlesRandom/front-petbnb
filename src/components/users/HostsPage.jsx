import React, { Component } from 'react'
import {getHosts} from '../../services/hosts'
import HostCard from './HostCard';
import MapContainer from '../reservations/MapContainer';
import HomeSearch from '../home/HomeSearch';


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
        <div className="d-flex jcc aic"><HomeSearch /></div>
        <div className="map-hosts-container">
          <div className="hosts-container">
            {hosts.length > 0 ?
            hosts.map(host => <a key={host._id} href={`/host/${host._id}`}><HostCard key={host._id} host={host}/></a>)
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