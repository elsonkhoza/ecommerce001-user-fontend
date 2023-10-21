import { REMOVE_USER, SET_USER } from "../actions/types";

export const userReducer=(state={},{type,payload})=>{
    switch(type)
    {
        case SET_USER: return {...state,payload};
        case  REMOVE_USER: return {};
        default: return state;
    }
}