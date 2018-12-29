import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AuthPage from './components/auth/AuthPage';
import ProfilePage from './components/users/ProfilePage';
import PetsPage from './components/users/PetsPage';
import AddPet from './components/users/AddPet';
import AddHost from './components/users/AddHost';

const Routes = () => (
  <Switch>
    <Route path='/signup' component={AuthPage}/>
    <Route path='/login' component={AuthPage}/>
    <Route path='/profile' component={ProfilePage}/>
    <Route path='/pets' component={PetsPage}/>
    <Route path='/add-pet' component={AddPet}/>
    <Route path='/host' component={AddHost}/>
  </Switch>
)

export default Routes