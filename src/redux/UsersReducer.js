const CHANGE_FOLLOW_STATUS = 'CHANGE_FOLLOW_STATUS'
const SET_USERS = 'SET_USERS'

// let initState = {
//     users: [
//         {
//             id: 1,
//             followStatus: false,
//             firstName: 'firstName1',
//             lastName: 'lastName1',
//             location: {city: 'city1', country: 'country1'}
//         },
//         {
//             id: 2,
//             followStatus: true,
//             firstName: 'firstName2',
//             lastName: 'lastName2',
//             location: {city: 'city2', country: 'country2'}
//         },
//         {
//             id: 3,
//             followStatus: false,
//             firstName: 'firstName3',
//             lastName: 'lastName3',
//             location: {city: 'city3', country: 'country3'}
//         }
//     ]
// }

let initState = {
    users: []
}

const UsersReducer = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_FOLLOW_STATUS:
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, followStatus: !user.followStatus}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

// Action creators
export const changeFollowStatus = (userId) => ({type: CHANGE_FOLLOW_STATUS, userId: userId})

export const setUsers = (users) => ({type: SET_USERS, users})


export default UsersReducer