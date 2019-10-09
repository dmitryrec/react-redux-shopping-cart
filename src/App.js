import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import Router from './Router';

const Navigation = (props) => <nav>
  <div className="nav"> 
    <div><NavLink to='/'>Home</NavLink></div>
    <div><NavLink to='/cart'>Cart</NavLink></div>
  </div>
  
</nav>

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Navigation/>
        <Router/>
      </div>
    );
  }
 
}

