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
        const { avatarURL, authedUserName } = this.props;

        if (this.state.submitted === true){
            return <Redirect to="/home" />
        }
        return (
            <>
            <Nav/>
            
            <form className='new-poll-container'
            >
                <h2>Create New Question</h2>
                
                <div className='poll-div'>
                <p>{authedUserName}</p>
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
                onChange={this.handleOptionTwoChange}
                // value= 'value'
                /> <br/> 

                {/* <Link to="/home"> */}
                    <button onClick={this.handleSubmit} disabled={this.state.optionOne === "" || this.state.optionTwo === ""}> 
                        Submit
                    </button> 
                {/* </Link>  */}
                
                </div>
            </form>
            </>
        )
    }
}

const mapStateToProps = ({authedUser, users}) =>{
    let userName = users[authedUser].name
    let avatarURL = users[authedUser].avatarURL

    return{
        userName,
        avatarURL
    }
}
const mapDispatchToProps = dispatch => ({
  addQuestion: (q1, q2) => dispatch(handleAddQuestion(q1, q2))
});

export default connect(mapStateToProps, mapDispatchToProps) (New)