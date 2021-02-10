import {UpdateNewPostTextActionCreator, AddPostActionCreator} from "../../redux/ProfileReducer";

import Profile from "./Profile";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNewPostTextChange: (text) => {
            dispatch(UpdateNewPostTextActionCreator(text))
        },
        AddNewPost: () => {
            dispatch(AddPostActionCreator())
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer