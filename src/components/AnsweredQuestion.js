import React, { Component } from 'react'
import { Redirect} from "react-router-dom";



class AnsweredQuestion extends Component {
    state={
        homePage: false
    }
    handleSubmit = (e)=> {
        e.preventDefault();

        this.setState({homePage: true})
    }
    
    render() {
        const { userAvatar, userName, optionOneText, optionTwoText, optionOneLength, optionTwoLength, total} = this.props;

            
        if (this.state.homePage === true){
            return <Redirect to="/home" />
        }
        
        return (
            <div className='question-container'>
                                
            <img className='user-avatar' src={userAvatar} alt='user avatar'/>
            <h2>{userName} asked</h2>
            <h3>Would you rather?</h3>

            <div className="option">
                <p className="answered-question">
                    1. {optionOneText}</p>
                <p>has</p>
                <p>{optionOneLength} of {total} votes which is {Math.round((optionOneLength/total) * 100)}% of all votes</p><br/>
            </div>

            <div className="option">
                <p className="answered-question">
                    2. {optionTwoText}</p>
                <p>has</p>
                <p>{optionTwoLength} of {total} votes which is {Math.round((optionTwoLength/total) * 100)} % of all votes</p><br/> 
            </div>
                
                <br/>
                <button onClick={this.handleSubmit}>
                    Back to Homepage
                </button>
            
            </div> 
        )
}}

export default  AnsweredQuestion
