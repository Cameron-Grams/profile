import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './containers/Main/Main';
import Projects from './components/projects'; 
import Goals from './components/goals';
import Interests from './components/interests';
import Readings from './components/readingList'; 
import Travel from './containers/Travel/Travel'; 
import Contact from './containers/Contact/Contact'; 

class App extends Component {
  render() {
    return(
      <Router >
        <Switch >
          <Route exact path="/" component={ Main } />
          <Route path="/projects" component={ Projects } />
          <Route path="/goals" component={ Goals } />
          <Route path="/interests" component={ Interests } /> 
          <Route path="/readings" component={ Readings } /> 
          <Route path="/travel" component={ Travel } /> 
          <Route path="/contact" component={ Contact } /> 
        </Switch>
      </Router>
    ) 
  }
}

export default App;
