import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";
import thunk from 'redux-thunk' // thunkMiddleware
import {reducer as formReducer} from 'redux-form'
import AppReducer from "./AppReducer";

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    form: formReducer,
    app: AppReducer
})


let store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store