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

        chosenAnswer !== "null" ? this.props.dispatch(handleSaveAnswer(this.props.questions.id, chosenAnswer)) : alert("You have not selected an answer")
    }
    render() {
        const {authedUser, questions, users} = this.props;
        let optionOneLength  = questions.optionOne.votes.length;
        let optionTwoLength = questions.optionTwo.votes.length;
        let totalVoteCount = optionOneLength + optionTwoLength;
        
        const questionHasBeenAnswered = Object.keys(users[authedUser].answers).includes(
        questions.id);
     
        if(questions === undefined){
            return <ErrorPage/>
        }

        return (
            <>
                {authedUser ? (
                    <>  
                        <Nav/>
                        {questionHasBeenAnswered? (
                            <AnsweredQuestion
                            userAvatar={users[questions.author].avatarURL}
                            userName={users[questions.author].name}
                            optionOneText={questions.optionOne.text}
                            optionTwoText={questions.optionTwo.text}
                            optionOneLength={optionOneLength}
                            optionTwoLength={optionTwoLength}
                            total={totalVoteCount}
                            />
                        )
                        : 
                        (
                            <UnansweredQuestion
                            userAvatar={users[questions.author].avatarURL}
                            userName={users[questions.author].name}
                            optionOneText={questions.optionOne.text}
                            optionTwoText={questions.optionTwo.text}
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
    const question = questions[props.match.params.id];

    return{
        authedUser,
        // question: question,
        questions: question,
        users
    }
}
export default connect(mapStateToProps) (Question)
