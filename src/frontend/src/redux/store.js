import { createStore, combineReducers } from 'redux'
import loginReducer from './login/reducer'

const store = createStore(loginReducer);
/*const rootReducer = combineReducers({
        login: loginReducer,
      });

*/

export default store;
