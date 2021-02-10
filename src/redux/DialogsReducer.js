const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'


let initState = {
    dialogs: [
        {id: 1, name: 'name1'},
        {id: 2, name: 'name2'},
        {id: 3, name: 'name3'},
        {id: 4, name: 'name4'},
        {id: 5, name: 'name5'}
    ],
    messages: [
        {id: 1, message: 'name1.mess1'},
        {id: 2, message: 'name2.mess1'},
        {id: 3, message: 'name3.mess1'},
        {id: 4, message: 'name4.mess1'},
        {id: 5, message: 'name5.mess1'}
    ],
    newMessageText: ''
}

const DialogsReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.text
            }
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: state.newMessageText}],
                newMessageText: ''
            }
        default:
            return state
    }
}

export const AddMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}


export const UpdateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        text: text
    }
}

export default DialogsReducer