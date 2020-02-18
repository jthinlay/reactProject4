import projectActionType from './projectActionType'

const createProject = (project) => {
    
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        //make asyn call to database
        const firestore = getFirestore();
             firestore.collection('project').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(()=>{
             dispatch({ type: projectActionType.CREATE_PROJECT, project});
        }).catch((err)=>{
            dispatch({type: projectActionType.CREATE_PROJECT_ERROR, err});
        })
    }
}
export default createProject