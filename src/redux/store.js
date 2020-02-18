import {createStore, applyMiddleware, compose} from 'redux'
import RootRuducer from './root-reducer'
import thunk from 'redux-thunk'
import {getFirestore, reduxFirestore} from 'redux-firestore'
import {getFirebase, reactReduxFirebase} from 'react-redux-firebase'
import firebaseConfig from '../Config/firebaseConfig'

//const middleware = [thunk];

 const store = createStore(RootRuducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(firebaseConfig),
        reactReduxFirebase(firebaseConfig, {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true})
        )
    ); 

export default store


