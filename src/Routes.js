import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AuthPage from './components/auth/AuthPage';
import ProfilePage from './components/users/ProfilePage';
import PetsPage from './components/users/PetsPage';
import AddPet from './components/users/AddPet';
import AddHost from './components/users/AddHost';
import HostsPage from './components/users/HostsPage';
import HostDetail from './components/users/HostDetail';
import SearchBox from './components/reservations/SearchBox';
import Home from './components/home/Home';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/signup' component={AuthPage}/>
    <Route path='/login' component={AuthPage}/>
    <Route path='/profile' component={ProfilePage}/>
    <Route path='/pets' component={PetsPage}/>
    <Route path='/hosts' component={HostsPage}/>
    <Route path='/add-pet' component={AddPet}/>
    <Route path='/host/:id' component={HostDetail}/>
    <Route path='/host' component={AddHost}/>
    <Route path='/search' component={SearchBox}/>
  </Switch>
)

export default Routes