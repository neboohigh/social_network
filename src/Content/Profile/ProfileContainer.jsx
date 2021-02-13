import {UpdateNewPostTextActionCreator, AddPostActionCreator, setUserProfile} from "../../redux/ProfileReducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import React from 'react'
import axios from "axios";

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                debugger
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNewPostTextChange: (text) => {
            dispatch(UpdateNewPostTextActionCreator(text))
        },
        AddNewPost: () => {
            dispatch(AddPostActionCreator())
        },
        setUserProfile: (profile) => {
            dispatch(setUserProfile(profile))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)

