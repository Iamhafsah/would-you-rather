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
        const { userAvatar, userName, optionOneText, optionTwoText, optionOneLength, optionTwoLength, total, authedUser} = this.props;
        const { optionOne, optionTwo } = this.props.question;
            
        if (this.state.homePage === true){
            return <Redirect to="/home" />
        }
        
        return (
            <div className='question-container'>
                                
            <img className='user-avatar' src={userAvatar} alt='user avatar'/>
            <h2>{userName} asked</h2>
            <h3>Would you rather?</h3>

            <div className="option" style={
                optionOne.votes.includes(authedUser)
                    ? { border: '2px solid rgb(245, 66, 95)' }
                    : {  border: '2px solid black' }
            }>
                    {optionOne.votes.includes(authedUser) && (
                    <div className='voted '>You voted this option 🌟</div>
                    )}

                    <p>1️⃣ {optionOneText}</p>
                    <p>has</p>
                    <p>{optionOneLength} of {total} votes which is {Math.round((optionOneLength/total) * 100)}% of all votes</p><br/>
            </div>


            <div className="option option-two" style={
                optionTwo.votes.includes(authedUser)
                    ? {  border: '2px solid rgb(245, 66, 95)' }
                    : {  border: '2px solid black'}
            }>
                    {optionTwo.votes.includes(authedUser) && (
                     <div className='voted '>You voted this option 🌟</div>
                    )}

                    <p>2️⃣ {optionTwoText}</p>
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
