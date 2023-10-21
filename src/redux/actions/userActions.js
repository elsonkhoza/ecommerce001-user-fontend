import { REMOVE_USER, SET_USER } from "./types"

export const setUser=(user)=>{
    return {
        type: SET_USER,
        payload:user,
    }
}
export const removeUser=(user)=>{
    return {
        type: REMOVE_USER,
        payload:{},
    }
}