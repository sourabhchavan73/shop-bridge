import inventory from '../../api/inventory';
import history from '../../history'
import { 
    ADD_PRODUCT, 
    FETCH_PRODUCTS,
    FETCH_PRODUCT,
    EDIT_PRODUCT,
    DELETE_PRODUCT } from './types'

// to add new product 
export const addProduct = (formValues) => async dispatch =>  {
    const response = await inventory.post('/inventory', formValues);

    dispatch({
        type: ADD_PRODUCT,
        payload: response.data
    });

    history.push('/');
}

// fetch all the products
export const fetchProducts = () => async dispatch => {
    const response = await inventory.get('/inventory');

    dispatch({
        type: FETCH_PRODUCTS,
        payload: response.data
    });
}

// fetch single product using id
export const fetchProduct = ( id ) => async dispatch => {
    const response = await inventory.get(`/inventory/${id}`);

    dispatch({
        type: FETCH_PRODUCT,
        payload: response.data
    });
}

//editing the product details
export const editProduct = (id, formValues) => async dispatch => {
    const response = await inventory.put(`/inventory/${id}`, formValues);

    dispatch({
        type: EDIT_PRODUCT,
        payload: response.data
    });

    history.push('/');
    
    
}

//deleteing the product
export const deleteProduct = (id) => async dispatch => {
    await inventory.delete(`/inventory/${id}`);

    dispatch({
        type: DELETE_PRODUCT,
        payload: id
    });

    history.push('/');
}
