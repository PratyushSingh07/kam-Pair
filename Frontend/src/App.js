import logo from './logo.svg';
import search from './search.png'
import react from 'react';
import { useState } from 'react';
import './App.css';
import Main from './Main';
import Result from './Result'; 
import {BrowserRouter as Router, Switch, Route, Routes,Link} from "react-router-dom";

function App() {

 
  return (
    <Router>
    <div className="App">
        <Switch>
            <Route path={'/result'}>
            <Result />
            </Route>
          <Route path={'/'}>
            <Main />
          </Route>
         
          </Switch>
       </div>
        </Router> 
        
      );
}

export default App;
