export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //Make async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstname: 'Elber',
            autorLastName: 'Castillo Mesa',
            createdAt: new Date()
        }).then( () => {
            dispatch({ type: 'CREATE_PROJECT', project: project })
        } ).catch( (err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        } )       
    }
}