import {RECEIVE_QUESTION, ADD_QUESTION, SAVE_ANSWER} from './actionTypes'
import {_saveQuestion, _saveQuestionAnswer} from '../utils/_DATA'
import {addQuestionToUser, addAnswerToUser } from "./users";


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

export function saveAnswer (qid, answer, authedUser){
    return{
        type: SAVE_ANSWER,
        qid,
        answer,
        authedUser,
    }
}

export function handleAddQuestion (optionOneText,
    optionTwoText){
        return (dispatch, getState) => {
            const {authedUser} = getState();
            
            return _saveQuestion({
                author: authedUser,
                optionOneText,
                optionTwoText
              }).then(question => {
                dispatch(addQuestion(question));
                dispatch(addQuestionToUser(authedUser, 
    question.id));
              });
            };
          }
    
          export function handleSaveAnswer (qid, answer){
            return (dispatch, getState)=> {
                const {authedUser} = getState();
        
                return _saveQuestionAnswer({
                    authedUser,
                    qid,
                    answer
                }).then(dispatch(saveAnswer(qid, answer, 
    authedUser)))
                .then(dispatch(addAnswerToUser(authedUser,qid, 
    answer, )))
            }
        }

// export function handleSaveAnswer(qid, answer) {
//     return (dispatch, getState) => {
//         const { authedUser } = getState()


//         return _saveQuestionAnswer({
//             authedUser,
//             qid,
//             answer
//         })
//             .then(() => dispatch(saveAnswer(authedUser, qid, answer)))
//             .then(() => dispatch(addAnswerToUser(authedUser, qid, answer)))
//     }
// }