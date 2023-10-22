import {LOGIN, LOGOUT} from './types'

const initialState = {
  status: 'Start Login',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, state: 'login' };
    case LOGOUT:
      return { ...state, state: 'logout' };
    default:
      return state;
  }
};

export default loginReducer
