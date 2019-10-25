import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Redirect} from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';


import Nav from './navigation/Nav';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (

    <div className = 'App'>
      <header className = 'App-header'>

        <Nav/>
        <section>

        <div className = 'tle'>Supportify</div>

        <Route exact path="/home" render={() => <Redirect to="/" />} />
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        
        </section>
      </header>
    </div>
  );
}

export default App;
