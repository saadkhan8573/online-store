import { combineReducers } from "redux";
import cartReducer from './cartReducer';
import { LoginReducer, RegisterReducer } from './AuthReducer';

const rootReducer = combineReducers({
    cartReducer,
    LoginReducer,
    RegisterReducer
})

export default rootReducer;