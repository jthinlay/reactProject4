import projectActionType from './projectActionType'

const INITIAL_STATE = {
    projects: [
        {id: 1, title: 'Learn Reac', content: 'be a react master'},
        {id: 2, title: 'Learn Redux', content: 'be a redux master'},
        {id: 3, title: 'Learn Firebase', content: 'be a firebase master'}
    ]
}
const projectReducer = (state=INITIAL_STATE, action) => {

    switch(action.type){
        case projectActionType.CREATE_PROJECT:
            console.log('created project', action.project);
            return state;
        case projectActionType.CREATE_PROJECT_ERROR:
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
}
export default projectReducer