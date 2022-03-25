import { createStore, combineReducers } from 'redux';
import { authReducer } from '../reducers/authReducer';


const reducers = combineReducers({
    auh: authReducer
})

export const store = createStore(reducers);