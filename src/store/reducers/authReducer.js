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
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('Sign out SUCCESS');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('signUp SUCCESS');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('signUp ERROR');
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
}

export default authReducer;