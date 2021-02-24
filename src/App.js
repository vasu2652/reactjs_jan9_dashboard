
import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SignIn from './components/login';
import SignUp from './components/signup';
import EnhancedTable from './components/home';
import NavBar from './components/NavBar';
import Store from './app-context';
function PrivateRoute({ children, ...rest }) {
  const { state } = useContext(Store);
  return (
    <Route
      {...rest}
      render={({ location }) =>
         state.user!==null ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
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
      <PrivateRoute exact path="/">
        <Application/>
      </PrivateRoute>
      <Route path="/login">
        <SignIn/>
      </Route>
      <Route path="/signup">
        <SignUp/>
      </Route>
    </Switch>
  )
}
