import * as actionTypes from './types';
import axios from 'axios';

export const loginRequest = (email, password) => {

    return async (dispatch) => {
        dispatch({ type: actionTypes.LOGIN_REQUEST });

        try {
            const response = await axios.post('/api/login', { email, password });

            // dispatch({

            //     type: actionTypes.LOGIN_SUCCESS,
            //     payload: response.data, // Assuming the server sends back user data upon successful login
            // });
        } catch (error) {
            dispatch({
                type: actionTypes.LOGIN_FAILURE,
                payload: error.response ? error.response.data : 'An error occurred',
            });
        }
    };
};

export const logout = () => ({
    type: actionTypes.LOGOUT,
});