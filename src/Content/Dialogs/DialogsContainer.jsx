import Dialogs from "./Dialogs";
import {AddMessageActionCreator, UpdateNewMessageTextActionCreator} from "../../redux/DialogsReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(UpdateNewMessageTextActionCreator(text))
        },
        sendMessage: () => {
            dispatch(AddMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer