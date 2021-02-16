
import React, { Component } from 'react'
import GameTitle from './GameTitle'

export class Login extends Component {
    render() {
        return (
            <form className='login-form'>
                <GameTitle/>
                <select>
                    <option>choose</option>
                    <option>One</option>
                </select>
                <br/>
                <button>Start</button>
            </form>
        )
    }
}

export default Login
