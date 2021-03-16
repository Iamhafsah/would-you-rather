import React, {Component} from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Login from './Login'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Home from './Home'
import New from './New'
import Question from './Question'
import ErrorPage from './ErrorPage'
import LeaderBoard from './LeaderBoard'


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

        <Route exact path='/home' component={this.props.loading === true ? null : Home} />

        <Route exact path='/question/:id' component={this.props.loading === true ? null : Question}/>

        <Route exact path='/add' component={this.props.loading === true ? null : New}/>

        <Route exact path='/leaderboard' component={this.props.loading === true ? null : LeaderBoard}/>

        <Route component={ErrorPage}/>
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
