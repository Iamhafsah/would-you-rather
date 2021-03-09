import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

class Nav extends Component {
    render(){
    return (
        <nav>
            <ul className='nav-ul'>
                <li>
                    <NavLink to='/'>
                        Start
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/home'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/new'>
                        New Poll
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
