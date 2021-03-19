import {RECEIVE_USERS, ADD_QUESTION_TO_USER, ADD_ANSWER_TO_USER} from './actionTypes'
export function receiveUsers(users){
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function addQuestionToUser(authedUser,id){
    return {
        type: ADD_QUESTION_TO_USER,
        authedUser,
        id
    }
}

export function addAnswerToUser(authedUser,qid, answer){
    return {         
        type: ADD_ANSWER_TO_USER,
        authedUser,
        qid,
        answer
    }
}