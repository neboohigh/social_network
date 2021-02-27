import Dialogs from "./Dialogs";
import {AddMessageActionCreator} from "../../redux/DialogsReducer";
import {connect} from "react-redux";
import {AuthRedirect} from "../../HOC/authredirect";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageText) => {
            dispatch(AddMessageActionCreator(newMessageText))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirect(Dialogs))

export default DialogsContainer