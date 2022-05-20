import isLoggedInReducer from './loggedIn'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    isLoggedIn: isLoggedInReducer
})

export default allReducers;