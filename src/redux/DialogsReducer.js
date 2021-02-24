const ADD_MESSAGE = 'ADD-MESSAGE'


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
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: action.newMessageText}],
            }
        default:
            return state
    }
}

export const AddMessageActionCreator = (newMessageText) => {
    return {
        type: ADD_MESSAGE,
        newMessageText
    }
}


export default DialogsReducer