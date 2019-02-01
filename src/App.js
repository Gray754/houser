import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header'
import route from './route'
import {HashRouter as Router, Link} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <nav>
            <Link to='/'>Dashboard</Link>
            <Link to='/wizard'>Wizard</Link>
          </nav>
          {route}
        </div>
      </Router>
    );
  }
}

export default App;
