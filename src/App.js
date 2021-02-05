
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from './components/login';
import SignUp from './components/signup';
export default ()=>{
  return (
    <Switch>
      <Route exact path="/">
        <div>HomePage</div>
      </Route>
      <Route path="/login">
        <SignIn/>
      </Route>
      <Route path="/signup">
        <SignUp/>
      </Route>
    </Switch>
  )
}
