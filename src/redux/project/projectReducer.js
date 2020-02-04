const INITIAL_STATE = {
    projects: [
        {id: 1, title: 'Learn Reac', content: 'be a react master'},
        {id: 2, title: 'Learn Redux', content: 'be a redux master'},
        {id: 3, title: 'Learn Firebase', content: 'be a firebase master'}
    ]
}
const projectReducer = (state=INITIAL_STATE, action) => {
    return state
}
export default projectReducer