import  {RECEIVE_USERS,  ADD_QUESTION_TO_USER,
ADD_ANSWER_TO_USER} from '../actions/actionTypes'

export default function user (state={}, action){
    switch(action.type){
        case RECEIVE_USERS:
            return{
                ...state,
                ...action.users
            }
        case ADD_QUESTION_TO_USER:
        const { authedUser, id } = action;
            return {
                ...state,
                [authedUser]: {
                ...state[authedUser],
                questions: state[authedUser].questions.concat(id)
                }
            };
        case ADD_ANSWER_TO_USER:
            const { answer } = action;
            return {
            ...state,
            [action.authedUser]: {
                ...state[action.authedUser],
                answers: {
                ...state[action.authedUser].answers,
                [action.qid]: answer
                }
            }
            };
            default:
            return state
    }
}