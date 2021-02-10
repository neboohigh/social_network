import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";

let store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            posts: [
                {id: 1, text: 'text1'},
                {id: 2, text: 'text2'},
                {id: 3, text: 'text3'},
            ],
            newPostText: ''
        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action)
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    },
}

export default store;

