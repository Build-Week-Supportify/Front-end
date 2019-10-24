import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Redirect} from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import styled from 'styled-components';

import Nav from './navigation/Nav';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/dashboard/Dashboard';

const AppStyled = styled.div`
  height: calc(100vh - 65px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #659dbd;
  transition: 200ms;
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  h2 {
    font-size: 2rem;
  }
  p {
    font-size: 1.2rem;
    text-align: center;
    padding: 0 8%;
  }
  div {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    }
  }
`;
function App() {
  return (

    <div className = 'App'>
      <header className = 'App-header'>
        <Nav></Nav>

       
        <section>

        <p>Here is Our App</p>

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