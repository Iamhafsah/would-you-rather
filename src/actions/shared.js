import {getInitialData}from '../utils/api'
import {receiveUsers} from './users'
import {receiveQuestions} from './questions'
import {setAuthedUser} from './authedUser'




let AUTHED_ID = localStorage.getItem('currentUser');

if (AUTHED_ID === "null"){
    AUTHED_ID = null
}

export function handleInitialData(){
    return(dispatch)=>{
        return getInitialData().then(({users, questions})=>{
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(setAuthedUser(AUTHED_ID))
        })
    }
}
