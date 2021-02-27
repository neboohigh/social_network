import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'SET_AUTH_DATA'

let initState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state
    }
}


export const setAuthData = (id, email, login, isAuth) => ({type: SET_AUTH_DATA, data: {id, email, login, isAuth}})


export const checkAuth = () => {
    return (dispatch) => {
        return authAPI.checkAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setAuthData(id, email, login, true))
                }
            })
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        return authAPI.login(email, password, rememberMe)
            .then(data => {
                if (data.data.resultCode === 0) {
                    dispatch(checkAuth())
                } else {
                    let message = data.data.message.length > 0 ? data.data.message[0] : 'some else error'
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(data => {
                if (data.data.resultCode === 0) {
                    dispatch(setAuthData(null, null, null, false))
                }
            })
    }
}


export default AuthReducer