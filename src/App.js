import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route } from 'react-router'

import landingPage from './components/LandingPage/LandingPage.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={landingPage} />
      </div>
    );
  }
}

export default App;
