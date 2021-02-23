
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from './components/login';
import SignUp from './components/signup';
import EnhancedTable from './components/home';
import NavBar from './components/NavBar';
const Application = () => {
  return (
    <>
      <NavBar />
      <EnhancedTable />
    </>
  )
}
export default ()=>{
  return (
    <Switch>
      <Route exact path="/">
        <Application/>
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
