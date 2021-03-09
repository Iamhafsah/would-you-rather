import React, {Component} from 'react'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './Login'
import Nav from './Nav'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Polls from './Polls'


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
      {this.props.loading === true ? null : <Polls/>}
    </div>
    </Router>
  );
 }
}

function mapStateToProps({authedUser}){
  return{
    loading: authedUser === null
  }
}

export default connect(mapStateToProps) (App);
