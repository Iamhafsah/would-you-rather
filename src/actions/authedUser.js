import {SET_AUTHED_USER} from './actionTypes'

export function setAuthedUser (id){
    localStorage.setItem("currentUser", id);
    return{
        type: SET_AUTHED_USER,
        id,
    }
}