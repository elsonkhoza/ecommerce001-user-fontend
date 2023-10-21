import { EMPTY_SELECTED_PRODUCT, SELECT_PRODUCT, SET_PRODUCTS } from "./types"

export const setProducts=(products)=>{
    return{
        type:SET_PRODUCTS,
        payload:products,
    }
}

export const selectProduct=(product)=>{
    return {
        type:SELECT_PRODUCT,
        payload:product

    }
}

export const emptySelectedProduct=()=>{
    return{
        type: EMPTY_SELECTED_PRODUCT,
        payload:{}
    }
}