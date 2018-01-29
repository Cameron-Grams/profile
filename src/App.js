import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './containers/Main/Main';
import Projects from './components/Projects'; 
import Goals from './components/Goals';
import Interests from './components/Interests';
import Reading from './components/Reading';
import Travel from './components/Travel';

class App extends Component {
  render() {
    return(
      <Router >
        <Switch >
          <Route exact path="/" component={ Main } />
          <Route path="/projects" component={ Projects } />
          <Route path="/goals" component={ Goals } />
          <Route path="/interests" component={ Interests } /> 
          <Route path="/reading" component={ Reading } /> 
          <Route path="/travel" component={ Travel } /> 
        </Switch>
      </Router>
    ) 
  }
}

export default App;
