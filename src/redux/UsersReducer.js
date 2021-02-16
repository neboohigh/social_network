import {userAPI} from "../api/api";

const CHANGE_FOLLOW_STATUS = 'CHANGE_FOLLOW_STATUS'
const SET_USERS = 'SET_USERS'
const SET_SELECTED_PAGE = 'SET_SELECTED_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS'


let initState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    selectedPage: 1,
    isFetching: true,
    FollowingProgress: [] // subscribing to some user now
}

const UsersReducer = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_FOLLOW_STATUS:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: !user.followed}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_SELECTED_PAGE:
            return {
                ...state,
                selectedPage: action.selectedPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.flag
            }
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                FollowingProgress: action.isFetching
                    ? [...state.FollowingProgress, action.userId]
                    : state.FollowingProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

// Action creators
export const changeFollowStatus = (userId) => ({type: CHANGE_FOLLOW_STATUS, userId: userId})

export const setUsers = (users) => ({type: SET_USERS, users})

export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})

export const setSelectedPage = (selectedPage) => ({type: SET_SELECTED_PAGE, selectedPage})

export const toggleIsFetching = (flag) => ({type: TOGGLE_IS_FETCHING, flag})

export const toggleFollowingProgress = (userId, isFetching) => ({type: TOGGLE_FOLLOWING_PROGRESS, userId, isFetching})



// thunk creator return thunk
export const getUsers = (selectedPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        userAPI.getUsers(selectedPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}

// follow/unfollow button
export const toggleFollowStatus = (userId, isFollow) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(userId, true))
        let promise
        isFollow
            ? promise = userAPI.follow(userId)
            : promise = userAPI.unfollow(userId)
        promise.then(data => {
            if (data.resultCode === 0) {
                dispatch(changeFollowStatus(userId))
            }
            dispatch(toggleFollowingProgress(userId, false))
        })
    }
}

export default UsersReducer