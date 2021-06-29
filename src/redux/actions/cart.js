import * as actionTypes from "./actionTypes";

export const addProductToCart = (productObj) => ({
  type: actionTypes.ADD_PRODUCT_CART,
  payload: productObj,
});

export const clearCart = () => ({
  type: actionTypes.CLEAR_CART,
});

export const removeCartItem = (id) => ({
  type: actionTypes.REMOVE_CART_ITEM,
  payload: id,
});

export const plusCartItem = (id) => ({
  type: actionTypes.PLUS_CART_ITEM,
  payload: id,
});

export const minusCartItem = (id) => ({
  type: actionTypes.MINUS_CART_ITEM,
  payload: id,
});
