import authActionType from './authActionType'

export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
            firebase.auth().signInWithEmailAndPassword(
                credentials.email,
                credentials.password
            ).then(()=>{
                dispatch({type: authActionType.SIGNIN_SUCCESS})
            }).catch((err) => {
                dispatch({type: authActionType.SIGNIN_ERROR, err})
            })
    }
}

export const LogOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
            firebase.auth().signOut()
            .then(() => {
                dispatch({type: authActionType.LOGOUT_SUCCESS })
            })
    }
}

export const signUp = (newUser) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
            const firebase = getFirebase();
            const firestore = getFirestore();
            firebase.auth().createUserWithEmailAndPassword(
                newUser.email,
                newUser.password
            ).then((resp) => {
                return firestore.collection('users').doc(resp.user.uid).set(
                    {firstName: newUser.firstName,
                    lastName: newUser.lastName,
                    initials: newUser.firstName[0] + newUser.lastName[0]
                    }
                )
             }).then(()=>{
                 dispatch({type: authActionType.SIGNUP_SUCCESS})
             }).catch((err)=>{
                 dispatch({type: authActionType.SIGNUP_ERROR, err})
             })
            }
        }
