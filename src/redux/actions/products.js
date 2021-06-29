import Api from '../../api/api'
import * as actionTypes from './actionTypes';

export const fetchProducts = () => async (dispatch) => {
    try {
        dispatch(setLoaded(false));
        const {data} = await Api.get()
        dispatch(setProducts(data));
    } catch (e) {
        console.error(e)
    }
};


export const setLoaded = (payload) => ({
    type: actionTypes.SET_LOADED,
    payload
});

export const setProducts = (items) => ({
    type: actionTypes.SET_PRODUCTS,
    payload: items
});



