import React, { Component } from 'react';
import LoginPage from "./login/LoginPage";
import Batches from "./components/Batches";
import Students from "./components/Students";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/batches" component={Batches} />
          <Route exact path="/batches/:batchId" component={Students} />
        </div>
      </Router>
    )
  }
}

export default App;
