import {combineReducers} from 'redux'
import authReducer from './auth/authReducer'
import projectReducer from './project/projectReducer'
import {firestoreReducer} from 'redux-firestore'

const RootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer 
})
export default RootReducer