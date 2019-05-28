export const createProject = (Project) => {
    return (dispatch, getState) => {
        //Make async call to database
        dispatch({ type: 'CREATE_PROJECT', project: project})
    }
}