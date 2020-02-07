import projectActionType from './projectActionType'

const createProject = (project) => {
    
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        
        //make asyn call to database
        const firestore = getFirestore();
             firestore.collection('project').add({
            ...project,
            authorFirstName: 'Susan',
            authorLastName: 'Wood',
            authorId: 12345,
            createdAt: new Date()
        }).then(()=>{
             dispatch({ type: projectActionType.CREATE_PROJECT, project});
        }).catch((err)=>{
            dispatch({type: projectActionType.CREATE_PROJECT_ERROR, err});
        })
    }
}
export default createProject