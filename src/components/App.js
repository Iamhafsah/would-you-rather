import React, {Component} from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Login from './Login'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Home from './Home'
import New from './New'



class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

 render(){
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path='/' component={Login}/>

        <Route path='/home' component={this.props.loading === true ? null : Home} />

        <Route path='/new' component={this.props.loading === true ? null : New}/>
      </Switch>
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
