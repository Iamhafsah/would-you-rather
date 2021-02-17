import React, {Component} from 'react'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './Login'
import Nav from './Nav'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'


class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
 render(){
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Login/>
    </div>
    </Router>
  );
 }
}

export default connect() (App);
