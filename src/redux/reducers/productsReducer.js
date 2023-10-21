import { SET_PRODUCTS } from "../actions/types";

export const productsReducer=(state=[],{type,payload})=>{

    switch(type){
        case SET_PRODUCTS: return [...state,payload];
        default : return state;
    }
}