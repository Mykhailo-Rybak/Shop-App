import * as actionTypes from '../actions/actionTypes';

const initialState = {
  items: [],
  isLoaded: false,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };

    case actionTypes.SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};



export default products;
