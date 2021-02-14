const CHANGE_FOLLOW_STATUS = 'CHANGE_FOLLOW_STATUS'
const SET_USERS = 'SET_USERS'
const SET_SELECTED_PAGE = 'SET_SELECTED_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    selectedPage: 1,
    isFetching: true,
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

export default UsersReducer