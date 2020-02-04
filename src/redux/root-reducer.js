import {combineReducers} from 'redux'
import authReducer from './auth/authReducer'
import projectReducer from './project/projectReducer'

const RootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
})
export default RootReducer