import  {RECEIVE_QUESTION,ADD_QUESTION, SAVE_ANSWER} from '../actions/actionTypes'

export default function questions (state={}, action){
    const {question, id, answer, authedUser } = action;

    switch(action.type){
        case RECEIVE_QUESTION:
            return{
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            return {
                ...state,
                [question.id]: question
            }
        case SAVE_ANSWER:
            return {
            ...state,
            [id]: {
            ...state[id],
            [answer]: {
            ...state[id][answer],
            votes: state[id][answer].votes.concat(authedUser)
            }
            }
            }
            default: 
            return state
    }
}