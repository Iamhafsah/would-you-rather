import React from 'react'
import {NavLink} from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <ul className='nav-ul'>
                <li>
                    <NavLink to='/' >
                        Start
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/home' >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/new'>
                        New Poll
                    </NavLink>
                </li>
            </ul>

            <span>Hello User</span>
        </nav>
    )
}

export default Nav
