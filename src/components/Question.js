import React, { Component } from 'react'
import {connect} from 'react-redux'

export class Question extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, {id}){
    const question = questions[id]

    return{
        authedUser,
        question: question
    }
}
export default connect(mapStateToProps) (Question)
