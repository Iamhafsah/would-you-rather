import React, { Component } from 'react'
import { Link } from "react-router-dom";



class UnansweredQuestion extends Component {
    
    render() {
        const { userAvatar, userName, optionOneText, optionTwoText, handleSubmit} = this.props;
        
        return (
            <div className='question-container'>
                                
            <img className='user-avatar' src={userAvatar} alt='user avatar'/>
            <h2> {userName} asks</h2>
            <h3>Would you rather?</h3>

            <form onSubmit={handleSubmit}>
                <input
                type='radio'
                name='option-one'
                value={optionOneText}
                onChange={this.props.handleInputChange}
                /> 
                {optionOneText}...
                <br/>
         
                <input
                type='radio'
                name='option-one'
                value={optionTwoText}
                onChange={this.props.handleInputChange}
                /> 
                {optionTwoText}

                <br/>
                <button >Submit</button>
            </form>
            </div> 
        )
}}

export default  UnansweredQuestion
