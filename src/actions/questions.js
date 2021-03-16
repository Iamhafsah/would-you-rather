import {_saveQuestion, _saveQuestionAnswer} from '../utils/_DATA'
// import {showLoading, hideLoading} from 'react-redux-loading'
import {RECEIVE_QUESTION, ADD_QUESTION, SAVE_ANSWER} from './actionTypes'

import {
    addQuestionToUser,
    addAnswerToUser
  } from "./users";

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

export function handleAddQuestion (optionOneText,optionTwoText){
    return (dispatch, getState) => {
        const {authedUser} = getState();
        
        return _saveQuestion({
            author: authedUser,
            optionOneText,
            optionTwoText
          }).then(question => {
            dispatch(addQuestion(question));
            dispatch(addQuestionToUser(authedUser, question.id));
          });
        };
      }

export function saveAnswer (id, answer, authedUser){
    return{
        type: SAVE_ANSWER,
        id,
        answer,
        authedUser
    }
}

export function handleSaveAnswer (id, answer){
    return (dispatch, getState)=> {
        const {authedUser} = getState();

        return _saveQuestionAnswer({
            authedUser,
            qid: id,
            answer

        }).then(dispatch(saveAnswer(id, answer, authedUser)))
        .then(dispatch(addAnswerToUser(authedUser, id, answer)))
    }
}