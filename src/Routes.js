import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AuthPage from './components/auth/AuthPage';
import ProfilePage from './components/users/ProfilePage';

const Routes = () => (
  <Switch>
    <Route path='/signup' component={AuthPage}/>
    <Route path='/login' component={AuthPage}/>
    <Route path='/profile' component={ProfilePage}/>
  </Switch>
)

export default Routes