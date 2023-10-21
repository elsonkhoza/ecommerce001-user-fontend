import {
  EMPTY_SELECTED_PRODUCT,
  SELECT_PRODUCT,
  SET_PRODUCTS,
} from "../actions/types";

export const productsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return [...state, payload];
    default: 
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SELECT_PRODUCT:
      return { ...state, ...payload };
    case EMPTY_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
