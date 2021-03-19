import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link } from "react-router-dom";
import Nav from './Nav'

class Home extends Component{

    state={
       isAnswered : "No"
    }


    questionButtonClick = (e) => {
        if (!e.target.innerHTML.toLowerCase().includes("unanswered")){
            this.setState({isAnswered: "Yes"})
        }else{
            this.setState({isAnswered: "No"})
        }
    }

    render(){

        const { questions, users, authedUser, answeredQuestion, unansweredQuestion } = this.props;

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
                        selected={this.state.isAnswered === "No" ? true : false}
                    >   Unanswered
                    </button>

                    <button 
                        onClick={this.questionButtonClick}
                        className="top-button"
                        selected={this.state.isAnswered ===  "Yes" ? true : false}
                    >   Answered
                    </button>
                    </div>

                    <ul>
                        {(this.state.isAnswered === 
                            "No" ? unansweredQuestion: 
                            answeredQuestion).map((item, i) => (

                            <li 
                            key={i}
                            className='question-container'>
                                <p>{users[questions[item].author].name} asks </p>
                                <img className='user-avatar' src={users[questions[item].author].avatarURL} alt='of sarah'/>
                    
                                <h3>Would you rather?  </h3>

                                {questions[item].optionOne.text}...
                                <br/>

                                <Link to={{
                                    pathname: `/question/${questions[item].id}`
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

   
    let answeredQuestion
    let unansweredQuestion

    if(authedUser){

        answeredQuestion = Object.keys(users[authedUser].answers).sort(sortByTime)
        unansweredQuestion = Object.keys(Object.assign({}, questions)).sort(sortByTime)

        answeredQuestion.map(item => (
            unansweredQuestion = unansweredQuestion.filter(unanswered => item !== unanswered)
        ))
    }
    return{
        authedUser,
        users,
        questions,
        answeredQuestion,
        unansweredQuestion
    }
}
export default withRouter(connect(mapStateToProps)(Home))