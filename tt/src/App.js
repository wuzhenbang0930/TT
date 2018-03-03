import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import './style/iconfont.css';
import list from './components/list';
import index from './components/index';
import gouwuche from './components/gouwuche';
import my from './components/my';
import commit from './components/commit';


class App extends Component {
  render() {
    return (
      <Router>
        <div id="box">
        
        <Route exact path="/" component={index} />
        <Route path="/list" component={list} />
        <Route path="/gouwuche" component={gouwuche} />
        <Route path="/my" component={my} />
        <Route path="/commit/:fid" component={commit} />
        </div>
      </Router>
       
    );
  }
}

export default App;
