import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom'
import './App.css';

import Github from './Github'
import Nasa from './Nasa'
import OpenWeather from './OpenWeather'
import IceAndFire from './IceAndFire'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-headings">
            <h3>Ain't no party like an</h3>
            <h1>API Party</h1>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink to='/github'>Github API</NavLink>
            </li>
            <li>
              <NavLink to={'/nasa'}>NASA API</NavLink>
            </li>
            <li>
              <NavLink to={'/openweather'}>OpenWeather API</NavLink>
            </li>
            <li>
              <NavLink to={'/got'}>An API of Ice and Fire</NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path='/github' component={Github} />
          <Route path='/nasa' component={Nasa} />
          <Route path='/openweather' component={OpenWeather} />
          <Route path='/got' component={IceAndFire} />
          <Route render={() => <p>To get started, click one of the links above.</p>} />
        </Switch>
      </div>
    );
  }
}

export default App;
