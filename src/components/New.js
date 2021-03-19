import React, { Component } from 'react'
import { connect } from "react-redux";
import { Redirect} from "react-router-dom";
import Nav from './Nav'
import { handleAddQuestion } from "../actions/questions";


export class New extends Component {
    state={
        optionOne: "",
        optionTwo: "",
        submitted: false
    }

    handleOptionOneChange = (e)=>{
        this.setState({
            optionOne: e.target.value
        })
    }
    handleOptionTwoChange = (e)=>{
        this.setState({
            optionTwo: e.target.value
        })
    }
    handleSubmit =(e)=> {
        e.preventDefault()
        const { addQuestion } = this.props;

        addQuestion(this.state.optionOne, this.state.optionTwo)
        this.setState({
            submitted:true
        })
    }

    render() {
        const { avatarURL, authedUser} = this.props;

        if (this.state.submitted === true){
            return <Redirect to="/home" />
        }
        if (authedUser === ""){
            return <Redirect to = "/" />
        }

        return (
            <>
            <Nav/>
            
            <form className='new-poll-container'
            >
                <h2>Create New Question</h2>
                
                <div className='poll-div'>
              
                <img alt="user avatar" src={avatarURL} className='user-avatar' />
                <h3>Would you 
                rather...</h3>
                <input
                type='text'
                required
                placeholder='option
                one'
                className='option-one'
                onChange={this.handleOptionOneChange}
                /> <br/>

                   <strong> OR </strong> 

                    <br/>
                <input
                type='text'
                required
                placeholder='option
                two'
                className='option-two'
                onChange={this.handleOptionTwoChange}
                /> <br/> 

                    <button onClick={this.handleSubmit} disabled={this.state.optionOne === "" || this.state.optionTwo === ""}> 
                        Add Poll
                    </button> 
                </div>
            </form>
            </>
        )
    }
}

const mapStateToProps = ({authedUser, users}) =>{    
        let avatarURL = authedUser ?  users[authedUser].avatarURL : null;

    return{
        avatarURL,
        authedUser,
        users
    }
}
const mapDispatchToProps = dispatch => ({
  addQuestion: (q1, q2) => dispatch(handleAddQuestion(q1, q2))
});

export default connect(mapStateToProps, mapDispatchToProps)(New)
