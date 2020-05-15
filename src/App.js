import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
// Load Bootstrap for
import 'bootstrap/dist/js/bootstrap';
//Load notification
import ReactNotification from 'react-notifications-component';

import 'bootstrap/dist/css/bootstrap.css';


import 'react-notifications-component/dist/theme.css'

import './App.css';
import Dashboard from "./components/Dashboard";
import RuleConfig from "./components/RuleConfig";
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <ReactNotification />
        <AppHeader/>
        <Route exact={true} path="/" component={Dashboard}/>
        <Route exact={true} path="/dashboard" component={Dashboard}/>
        <Route exact path="/add" component={RuleConfig}/>
        <Route exact path="/edit" component={RuleConfig}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
