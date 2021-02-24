import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS_MESSAGE = 'SET_STATUS_MESSAGE'

let initState = {
    posts: [
        {id: 1, text: 'text1'},
        {id: 2, text: 'text2'},
        {id: 3, text: 'text3'},
    ],
    profile: null,
}

const ProfileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 6, text: action.newPostText}],
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_STATUS_MESSAGE:
            return {
                ...state,
                statusMessage: action.statusMessage
            }
        default:
            return state
    }
}



export const AddPost = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText: newPostText
    }
}


export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const setStatusMessage = (message) => {
    return {
        type: SET_STATUS_MESSAGE,
        statusMessage: message
    }
}


// thunks
export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}

export const getStatusMessage = (userId) => {
    return (dispatch) => {
        profileAPI.getStatusMessage(userId)
            .then(response => {
                dispatch(setStatusMessage(response.data))
            })
    }
}

export const updateStatusMessage = (statusMessage) => {
    return (dispatch) => {
        profileAPI.updateStatusMessage(statusMessage)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatusMessage(response.data))
                }
            })
    }
}


export default ProfileReducer