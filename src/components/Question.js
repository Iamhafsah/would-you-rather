import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import Nav from './Nav';
import { handleSaveAnswer } from "../actions/questions";
import UnansweredQuestion from './UnansweredQuestion';
import AnsweredQuestion from './AnsweredQuestion';
import ErrorPage from './ErrorPage';

export class Question extends Component {
    state={
        chosenAnswer: "null"
    }

    handleInputChange = (e) => {
        this.setState({
            chosenAnswer: e.target.value
        })
        console.log(this.state.chosenAnswer);
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {chosenAnswer} = this.state;

        chosenAnswer !== "null" ? this.props.dispatch(handleSaveAnswer(this.props.question.id, chosenAnswer, this.props.authedUser)) : alert("You have not selected an answer")
        
    }
    render() {
        const {authedUser, question, users} = this.props;
        let optionOneLength  = question? question.optionOne.votes.length : null;
        let optionTwoLength = question ? question.optionTwo.votes.length : null;
        let totalVoteCount = optionOneLength + optionTwoLength;
        
        const questionHasBeenAnswered = question?  Object.keys(users[authedUser].answers).includes(
        question.id) : null;
     
        if(question === undefined){
            return <ErrorPage/>
        }

        return (
            <>
                {authedUser ? (
                    <>  
                        <Nav/>
                        {questionHasBeenAnswered? (
                            <AnsweredQuestion
                            userAvatar={users[question.author].avatarURL}
                            userName={users[question.author].name}
                            optionOneText={question.optionOne.text}
                            optionTwoText={question.optionTwo.text}
                            optionOneLength={optionOneLength}
                            optionTwoLength={optionTwoLength}
                            total={totalVoteCount}
                            question={question}
                            authedUser={authedUser}
                            />
                        )
                        : 
                        (
                            <UnansweredQuestion
                            userAvatar={users[question.author].avatarURL}
                            userName={users[question.author].name}
                            optionOneText={question.optionOne.text}
                            optionTwoText={question.optionTwo.text}
                            handleSubmit={this.handleSubmit}
                            value={this.state.chosenAnswer}
                            handleInputChange={this.handleInputChange}
                            />
                        )}                  
                </>
                )
                     :
                <div>You cannot access this page unless you <Link to="/">Choose a player</Link></div>}
            </>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, props){
    const questionId = questions[props.match.params.id];

    return{
        authedUser,
        question: questionId,
        users
    }
}
// const mapDispatchToProps = dispatch => ({
//     saveAnswer: (q1, q2) => dispatch(handleSaveAnswer(q1, q2))
//   });
export default connect(mapStateToProps)(Question)
