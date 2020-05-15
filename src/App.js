import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
// Load Bootstrap for responsive UI
import 'bootstrap/dist/js/bootstrap';
//Load notification for showing notification on error/success
import ReactNotification from 'react-notifications-component';

// Load Ext vendor CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'react-notifications-component/dist/theme.css'

import './App.css';

// This is the Root page of Our APP
import Dashboard from "./components/Dashboard";
import AppHeader from "./components/AppHeader";

// For ADD/EDIT Rules
import RuleConfig from "./components/RuleConfig";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <ReactNotification />
        <AppHeader/>
        <Route exact={true} path="/" component={Dashboard}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/add" component={RuleConfig}/>
        <Route exact path="/edit" component={RuleConfig}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
