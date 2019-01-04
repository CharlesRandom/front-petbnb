import React, { Component } from 'react'
import {getHosts} from '../../services/hosts'
import HostCard from './HostCard';
import SearchBox from '../reservations/SearchBox'

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
      <div>
        <h2>Hosts</h2>
        <SearchBox />
        <div className="hosts-container">
          {hosts.length > 0 ?
          hosts.map(host => <HostCard key={host._id} host={host}/>)
          :
          <p>No hay hosts</p>
          }
        </div>
      </div>
    )
  }
}

export default HostsPage