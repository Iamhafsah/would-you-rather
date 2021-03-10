import {_saveQuestion, _saveQuestionAnswer} from '../utils/api'
// import {showLoading, hideLoading} from 'react-redux-loading'
import {RECEIVE_QUESTION, ADD_QUESTION, SAVE_ANSWER} from './actionTypes'

export function receiveQuestions(questions){
    return{
        type: RECEIVE_QUESTION,
        questions
    }
}
export function addQuestion(question){
    return{
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion (question){
    return (dispatch, getState) => {
        const {authedUser} = getState()
        // dispatch(showLoading())
        

    }
}

export function saveAnswer (id, answer, authedUser){
    return{
        type: SAVE_ANSWER,
        id,
        answer,
        authedUser
    }
}