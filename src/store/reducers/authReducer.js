const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('Login ERROR');
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('Login SUCCESS');
            return {
                authError: null
            }
        default:
            return state;
    }
}

export default authReducer;