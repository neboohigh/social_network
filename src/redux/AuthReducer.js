import {userAPI} from "../api/api";

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


export const login = () => {
    return (dispatch) => {
        userAPI.login()
            .then( data => {
                if(data.resultCode === 0) {
                    let {id, login} = data.data
                    dispatch(setAuthData(login, id))
                }
            })
    }
}


export default AuthReducer