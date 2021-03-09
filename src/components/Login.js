import React, { Component } from 'react'
import GameTitle from './GameTitle'
import {connect} from 
'react-redux'
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {
    state={
        authedUser: ''
    }

    handleChange = (e)=> {
        this.setState({
            authedUser: e.target.value
        })
    }
    setUser = () => {
        this.props.dispatch(setAuthedUser(this.state.authedUser))
    }


    render() {
        return (
            <form className='login-form'>
                <GameTitle/>
           
                <select
                value={this.state.authedUser}
                onChange={this.handleChange}
                >
                   
                    <option default value='' disabled>Choose a player</option>

                   {this.props.users.map((user, index)=>(
                       <option key={index} value={user.id}>{user.name}</option>
                   ))}
                </select>
                {this.state.authedUser}
                <br/>
                <button
                onClick={this.setUser}
                >Start</button>
            </form>
        )
    }
}

function mapStateToProps({authedUser, users}){
    return{
        users: Object.values(users),
        authedUser: authedUser
    }
}

export default connect(mapStateToProps) (Login)
