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
                    <NavLink to='/leaderboard'>
                        Leaderboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/new'>
                        New Question
                    </NavLink>
                </li>
            </ul>

            <span>Hello {this.props.authedUser}</span>
        </nav>
    )
}
}

function mapStateToProps({authedUser}){
    return{
        authedUser:authedUser
    }
}
export default connect (mapStateToProps)(Nav)
