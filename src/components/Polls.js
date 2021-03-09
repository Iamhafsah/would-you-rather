import React, {Component} from 'react'
import {connect} from 'react-redux'

class Polls extends Component{
    render(){
        return(
            <div>
                <h2>Polls For You</h2>
                <ul>
                    {this.props.questionId.map((id, index) => (
                        <li key={index}>{id}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({questions}){
    return{
        questionId: Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}
export default connect(mapStateToProps)(Polls)