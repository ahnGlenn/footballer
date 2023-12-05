import {LOGIN, LOGOUT} from './types'
import axios from 'axios';

export function loginUser(dataToSubmit){
    const req = axios.post('/login', dataToSubmit){}
}

// Login
export const logIn = () =>{
    return{
        type: LOGIN
    }
}

// Logout
export const logOut = () =>{
    return{
        type: LOGOUT
    }
}