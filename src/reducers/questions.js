import  {RECEIVE_QUESTION,ADD_QUESTION, SAVE_ANSWER} from '../actions/actionTypes'

export default function questions (state={}, action){
    const {question, qid, answer, authedUser} = action;

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
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer]? state[qid][answer].votes.concat(authedUser) : state[qid]
                    }
                },
            }
            default: 
            return state
    }
}