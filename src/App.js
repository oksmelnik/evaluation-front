import React, { Component } from 'react';
import LoginPage from "./login/LoginPage";
import Batches from "./components/Batches";
import BatchForm from "./components/BatchForm";
import Students from "./components/Students";
import Evaluation from "./components/Evaluation";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/new" component={BatchForm} />
          <Route exact path="/batches" component={Batches} />
          <Route exact path="/:batchId" component={Students} />
          <Route exact path="/students/:studentId" component={Evaluation} />
        </div>
      </Router>
    )
  }
}

export default App;
