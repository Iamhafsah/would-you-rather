import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import { setAuthedUser } from "../actions/authedUser";


class Nav extends Component {

    logout = () => {
        this.props.dispatch(setAuthedUser(null));
    }

    render(){
    return (
        <nav>
            <ul className='nav-ul'>
                <li>
                    <NavLink to='/' onClick={this.logout}>
                        Logout
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/home'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/leaderboard'>
                        Leaderboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/add'>
                        New Question
                    </NavLink>
                </li>
            </ul>

            <span>Hello {this.props.userName}</span>
        </nav>
    )
}
}

function mapStateToProps({authedUser, users}){
    let userName = users[authedUser].name

    return{
        authedUser,
        userName
    }
}
export default connect (mapStateToProps)(Nav)
