import React, { Component } from 'react'
import {getHosts} from '../../services/hosts'
import HostCard from './HostCard';

class HostsPage extends Component {

  state={
    user:{},
    hosts:[]
  }

  componentWillMount(){
    console.log("will mount")
    const user = JSON.parse(localStorage.getItem('loggedUser'))
    if(!user) this.props.history.push('/login')
    else {
      console.log(user)
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
    console.log(hosts)
    return (
      <div>
        <h2>Hosts</h2>
        <div>
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