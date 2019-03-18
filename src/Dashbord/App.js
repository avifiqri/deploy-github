import React, { Component } from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Login from '../Assets/Toolbar/Login/Login';
import Logout from '../Assets/Toolbar/Logout/Logout';
import Dashbord from './Dashbord';
import Tolbar from '../Assets/Toolbar/Tolbar';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Tolbar />
        <Switch>
        <Route  path='/Dashboard' component={Dashbord} />
          <Route exact path='/' component={Login} />
          <Route path='/logout' component={Logout} />
        </Switch>

      
      </div>
    );
  }
}

export default App;
