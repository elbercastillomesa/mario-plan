export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //Make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        console.log(firestore);
        console.log(profile);
        console.log(authorId);

        firestore.collection('projects').add({         
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorID: authorId,
            createdAt: new Date()
        }).then( () => {
            dispatch({ type: 'CREATE_PROJECT', project: project })
        } ).catch( (err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        } )       
    }
}