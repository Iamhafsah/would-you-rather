import React, {Component} from 'react'
import {connect} from 'react-redux'
import Nav from './Nav'

class Home extends Component{

    render(){
    
        return(
            <>
            <Nav/>
            <div>
                <h2>Questions</h2>
                <ul>
                    {this.props.questions.map((id, index) => (
                        <li key={index} 
                        
                        className='question-container'>
                        <img className='user-avatar' src={this.props.users[0].avatarURL} alt='of sarah'/>
                        
                        <h2>{id.author} asks</h2>

                        <h3>Would you rather?</h3>


                        <div>
                            {/* <input
                            type='radio'
                            name='option-one'
                            value={id.optionOne.text}
                            />  */}
                            {id.optionOne.text}...

                            <br/>

                            <button>View Poll</button>
                            {/* <input
                            type='radio'
                            name='option-one'
                            value={id.optionTwo.text}
                            /> 
                            {id.optionTwo.text} */}
                        </div>
                        </li>
                    ))}
                </ul>
            </div>
            </>
        )
    }
}

function mapStateToProps({questions, users}){
    return{
        questionId: Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        questions: Object.values(questions),
        users: Object.values(users)
    }
}
export default connect(mapStateToProps)(Home)