import {LOGIN, LOGOUT} from './types'

export const logIn = () =>{
    return{
        type: LOGIN
    }
}

export const logOut = () =>{
    return{
        type: LOGOUT
    }
}