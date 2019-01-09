import React, { Component } from 'react'
// import {getProfile} from '../../services/auth'
import { Tabs, Icon } from 'antd';
import PetsPage from './PetsPage'
import HostsPage from './HostsPage'
import AccountPage from './AccountPage';
import Messenger from '../reservations/Messenger'

const TabPane = Tabs.TabPane;

class ProfilePage extends Component {

  state = {
    user:{}
  }

  componentWillMount(){
    const user = JSON.parse(localStorage.getItem('loggedUser'))
    if(!user) this.props.history.push('/login')
    else this.setState({user})
  }

  render() {
      const {user} = this.state
    return (
      <div style={{height:"100vh",
      overflowY:"scroll"}}>
        <h1>Hi {user.name}!</h1>
        <h2>Welcome</h2>
        <div className="d-flex jcc">
          <Tabs defaultActiveKey="search" size="large">
            <TabPane tab={<span><Icon type="search" />Find a host</span>} key="search">
              <HostsPage/>
            </TabPane>
            <TabPane tab={<span><Icon type="inbox" />Messenger</span>} key="messenger">
              <Messenger/>
            </TabPane>
            <TabPane tab={<span><Icon type="smile" />Pets</span>} key="pets">
              <PetsPage/>
            </TabPane>
            <TabPane tab={<span><Icon type="user" />Account</span>} key="account">
              <AccountPage user={user}/>
            </TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default ProfilePage