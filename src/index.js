import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Store from './app-context';
import Reducer from './reducer';
import './index.css';
import MainApp from './App';

const App = ()=>{
  const globalStore = useContext(Store);
  //Array Destructuring ES6 -> Concept of JavaScript
  const [state, dispatch]= useReducer(Reducer, globalStore);
  return (
    <Store.Provider value={{state, dispatch}}>
      <Router>        
          <MainApp/>
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

