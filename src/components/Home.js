import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Redirect, withRouter, Link } from "react-router-dom";
import Nav from './Nav'

const unansweredQuestions = "unanswered"
const answeredQuestions = "answered"

const RESULTS = "results";
const POLL = "poll";


class Home extends Component{

    state={
        pollList : unansweredQuestions
    }

    questionButtonClick = (e) => {
        if (!e.target.innerHTML.toLowerCase().includes(unansweredQuestions)){
            this.setState({pollList: answeredQuestions})
        }else{
            this.setState({pollList: unansweredQuestions})
        }
    }

    render(){

        const { questions, users, authedUser, answered, unanswered } = this.props;

        return(
            <>
            {authedUser ?  (
                <>
                <Nav/>
                <div className="home">
                    <div className="button-container">
                    <button 
                        onClick={this.questionButtonClick}
                        className="top-button"
                        selected={this.state.pollList === 
                        unansweredQuestions? true : false}
                    >   Unanswered
                    </button>

                    <button 
                        onClick={this.questionButtonClick}
                        className="top-button"
                        selected={this.state.pollList === 
                        answeredQuestions? true : false}
                    >   Answered
                    </button>
                    </div>

                    <ul>
                        {(this.state.pollList === 
                            unansweredQuestions ? unanswered: 
                            answered).map((item, i) => (

                            <li 
                            key={i}
                            className='question-container'>
                                <p>{users[questions[item].author].name} asks </p>
                                <img className='user-avatar' src={users[questions[item].author].avatarURL} alt='of sarah'/>
                    
                                <h3>Would you rather?  </h3>

                                {questions[item].optionOne.text}...
                                <br/>

                                <Link to={{
                                    pathname: `/question/${questions[item].id}`,
                                    state: {
                                      type:
                                        this.state.questionList === unansweredQuestions
                                          ? POLL
                                          : RESULTS
                                    }
                                }}>
                                    <button>Go to poll</button>
                                </Link>

                                <br/>
                                <span>
                                    {new Date(questions[item].timestamp).toLocaleString()}
                                </span>
                               
                            </li>

                        ))}
                    </ul>
                </div>
                </>
            ): 
            <div>You cannot access this page unless you <Link to="/">Choose a player</Link></div>
            }

            </>
        )
    }
}

function mapStateToProps({questions, users, authedUser}){
    const sortByTime = (q1, q2) => {
        return(
            new Date(questions[q2].timestamp).getTime() - new Date(questions[q1].timestamp).getTime()
        )
    }

   
    let answered
    let unanswered

    if(authedUser){

        answered = Object.keys(users[authedUser].answers).sort(sortByTime)
        unanswered = Object.keys(Object.assign({}, questions)).sort(sortByTime)

        answered.map(item => (
            unanswered = unanswered.filter(unanswered => item !== unanswered)
        ))
    }
    return{
        authedUser,
        users,
        questions,
        answered,
        unanswered
        // questionId: Object.keys(questions)
        // .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        // questions: Object.values(questions),
        // users: Object.values(users)
    }
}
export default withRouter(connect(mapStateToProps)(Home))