import React, { Component } from 'react'
import { connect } from "react-redux";
import Nav from './Nav'



export class New extends Component {
    render() {
        return (
            <>
            <Nav/>
            
            <form className='new-poll-container'>
                <h2>Create New Question</h2>
                
                <div className='poll-div'>
                <h3>Would you 
                rather...</h3>
                <input
                type='text'
                required
                placeholder='option
                one'
                className='option-one'
                // value= 'value'
                /> <br/>
                   <strong> OR </strong> 
                    <br/>
                <input
                type='text'
                required
                placeholder='option
                two'
                className='option-two'
                // value= 'value'
                /> <br/> 
                <button>Submit</
                button>
                </div>
            </form>
            </>
        )
    }
}

export default New
