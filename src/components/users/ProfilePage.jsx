import React, { Component } from 'react'
// import {getProfile} from '../../services/auth'
import { Menu, Icon } from 'antd';
import PetsPage from './PetsPage'
import HostsPage from './HostsPage'
import AccountPage from './AccountPage';

class ProfilePage extends Component {

  state = {
    current: 'pets',
    user:{}
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
    // this.props.history.push('/pets')
  }

  componentWillMount(){
    const user = JSON.parse(localStorage.getItem('loggedUser'))
    if(!user) this.props.history.push('/login')
    // else {
    //   getProfile()
    //   .then(user=>{
    //     this.setState({user})
    //   }).catch(error=>{
    //     console.log(error)
    //   })
    // }
    else {
      this.setState({user})
    }
  }

  render() {
      const {user, current} = this.state
    return (
      <div>
        <h1>{user.name}</h1>
        <h2>{user.email}</h2>
        <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        >
          <Menu.Item key="dashboard">
            <Icon type="dashboard" />Dashboard
          </Menu.Item>
          <Menu.Item key="messenger">
            <Icon type="inbox" />Messenger
          </Menu.Item>
          <Menu.Item key="pets">
            <Icon type="smile" />Pets
          </Menu.Item>
          <Menu.Item key="account">
            <Icon type="user" />Account
          </Menu.Item>
        </Menu>
        {current === "pets" ? <PetsPage/> 
        :
        current === "account" ? <AccountPage user={user}/> 
        :
        <HostsPage/>}
      </div>
    )
  }
}

export default ProfilePage