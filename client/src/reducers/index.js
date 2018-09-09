import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth';
import cardReducer from './card'


export default combineReducers({
    authReducer,
    form: formReducer,
    cardReducer
});