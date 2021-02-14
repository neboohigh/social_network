const SET_AUTH_DATA = 'SET_AUTH_DATA'

let initState = {
    userId: null,
    login: null,
    isAuth: false,
}

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}


export const setAuthData = (login, userId) => ({type: SET_AUTH_DATA, data: {login, userId}})

export default AuthReducer