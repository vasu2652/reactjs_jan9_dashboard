import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Store from './app-context';
import Reducer from './reducer';
import './index.css';
import MainApp from './App';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const TopSnackBar = (props)=>{
  const {open, duration=5000, severity, message, handleClose, vertical="top", horizontal="center"} = props
  return (
      <Snackbar open={open} autoHideDuration={duration} onClose={handleClose} anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal}>
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  )
}

const App = ()=>{
  const globalStore = useContext(Store);
  //Array Destructuring ES6 -> Concept of JavaScript
  const [state, dispatch]= useReducer(Reducer, globalStore);
  return (
    <Store.Provider value={{state, dispatch}}>
      <Router>        
          <MainApp/>
          <TopSnackBar {...state.snackbarProps} handleClose={()=>{
            dispatch({
              type: "HIDE-SNACK"
            })
          }}/>
      </Router>
    </Store.Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

