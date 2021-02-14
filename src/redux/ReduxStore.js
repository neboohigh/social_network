import {combineReducers, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";



let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
    auth: AuthReducer
})


let store = createStore(reducers)

window.store = store

export default store