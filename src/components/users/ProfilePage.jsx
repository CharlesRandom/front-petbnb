import React, { Component } from 'react'
// import {getProfile} from '../../services/auth'
import { Tabs, Icon } from 'antd';
import PetsPage from './PetsPage'
import HostsPage from './HostsPage'
import AddHost from './AddHost'
import AccountPage from './AccountPage';
import Messenger from '../reservations/Messenger'
import ProfileNavbar from './ProfileNavbar';

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
      <div  className="box_profile" style={{height:"100vh",
      overflowY:"scroll",
      backgroundColor:"#fafafa"}}>
        <ProfileNavbar />
        <h1 style={{marginTop:"80px"}}>Hi {user.name},</h1>
        <h2>Welcome!</h2>
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
            {!user.host && <TabPane tab={<span><Icon type="audit" />Become a host</span>} key="host">
              <AddHost />
            </TabPane>}
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