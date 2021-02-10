const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


let initState = {
    posts: [
        {id: 1, text: 'text1'},
        {id: 2, text: 'text2'},
        {id: 3, text: 'text3'},
    ],
    newPostText: ''
}

const ProfileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 6, text: state.newPostText}],
                newPostText: state.newPostText = ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            }
        default:
            return state
    }
}
export const AddPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const UpdateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text: text
    }
}

export default ProfileReducer