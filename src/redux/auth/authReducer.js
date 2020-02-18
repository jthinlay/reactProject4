import authActionType from './authActionType'

const INITIAL_STATE = {
    authError: null
}
const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case authActionType.SIGNIN_SUCCESS:
            console.log('login succssfully!')
            return {
                ...state,
                authError: null
            };

        case authActionType.SIGNIN_ERROR:
            console.log('login failed!')
            return{
                ...state,
                authError: 'login failed!'
            }
        case authActionType.LOGOUT_SUCCESS:
            console.log('sign out succsss')
            return state;

        case authActionType.SIGNUP_SUCCESS:
            console.log('signup success!')
            return{
                ...state,
                authError: null
            }
        case authActionType.SIGNUP_ERROR:
            console.log('signup error!')
            return{
                ...state, 
                authError: action.err.message
            }
        default: 
            return state
    }
}
export default authReducer